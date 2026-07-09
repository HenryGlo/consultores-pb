# Catálogo Consultores PB — Cómo editar el contenido

Plantilla limpia tipo distribuidor (referencia: MSC Direct, Drills & Cutters, MRM Tool),
con la identidad de Consultores PB (navy + ámbar). **Sin carrito de compras**: cada
producto tiene una hoja informativa que redirige a **Cotizar**.

## Páginas

| Archivo            | Qué es                                                        |
|--------------------|--------------------------------------------------------------|
| `index.html`       | Página principal: hero, categorías, destacados, Nosotros, ¿Cómo comprar?, FAQ |
| `categoria.html`   | Listado de productos por categoría (se dibuja solo desde los datos) |
| `producto.html`    | **Ficha de producto** (se dibuja sola desde los datos) → botón Cotizar |
| `cotizar.html`     | Formulario de cotización (envía por WhatsApp)                  |
| `assets/datos.js`  | **AQUÍ viven los productos y categorías.** Editar esto para todo el contenido de productos. |
| `assets/estilos.css` | Diseño (colores, tipografía). Normalmente NO se toca.       |
| `assets/app.js`    | Pequeñas funciones (galería, pestañas, prefill de cotizar)    |

## Para ver el sitio
Ábrelo con un servidor local (por ejemplo `python3 -m http.server`) y entra a
`http://localhost:8000/catalogo/`. Las páginas de catálogo/ficha leen los datos con
JavaScript, por lo que conviene servirlas (no abrirlas con doble clic).

## ⭐ Cómo se cargan los productos ahora
Los productos ya NO se escriben a mano en cada HTML. Todo el catálogo vive en un
solo archivo: **`assets/datos.js`**. Las páginas se dibujan solas:
- `index.html` → muestra las 4 categorías y los productos marcados como `destacado`.
- `categoria.html?cat=ID` → lista los productos de esa categoría (IDs: `consumibles`,
  `corte`, `electricas`, `estructurales`).
- `producto.html?sku=SKU` → muestra la ficha completa de ese producto.

## Agregar o editar un producto
1. Abre `assets/datos.js` y busca el arreglo `PB_PRODS`.
2. Copia un bloque `{ ... }` completo (entre llaves) y pégalo al final de la lista.
3. Edita sus campos:
   - `sku`, `name`, `brand`, `cat` (una de las 4 categorías), `img`, `disp`.
   - `summary` (resumen), `specs` (tabla, pares `['Campo','Valor']`),
     `benefits` (pares `['Título','Texto']`), `description`.
   - `ficha`: nombre del PDF dentro de `assets/fichas/` (o `null` si no tiene).
   - `destacado: true` si quieres que aparezca en la portada.
   - `variations` (opcional): tabla de variaciones/medidas.
4. Pon la foto en `assets/productos/` y el PDF en `assets/fichas/`, y referencia sus
   nombres en `img` y `ficha`.

## Datos a actualizar en todo el sitio (si cambian)
- Teléfono / Central de ventas: `+507 398-6559`
- WhatsApp Ventas: `50769212056` (enlaces `wa.me/...`, en `app.js` y en `datos.js` como `PB_WA`)
- Correo corporativo: `info@consultorespb.com` · Correo alterno: `consultorespb07@gmail.com`

## Cómo se envía la cotización hoy
El formulario abre **WhatsApp** con todos los datos ya escritos. Si más adelante
quieres que llegue por correo a un servidor, se cambia la función `pbSubmitQuote`
en `assets/app.js`.
