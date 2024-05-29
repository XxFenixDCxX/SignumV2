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

var id = 77;

id++;

var data = {
  id: id,
  name: 'Comida',
  description: 'Alimento consumido para satisfacer las necesidades nutricionales del cuerpo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fcomida.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);