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

var id = 264;

id++;

var data = {
  id: id,
  name: 'Colores',
  description: 'Gama cromática, pigmentos para dibujar, estimulan creatividad.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolores%2Fcolores.png?alt=media&token=70321c52-1fac-4498-92bc-c925d709a2c8',
  idCategorie: 19
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);