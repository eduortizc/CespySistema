# cespySistema

Este proyecto está dividido en dos partes principales:
1. **`cespy`**: El frontend (aplicación web) desarrollado con **Next.js**.
2. **`cespy-estudio`**: El backend/panel de administración de contenido (CMS) desarrollado con **Sanity**.

Dado que ambos son proyectos independientes dentro del mismo repositorio, necesitas ejecutar ambos servidores (el del frontend y el del CMS) para que el sistema funcione en su totalidad.

---

## Requisitos previos
- Node.js instalado en tu computadora.
- Gestor de paquetes `npm` (viene con Node.js).

## Instrucciones para correr el sistema

Para correr el sistema localmente, te recomiendo abrir **dos terminales** en la carpeta principal del proyecto (`cespySistema`).

### 1. Levantar el CMS (Sanity)

El CMS de Sanity es el que provee el contenido a la aplicación, por lo que es buena idea levantarlo primero.

En tu **primera terminal**:
```bash
# Entra a la carpeta del CMS
cd cespy-estudio

# Instala las dependencias (si no lo has hecho antes)
npm install

# Inicia el servidor de desarrollo de Sanity
npm run dev
```
El estudio de Sanity normalmente correrá en http://localhost:3333.

### 2. Levantar el Frontend (Next.js)

En tu **segunda terminal**:
```bash
# Entra a la carpeta del frontend
cd cespy

# Instala las dependencias (si no lo has hecho antes)
npm install

# Inicia el servidor de desarrollo de Next.js
npm run dev
```
La aplicación web (frontend) normalmente correrá en http://localhost:3000.

---

## Resumen de la estructura "rara"

Mencionaste que la estructura estaba "medio rara". Esto es común en arquitecturas *Headless CMS* o *monorepos* (aunque este no tiene la configuración completa de un monorepo).
- El `package.json` que está suelto en la raíz (con `@emailjs/browser`) parece ser un archivo residual o un error, ya que las dependencias reales están dentro de cada subcarpeta (`cespy` y `cespy-estudio`). Las dependencias de `emailjs` ya están declaradas en el frontend (`cespy`).
- Lo ideal es entrar a cada carpeta para ejecutar sus propios scripts de `npm` y no intentar correr nada directamente desde la raíz del proyecto.
