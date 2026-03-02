# Microservicios Escolares - Guía de Despliegue con Docker

Este repositorio contiene un ecosistema completo de microservicios desarrollados en Spring Boot 3 (Java 17), un API Gateway, un servidor Eureka, un frontend en Angular y una base de datos Oracle XE.

Todo el proyecto está dockerizado para facilitar su despliegue en cualquier entorno (Local, VPS o Nube).

## Requisitos Previos

Para ejecutar este proyecto, necesitas tener instalado en tu máquina o servidor:
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Al menos **4 GB de memoria RAM** disponibles (Oracle XE y Spring Boot consumen bastantes recursos).

## 🚀 Cómo Desplegar Todo el Proyecto

La forma más sencilla de levantar todo el ecosistema es utilizando `docker-compose`. Este comando construirá todas las imágenes a partir de sus respectivos `Dockerfile` y levantará los contenedores en el orden correcto, asegurando la comunicación entre ellos a través de una red interna de Docker.

1. Clona este repositorio y navega a la raíz del proyecto:
   ```bash
   git clone <URL_DE_TU_REPOSITORIO>
   cd ArquitecturaMicroserviciosEscuela
   ```

2. Ejecuta el siguiente comando para construir las imágenes y levantar los contenedores en segundo plano:
   ```bash
   docker-compose up -d --build
   ```

3. **Espera unos minutos:** Los servicios de Spring Boot y la base de datos Oracle XE pueden tardar un par de minutos en arrancar completamente y registrarse en Eureka.

### Puertos Expuestos

Una vez que todos los contenedores estén corriendo, podrás acceder a:
- **Frontend Angular:** [http://localhost:4200](http://localhost:4200)
- **API Gateway:** [http://localhost:9000](http://localhost:9000)
- **Eureka Server Dashboard:** [http://localhost:8761](http://localhost:8761)

Para detener todos los servicios y eliminar los contenedores (sin borrar los volúmenes de datos), ejecuta:
```bash
docker-compose down
```

---

## 🏗️ Cómo Desplegar Servicios Individuales

Si no deseas utilizar `docker-compose` y prefieres construir y correr un solo microservicio (por ejemplo, para probarlo localmente o subir esa imagen específica a un registro como Docker Hub), puedes hacerlo utilizando los **Dockerfiles individuales**.

### Ejemplo: Desplegar solo el API Gateway

1. Navega a la carpeta del servicio:
   ```bash
   cd ApiGateway
   ```

2. Construye la imagen de Docker (esto usará el *multi-stage build* que compila el código fuente y empaqueta el `.jar` en una imagen ligera de Java):
   ```bash
   docker build -t mi-api-gateway:latest .
   ```

3. Ejecuta el contenedor exponiendo el puerto necesario:
   ```bash
   docker run -d -p 9000:9000 --name api-gateway-app mi-api-gateway:latest
   ```

> **Nota:** Si corres un microservicio individual de esta forma, ten en cuenta que las variables de entorno para conectarse a Oracle o Eureka no estarán configuradas automáticamente como en el `docker-compose.yml`. Tendrías que pasarlas manualmente usando la bandera `-e` (ej: `docker run -e SPRING_DATASOURCE_URL=... ...`).

---

## Estructura de Docker en el Proyecto

- **Dockerfiles Individuales:** Cada carpeta (`ApiGateway`, `Estudiantes`, `MsEscuelas`, etc.) tiene su propio `Dockerfile` optimizado. Los servicios Java usan una imagen ligera de Eclipse Temurin, y el frontend Angular usa Nginx.
- **`docker-compose.yml`:** Orquesta todos los contenedores en la red `ms-network`, configura las variables de entorno y maneja las dependencias de arranque (`depends_on`).
- **`DatabaseCreation/init.sql`:** Este archivo es leído por el contenedor de Oracle XE al arrancar por primera vez para crear las tablas y hacer inserts de prueba automáticamente.
