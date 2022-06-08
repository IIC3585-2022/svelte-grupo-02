# Tarea Svelte - Grupo 02
Aplicación de video chat hecha con Web Sockets y WebRTC.

Se puede encontrar una versión en producción de ambas aplicaciones acá:
- [Server](https://svelte-signaling-server.herokuapp.com/) (se recomienda primero abrir este link y esperar que el dyno prenda)
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

Por configuraciones de la red que alguno de los pares esté usando, es probable que no se pueda concretar la conección P2P. La solución es usar agregar un TURN server a los servidores que configuran el RTCPeerConnection, sin embargo Google solo provee STUN servers gratuitos y no TURN.
