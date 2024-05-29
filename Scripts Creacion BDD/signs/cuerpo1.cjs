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

var id = 144;

id++;

var data = {
  id: id,
  name: 'Cuerpo',
  description: 'Estructura física, forma humana.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fcuerpo%2Fcuerpo.png?alt=media&token=ff7346be-2df6-4d69-8352-99e7559ece43',
  idCategorie: 11
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);