@echo off
chcp 65001 >nul
echo ============================================
echo  EMAVIAS - Setup Git y GitHub
echo ============================================
echo.

cd /d "E:\HTML CSS MAESTRIA\EMAVIAS-Sistema"

REM Limpiar locks si existen
if exist .git\HEAD.lock del /f /q .git\HEAD.lock
if exist .git\index.lock del /f /q .git\index.lock
if exist .git\objects\maintenance.lock del /f /q .git\objects\maintenance.lock

REM Configurar usuario
git config user.email "tony3012@gmail.com"
git config user.name "Tony EMAVIAS"

echo.
echo [1/4] Commit inicial - README
git add README.md
git commit -m "docs: agregar README del proyecto EMAVIAS"

echo.
echo [2/4] Commit CSS
git add css\
git commit -m "style: agregar hoja de estilos global CSS con variables EMAVIAS"

echo.
echo [3/4] Commit app.js (módulo core)
git add js\app.js
git commit -m "feat: agregar módulo core app.js con AUTH, DB, utilidades y componentes"

echo.
echo [4/4] Commit Login y Dashboard
git add index.html dashboard.html
git commit -m "feat: agregar páginas de Login y Dashboard principal"

echo.
echo === Creando rama develop ===
git checkout -b develop

echo.
echo [5] Commit Obras
git add obras.html form-obra.html
git commit -m "feat(registros): agregar registro de obras con formulario y filtros"

echo.
echo [6] Commit Producción
git add produccion.html
git commit -m "feat(registros): agregar módulo de producción asfáltica en planta"

echo.
echo === Creando rama feature/registros-rrhh ===
git checkout -b feature/registros-rrhh

echo.
echo [7] Commit Horas Extra
git add horas-extra.html
git commit -m "feat(rrhh): agregar registro de horas extra con ciclo mensual 21-20"

echo.
echo [8] Commit Boletas de Salida
git add boletas-salida.html
git commit -m "feat(rrhh): agregar boletas de salida con control de cupos (2hrs/mes, 2días/año)"

echo.
echo === Merge feature/registros-rrhh → develop ===
git checkout develop
git merge feature/registros-rrhh --no-ff -m "merge(rrhh): integrar módulos de RRHH (horas extra y boletas de salida)"

echo.
echo [9] Commit Cotizaciones en develop
git add cotizaciones-externos.html cotizaciones-gamlp.html
git commit -m "feat(cotizaciones): agregar cotizaciones externos (7-15%%) y GAMLP (PREVIA/FINAL)"

echo.
echo [10] Commit Precios GAMLP
git add precios.html
git commit -m "feat(precios): agregar tabla de precios y tarifas GAMLP con import/export CSV"

echo.
echo === Merge develop → master ===
git checkout master
git merge develop --no-ff -m "release: versión 1.0.0 — sistema completo EMAVIAS con 10 módulos"

echo.
echo === Estado final del repositorio ===
git log --oneline --graph --all
echo.
echo ============================================
echo  Git configurado exitosamente!
echo  Ramas: master, develop, feature/registros-rrhh
echo  Commits: 10+
echo.
echo  SIGUIENTE PASO: Subir a GitHub
echo  1. Crear repo en https://github.com/new
echo     Nombre: emavias-sistema
echo     Visibilidad: Public
echo     SIN inicializar (sin README)
echo  2. Ejecutar setup-github.bat
echo ============================================
pause
