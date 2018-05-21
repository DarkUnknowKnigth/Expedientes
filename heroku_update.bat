@echo off
echo iniciando update...
git add .
git commit -m "actualizado"
git push heroku master
git push origin master
echo update realizado... :)


