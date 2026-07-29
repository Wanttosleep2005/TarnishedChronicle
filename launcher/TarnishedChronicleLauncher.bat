@echo off
setlocal
cd /d "%~dp0"
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0TarnishedChronicleLauncher.ps1" %*
set "TC_LAUNCHER_EXIT=%ERRORLEVEL%"
if not "%TC_LAUNCHER_EXIT%"=="0" pause
exit /b %TC_LAUNCHER_EXIT%
