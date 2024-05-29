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

var id = 344;

id++;

var data = {
  id: id,
  name: 'Dias de la semana',
  description: 'Secuencias temporales organizadas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FdiasDeLaSemana%2Fdia-de-la-semana.png?alt=media&token=62645c57-58e2-4449-aa30-f6a700ba2af9',
  idCategorie: 28
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Dia mañana',
  description: 'Próximo día en agenda.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FdiasDeLaSemana%2Fdia-manana.png?alt=media&token=62645c57-58e2-4449-aa30-f6a700ba2af9',
  idCategorie: 28
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Domingo',
  description: 'Fin de semana relajante y reflexivo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FdiasDeLaSemana%2Fdomingo.png?alt=media&token=62645c57-58e2-4449-aa30-f6a700ba2af9',
  idCategorie: 28
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Fin de semana',
  description: 'Descanso y actividades recreativas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FdiasDeLaSemana%2Ffin-de-semana.png?alt=media&token=62645c57-58e2-4449-aa30-f6a700ba2af9',
  idCategorie: 28
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Jueves',
  description: 'Casi fin de semana, trabajo continuo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FdiasDeLaSemana%2Fjueves.png?alt=media&token=62645c57-58e2-4449-aa30-f6a700ba2af9',
  idCategorie: 28
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Lunes',
  description: 'Nuevo comienzo semanal, energía renovada.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FdiasDeLaSemana%2Flunes.png?alt=media&token=62645c57-58e2-4449-aa30-f6a700ba2af9',
  idCategorie: 28
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Martes',
  description: 'Mitad de semana, avance constante.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FdiasDeLaSemana%2Fmartes.png?alt=media&token=62645c57-58e2-4449-aa30-f6a700ba2af9',
  idCategorie: 28
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Miercoles',
  description: 'Ecualizador semanal, mitad de ruta.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FdiasDeLaSemana%2Fmiercoles.png?alt=media&token=62645c57-58e2-4449-aa30-f6a700ba2af9',
  idCategorie: 28
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Sabado',
  description: 'Descanso y diversión, fin de semana.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FdiasDeLaSemana%2Fsabado.png?alt=media&token=62645c57-58e2-4449-aa30-f6a700ba2af9',
  idCategorie: 28
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Semana',
  description: 'Ciclo recurrente, rutina y novedades.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FdiasDeLaSemana%2Fsemana.png?alt=media&token=62645c57-58e2-4449-aa30-f6a700ba2af9',
  idCategorie: 28
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Viernes',
  description: 'Preparación para el fin de semana, animado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FdiasDeLaSemana%2Fviernes.png?alt=media&token=62645c57-58e2-4449-aa30-f6a700ba2af9',
  idCategorie: 28
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);