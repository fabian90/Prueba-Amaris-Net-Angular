Amaris-app

Descripción

Amaris-app es una aplicación web desarrollada en Angular para la gestión de fondos y la consulta de su historial de transacciones. La aplicación permite a los clientes buscar su información, consultar el saldo, verificar la disponibilidad de fondos y visualizar el historial de sus movimientos. Adicionalmente, ofrece la funcionalidad de suscribirse a nuevos fondos y cancelar suscripciones existentes.

Estructura del Proyecto

La estructura del proyecto es la siguiente:

Amaris-app/
│
├── src/
│   ├── app/
│   │   ├── components/         # Componentes reutilizables y específicos de la aplicación
│   │   │   ├── cliente/        # Componente para la búsqueda y datos del cliente
│   │   │   ├── historial/      # Componente para el historial de transacciones y acciones de fondo
│   │   │   ├── menu/           # Componente para el menú de navegación
│   │   │   └── ...
│   │   ├── interfaces/       # Definiciones de interfaces de datos (Models/DTOs)
│   │   │   ├── Transaccion.model.ts
│   │   │   ├── Cliente.model.ts
│   │   │   └── ApiResponse.model.ts
│   │   ├── services/         # Servicios para manejar la lógica de negocio e interacción con la API
│   │   │   ├── cliente.service.ts
│   │   │   ├── transaccion.service.ts
│   │   │   └── ...
│   │   ├── guards/           # Guards para la protección de rutas (si aplica)
│   │   ├── pipes/            # Pipes personalizados para la transformación de datos
│   │   ├── app.module.ts     # Módulo principal de la aplicación
│   │   └── app-routing.module.ts # Configuración de rutas de la aplicación
│   │
│   ├── assets/             # Recursos estáticos (imágenes, estilos globales, etc.)
│   ├── environments/       # Archivos de configuración de entorno (desarrollo, producción)
│   ├── index.html          # Archivo HTML principal de la aplicación
│   ├── styles.scss         # Estilos globales de la aplicación (puede ser .css)
│   └── main.ts             # Archivo de entrada de la aplicación
│
├── angular.json          # Configuración del CLI de Angular
├── package.json          # Dependencias y scripts de NPM
└── README.md             # Este archivo

Patrones de Diseño Utilizados

La aplicación utiliza varios patrones de diseño para mejorar la estructura, la mantenibilidad y la escalabilidad del código:

* **Patrón de Diseño de Componentes:** La interfaz de usuario se construye a través de componentes independientes y reutilizables, cada uno enfocado en una parte específica de la funcionalidad.
* **Inyección de Dependencias:** Angular utiliza la inyección de dependencias para gestionar la creación y el suministro de servicios y otras dependencias, promoviendo la modularidad y facilitando las pruebas unitarias.
* **Patrón de Diseño de Servicio:** Los servicios encapsulan la lógica de negocio, la manipulación de datos y las interacciones con el backend (API), manteniendo los componentes limpios y centrados en la presentación.
* **Gestión de Estado con RxJS:** Se utiliza la librería RxJS y sus observables (junto con `Subject` o `BehaviorSubject` si es necesario) para manejar el flujo de datos asíncrono y la gestión del estado entre componentes.
* **Enrutamiento:** El módulo de enrutamiento de Angular (`RouterModule`) se utiliza para definir la navegación entre las diferentes vistas o componentes de la aplicación.

Cómo Ejecutar la Aplicación

Para ejecutar la aplicación localmente, sigue estos pasos:

1.  **Clonar el Repositorio (si aún no lo has hecho):**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_PROYECTO>
    ```

2.  **Instalar Dependencias:** Asegúrate de tener Node.js y Angular CLI instalados en tu sistema. Luego, abre una terminal en la raíz del proyecto y ejecuta el siguiente comando para instalar todas las dependencias listadas en `package.json`:
    ```bash
    npm install
    ```

3.  **Ejecutar la Aplicación:** Una vez que las dependencias se hayan instalado correctamente, puedes iniciar el servidor de desarrollo de Angular utilizando el siguiente comando:
    ```bash
    ng serve -o
    ```
    El flag `-o` (o `--open`) abrirá automáticamente la aplicación en tu navegador web predeterminado. La aplicación estará generalmente disponible en `http://localhost:4200/`.

¡Este archivo `README.md` ahora describe la aplicación Amaris-app, su estructura, los patrones de diseño utilizados y cómo ejecutarla, basándose en la estructura de la documentación de pruebas que creamos! ¡Saludos desde Neiva!
