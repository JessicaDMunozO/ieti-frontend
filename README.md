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

## Prototipo visual con IA generativa
### Diseño web realizado con *Galileo AI*
Desde la perspectiva del doctor, este puede ver las prescripciones que ha hecho o puede buscar a un paciente para iniciar el proceso.

![Imagen de WhatsApp 2024-02-25 a las 16 05 40_494753e5](https://github.com/JessicaDMunozO/ieti-frontend/assets/123814482/65b49734-5a0b-4fb4-8317-8dc68a2f800a)

Muestra cómo va el proceso de dispensación de medicamentos para una orden en particular.

![Imagen de WhatsApp 2024-02-25 a las 16 06 38_1a442856](https://github.com/JessicaDMunozO/ieti-frontend/assets/123814482/0dcaf779-8fb2-4678-a96e-c983a6fe00ee)

Permite que el doctor añada medicamentos a la orden, a la par que puede observar la disponibilidad de los mismos.

![Imagen de WhatsApp 2024-02-25 a las 16 06 56_034f86bc](https://github.com/JessicaDMunozO/ieti-frontend/assets/123814482/c8bc869c-caa4-4ed6-b8b5-648b6d7b69bd)

Permite seleccionar si la entrega se hará a domicilio en la dirección dada o si se recogerá en alguna de las farmacias establecidas. Con esto se crea formalmente la orden.

![Imagen de WhatsApp 2024-02-25 a las 16 07 30_75b2514a](https://github.com/JessicaDMunozO/ieti-frontend/assets/123814482/d15c2116-53ea-4aa8-842b-9b6996b41a50)
![Imagen de WhatsApp 2024-02-25 a las 16 07 46_a5198f2a](https://github.com/JessicaDMunozO/ieti-frontend/assets/123814482/2c4c6893-c058-4bc0-9c55-5f57f42d5697)

Muestra el resumen de las ordenes, el detalle de cada una y en qué estado se encuentran.

![Imagen de WhatsApp 2024-02-25 a las 16 08 01_f3b89931](https://github.com/JessicaDMunozO/ieti-frontend/assets/123814482/8f7f3a68-7362-4738-b6d5-691649fe5363)

La pantalla principal contiene las órdenes con su respectiva información y estado. Además permite crear nuevas ordenes, ver el inventario de los medicamentos, generar reportes y observar las órdenes más recientes.

![Imagen de WhatsApp 2024-02-25 a las 16 08 26_9cdb82a4](https://github.com/JessicaDMunozO/ieti-frontend/assets/123814482/ffa995d3-eb72-4612-a0bf-900392e62f23)
![Imagen de WhatsApp 2024-02-25 a las 16 08 39_05477461](https://github.com/JessicaDMunozO/ieti-frontend/assets/123814482/61d2f1a4-4816-4408-9885-0dc8d6d77adb)

## Diseño móvil realizado con *Galileo AI*
Muestra una pantalla para que el doctor pueda realizar la prescripción de los medicamentos.

![Imagen de WhatsApp 2024-02-25 a las 16 09 12_afa3bc33](https://github.com/JessicaDMunozO/ieti-frontend/assets/123814482/7a23058e-3438-4179-a264-2c2713672541)

Permite ver la disponibilidad de los medicamentos y empieza el proceso de preparación.

![Imagen de WhatsApp 2024-02-25 a las 16 09 32_9c061ef7](https://github.com/JessicaDMunozO/ieti-frontend/assets/123814482/2163da2f-b1f4-46b7-94cb-9f1833eb6d96)

Muestra el resumen de la orden con las farmacias disponibles.

![Imagen de WhatsApp 2024-02-25 a las 16 09 43_0c1a6ef8](https://github.com/JessicaDMunozO/ieti-frontend/assets/123814482/13204536-a8f2-4978-944d-ebfb8e88efdc)

Permite elegir el método de entrega, que puede ser: recoger en alguna farmacia o a domicilio.

![Imagen de WhatsApp 2024-02-25 a las 16 10 05_724468d3](https://github.com/JessicaDMunozO/ieti-frontend/assets/123814482/295e02dc-fa98-45be-bb1a-b949d1c3e15e)

Muestra el estado de la orden.

![Imagen de WhatsApp 2024-02-25 a las 16 10 23_26d4623c](https://github.com/JessicaDMunozO/ieti-frontend/assets/123814482/4e0225c6-d57b-40a4-95bb-7a1ebeb70da6)

La pantalla principal contiene las solicitudes de ordenes y el estado de las mismas.

![Imagen de WhatsApp 2024-02-25 a las 16 10 35_99c4aa33](https://github.com/JessicaDMunozO/ieti-frontend/assets/123814482/af78e0a1-9feb-4b34-b9ac-5ac9c2bad42e)

