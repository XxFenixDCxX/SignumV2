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

var id = 110;

id++;

var data = {
  id: id,
  name: 'Postre',
  description: 'Plato dulce que se sirve al final de una comida como broche de oro.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2Fpostres%2Fpostre.png?alt=media&token=afadaf76-d6f7-4e12-a159-08030ebacad1',
  idCategorie: 8
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);