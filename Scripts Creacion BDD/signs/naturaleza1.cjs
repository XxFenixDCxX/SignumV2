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

var id = 378;

id++;

var data = {
  id: id,
  name: 'Naturaleza',
  description: 'Conjunto de seres vivos, paisajes y fenómenos del mundo no alterado por el hombre.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Fnaturaleza.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Abeto',
  description: 'Árbol perenne de hojas aciculares y conos, común en regiones frías.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Fabeto.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Arbol',
  description: 'Planta perenne de tronco leñoso y ramas, importante para el ecosistema.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Farbol.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Arco iris',
  description: 'Fenómeno óptico de luz descompuesta en colores, visible tras la lluvia.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Farco-iris.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Arena',
  description: 'Granulado natural de pequeñas partículas de rocas y minerales.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Farena.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Estrella',
  description: 'Astro luminoso en el espacio, emite luz y energía.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Festrella.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Faro',
  description: 'Torre alta con luz que guía a los barcos en el mar.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Ffaro.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Flor',
  description: 'Estructura reproductiva de las plantas, a menudo colorida y fragante.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Fflor.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Flotador',
  description: 'Objeto que se mantiene en la superficie del agua para flotar.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Fflotador.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Fuego',
  description: 'Calor y luz producidos por la combustión de materiales.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Ffuego.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Hierba',
  description: 'Planta de tallo tierno y hojas delgadas, común en praderas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Fhierba.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Hoja',
  description: 'Órgano plano y verde de las plantas, vital en la fotosíntesis.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Fhoja.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Lago',
  description: 'Gran masa de agua dulce, rodeada por tierra en la superficie.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Flago.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Luna',
  description: 'Satélite natural de la Tierra, refleja la luz del sol.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Fluna.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Mar',
  description: 'Extensión de agua salada, cubre la mayor parte de la superficie terrestre.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Fmar.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Margarita',
  description: 'Flor de pétalos blancos y amarillos, común en prados.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Fmargarita.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Montaña',
  description: 'Elevación natural de terreno, con cumbres y laderas pronunciadas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Fmotana.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Palmera',
  description: 'Árbol tropical con tronco delgado y hojas en forma de abanico.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Fpalmera.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Piedra',
  description: 'Fragmento sólido de mineral o roca, común en la naturaleza.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Fpiedra.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Playa',
  description: 'Costa de arena o guijarros, bordeada por el mar o un lago.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Fplaya.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pozo',
  description: 'Excavación profunda en la tierra para extraer agua u otros recursos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Fpozo.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Rio',
  description: 'Corriente natural de agua que fluye hacia el mar o un lago.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Frio.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Saco de dormir',
  description: 'Bolsa aislante para dormir al aire libre o en excursiones.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Fsaco-de-dormir.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Sombrilla',
  description: 'Dispositivo portátil para protegerse del sol o la lluvia.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Fsombrilla.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tienda de campaña',
  description: 'Refugio portátil para acampar al aire libre, protege de la intemperie.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Ftienda-campana.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);