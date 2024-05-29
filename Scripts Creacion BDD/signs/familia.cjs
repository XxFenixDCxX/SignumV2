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

var id = 62;

id++;

var data = {
  id: id,
  name: 'Familia',
  description: 'Grupo de personas relacionadas por lazos de parentesco.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/familia%2Ffamilia.png?alt=media&token=2f9981e4-0a50-48bb-a916-523b7c76be39',
  idCategorie: 5
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);