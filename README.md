# 🍼 NutriBebé - Guía de Alimentación Complementaria

**Diseñada por Javi Design**

Aplicación web para guiar a las familias en la introducción gradual de alimentos sólidos a bebés de 6+ meses, siguiendo las recomendaciones de la OMS, UNICEF y AEPAP.

---

## ✨ Características

- **📅 Guía día a día**: 35 pasos de introducción gradual (un alimento nuevo cada 3-4 días)
- **🛒 Lista de compras**: Calculada automáticamente para cada período de 15 días
- **👨‍🍳 Recetas con IA**: Genera recetas personalizadas según los alimentos del día
- **❤️ Seguimiento de reacciones**: Registra si al bebé le gustó, fue neutral, no le gustó o tuvo reacción alérgica
- **👨‍👩‍👧 Código de familia**: Comparte un código único para acceder desde múltiples dispositivos
- **☁️ Sincronización en la nube**: Con Supabase (opcional) o localStorage

---

## 🚀 Despliegue en Netlify - PASO A PASO

### Paso 1: Descargar el archivo ZIP
Descarga el archivo `nutribebe-netlify-final.zip` desde la carpeta de descargas.

### Paso 2: Descomprimir el archivo
1. Descomprime el archivo ZIP en tu computadora
2. Obtendrás una carpeta con todos los archivos del proyecto

### Paso 3: Ir a Netlify
1. Ve a [netlify.com](https://netlify.com)
2. Haz login o crea una cuenta gratuita

### Paso 4: Crear nuevo sitio
1. En el dashboard de Netlify, haz clic en **"Add new site"**
2. Selecciona **"Deploy manually"**

### Paso 5: Subir el proyecto
**OPCIÓN A - Drag & Drop (Más fácil):**
1. Arrastra la carpeta descomprimida completa al área de drop de Netlify

**OPCIÓN B - Desde GitHub:**
1. Sube la carpeta a un repositorio de GitHub
2. En Netlify selecciona **"Import an existing project"**
3. Conecta tu repositorio

### Paso 6: Configurar el build
Netlify detectará automáticamente que es un proyecto Next.js. La configuración es:
- **Build command**: `npm run build`
- **Publish directory**: `.next`

### Paso 7: Desplegar
1. Haz clic en **"Deploy site"**
2. Espera 2-3 minutos mientras se instala y compila
3. ¡Listo! Netlify te dará una URL como `https://tu-app-xyz.netlify.app`

---

## ⚙️ Configuración Opcional: Supabase (Sincronización en la Nube)

### ¿Por qué configurar Supabase?
- **Sin Supabase**: Los datos se guardan solo en el navegador (localStorage)
- **Con Supabase**: Los datos se sincronizan en la nube, accesibles desde cualquier dispositivo

### Pasos para configurar Supabase:

1. **Crear cuenta en [supabase.com](https://supabase.com)** (gratuito)

2. **Crear un nuevo proyecto**:
   - Nombre: `nutribebe`
   - Región: la más cercana a ti
   - Espera 2-3 minutos

3. **Crear las tablas**:
   - Ve a **SQL Editor** en el menú izquierdo
   - Copia y pega el contenido de `SUPABASE-SETUP.md`
   - Haz clic en **"Run"**

4. **Obtener credenciales**:
   - Ve a **Settings** → **API**
   - Copia:
     - **Project URL**
     - **anon public key**

5. **Configurar en Netlify**:
   - Ve a tu sitio en Netlify
   - **Site settings** → **Environment variables**
   - Añade:
     - `NEXT_PUBLIC_SUPABASE_URL` = tu URL
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = tu clave
   - Haz un nuevo despliegue

---

## 📱 Uso de la Aplicación

### Primera vez:
1. Ingresa un nombre para tu familia
2. Opcional: nombre del bebé
3. Haz clic en **"Crear mi familia"**
4. **Guarda el código de 6 caracteres** que aparece

### Desde otro dispositivo:
1. Haz clic en **"Tengo Código"**
2. Ingresa el código de 6 caracteres
3. Los datos se sincronizarán automáticamente

### Navegación:
- **Guía Día a Día**: Seguimiento de la introducción de alimentos
- **Lista de Compras**: Ingredientes para los próximos 15 días
- **Sugerir Recetas**: Genera recetas con los ingredientes disponibles
- **Info Médica**: Información sobre lactancia y precauciones

---

## 🏗️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar en producción
npm start
```

---

## 📋 Requisitos

- Node.js 18+
- npm o bun

---

## 🛡️ Seguridad y Privacidad

- **Sin registro de usuarios**: Solo se guarda un código de familia anónimo
- **Datos mínimos**: Nombre de familia y reacciones del bebé
- **Sin cookies de seguimiento**: No se recopilan datos personales
- **LocalStorage seguro**: Los datos permanecen en tu dispositivo si no usas Supabase

---

## 📚 Fuentes y Referencias

- [OMS - Alimentación complementaria](https://www.who.int/health-topics/complementary-feeding)
- [UNICEF - Nutrición infantil](https://www.unicef.org/nutrition)
- [AEPAP - Asociación Española de Pediatría de Atención Primaria](https://www.aepap.org)

---

## 📄 Licencia

Proyecto de código abierto para uso educativo.

---

**Diseñada por Javi Design** ❤️
