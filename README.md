# Desafío Pasantía - Joaquín Diago

## Descripción del proyecto

En el proyecto se realizó una ruleta que al tocar el botón ¡Girar la ruleta!, realiza una animación en la que la misma, rueda 3 veces hasta frenar en el número generado al azar, señalado por el marcador amarillo. La misma por cuestiones de tamaño y cantidad de números, provoca que se solapen los contenedores. A su vez al lado del botón, se indica cual fue el número que fue seleccionado. 

Por otro lado, si se va a la consola donde esta corriendo el backend, se puede visualizar la fecha y horario de la request generada por la función del botón. Al impactar la request en el controller del backend, este mediante un servicio genera un número al azar y lo envía de nuevo al front.

## Cómo correr la app 

Para correr la app con docker desde la consola y ubicado en la carpeta de Desafio Pasantía Backend\:

Abrir la consola y escribir:

 1. docker build -t ruleta . (para crear la imagen de la ruleta con sus
    componentes)
 2. docker run -p 3020:3020 ruleta (para correr la app en el puerto del
    localhost/3020)

## Estructura del proyecto

El proyecto se encuentra divido en 2 carpetas principales, correspondientes al backend y al frontend. 

 - Dentro de la carpeta de backend/src se encuentra la carpeta con el modulo, el servicio y el controller que generan el número aleatorio cuando se hace el llamado al post. A su vez también se encuentra la carpeta de middleware donde esta el registro que da por consola el timestamp del cada vez que se llamó a la controller.
 
 - Dentro de la carpeta de frontend/src, se hayan el /Components con los distintos componentes que forman la app. Tanto el footer como el navbar son algo simbólicos, la acción de encuentra en Roulette y RouletteContainer. Por otro lado se uso Sass como librería para darle estilo a los componentes. Cada carpeta de componentes tiene su hoja de sass acoplada y todas quedan importadas en app.scss que es el archivo renderizado por App.jsx.

## Correr Backend

Por cuestiones de acoplamiento con el puerto en el que corría React, modifiqué el back para que corra en el puerto 3020. Para correr el backend por separado, una vez parado en la carpeta Desafio Pasantía Backend\backend usar el comando -> npm start

## Correr Frontend

Como comencé por el frontend, usé para correrlo el puerto que viene por defecto, el localhost:3000. Para poder correr solo el frontend, una vez situado en la carpeta Desafio Pasantía Backend\frontend usar el comando -> npm start

### Tecnologías usadas

 - Nestjs (Ts)
 - React (Js)
 - Nodejs
 - Docker
 - Sass