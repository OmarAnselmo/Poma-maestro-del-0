// ============================================================
// EDITÁ ESTE ARCHIVO: es lo único que tenés que cambiar
// ============================================================

// 1) Título del libro (aparece en "Descubre las historias de ...")
export const TITULO_LIBRO = "Poma al paso del cero";

// 2) Texto que ve la gente al tocar "Compra tu copia ya"
export const MENSAJE_COMPRA =
  "La compra es en persona. Escribime o buscame y te habilito tu cuenta para leer el libro completo.";

// 3) Imagen de portada: ya está en la carpeta img
export const PORTADA = "img/portada.jpg";

// 4) Pegá aquí la configuración de tu app web de Firebase
//    (Consola de Firebase > Configuración del proyecto > Tus apps > App web)
export const firebaseConfig = {
  apiKey: "AIzaSyDhIowOuDERg8X7Mswwel2Tk0EUMYjgCEM",
  authDomain: "poma-al-paso-del-0-e7d81.firebaseapp.com",
  projectId: "poma-al-paso-del-0-e7d81",
  storageBucket: "poma-al-paso-del-0-e7d81.firebasestorage.app",
  messagingSenderId: "727784901078",
  appId: "1:727784901078:web:4c988f8259bdcb4a71bc77",
  measurementId: "G-057EFXW00R",
};

// Dominio interno para convertir "usuario" en un correo que Firebase entienda.
// Los lectores nunca lo ven. No hace falta cambiarlo.
export const DOMINIO_INTERNO = "libro.app";
