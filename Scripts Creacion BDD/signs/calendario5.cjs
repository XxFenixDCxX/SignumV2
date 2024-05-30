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

var id = 373;

id++;

var data = {
  id: id,
  name: 'Fiesta',
  description: 'Celebración con música, baile y alegría.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ffiestas%2Ffiesta.png?alt=media&token=e5f37178-e815-4f2a-864e-49449124ae14',
  idCategorie: 31
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);