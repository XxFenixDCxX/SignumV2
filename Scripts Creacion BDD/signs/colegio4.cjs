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

var id = 274;

id++;

var data = {
  id: id,
  name: 'Formas y tamaños',
  description: 'Elementos geométricos, dimensiones variadas, diversidad en estructuras.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FformasYTama%C3%B1os%2Fformas-y-tamanos.png?alt=media&token=092a5109-820e-486f-9b61-7fc60e3cdaf7',
  idCategorie: 21
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Circulo',
  description: 'Figura geométrica, curva cerrada, simetría y continuidad.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FformasYTama%C3%B1os%2Fcirculo.png?alt=media&token=092a5109-820e-486f-9b61-7fc60e3cdaf7',
  idCategorie: 21
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cuadrado',
  description: 'Figura geométrica, cuatro lados iguales, estabilidad y equilibrio.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FformasYTama%C3%B1os%2Fcuadrado.png?alt=media&token=092a5109-820e-486f-9b61-7fc60e3cdaf7',
  idCategorie: 21
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Formas',
  description: 'Elementos visuales, contornos definidos, variedad en configuraciones.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FformasYTama%C3%B1os%2Fformas.png?alt=media&token=092a5109-820e-486f-9b61-7fc60e3cdaf7',
  idCategorie: 21
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Grande',
  description: 'De gran tamaño, amplio, considerable en dimensiones.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FformasYTama%C3%B1os%2Fgrande.png?alt=media&token=092a5109-820e-486f-9b61-7fc60e3cdaf7',
  idCategorie: 21
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Mediano',
  description: 'De tamaño intermedio, moderado, ni grande ni pequeño.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FformasYTama%C3%B1os%2Fmediano.png?alt=media&token=092a5109-820e-486f-9b61-7fc60e3cdaf7',
  idCategorie: 21
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pequeño',
  description: 'De reducido tamaño, diminuto, compacto en dimensiones.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FformasYTama%C3%B1os%2Fpequeno.png?alt=media&token=092a5109-820e-486f-9b61-7fc60e3cdaf7',
  idCategorie: 21
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Rectangulo',
  description: 'Figura geométrica, dos pares de lados opuestos iguales, versátil en uso.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FformasYTama%C3%B1os%2Frectangulo.png?alt=media&token=092a5109-820e-486f-9b61-7fc60e3cdaf7',
  idCategorie: 21
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tamaño',
  description: 'Dimensión de un objeto, magnitud física, escala de proporción.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FformasYTama%C3%B1os%2Ftamano.png?alt=media&token=092a5109-820e-486f-9b61-7fc60e3cdaf7',
  idCategorie: 21
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Triangulo',
  description: 'Figura geométrica, tres lados y tres ángulos, estabilidad y dinamismo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FformasYTama%C3%B1os%2Ftriangulo.png?alt=media&token=092a5109-820e-486f-9b61-7fc60e3cdaf7',
  idCategorie: 21
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);