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

var id = 240;

id++;

var data = {
  id: id,
  name: 'Cosas del colegio',
  description: 'Material escolar, actividades educativas, interacción con compañeros.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Fcosas-del-colegio.png?alt=media&token=dff245fb-4c41-4aa2-a127-0673dc1f6ca3',
  idCategorie: 20
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);