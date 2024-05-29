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

var id = 355;

id++;

var data = {
  id: id,
  name: 'Estaciones',
  description: 'Cambio constante, clima y ambiente.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Festaciones%2Festaciones.png?alt=media&token=67566b47-1030-4527-a303-b72025ee39a5',
  idCategorie: 29
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);