# Codigos de respuesta HTTP

Los códigos de estado de respuesta HTTP indican si una solicitud HTTP específica se completó con éxito. Las respuestas se agrupan en cinco clases:

- Respuestas informativas (100–199)
- espuestas exitosas (200–299)
- Mensajes de redirección (300–399)
- Respuestas de error del cliente (400–499)
- Respuestas de error del servidor (500–599)

## Respuestas de informacion

- 100 Continue.
Esta respuesta provisional indica que el cliente debe continuar con la solicitud.

- 101 Switching Protocols.
Este código se envía en respuesta a un encabezado de solicitud de actualización del cliente e indica el protocolo al que se está cambiando el servidor.

- 102 Processing.
Este código indica que el servidor ha recibido y está procesando la solicitud, pero aún no hay respuesta disponible.

- 103 Early Hints.
Este código de estado está diseñado principalmente para usarse con el encabezado del enlace, lo que permite que el agente de usuario comience a cargar recursos mientras el servidor prepara una respuesta.

## Respuestas exitosas

Este código de estado indica que la acción solicitada por el cliente ha sido recibida, entendida, aceptada y procesada correctamente.

- 200 OK. El request es correcto. Esta es la respuesta estándar para respuestas correctas.
- 201 Created. El request se ha completado y se ha creado un nuevo recurso.
- 202 Aceptada. El request se ha aceptado para procesarlo, pero el proceso aún no ha terminado.
- 203 Non-Authoritative Information. El request se ha procesado correctamente, pero devuelve información que podría venir de otra fuente.
- 204 No Content. El request se ha procesado correctamente, pero no devuelve ningún contenido.
- 205 Reset Content. El request se ha procesado correctamente, pero no devuelve ningún contenido y se requiere que el requester recargue el contenido.
- 206 Partial Content. El servidor devuelve sólo parte del recurso debido a una limitación que ha configurado el cliente (se usa en herramientas de descarga como wget).
- 207 Multi-Status (WebDAV; RFC 4918). El cuerpo del mensaje es XML y puede contener un número de códigos de estado diferentes dependiendo del número de sub-requests.

## Mensajes de redireccion

El cliente ha de tomar una acción adicional para completar el request. Muchos de estos estados se utilizan para redirecciones.

- 300 Multiple Choices. Es una lista de enlaces. El usuario puede seleccionar un enlace e ir a esa dirección.
- 301 Moved Permanently. La página solicitada se ha movido permanentemente.
- 302 Found. La página solicitada se ha movido temporalmente a una nueva URI.
- 303 See Other. La página solicitada se puede encontrar en una URI diferente.
- 304 Not Modified. Indica que la página solicitada no se ha modificado desde la última petición.
- 305 Use Proxy (desde HTTP/1.1). El recurso solicitado sólo está disponible a través de proxy.
- 307 Temporary Redirect (desde HTTP/1.1). La página solicitada se ha movido temporalmente a otra URL.
- 308 Permanent Redirect (RFC 7538). El request y futuros requests deberían repetirse usando otro URL.

## Errores del cliente

- 400 Bad Request. El servidor no puede o no va a procesar el request por un error de sintaxis del cliente.
- 401 Unauthorized (RFC 7235). Similar al error 403, pero se usa cuando se requiere una autentificación y ha fallado o todavía no se a facilitado.
- 402 Payment Required. Reservado para futuro uso. La intención original fue para pago con tarjeta o micropago, pero eso no ha ocurrido, y este código apenas se usa.
- 403 Forbidden. El request fue válido pero el servidor se niega a responder.
- 404 Not Found. El recurso del request no se ha podido encontrar pero podría estar disponible en el futuro.
- 405 Method Not Allowed. Se ha hecho un request con un recurso usando un método request no soportado por ese recurso (por ejemplo usando GET en un formulario que requiere POST).
- 406 Not Acceptable. El recurso solicitado solo genera contenido no aceptado de acuerdo con los headers Accept enviados en el request.
- 407 Proxy Authentication Required (RFC 7235). El cliente se debe identificar primero con el proxy.
- 408 Request Timeout. El cliente no ha enviado un request con el tiempo necesario con el que el servidor estaba preparado para esperar.
- 409 Conflict. Conflicto en el request, como cuando se actualizan al mismo tiempo dos recursos.
- 410 Gone. El recurso solicitado no está disponible ni lo estará en el futuro.
- 411 Length Required. El request no especificó la longitud del contenido, la cual es requerida por el recurso solicitado.
- 412 Precondition Failed (RFC 7232). El servidor no cumple una de las precondiciones que el requester añade en el request.
- 413 Request Entity Too Large. El request es más largo que el que está dispuesto a aceptar el servidor.
- 414 Request-URI Too Long. El URI es muy largo para que el servidor lo procese.
- 415 Unsupported Media Type. La entidad request tiene un media type que el servidor o recurso no soportan.
- 416 Requested Range Not Satisfiable (RFC 7233). El cliente ha solicitado una porción de archivo, pero el servidor no puede ofrecer esa porción.
- 417 Expectation Failed. El servidor no puede cumplir los requerimientos del header del request Expect.
- 418 I'm a teapot (RFC 2324). Fue parte de un April Fool's day, y no se espera que se implemente en servidores HTTP.

## Errores del servidor

- 500 Internal Server Error. Error genérico, cuando se ha dado una condición no esperada y no se puede concretar el mensaje.
- 501 Not Implemented. El servidor o no reconoce el método del request o carece de la capacidad para completarlo. Normalmente es algo que se ofrecerá en el futuro, como un nuevo servicio de una API.
- 502 Bad Gateway. El server actuaba como puerta de entrada o proxy y recibió una respuesta inválida del servidor upstream.
- 503 Service Unavailable. El servidor está actualmente no disponible, ya sea por mantenimiento o por sobrecarga.
- 504 Gateway Timeout. El servidor estaba actuando como puerta de entrada o proxy y no recibió una respuesta oportuna por parte del servidor upstream.
- 505 HTTP Version Not Supported. El servidor no soporta la versión del protocolo HTTP usada en el request.
511 Network Authentication Required (RFC 6585). El cliente necesita autentificarse para poder acceder a la red.
