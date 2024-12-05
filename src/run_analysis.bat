@echo off
setlocal

REM 工具路径
set CPPCHECK_PATH=%1

REM 设置源文件和输出文件路径
set SOURCE_FILE=%2
set CPPCHECK_OUTPUT=%3

REM 添加工具路径到环境变量
set PATH=%CPPCHECK_PATH%;%PATH%

REM 运行 Cppcheck 进行静态分析
cppcheck --enable=all --output-file=%CPPCHECK_OUTPUT% %SOURCE_FILE%

endlocal
