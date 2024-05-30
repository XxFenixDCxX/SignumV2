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

var id = 403;

id++;

var data = {
  id: id,
  name: 'Tiempo atmosferico',
  description: 'Condiciones climáticas actuales.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2FtiempoAtmosferico%2Ftiempo-atmosferico.png?alt=media&token=655d6e0e-b3f1-4350-a992-32d9448d380e',
  idCategorie: 34
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Calor',
  description: 'Condiciones climáticas actuales.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2FtiempoAtmosferico%2Fcalor.png?alt=media&token=655d6e0e-b3f1-4350-a992-32d9448d380e',
  idCategorie: 34
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Frio',
  description: 'Condiciones climáticas actuales.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2FtiempoAtmosferico%2Ffrio.png?alt=media&token=655d6e0e-b3f1-4350-a992-32d9448d380e',
  idCategorie: 34
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Lluvia',
  description: 'Condiciones climáticas actuales.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2FtiempoAtmosferico%2Flluvia.png?alt=media&token=655d6e0e-b3f1-4350-a992-32d9448d380e',
  idCategorie: 34
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Nieve',
  description: 'Condiciones climáticas actuales.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2FtiempoAtmosferico%2Fnieve.png?alt=media&token=655d6e0e-b3f1-4350-a992-32d9448d380e',
  idCategorie: 34
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Nublado',
  description: 'Condiciones climáticas actuales.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2FtiempoAtmosferico%2Fnublado.png?alt=media&token=655d6e0e-b3f1-4350-a992-32d9448d380e',
  idCategorie: 34
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Sol',
  description: 'Condiciones climáticas actuales.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2FtiempoAtmosferico%2Fsol.png?alt=media&token=655d6e0e-b3f1-4350-a992-32d9448d380e',
  idCategorie: 34
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tormenta',
  description: 'Condiciones climáticas actuales.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2FtiempoAtmosferico%2Ftormenta.png?alt=media&token=655d6e0e-b3f1-4350-a992-32d9448d380e',
  idCategorie: 34
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Viento',
  description: 'Condiciones climáticas actuales.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2FtiempoAtmosferico%2Fviento.png?alt=media&token=655d6e0e-b3f1-4350-a992-32d9448d380e',
  idCategorie: 34
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tiempo atmosferico',
  description: 'Condiciones climáticas actuales.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2FtiempoAtmosferico%2Ftiempo-atmosferico.png?alt=media&token=655d6e0e-b3f1-4350-a992-32d9448d380e',
  idCategorie: 34
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);