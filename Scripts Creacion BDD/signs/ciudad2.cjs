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

var id = 312;

id++;

var data = {
  id: id,
  name: 'Ambulancia',
  description: 'Vehículo para transporte médico de emergencia.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2FmediosDeTransporte%2Fambulancia.png?alt=media&token=08dd60d6-92d9-44e8-8774-846a23ac3f46',
  idCategorie: 24
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Autobus',
  description: 'Vehículo grande para transporte público.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2FmediosDeTransporte%2Fautobus.png?alt=media&token=08dd60d6-92d9-44e8-8774-846a23ac3f46',
  idCategorie: 24
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Barca',
  description: 'Embarcación pequeña para navegación.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2FmediosDeTransporte%2Fbarca.png?alt=media&token=08dd60d6-92d9-44e8-8774-846a23ac3f46',
  idCategorie: 24
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Bicicleta',
  description: 'Vehículo de dos ruedas impulsado por pedales.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2FmediosDeTransporte%2Fbicicleta.png?alt=media&token=08dd60d6-92d9-44e8-8774-846a23ac3f46',
  idCategorie: 24
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Camion',
  description: 'Vehículo grande para transporte de carga.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2FmediosDeTransporte%2Fcamion.png?alt=media&token=08dd60d6-92d9-44e8-8774-846a23ac3f46',
  idCategorie: 24
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Coche',
  description: 'Vehículo para transporte personal.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2FmediosDeTransporte%2Fcoche.png?alt=media&token=08dd60d6-92d9-44e8-8774-846a23ac3f46',
  idCategorie: 24
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Moto',
  description: 'Vehículo de dos ruedas motorizado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2FmediosDeTransporte%2Fmoto.png?alt=media&token=08dd60d6-92d9-44e8-8774-846a23ac3f46',
  idCategorie: 24
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Transporte',
  description: 'Movilización de personas o cosas de un lugar a otro.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2FmediosDeTransporte%2Ftransporte.png?alt=media&token=08dd60d6-92d9-44e8-8774-846a23ac3f46',
  idCategorie: 24
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Vehiculo',
  description: 'Medio de transporte sobre ruedas o en agua.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2FmediosDeTransporte%2Fvehiculo.png?alt=media&token=08dd60d6-92d9-44e8-8774-846a23ac3f46',
  idCategorie: 24
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);