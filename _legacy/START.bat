@echo off
setlocal
cd /d "%~dp0"

if not exist "node_modules\electron\dist\electron.exe" (
    echo Electron runtime is missing. Installing dependencies...
    set "ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/"
    call npm.cmd install --registry=https://registry.npmmirror.com --no-audit --no-fund
    if errorlevel 1 (
        echo.
        echo Failed to install dependencies.
        pause
        exit /b 1
    )
)

call npm.cmd start
if errorlevel 1 (
    echo.
    echo Failed to start the application.
    pause
    exit /b 1
)

endlocal
