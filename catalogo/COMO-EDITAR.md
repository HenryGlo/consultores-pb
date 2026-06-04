# Catálogo Consultores PB — Cómo editar el contenido

Plantilla limpia tipo distribuidor (referencia: MSC Direct, Drills & Cutters, MRM Tool),
con la identidad de Consultores PB (navy + ámbar). **Sin carrito de compras**: cada
producto tiene una hoja informativa que redirige a **Cotizar**.

## Páginas

| Archivo            | Qué es                                                        |
|--------------------|--------------------------------------------------------------|
| `index.html`       | Página principal: hero, categorías, productos destacados      |
| `categoria.html`   | Listado de productos con filtros (grilla de tarjetas)         |
| `producto.html`    | **Ficha / hoja informativa** de un producto → botón Cotizar   |
| `cotizar.html`     | Formulario de cotización (envía por WhatsApp o correo)         |
| `assets/estilos.css` | Diseño (colores, tipografía). Normalmente NO se toca.       |
| `assets/app.js`    | Pequeñas funciones (galería, cargar producto en cotizar)      |

## Para ver el sitio
Abre `index.html` con doble clic en tu navegador. No necesita servidor.

## Reglas de edición (busca los comentarios `👉 EDITAR`)
- **Textos:** edita directamente entre las etiquetas, sin tocar los `<...>`.
- **Imágenes:** reemplaza el enlace dentro de `src="..."`. Puedes poner fotos
  propias en `assets/` y usar `src="assets/mi-foto.jpg"`.
- **Agregar un producto a una grilla:** copia un bloque completo
  `<article class="prod-card"> … </article>` y pégalo debajo; cambia nombre, SKU,
  imagen y el enlace del botón Cotizar.

## Crear la ficha de un producto nuevo
1. Duplica `producto.html` y renómbralo, ej. `producto-fresa-sc.html`.
2. Cambia las zonas `👉 EDITAR`: título, marca, SKU, imágenes, tabla de specs,
   descripción y aplicaciones.
3. En el botón **Solicitar cotización**, actualiza `?producto=...&sku=...` para que
   el formulario cargue automáticamente ese producto.
4. En `categoria.html` e `index.html`, apunta el botón “Ver ficha” a tu nuevo archivo.

## Datos a actualizar en todo el sitio (si cambian)
- Teléfono: `+507 398-6559`
- WhatsApp: `50769212056` (aparece en enlaces `wa.me/...` y en `app.js`)
- Correo: `info@consultorespb.com`

## Cómo se envía la cotización hoy
El formulario abre **WhatsApp** con todos los datos ya escritos. Si más adelante
quieres que llegue por correo a un servidor, se cambia la función `pbSubmitQuote`
en `assets/app.js`.
