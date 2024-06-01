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

var id = 161;

id++;

var data = {
  id: id,
  name: 'Sentidos',
  description: 'Percepciones sensoriales, interpretan entorno.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fsentidos%2Fsentidos.png?alt=media&token=49c4a23a-3a5c-4aa9-8783-bb7cc1e40f9f',
  idCategorie: 12
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Gusto',
  description: 'Sentido del sabor, detecta sabores.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fsentidos%2Fgusto.png?alt=media&token=49c4a23a-3a5c-4aa9-8783-bb7cc1e40f9f',
  idCategorie: 12
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Oido',
  description: 'Sentido auditivo, percibe sonidos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fsentidos%2Foido.png?alt=media&token=49c4a23a-3a5c-4aa9-8783-bb7cc1e40f9f',
  idCategorie: 12
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Olfato',
  description: 'Sentido del olfato, detecta olores.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fsentidos%2Folfato.png?alt=media&token=49c4a23a-3a5c-4aa9-8783-bb7cc1e40f9f',
  idCategorie: 12
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tacto',
  description: 'Sentido del tacto, percibe texturas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fsentidos%2Ftacto.png?alt=media&token=49c4a23a-3a5c-4aa9-8783-bb7cc1e40f9f',
  idCategorie: 12
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Vista',
  description: 'Sentido de la visión, percibe luz.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fsentidos%2Fvista.png?alt=media&token=49c4a23a-3a5c-4aa9-8783-bb7cc1e40f9f',
  idCategorie: 12
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);