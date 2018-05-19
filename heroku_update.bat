@echo off
echo iniciando update...
git add .
pause
git commit -m "actualizado"
pause
git push heroku master
pause
echo update realizado...

