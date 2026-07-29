@echo off
setlocal
cd /d "%~dp0"
title Tarnished Chronicle v0.6.0

if not exist "package.json" goto :missing

set "SYNC_DEPS_CHANGED="
call :sync_source

set "ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/"
if not exist "node_modules\electron\package.json" set "NEED_INSTALL=1"
if defined SYNC_DEPS_CHANGED set "NEED_INSTALL=1"
if defined NEED_INSTALL (
  echo [1/2] Installing dependencies...
  call npm install --no-audit --no-fund
  if errorlevel 1 goto :fail
)

echo [2/2] Starting v0.6.0 from current source...
call npm run dev
if errorlevel 1 goto :fail
exit /b 0

:sync_source
where git >nul 2>nul
if errorlevel 1 (
  echo [sync] Git is unavailable; keeping current source.
  exit /b 0
)
if not exist ".git" (
  echo [sync] This source folder is not a Git checkout; keeping current source.
  exit /b 0
)

set "SOURCE_DIRTY="
for /f "delims=" %%A in ('git status --porcelain') do set "SOURCE_DIRTY=1"
if defined SOURCE_DIRTY (
  echo [sync] Local changes found; skipping source update.
  exit /b 0
)

for /f "delims=" %%A in ('git branch --show-current') do set "SOURCE_BRANCH=%%A"
if /i not "%SOURCE_BRANCH%"=="main" (
  echo [sync] Current branch is %SOURCE_BRANCH%; skipping source update.
  exit /b 0
)

for /f "delims=" %%A in ('git rev-parse HEAD') do set "SOURCE_HEAD=%%A"
git fetch --quiet origin main
if errorlevel 1 (
  echo [sync] Network update failed; keeping current source.
  exit /b 0
)
git merge --ff-only origin/main
if errorlevel 1 (
  echo [sync] A fast-forward update is not possible; keeping current source.
  exit /b 0
)
git diff --quiet %SOURCE_HEAD% HEAD -- package.json package-lock.json
if errorlevel 1 set "SYNC_DEPS_CHANGED=1"
echo [sync] Source is up to date.
exit /b 0

:missing
echo package.json was not found in %CD%.
goto :fail

:fail
echo.
echo Launch failed. Please check the error above.
pause
exit /b 1
