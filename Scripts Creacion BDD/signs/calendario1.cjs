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

var id = 328;

id++;

var data = {
  id: id,
  name: 'Meses del año',
  description: 'Enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FmesDelAno%2Fmeses-del-ano.png?alt=media&token=858f1cac-d9ba-46a4-8f3e-961c0ba568e1',
  idCategorie: 27
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Abril',
  description: 'Cuatro mes del año.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FmesDelAno%2Fabril.png?alt=media&token=858f1cac-d9ba-46a4-8f3e-961c0ba568e1',
  idCategorie: 27
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Agosto',
  description: 'Octavo mes del año.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FmesDelAno%2Fagosto.png?alt=media&token=858f1cac-d9ba-46a4-8f3e-961c0ba568e1',
  idCategorie: 27
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Año',
  description: 'Unidad de tiempo que comprende 365 o 366 días.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FmesDelAno%2Fano.png?alt=media&token=858f1cac-d9ba-46a4-8f3e-961c0ba568e1',
  idCategorie: 27
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Calendario',
  description: 'Sistema para organizar días y meses.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FmesDelAno%2Fcalendario.png?alt=media&token=858f1cac-d9ba-46a4-8f3e-961c0ba568e1',
  idCategorie: 27
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Diciembre',
  description: 'Doceavo mes del año.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FmesDelAno%2Fdiciembre.png?alt=media&token=858f1cac-d9ba-46a4-8f3e-961c0ba568e1',
  idCategorie: 27
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Enero',
  description: 'Primer mes del año.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FmesDelAno%2Fenero.png?alt=media&token=858f1cac-d9ba-46a4-8f3e-961c0ba568e1',
  idCategorie: 27
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Febrero',
  description: 'Segundo mes del año.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FmesDelAno%2Ffebrero.png?alt=media&token=858f1cac-d9ba-46a4-8f3e-961c0ba568e1',
  idCategorie: 27
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Julio',
  description: 'Séptimo mes del año.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FmesDelAno%2Fjulio.png?alt=media&token=858f1cac-d9ba-46a4-8f3e-961c0ba568e1',
  idCategorie: 27
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Junio',
  description: 'Sexto mes del año.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FmesDelAno%2Fjunio.png?alt=media&token=858f1cac-d9ba-46a4-8f3e-961c0ba568e1',
  idCategorie: 27
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Marzo',
  description: 'Tercer mes del año.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FmesDelAno%2Fmarzo.png?alt=media&token=858f1cac-d9ba-46a4-8f3e-961c0ba568e1',
  idCategorie: 27
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Mayo',
  description: 'Quinto mes del año.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FmesDelAno%2Fmayo.png?alt=media&token=858f1cac-d9ba-46a4-8f3e-961c0ba568e1',
  idCategorie: 27
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Mes',
  description: 'Unidad de tiempo que comprende varias semanas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FmesDelAno%2Fmes.png?alt=media&token=858f1cac-d9ba-46a4-8f3e-961c0ba568e1',
  idCategorie: 27
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Noviembre',
  description: 'Undécimo mes del año.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FmesDelAno%2Fnoviembre.png?alt=media&token=858f1cac-d9ba-46a4-8f3e-961c0ba568e1',
  idCategorie: 27
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Octubre',
  description: 'Décimo mes del año.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FmesDelAno%2Foctubre.png?alt=media&token=858f1cac-d9ba-46a4-8f3e-961c0ba568e1',
  idCategorie: 27
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Septiembre',
  description: 'Noveno mes del año.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FmesDelAno%2Fseptiembre.png?alt=media&token=858f1cac-d9ba-46a4-8f3e-961c0ba568e1',
  idCategorie: 27
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);