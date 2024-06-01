const { initializeApp } = require("firebase/app");
const { getFirestore, doc, collection, setDoc } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAlnFftrKxLRXYh3gjjh-aSMkLkiVSZ6X0",
  authDomain: "signumv2.firebaseapp.com",
  projectId: "signumv2",
  storageBucket: "signumv2.appspot.com",
  messagingSenderId: "233433248186",
  appId: "1:233433248186:web:50744bf3638e1835fa6d83",
  measurementId: "G-5DX4KQ3PMX"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

var collectionRef = collection(db, 'signs');

var id = 240;

id++;

var data = {
  id: id,
  name: 'Cosas del colegio',
  description: 'Material escolar, actividades educativas, interacción con compañeros.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Fcosas-del-colegio.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Boligrafo',
  description: 'Útil de escritura, tinta en punta, indispensable en estudio.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Fboligrafo.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Borrador',
  description: 'Elimina trazos, corrige errores, esencial en escritura.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Fborrador.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cera',
  description: 'Material colorante, fácil de manipular, ideal para dibujar.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Fcera.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cosas',
  description: 'Objetos, elementos tangibles, variedad de artículos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Fcosas.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cuaderno',
  description: 'Registro de información, papel encuadernado, indispensable en estudio.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Fcuaderno.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cuento',
  description: 'Narración breve, ficción o realidad, entretiene y enseña.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Fcuento.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Diccionario',
  description: 'Libro de palabras, definiciones y significados, guía léxica.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Fdiccionario.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Goma',
  description: 'Borra lápiz, material flexible, indispensable en escritura.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Fgoma.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Hoja',
  description: 'Parte de un libro, lámina de papel, soporte para escritura.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Fhoja.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Lapices de colores',
  description: 'Instrumentos de dibujo, variedad de tonos, creatividad plasmada.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Flapices-de-colores.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Diccionario',
  description: 'Libro de palabras, definiciones y significados, guía léxica.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Fdiccionario.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Lapiz',
  description: 'Herramienta de escritura, trazo de grafito, indispensable en estudio.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Flapiz.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Libro',
  description: 'Fuente de conocimiento, narrativa impresa, ventana a imaginación.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Flibro.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Papel',
  description: 'Soporte para escritura, materia prima, versátil en uso.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Fpapel.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Papelera',
  description: 'Contenedor de residuos, mantiene limpieza, útil en orden.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Fpapelera.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pegamento',
  description: 'Adhesivo, une superficies, indispensable en manualidades.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Fpegamento.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pintura',
  description: 'Expresión artística, colores plasmados, embellece espacios.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Fpintura.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pizarra',
  description: 'Superficie escribible, herramienta didáctica, facilita enseñanza.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Fpizarra.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Plastilina',
  description: 'Material moldeable, creatividad expresada, juego de modelado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Fplastilina.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Rotulador',
  description: 'Marca textos, tinta líquida, útil en escritura y dibujo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Frotulador.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Sacapuntas',
  description: 'Afila lápices, herramienta escolar, mantiene puntas precisas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Fsacapuntas.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tijeras',
  description: 'Corta papel, herramienta de corte, útil en manualidades.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Ftijeras.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tiza',
  description: 'Material de escritura, crea marcas en pizarra, herramienta docente.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Ftiza.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);