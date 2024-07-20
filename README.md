# Red Social de Viajes - Frontend

¡Bienvenido al repositorio del frontend para nuestra emocionante red social de viajes! Esta aplicación permite a los usuarios compartir sus experiencias de viaje, interactuar con otros viajeros y gestionar sus perfiles de manera sencilla y divertida. El frontend está construido con React y se comunica con una API RESTful para manejar todas las operaciones del backend.

## Tabla de Contenidos

- Dependencias
- Características
- Instalación
- Uso
- Endpoints de la API
- Contribuir
- Licencia

## Dependencias

El proyecto utiliza las siguientes librerías para su funcionamiento:

    "dependencies": {

      "joi": "^17.13.3",
      "jwt-decode": "^4.0.0",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-infinite-scroll-hook": "^4.1.1",
      "react-modal": "^3.16.1",
      "react-router-dom": "^6.23.1",
      "react-toastify": "^10.0.5",
      "swiper": "^11.1.4"

      }

## Características

### Autenticación y Autorización

- **Registro de Usuario**: Permite a nuevos usuarios registrarse.
- **Inicio de Sesión**: Los usuarios pueden iniciar sesión en sus cuentas.
- **Verificación de Correo Electrónico**: Confirmación de cuentas de usuario mediante correos electrónicos.
- **Uso de JWT**: Manejo de la autenticación de usuarios mediante tokens JWT.

### Gestión de Perfil

- **Actualizar Correo Electrónico**: Permite a los usuarios actualizar su correo electrónico.
- **Actualizar Contraseña**: Los usuarios pueden cambiar su contraseña.
- **Actualizar Información del Perfil**: Edita la información personal del perfil.

### Navegación

- **React Router**: Navegación fluida y dinámica entre diferentes páginas de la aplicación.
- **Rutas Protegidas**: Rutas que solo pueden ser accedidas por usuarios autenticados.

### Interacción con el Usuario

- **React Toastify**: Notificaciones en tiempo real para informar al usuario sobre el éxito o error de sus acciones (como publicación exitosa, errores de autenticación, etc.).
- **React Modal**: Modales para confirmaciones, formularios emergentes, detalles de publicaciones, etc.

### Publicaciones de Viajes

- **Crear Publicación**: Los usuarios pueden crear nuevas publicaciones sobre sus viajes.
- **Buscar Publicaciones**: Funcionalidad para buscar publicaciones de viajes según criterios específicos (ubicación, fecha, tipo de viaje, etc.).
- **Obtener Todas las Publicaciones**: Muestra todas las publicaciones de viajes.
- **Obtener Publicación por ID**: Muestra una publicación específica mediante su ID.
- **Actualizar Publicación**: Permite a los usuarios actualizar una publicación existente.
- **Eliminar Publicación**: Los usuarios pueden eliminar sus publicaciones.

### Imágenes de Publicaciones de Viajes

- **Subir Imágenes**: Permite subir imágenes a una publicación de viaje.
- **Obtener Imágenes**: Muestra las imágenes de una publicación de viaje.
- **Eliminar Imágenes**: Permite eliminar imágenes de una publicación de viaje.

### Presentación de Contenido

- **Swiper**: Carruseles y deslizadores interactivos para mostrar imágenes y publicaciones destacadas de manera atractiva.

### Carga y Visualización de Datos

- **React Infinite Scroll Hook**: Scroll infinito para cargar más contenido a medida que el usuario se desplaza hacia abajo, mejorando la experiencia de navegación y manteniendo el rendimiento.
- **Paginación**: Alternativa al scroll infinito, permitiendo a los usuarios navegar entre páginas de contenido.

### Búsqueda y Filtrado

- **Búsqueda Dinámica**: Funcionalidad para buscar publicaciones de viajes según criterios específicos (ubicación, fecha, tipo de viaje, etc.).
- **Filtrado de Contenido**: Opciones para filtrar publicaciones por categorías, popularidad, fechas, etc.

### Validación de Formularios

- **Joi**: Validación de formularios de manera robusta para garantizar que los datos ingresados por los usuarios sean correctos y seguros.

### Interacción Social

- **Comentarios y Reacciones**: Permite a los usuarios comentar y reaccionar a las publicaciones de otros viajeros.
- **Añadir Reacción**: Los usuarios pueden añadir reacciones a las publicaciones de viajes.
- **Eliminar Reacción**: Permite eliminar reacciones de las publicaciones.
- **Gestión de Compañeros de Viaje**: Añadir y visualizar compañeros de viaje para cada publicación.
- **Añadir Compañero**: Permite añadir compañeros a las publicaciones de viaje.
- **Obtener Compañeros por ID de Publicación**: Muestra los compañeros de una publicación específica.
- **Obtener Compañero por ID de Usuario**: Muestra los compañeros asociados a un usuario específico.

### Comentarios

- **Añadir Comentario**: Los usuarios pueden añadir comentarios a las publicaciones de viaje.
- **Obtener Comentarios**: Muestra los comentarios de una publicación de viaje.
- **Editar Comentario**: Permite editar comentarios existentes.
- **Eliminar Comentario**: Los usuarios pueden eliminar sus comentarios.

### Gestión de Imágenes

- **Subida y Visualización de Imágenes**: Interfaz para subir imágenes de viajes, con visualización previa y gestión de múltiples imágenes.

## Instalación

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1.  Clona el repositorio:

        git clone https://github.com/IceHeaven9/travel-social-web.git

2.  Navega al directorio del proyecto:

        cd travel-social-web

3.  Instala las dependencias:

        npm install

## Uso

Para iniciar el servidor de desarrollo, usa el siguiente comando:

    npm run dev

Luego, abre tu navegador y navega a `http://localhost:5173` para ver la aplicación en acción.

## Esta web todavía está en desarrollo, por lo que aún falta mucho por implementar. Sin embargo, pronto habrá un despliegue de demostración.

## Contacto

Para cualquier duda o consulta, puedes contactarme en cristhian_devfs@outlook.com.

## Licencia

© 2024 Cristhian Medrano Bonora. Todos los derechos reservados.
