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

id++;

var data = {
  id: id,
  name: 'Amarillo',
  description: 'Color brillante, asociado al sol, energía y alegría.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolores%2Famarillo.png?alt=media&token=70321c52-1fac-4498-92bc-c925d709a2c8',
  idCategorie: 19
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Azul',
  description: 'Color sereno, asociado al cielo y el mar, tranquilidad y calma.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolores%2Fazul.png?alt=media&token=70321c52-1fac-4498-92bc-c925d709a2c8',
  idCategorie: 19
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Blanco',
  description: 'Color puro, luminoso, asociado a la pureza y la claridad.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolores%2Fblanco.png?alt=media&token=70321c52-1fac-4498-92bc-c925d709a2c8',
  idCategorie: 19
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Marron',
  description: 'Color tierra, cálido, asociado a la naturaleza y la estabilidad.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolores%2Fmarron.png?alt=media&token=70321c52-1fac-4498-92bc-c925d709a2c8',
  idCategorie: 19
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Naranja',
  description: 'Color vibrante, asociado a la energía y la vitalidad, cálido y llamativo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolores%2Fnaranja.png?alt=media&token=70321c52-1fac-4498-92bc-c925d709a2c8',
  idCategorie: 19
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Negro',
  description: 'Color oscuro, ausencia de luz, elegancia y misterio.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolores%2Fnegro.png?alt=media&token=70321c52-1fac-4498-92bc-c925d709a2c8',
  idCategorie: 19
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Rojo',
  description: 'Color intenso, asociado al fuego y la pasión, energía y vitalidad.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolores%2Frojo.png?alt=media&token=70321c52-1fac-4498-92bc-c925d709a2c8',
  idCategorie: 19
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Rosa',
  description: 'Color suave, asociado a la delicadeza y la feminidad, dulzura y ternura.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolores%2Frosa.png?alt=media&token=70321c52-1fac-4498-92bc-c925d709a2c8',
  idCategorie: 19
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Verde',
  description: 'Color de la naturaleza, asociado a la frescura y la vida, tranquilidad y esperanza.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolores%2Fverde.png?alt=media&token=70321c52-1fac-4498-92bc-c925d709a2c8',
  idCategorie: 19
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);