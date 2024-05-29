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

var id = 223;

id++;

var data = {
  id: id,
  name: 'Colegio',
  description: 'Espacio educativo, formación integral, interacción social, aprendizaje.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolegio%2Fcolegio.png?alt=media&token=d8d5f683-06b1-41bc-bfe6-4264bdc55c1c',
  idCategorie: 18
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);