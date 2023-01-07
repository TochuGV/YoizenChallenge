# YoizenChallenge

## Arranque del proyecto

- Clonar el repositorio
- Abrir la terminal y poner el comando `npm install`
- Por último, escribir el comando `npm start`

## Documentación

### POST /auth/login

Esto sirve para iniciar sesión.
En el `Body` de la aplicación que se use para probar la API tienen que estar escritos los siguientes atributos.

~~~
{
  "email":"string",
  "password:"string"
}
~~~

A partir de esto, se nos dará un token el cual se tendrá que pegar en `Authorization` y de las múltiples opciones elegir `Bearer Token`.
De esta forma, no será posible pegarle a la API sin tener el token en uso.

### GET /client/id/:id

Esto nos traerá un cliente con todos sus atributos utilizando su ID como parámetro.

En `:id` tendremos que escribir el ID del cliente.

En el `Body` tendremos que escribir lo siguiente:

~~~
{
  "client": {
    "role":"user/admin"
  }
}
~~~

Para estar autorizado a acceder a la información que nos traiga el endpoint, tendremos que poner que el cliente tiene el rol usuario o administrador. De lo contrario,
nos devolverá un error.

#### Ejemplo -> /client/id/a0ece5db-cd14-4f21-812f-966633e7be86

### GET /client/name/:name

Al igual que el anterior, nos traerá un cliente con todos sus atributos, con la diferencia de que, en este caso, hay que utilizar el nombre como parámetro. También hay
que escribir exactamente lo mismo que en el `Body` del anterior endpoint.

En `:name` tendremos que escribir el nombre del cliente.

#### Ejemplo -> /client/name/Britney

### GET /policy/:name

Esto nos traerá la lista de políticas vinculadas a un nombre. 

La única forma de acceder es escribiendo esto en el `Body`

~~~
{
  "client": {
    "role":"admin"
  }
}
~~~

En `:name` tendremos que escribir el nombre del cliente.

#### Ejemplo -> /policy/Ines
