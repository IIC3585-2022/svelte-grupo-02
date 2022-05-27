# Tarea Svelte - Grupo 02
Aplicación de video chat hecha con Web Sockets y WebRTC.

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
