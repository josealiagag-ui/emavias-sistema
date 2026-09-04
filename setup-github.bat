@echo off
chcp 65001 >nul
echo ============================================
echo  EMAVIAS - Subir a GitHub
echo ============================================
echo.

cd /d "E:\HTML CSS MAESTRIA\EMAVIAS-Sistema"

REM === EDITAR ESTA LÍNEA CON TU USUARIO DE GITHUB ===
set GITHUB_USER=TU-USUARIO-GITHUB
REM ==================================================

set REPO_URL=https://github.com/%GITHUB_USER%/emavias-sistema.git

echo Conectando con: %REPO_URL%
echo.

git remote add origin %REPO_URL%

echo Subiendo rama master...
git push -u origin master

echo Subiendo rama develop...
git push -u origin develop

echo Subiendo rama feature/registros-rrhh...
git push -u origin feature/registros-rrhh

echo.
echo ============================================
echo  Ramas subidas a GitHub!
echo.
echo  SIGUIENTE PASO: Crear Pull Request
echo  1. Ir a: https://github.com/%GITHUB_USER%/emavias-sistema
echo  2. Clic en "Pull requests" → "New pull request"
echo  3. base: master  ←  compare: develop
echo  4. Título: "feat: integración completa sistema EMAVIAS v1.0"
echo  5. Descripción:
echo     - Módulos: Obras, Producción, Horas Extra, Boletas,
echo       Cotizaciones Externos, Cotizaciones GAMLP, Precios
echo     - Importación/Exportación CSV en todos los módulos
echo     - Dashboard con estadísticas y gráficos
echo  6. Clic en "Create pull request"
echo ============================================
pause
