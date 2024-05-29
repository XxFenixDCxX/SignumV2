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

var id = 360;

id++;

var data = {
  id: id,
  name: 'Tiempo',
  description: 'Medición del cambio en el universo.',
  imageUrl: 'hhttps://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ftiempo%2Ftiempo.png?alt=media&token=afa5a6c4-d698-4820-8cd8-63cf5c8f94fa',
  idCategorie: 30
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);