# 1. LA URL NO HACE REFERENCIA A LA ACCION SINO AL RECURSO

    /productos/nuevo        ->  POST /productos
    /productos/editar/2     ->  PUT /productos/2

    URL: Uniform Resource Locator
    URI: Uniform Resource Identifier

# 2. USO DE LOS VERBOS HTTP

    GET     /productos       ->  Obtener todos los productos
    GET     /productos/2     ->  Obtener un producto por ID
    POST    /productos       ->  Crear un nuevo producto
    PUT     /productos/2     ->  Actualizar un producto por ID
    PATCH   /productos/2     ->  Actualizar parcialmente un producto por ID
    DELETE  /productos/2     ->  Eliminar un producto por ID

# 3. USAMOS COMO FORMATO DE INTERCAMBIO JSON
    - En las respuestas del servidor
    - En las peticiones al servidor

# 4. ESTADO DE LAS RESPUESTAS

    1xx: Información
    2xx: Éxito
    3xx: Redirección
    4xx: Error del cliente
    5xx: Error del servidor

    https://http.cat/
    https://http.dog/
    https://http.pizza/