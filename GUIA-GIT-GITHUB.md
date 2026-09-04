# Guía Git & GitHub — EMAVIAS Sistema
## Paso a Paso para Configurar el Repositorio

---

## PASO 1 — Verificar que Git está instalado

Abre el **Símbolo del sistema (cmd)** y escribe:
```
git --version
```
Si no está instalado, descárgalo desde: https://git-scm.com/download/win  
Durante la instalación deja todas las opciones por defecto.

---

## PASO 2 — Ejecutar el script de Git

1. Abre la carpeta `E:\HTML CSS MAESTRIA\EMAVIAS-Sistema\` en el Explorador de archivos
2. Haz **doble clic** en `setup-git.bat`
3. Se abrirá una ventana negra y ejecutará todo automáticamente:
   - Creará 3 ramas: `master`, `develop`, `feature/registros-rrhh`
   - Realizará 10+ commits con mensajes descriptivos
   - Hará un merge de feature → develop → master
4. Al final verás el historial de commits. Presiona cualquier tecla para cerrar.

---

## PASO 3 — Crear el repositorio en GitHub

1. Ve a: **https://github.com/new**
2. Completa los campos:
   - **Repository name:** `emavias-sistema`
   - **Description:** `Sistema de Gestión Administrativa EMAVIAS - La Paz, Bolivia`
   - **Visibility:** ✅ **Public**
   - ❌ NO marques "Add a README file"
   - ❌ NO marques "Add .gitignore"
   - ❌ NO marques "Choose a license"
3. Clic en **"Create repository"**
4. GitHub te mostrará la URL del repo. Cópiala (ejemplo: `https://github.com/tu-usuario/emavias-sistema.git`)

---

## PASO 4 — Subir el código a GitHub

1. Abre el archivo `setup-github.bat` con el **Bloc de Notas**
2. Busca la línea: `set GITHUB_USER=TU-USUARIO-GITHUB`
3. Cambia `TU-USUARIO-GITHUB` por tu nombre de usuario real en GitHub
4. Guarda el archivo
5. Haz **doble clic** en `setup-github.bat`
6. Si es la primera vez, GitHub pedirá tu usuario y contraseña (o un token)

> **Nota sobre autenticación:** GitHub ya no acepta contraseñas directas.  
> Si pide autenticación, usa un **Personal Access Token**:
> - Ve a: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
> - Clic "Generate new token" → marca "repo" → Generate
> - Usa ese token como contraseña

---

## PASO 5 — Crear el Pull Request

1. Ve a tu repositorio: `https://github.com/TU-USUARIO/emavias-sistema`
2. Clic en la pestaña **"Pull requests"**
3. Clic en el botón verde **"New pull request"**
4. Configura:
   - **base:** `master`
   - **compare:** `develop`
5. Clic en **"Create pull request"**
6. Título: `feat: integración completa sistema EMAVIAS v1.0`
7. Descripción:
   ```
   ## Cambios incluidos en esta PR
   
   ### Módulos agregados:
   - ✅ Registro de Obras con formulario completo
   - ✅ Producción Asfáltica en Planta
   - ✅ Horas Extra (ciclo 21-20, L/V y S/D/F separados)
   - ✅ Boletas de Salida (2 Hrs. Adm/mes, 2 Días Adm/año)
   - ✅ Cotizaciones Externos (7-15% variable)
   - ✅ Cotizaciones GAMLP (PREVIA y FINAL)
   - ✅ Precios y Tarifas GAMLP
   
   ### Funcionalidades:
   - Importación/Exportación CSV en todos los módulos
   - Dashboard con estadísticas y gráficos
   - Sistema de autenticación por roles
   - Datos de muestra precargados
   ```
8. Clic en **"Create pull request"**

---

## PASO 6 — Verificar el resultado

Al terminar deberías tener:
- ✅ Repositorio público en GitHub
- ✅ 3 ramas: `master`, `develop`, `feature/registros-rrhh`
- ✅ 10+ commits con mensajes en formato conventional commits
- ✅ 1 Pull Request de `develop` → `master`

**URL de tu repo:** `https://github.com/TU-USUARIO/emavias-sistema`

---

## Comandos útiles de Git para el trabajo diario

```bash
# Ver historial de commits
git log --oneline --graph --all

# Ver estado de archivos
git status

# Cambiar de rama
git checkout develop

# Crear nueva rama
git checkout -b feature/nueva-funcionalidad

# Guardar cambios
git add .
git commit -m "feat: descripción del cambio"

# Subir cambios
git push origin develop
```

---

## Estructura de ramas del proyecto

```
master          (producción — versión estable)
│
└── develop     (integración — rama principal de desarrollo)
    │
    └── feature/registros-rrhh  (módulos de RRHH ya mergeados)
```

---

*EMAVIAS — Sistema de Gestión Administrativa | La Paz, Bolivia*
