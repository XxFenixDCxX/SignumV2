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

var id = 321;

id++;

var data = {
  id: id,
  name: 'Profesiones',
  description: 'Profesional que combate incendios.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fprofesiones%2Fprofesiones.png?alt=media&token=62717543-b270-4736-a45a-da5e242f8f35',
  idCategorie: 25
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Bombero',
  description: 'Profesional que combate incendios.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fprofesiones%2Fbombero.png?alt=media&token=62717543-b270-4736-a45a-da5e242f8f35',
  idCategorie: 25
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Medico',
  description: 'Profesional que combate incendios.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fprofesiones%2Fmedico.png?alt=media&token=62717543-b270-4736-a45a-da5e242f8f35',
  idCategorie: 25
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pastelero',
  description: 'Profesional que combate incendios.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fprofesiones%2Fpastelero.png?alt=media&token=62717543-b270-4736-a45a-da5e242f8f35',
  idCategorie: 25
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pescador',
  description: 'Profesional que combate incendios.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fprofesiones%2Fpescador.png?alt=media&token=62717543-b270-4736-a45a-da5e242f8f35',
  idCategorie: 25
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Policia',
  description: 'Profesional que combate incendios.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fprofesiones%2Fpolicia.png?alt=media&token=62717543-b270-4736-a45a-da5e242f8f35',
  idCategorie: 25
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Profesor',
  description: 'Profesional que combate incendios.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fprofesiones%2Fprofesor.png?alt=media&token=62717543-b270-4736-a45a-da5e242f8f35',
  idCategorie: 25
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);