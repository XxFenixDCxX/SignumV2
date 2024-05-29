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

var id = 197;

id++;

var data = {
  id: id,
  name: 'Bañera',
  description: 'Relajante, espacio de higiene y bienestar.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDelBano%2Fbanera.png?alt=media&token=f720155c-871d-4b98-8b84-ebccdb6cfd7a',
  idCategorie: 15
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Baño',
  description: 'Espacio para higiene personal y relajación.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDelBano%2Fbano.png?alt=media&token=f720155c-871d-4b98-8b84-ebccdb6cfd7a',
  idCategorie: 15
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cepillo',
  description: 'Instrumento para higiene dental y cuidado capilar.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDelBano%2Fcepillo.png?alt=media&token=f720155c-871d-4b98-8b84-ebccdb6cfd7a',
  idCategorie: 15
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Champu',
  description: 'Limpia y nutre cabello, elimina residuos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDelBano%2Fchampu.png?alt=media&token=f720155c-871d-4b98-8b84-ebccdb6cfd7a',
  idCategorie: 15
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Colonia',
  description: 'Fragancia refrescante, aroma personalizado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDelBano%2Fcolonia.png?alt=media&token=f720155c-871d-4b98-8b84-ebccdb6cfd7a',
  idCategorie: 15
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Espejo',
  description: 'Refleja imagen, esencial en rutinas diarias.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDelBano%2Fespejo.png?alt=media&token=f720155c-871d-4b98-8b84-ebccdb6cfd7a',
  idCategorie: 15
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Esponja',
  description: 'Absorbe agua, utensilio para limpieza y exfoliación.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDelBano%2Fesponja.png?alt=media&token=f720155c-871d-4b98-8b84-ebccdb6cfd7a',
  idCategorie: 15
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Jabon',
  description: 'Limpia y refresca, esencial en higiene diaria.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDelBano%2Fjabon.png?alt=media&token=f720155c-871d-4b98-8b84-ebccdb6cfd7a',
  idCategorie: 15
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Lavabo',
  description: 'Fuente de agua, para lavado de manos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDelBano%2Flavabo.png?alt=media&token=f720155c-871d-4b98-8b84-ebccdb6cfd7a',
  idCategorie: 15
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Objetos',
  description: 'Diversidad de cosas, variados propósitos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDelBano%2Fobjetos.png?alt=media&token=f720155c-871d-4b98-8b84-ebccdb6cfd7a',
  idCategorie: 15
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Papel',
  description: 'Útil para escritura, limpieza y empaque.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDelBano%2Fpapel.png?alt=media&token=f720155c-871d-4b98-8b84-ebccdb6cfd7a',
  idCategorie: 15
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pasta de dientes',
  description: 'Limpia y protege dientes, previene caries.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDelBano%2Fpasta-de-dientes.png?alt=media&token=f720155c-871d-4b98-8b84-ebccdb6cfd7a',
  idCategorie: 15
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Peine',
  description: 'Desenreda cabello, para peinados y estilo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDelBano%2Fpeine.png?alt=media&token=f720155c-871d-4b98-8b84-ebccdb6cfd7a',
  idCategorie: 15
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Toalla',
  description: 'Absorbe agua, seca cuerpo después del baño.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDelBano%2Ftoalla.png?alt=media&token=f720155c-871d-4b98-8b84-ebccdb6cfd7a',
  idCategorie: 15
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);