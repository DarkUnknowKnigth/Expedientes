@echo off
cd C:\Program Files\MongoDB\Server\3.6\bin
start mongod.exe
pause
mongo mongodb://dany:root@ds053305.mlab.com:53305/dbexpedientes
exit
