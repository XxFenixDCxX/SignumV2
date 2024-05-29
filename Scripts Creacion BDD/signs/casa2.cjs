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

var id = 197;

id++;

var data = {
  id: id,
  name: 'Bañera',
  description: 'Relajante, espacio de higiene y bienestar.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDelBano%2Fbanera.png?alt=media&token=f720155c-871d-4b98-8b84-ebccdb6cfd7a',
  idCategorie: 15
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);