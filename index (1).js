// index.js
// Lógica opcional para tu landing
console.log("Landing cargada");

// Ejemplo de envío de formulario sin recarga
// (Descomenta y reemplaza la URL de Formspree o tu backend)
/*
const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });
    if (response.ok) {
      alert('Mensaje enviado correctamente');
      form.reset();
    } else {
      alert('Hubo un problema al enviar el mensaje');
    }
  } catch (err) {
    alert('Error de red: ' + err.message);
  }
});
*/
