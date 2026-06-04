/* ============================================================
   CONSULTORES PB — Interacciones del catálogo
   Pequeñas ayudas: galería de la ficha, pestañas y el
   "prefill" del formulario de cotización con el producto.
   ============================================================ */

/* ---- Galería de la ficha de producto ---- */
function pbSelectThumb(btn, src) {
  document.querySelectorAll('.thumbs button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  var main = document.getElementById('pd-main-img');
  if (main) main.src = src;
}

/* ---- Pestañas de la ficha (Descripción / Aplicaciones / Specs) ---- */
function pbTab(btn, id) {
  document.querySelectorAll('.pd-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.pd-pane').forEach(p => p.style.display = 'none');
  btn.classList.add('active');
  var pane = document.getElementById(id);
  if (pane) pane.style.display = 'block';
}

/* ---- Cotizar: lee ?producto=...&sku=... de la URL y rellena el form ---- */
(function () {
  var params = new URLSearchParams(window.location.search);
  var prod = params.get('producto');
  var sku = params.get('sku');

  // Rellena el resumen visible del producto en la página de cotizar
  var nameEl = document.getElementById('qp-name');
  var skuEl = document.getElementById('qp-sku');
  var imgEl = document.getElementById('qp-img');
  if (prod && nameEl) nameEl.textContent = prod;
  if (sku && skuEl) skuEl.textContent = 'SKU: ' + sku;
  if (params.get('img') && imgEl) imgEl.src = params.get('img');

  // Rellena el campo de mensaje del formulario
  var msg = document.getElementById('q-mensaje');
  if (msg && prod) {
    msg.value = 'Hola, deseo solicitar una cotización del siguiente producto:\n\n'
      + '• Producto: ' + prod + '\n'
      + (sku ? '• SKU: ' + sku + '\n' : '')
      + '• Cantidad: \n\n'
      + 'Quedo atento. Gracias.';
  }
  var prodField = document.getElementById('q-producto');
  if (prodField && prod) prodField.value = prod + (sku ? ' (' + sku + ')' : '');
})();

/* ---- Envío del formulario de cotización ---- */
/*  Por defecto abre WhatsApp con el mensaje armado.
    Cuando tengas backend/correo, cambia esta función.       */
function pbSubmitQuote(e) {
  e.preventDefault();
  var f = e.target;
  var wa = '50769212056'; // 👈 EDITAR: número de WhatsApp de Consultores PB
  var texto =
    '*Nueva solicitud de cotización — Consultores PB*%0A%0A' +
    '*Nombre:* ' + encodeURIComponent(f.nombre.value) + '%0A' +
    '*Empresa:* ' + encodeURIComponent(f.empresa.value || '—') + '%0A' +
    '*Email:* ' + encodeURIComponent(f.email.value) + '%0A' +
    '*Teléfono:* ' + encodeURIComponent(f.telefono.value) + '%0A' +
    '*Producto:* ' + encodeURIComponent(f.producto.value || '—') + '%0A' +
    '*Cantidad:* ' + encodeURIComponent(f.cantidad.value || '—') + '%0A%0A' +
    '*Mensaje:*%0A' + encodeURIComponent(f.mensaje.value);
  window.open('https://wa.me/' + wa + '?text=' + texto, '_blank');
  return false;
}
