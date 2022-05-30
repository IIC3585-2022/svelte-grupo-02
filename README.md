# Tarea Svelte - Grupo 02
Aplicación de video chat hecha con Web Sockets y WebRTC.

Se puede encontrar una versión en producción de ambas aplicaciones acá:
- [Server](https://svelte-signaling-server.herokuapp.com/) (se recomienda promero abrir este link y esperar que el dyno prenda)
- [Client](https://glittery-crepe-7170e4.netlify.app/)

## Setup

Para ejecutarla, primero instala las dependencias de _client_ y _server_:
```bash
cd server
yarn install
cd ../client
yarn install
```
Luego, en _client_, crea un archivo **.env** y agrega las variables necesarias:
```bash
cp .env.example .env
```
Por último, corre ambas aplicaciones, en dos procesos distintos:
```bash
cd server
yarn dev
cd client # en otro terminal
yarn dev
```
y abre http://localhost:3000/

## Posibles errores

Es probable que la primera vez que se intente conectar a llamada y se permita a la aplicación acceder al micrófono y a la cámara del computador, no se transmita el video. En las siguientes llamadas debería funcionar correctamente.
