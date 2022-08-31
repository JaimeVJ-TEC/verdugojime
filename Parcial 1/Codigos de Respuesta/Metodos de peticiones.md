# Metodos de peticiones HTTP

HTTP define un conjunto de métodos de peticion para indicar la acción deseada que se realizará para un recurso determinado. Aunque también pueden ser sustantivos, estos métodos de solicitud a veces se denominan verbos HTTP. Cada uno de ellos implementa una semántica diferente, pero un grupo de ellos comparte algunas características comunes: un método de solicitud puede ser seguro, idempotente o almacenable en caché.

## GET

El método GET solicita una representación del recurso especificado. Las solicitudes que utilizan GET solo deben recuperar datos.

## HEAD

El método HEAD solicita una respuesta idéntica a una solicitud GET, pero sin el cuerpo de la respuesta.

## POST

El método POST envía una entidad al recurso especificado, lo que a menudo provoca un cambio de estado o efectos secundarios en el servidor.

## PUT

El método PUT reemplaza todas las representaciones actuales del recurso de destino con la carga de la solicitud.

## DELETE

El método DELETE elimina el recurso especificado.

## CONNECT

El método CONNECT establece un túnel al servidor identificado por el recurso de destino.

## OPTIONS

El método OPCIONES describe las opciones de comunicación para el recurso de destino.

## TRACE

El método TRACE realiza una prueba de loop-back de mensajes a lo largo de la ruta al recurso de destino.

## PATCH

El método PATCH aplica modificaciones parciales a un recurso.