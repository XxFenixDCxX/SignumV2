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

var id = 373;

id++;

var data = {
  id: id,
  name: 'Fiesta',
  description: 'Celebración con música, baile y alegría.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ffiestas%2Ffiesta.png?alt=media&token=e5f37178-e815-4f2a-864e-49449124ae14',
  idCategorie: 31
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cumpleaños',
  description: 'Aniversario del nacimiento de una persona, celebrado con regalos y fiesta.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ffiestas%2Fcumpleanos.png?alt=media&token=e5f37178-e815-4f2a-864e-49449124ae14',
  idCategorie: 31
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Navidad',
  description: 'Festividad cristiana que celebra el nacimiento de Jesús, con regalos y reuniones familiares.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ffiestas%2Fnavidad.png?alt=media&token=e5f37178-e815-4f2a-864e-49449124ae14',
  idCategorie: 31
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Papa Noel',
  description: 'Figura navideña que entrega regalos a los niños en Nochebuena.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ffiestas%2Fpapa-noel.png?alt=media&token=e5f37178-e815-4f2a-864e-49449124ae14',
  idCategorie: 31
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Reyes Magos',
  description: 'Tres sabios que llevaron regalos al niño Jesús el 6 de enero.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ffiestas%2Freyes-magos.png?alt=media&token=e5f37178-e815-4f2a-864e-49449124ae14',
  idCategorie: 31
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);