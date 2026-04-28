# 🍼 NutriBebé - Instrucciones de Instalación

**Diseñada por Javi Design**

## 📁 Estructura de Carpetas

Crea esta estructura en tu computadora:

```
nutribebe/
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── next-env.d.ts
├── netlify.toml
├── public/
│   └── (archivos estáticos)
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   └── api/
    │       ├── family/
    │       │   └── route.ts
    │       ├── reactions/
    │       │   └── route.ts
    │       └── recipes/
    │           └── suggest/
    │               └── route.ts
    ├── components/
    │   └── ui/
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── tabs.tsx
    │       ├── badge.tsx
    │       ├── select.tsx
    │       ├── label.tsx
    │       ├── textarea.tsx
    │       ├── progress.tsx
    │       ├── input.tsx
    │       └── separator.tsx
    ├── lib/
    │   ├── utils.ts
    │   ├── intro-steps-data.ts
    │   ├── shopping-list.ts
    │   └── supabase.ts
    └── hooks/
        ├── use-mobile.ts
        └── use-toast.ts
```

## 🚀 Pasos de Instalación

### 1. Crear la carpeta del proyecto
```bash
mkdir nutribebe
cd nutribebe
```

### 2. Crear los archivos
Copia cada archivo de esta carpeta a su ubicación correspondiente.

### 3. Instalar dependencias
```bash
npm install
```

### 4. Ejecutar en desarrollo
```bash
npm run dev
```

### 5. Abrir en el navegador
Ve a http://localhost:3000

---

## 🌐 Despliegue en Netlify

### Opción 1: Manual (Drag & Drop)
1. Ejecuta `npm run build`
2. Ve a netlify.com
3. Arrastra la carpeta del proyecto

### Opción 2: Desde GitHub
1. Sube el proyecto a GitHub
2. En Netlify: "Add new site" → "Import from GitHub"
3. Selecciona tu repositorio
4. Configura:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. ¡Despliega!

---

**Diseñada por Javi Design** ❤️
