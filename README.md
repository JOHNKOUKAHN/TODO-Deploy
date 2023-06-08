# frontend-tecnico TODO App

Este es un proyecto que utiliza Svelte y Vite para construir una aplicación web interactiva. También hace uso de la biblioteca Axios para realizar peticiones HTTP y variables de entorno para configurar aspectos específicos de la aplicación.

## Configuración de Variables de Entorno

La aplicación utiliza variables de entorno para la configuración. Asegúrate de definir las siguientes variables de entorno antes de ejecutar la aplicación:

- `VITE_BASE_URL_API_NINJA`: La URL de la API para generar frases aleatorias.
- `VITE_BASE_APIKEY_API_NINJA`: La APIKEY de la API para generar frases aleatorias.
- `VITE_BASE_URL_API_SUPABASE`:  La URL de la API para gestionar los TODOS.
- `VITE_BASE_APIKEY_API_SUPABASE`: La APIKEY de la API para gestionar los TODOS.

Puedes configurar las variables de entorno creando un archivo `.env` en la raíz del proyecto y definiendo las variables allí. Asegúrate de no compartir este archivo en el control de versiones.

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto:

1. Clona el repositorio en tu máquina local.
2. En la raíz del proyecto, ejecuta el comando `npm install` para instalar las dependencias.
3. Configura las variables de entorno en un archivo `.env`.
4. Ejecuta el comando `npm run dev` para iniciar la aplicación en modo de desarrollo.
5. Abre tu navegador y visita `http://localhost:5173` para ver la aplicación en funcionamiento.

## Tecnologías Utilizadas

- Svelte: Framework para la construcción de interfaces de usuario reactivas.
- Vite: Herramienta de compilación rápida para proyectos de Svelte.
- Axios: Biblioteca para realizar peticiones HTTP desde la aplicación.
- Variables de Entorno: Para la configuración de aspectos específicos de la aplicación.
