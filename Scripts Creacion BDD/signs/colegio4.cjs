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

var id = 274;

id++;

var data = {
  id: id,
  name: 'Formas y tamaños',
  description: 'Elementos geométricos, dimensiones variadas, diversidad en estructuras.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FformasYTama%C3%B1os%2Fformas-y-tamanos.png?alt=media&token=092a5109-820e-486f-9b61-7fc60e3cdaf7',
  idCategorie: 21
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);