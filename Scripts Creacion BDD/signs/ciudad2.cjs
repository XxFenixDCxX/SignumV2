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
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fambulancia.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 24
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Autobus',
  description: 'Vehículo para transporte médico de emergencia.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fautobus.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 24
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Barca',
  description: 'Vehículo para transporte médico de emergencia.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fbarca.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 24
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Bicicleta',
  description: 'Vehículo para transporte médico de emergencia.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fbicicleta.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 24
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Camion',
  description: 'Vehículo para transporte médico de emergencia.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fcamion.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 24
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Coche',
  description: 'Vehículo para transporte médico de emergencia.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fcoche.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 24
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Moto',
  description: 'Vehículo para transporte médico de emergencia.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fmoto.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 24
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Transporte',
  description: 'Vehículo para transporte médico de emergencia.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Ftransporte.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 24
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Vehiculo',
  description: 'Vehículo para transporte médico de emergencia.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fciudad%2Fvehiculo.png?alt=media&token=b39715a7-7e61-48b4-b2bb-6f307c282a72',
  idCategorie: 24
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);