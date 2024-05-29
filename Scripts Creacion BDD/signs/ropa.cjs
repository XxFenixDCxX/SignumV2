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

var id = 124;

id++;

var data = {
  id: id,
  name: 'Ropa',
  description: 'Prendas textiles utilizadas para vestirse y proteger el cuerpo humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Fropa.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 8
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);