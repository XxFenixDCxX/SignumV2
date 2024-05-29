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

var id = 284;

id++;

var data = {
  id: id,
  name: 'Ciudad',
  description: 'Un lugar con muchas edificaciones donde vive una gran cantidad de personas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fciudad.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Acera',
  description: 'Camino elevado junto a la calle para peatones.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Facera.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Banco (Dinero)',
  description: 'Institución financiera que guarda y presta dinero.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fbanco-dinero.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Banco (Sentar)',
  description: 'Asiento largo y compartido, usualmente en parques.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fbanco-sentar.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Biblioteca',
  description: 'Lugar donde se prestan y consultan libros.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fbiblioteca.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Buzon',
  description: 'Caja para recibir y enviar correo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fbuzon.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Calle',
  description: 'Vía pública para vehículos y peatones.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fcalle.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cine',
  description: 'Lugar para ver películas en pantalla grande.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fcine.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Colegio',
  description: 'Institución educativa para estudiantes.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fcolegio.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Columpio',
  description: 'Asiento suspendido de cuerdas para jugar.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fcolumpio.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Farola',
  description: 'Poste con luz en la calle.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Ffarola.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Fuente',
  description: 'Estructura que dispensa agua.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Ffuente.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Hospital',
  description: 'Lugar para recibir atención médica.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fhospital.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Libreria',
  description: 'Tienda donde se venden libros.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Flibreria.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Luz',
  description: 'Radiación electromagnética visible.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fluz.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Museo',
  description: 'Lugar para exhibir arte y objetos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fmuseo.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Parque',
  description: 'Área pública con áreas verdes y recreativas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fparque.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Paso de cebra',
  description: 'Área marcada para cruzar la calle.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fpaso-de-cebra.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pasteleria',
  description: 'Tienda donde se venden pasteles y dulces.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fpasteleria.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Plaza',
  description: 'Área pública con espacios abiertos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fplaza.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Puente',
  description: 'Estructura para cruzar cuerpos de agua o valles.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fpuente.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Quiosco',
  description: 'Puesto pequeño para venta de productos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fquiosco.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Semaforo',
  description: 'Dispositivo para regular el tráfico.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fsemaforo.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Supermercado',
  description: 'Tienda grande con variedad de productos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fsupermercado.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Teatro',
  description: 'Lugar para presentaciones escénicas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fteatro.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tienda',
  description: 'Establecimiento para comprar productos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Ftienda.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tobogan',
  description: 'Estructura para deslizarse en parques.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Ftobogan.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Zapateria',
  description: 'Tienda donde se venden zapatos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fzapateria.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 23
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);