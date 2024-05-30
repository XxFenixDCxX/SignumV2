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

var id = 485;

id++;

var data = {
  id: id,
  name: 'Adverbio',
  description: 'Explica cómo ocurre la acción.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdverbios%2Fadverbio.png?alt=media&token=3c7891bb-6370-44e1-9246-8c632b8e1e9b',
  idCategorie: 38
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Abajo',
  description: 'Posición inferior o dirección descendente.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdverbios%2Fabajo.png?alt=media&token=3c7891bb-6370-44e1-9246-8c632b8e1e9b',
  idCategorie: 38
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Arriba',
  description: 'Posición superior o dirección ascendente.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdverbios%2Farriba.png?alt=media&token=3c7891bb-6370-44e1-9246-8c632b8e1e9b',
  idCategorie: 38
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Bien',
  description: 'Estado positivo o satisfactorio.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdverbios%2Fbien.png?alt=media&token=3c7891bb-6370-44e1-9246-8c632b8e1e9b',
  idCategorie: 38
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cerca',
  description: 'Corta distancia en espacio o tiempo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdverbios%2Fcerca.png?alt=media&token=3c7891bb-6370-44e1-9246-8c632b8e1e9b',
  idCategorie: 38
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Debajo',
  description: 'Posición inferior o por debajo de algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdverbios%2Fdebajo.png?alt=media&token=3c7891bb-6370-44e1-9246-8c632b8e1e9b',
  idCategorie: 38
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Delante',
  description: 'Posición en frente o antes de algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdverbios%2Fdelante.png?alt=media&token=3c7891bb-6370-44e1-9246-8c632b8e1e9b',
  idCategorie: 38
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Dentro',
  description: 'Ubicación interna o inclusión en algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdverbios%2Fdentro.png?alt=media&token=3c7891bb-6370-44e1-9246-8c632b8e1e9b',
  idCategorie: 38
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Derecha',
  description: 'Lado opuesto a la izquierda.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdverbios%2Fderecha.png?alt=media&token=3c7891bb-6370-44e1-9246-8c632b8e1e9b',
  idCategorie: 38
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Detras',
  description: 'Posición posterior o detrás de algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdverbios%2Fdetras.png?alt=media&token=3c7891bb-6370-44e1-9246-8c632b8e1e9b',
  idCategorie: 38
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Encima',
  description: 'Posición superior o por encima de algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdverbios%2Fencima.png?alt=media&token=3c7891bb-6370-44e1-9246-8c632b8e1e9b',
  idCategorie: 38
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Fuera',
  description: 'Exterior o excluido de algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdverbios%2Ffuera.png?alt=media&token=3c7891bb-6370-44e1-9246-8c632b8e1e9b',
  idCategorie: 38
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Izquierda',
  description: 'Lado opuesto a la derecha.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdverbios%2Fizquierda.png?alt=media&token=3c7891bb-6370-44e1-9246-8c632b8e1e9b',
  idCategorie: 38
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Lejos',
  description: 'Gran distancia en espacio o tiempo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdverbios%2Flejos.png?alt=media&token=3c7891bb-6370-44e1-9246-8c632b8e1e9b',
  idCategorie: 38
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Mal',
  description: 'Estado negativo o insatisfactorio.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdverbios%2Fmal.png?alt=media&token=3c7891bb-6370-44e1-9246-8c632b8e1e9b',
  idCategorie: 38
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);