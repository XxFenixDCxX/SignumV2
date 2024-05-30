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

var id = 500;

id++;

var data = {
  id: id,
  name: 'Verbo',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fverbo.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);