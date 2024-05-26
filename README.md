# FarmaYa
# FrontEnd 


## EQUIPO

|         **Nombres**          |
| :-------------------------: |
| Jessica Daniela Muñoz Ossa  |
|  José Ricardo Olarte Pardo  |
| Juan Francisco Terán Roman  |
| Laura Nathalia Garcia Acuña |
|   Ricardo Pulido Renteria   |

## Para la ejecución del proyecto
Una vez clonas nuestro proyecto desde el repositorio de GitHub, debes correr el siguiente comando para descargar las dependencias

```
npm install
```

Luego, para ejecutar el proyecto, se corre con el comando

```
npm start
```

Una vez este corriendo el front se puede ingresar a la siguiente dirección http://localhost:3000/ debe ver lo siguiente:

![image](https://github.com/JessicaDMunozO/ieti-frontend/assets/123814482/fcf19a16-4120-40cd-baa3-d21ab18f0b47)

**NOTA**

Es necesario correr el backend también para que se puedan hacer las peticiones sin problemas. (Las instrucciones para correr el backend se encuentran en el repositorio https://github.com/RicardoPR17/ieti-backend)

## Diseño
Se construyó una aplicación *React* que se encuentra dividida por componentes. En cada carpeta del componente se encuentra un archivo *.css* para controlar la apariencia y 
un archivo *.jsx* que contiene la lógica o comportamiento. Los componentes que definimos son:

- **Signup:** Fue diseñado para manejar la creación de un usuario con los datos necesarios, además de que se crea especificando el rol para posteriormente controlar sus acciones.

- **Login:** Se diseño para autenticar al usuario y que pueda acceder a nuestros servicos. Una vez que el usuario mande sus datos, si la información es correcta, la respuesta de la solicitud será el token que se utilizará para hacer las peticiones siguientes. Dentro de la respuesta también se recibe el rol; estos valores y el documento serán almacenados con *localStorage* para poder mantener estos valores a través de los componentes.

- **Menu:** El menú fue diseñado para mostrar los componentes a los que tiene acceso. En caso de que el rol del usuario sea doctor, en el menú podrá ver el campo de *Orders, Prescriptions, Inventory, Profile* y tendrá la opción de *Log out*. Sin embargo, si es farmacia, no podrá ver la opción de *Prescriptions* pues una farmacia no está autorizada para crear ordenes.

- **MainPage:** En este componente se reciben las ordenes que son traidas del backend con ayuda de axios y mandando el token. Cada una de estas órdenes será mostrada con la información correspondiente. Así mismo, cada orden cuenta con un boton para marcarla como entregada, sin embargo, si esta orden ya fue entregada, ese boton estará deshabilitado. Dicha actualización también quedará registrada en el backend por medio de una solicitud *put*.

- **Providers:** En este componente se muestran los proveedores que sean recibidos como respuesta a la solicitud *get* al backend, una vez más, se debe mandar el token en los encabezados de la solicitud. Se mostrará una tarjeta por cada proveedor con los medicamentos que ofrece. También se tiene un buscador para poder filtrar la información por medicina o por proveedor. Y se cuentan con botones para crear proveedor, crear medicina, actualizar medicina o eliminar medicina. Sin embargo, estás funcionalidades sólo estarán habilitadas si el rol del usuraio es el de "farmacia", en caso contrario, no podrá realizar ninguna de estas acciones.

- **AddProvider:** Este componente sólo estará disponible para un usuario con rol "farmacia". Allí podrá crear un proveedor, nuevamente mandando el token. Al crear un proveedor, mínimo se debe hacer con una medicina. 
   
- **AddMedicine:** Este componente sólo estará disponible para un usuario con rol "farmacia". Allí podrá crear una medicina para determinado proveedor, nuevamente mandando el token. Para esto debe indicar el nombre de la medicina, la descripción, el laboratorio, el precio y la cantidad de la medicina que quiere crear.

- **UpdateMedicine:** Este componente sólo estará disponible para un usuario con rol "farmacia". Allí podrá actualizar la información de una medicina para determinado proveedor, nuevamente mandando el token. Debe indicar el nombre de la medicina a actualizar, y podrá cambiar los campos de laboratorio, precio y cantidad.

- **DeleteMedicine:** Este componente sólo estará disponible para un usuario con rol "farmacia". Allí podrá eliminar una medicina para determinado proveedor, nuevamente mandando el token. Para esto debe indicar el nombre de la medicina a eliminar.

- **Prescriptions:** Este componente sólo estará habilitado para un usuario con rol "doctor". Allí podrá crear una orden, nuevamente debe mandar el token en los encabezados de la solicitud y se mandan los datos suministrados en el formulario para crear una orden. Se tiene un campo numérico para indicar la cantidad de medicinas con las que se creará la orden. 
  
- **Profile:** En este componente el usuario podrá ver los datos que tiene registrados.

- **UpdateUser:** En este componente el usuario podrá actualizar sus datos, en particular los correspondientes a: dirección, ciudad, teléfono y eps.

- Por último podrá hacer **log out** y será redirigido a la pestaña del Log in.

Para realizar las peticiones al backend se utilizó axios indicando la URL, mandando el cuerpo de la solicitud (si se requiere) y el token para que se permita el acceso a nuestros servicios. Además, como se mencionó antes, los elementos a mantener entre componentes como el token, el rol y el documento se almacenaron con *localStorage*. Por su parte en el componente principal *App* se importaron todos los componentes necesarios y se definieron las rutas para estos. 

## Video demostración
https://youtu.be/lh1PjxBgeXg 
