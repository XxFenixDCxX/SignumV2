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

var id = 211;

id++;

var data = {
  id: id,
  name: 'Cacerola',
  description: 'Utensilio de cocina, para cocinar alimentos líquidos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDeLaCocina%2Fcacerola.png?alt=media&token=e74bbb12-24e9-4a4b-9e72-d111d87bf4e5',
  idCategorie: 16
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cocina',
  description: 'Espacio para preparar alimentos, centro culinario del hogar.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDeLaCocina%2Fcocina.png?alt=media&token=e74bbb12-24e9-4a4b-9e72-d111d87bf4e5',
  idCategorie: 16
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cuchara',
  description: 'Utensilio de cocina, para servir y comer.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDeLaCocina%2Fcuchara.png?alt=media&token=e74bbb12-24e9-4a4b-9e72-d111d87bf4e5',
  idCategorie: 16
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cuchillo',
  description: 'Instrumento cortante, para cortar alimentos y otros usos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDeLaCocina%2Fcuchillo.png?alt=media&token=e74bbb12-24e9-4a4b-9e72-d111d87bf4e5',
  idCategorie: 16
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Jarra',
  description: 'Recipiente para verter líquidos, como agua o jugo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDeLaCocina%2Fjarra.png?alt=media&token=e74bbb12-24e9-4a4b-9e72-d111d87bf4e5',
  idCategorie: 16
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Lavadora',
  description: 'Facilita limpieza, ahorra tiempo y energía.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDeLaCocina%2Flavadora.png?alt=media&token=e74bbb12-24e9-4a4b-9e72-d111d87bf4e5',
  idCategorie: 16
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Nevera',
  description: 'Conserva alimentos frescos, vital en cocina.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDeLaCocina%2Fnevera.png?alt=media&token=e74bbb12-24e9-4a4b-9e72-d111d87bf4e5',
  idCategorie: 16
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Plato',
  description: 'Útil para servir alimentos, esencial en comidas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDeLaCocina%2Fplato.png?alt=media&token=e74bbb12-24e9-4a4b-9e72-d111d87bf4e5',
  idCategorie: 16
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Sarten',
  description: 'Cocina alimentos con facilidad, imprescindible en cocina.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDeLaCocina%2Fsarten.png?alt=media&token=e74bbb12-24e9-4a4b-9e72-d111d87bf4e5',
  idCategorie: 16
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Servilleta',
  description: 'Absorbe manchas, complementa mesa, higiénica.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDeLaCocina%2Fservilleta.png?alt=media&token=e74bbb12-24e9-4a4b-9e72-d111d87bf4e5',
  idCategorie: 16
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tenedor',
  description: 'Instrumento esencial, facilita comer, elegante en mesa.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDeLaCocina%2Ftenedor.png?alt=media&token=e74bbb12-24e9-4a4b-9e72-d111d87bf4e5',
  idCategorie: 16
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Vaso',
  description: 'Contenedor líquidos, vital en hidratación, para beber.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDeLaCocina%2Fvaso.png?alt=media&token=e74bbb12-24e9-4a4b-9e72-d111d87bf4e5',
  idCategorie: 16
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);