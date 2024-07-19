
# Regalias Front

Este es el frontend del proyecto Regalias, construido con Vue.js, Tailwind CSS y Axios.

## Requisitos Previos

- Node.js (versión 12 o superior)
- npm (versión 6 o superior)

## Instalación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/tu-usuario/regalias-front.git
   cd regalias-front
   ```

2. Instala las dependencias:

   ```sh
   npm install
   ```

3. Instala y configura `@vue/cli-service`, `tailwindcss` y `axios`:

   ```sh
   npm install @vue/cli-service tailwindcss axios --save-dev && npx tailwindcss init
   ```

4. Crea o actualiza `postcss.config.js` con el siguiente contenido:

   ```js
   module.exports = {
     plugins: [
       require('tailwindcss'),
       require('autoprefixer'),
     ],
   };
   ```

5. Crea o actualiza `src/assets/tailwind.css` con las directivas de Tailwind:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. Asegúrate de importar `tailwind.css` y `axios` en tu archivo principal `src/main.js`:

   ```js
   import Vue from 'vue';
   import App from './App.vue';
   import './assets/tailwind.css';
   import axios from 'axios';

   Vue.config.productionTip = false;

   new Vue({
     render: h => h(App),
   }).$mount('#app');
   ```

7. Configura `tailwind.config.js` para Tailwind CSS v3.0:

   ```js
   module.exports = {
     content: [
       './src/**/*.{vue,js,ts,jsx,tsx}',
     ],
     darkMode: 'media', // o 'class' si prefieres usar clases para el modo oscuro
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [],
   };
   ```

8. Crea o actualiza `vue.config.js` para permitir todas las solicitudes de hosts externos:

   ```js
   module.exports = {
     devServer: {
       allowedHosts: 'all',
     },
   };
   ```

## Ejecución

Para ejecutar el servidor de desarrollo, utiliza el siguiente comando:

```sh
npm run serve
```

Esto iniciará el servidor de desarrollo y podrás ver tu aplicación en `http://localhost:8080`.

## Despliegue

Para construir la aplicación para producción, utiliza el siguiente comando:

```sh
npm run build
```

Esto creará una carpeta `dist` con los archivos de producción listos para ser desplegados.

## Errores Comunes

### Invalid Host header

Si ves el error "Invalid Host header", asegúrate de que `vue.config.js` esté configurado correctamente para permitir todas las solicitudes de hosts externos.

### Syntax Error: ReferenceError: media is not defined

Este error generalmente ocurre debido a una configuración incorrecta en `tailwind.config.js`. Asegúrate de que `tailwind.config.js` tenga la configuración correcta para Tailwind CSS v3.0.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Sube tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
