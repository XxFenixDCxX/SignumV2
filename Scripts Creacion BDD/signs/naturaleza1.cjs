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

var id = 378;

id++;

var data = {
  id: id,
  name: 'Naturaleza',
  description: 'Conjunto de seres vivos, paisajes y fenómenos del mundo no alterado por el hombre.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fnaturaleza%2Fnaturaleza.png?alt=media&token=e8062293-1397-4be1-bc44-8cf69c4a897e',
  idCategorie: 33
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);