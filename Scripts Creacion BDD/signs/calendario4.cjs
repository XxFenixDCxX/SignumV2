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

var id = 360;

id++;

var data = {
  id: id,
  name: 'Tiempo',
  description: 'Medición del cambio en el universo.',
  imageUrl: 'hhttps://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ftiempo%2Ftiempo.png?alt=media&token=afa5a6c4-d698-4820-8cd8-63cf5c8f94fa',
  idCategorie: 30
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Ayer',
  description: 'Día anterior al presente.',
  imageUrl: 'hhttps://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ftiempo%2Fayer.png?alt=media&token=afa5a6c4-d698-4820-8cd8-63cf5c8f94fa',
  idCategorie: 30
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'En punto',
  description: 'Hora exacta sin minutos.',
  imageUrl: 'hhttps://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ftiempo%2Fen-punto.png?alt=media&token=afa5a6c4-d698-4820-8cd8-63cf5c8f94fa',
  idCategorie: 30
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: '¿Que hora es?',
  description: 'Momento de duda o incertidumbre respecto al tiempo.',
  imageUrl: 'hhttps://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ftiempo%2Fhora-interrogativa.png?alt=media&token=afa5a6c4-d698-4820-8cd8-63cf5c8f94fa',
  idCategorie: 30
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Hoy',
  description: 'Día actual presente.',
  imageUrl: 'hhttps://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ftiempo%2Fhoy.png?alt=media&token=afa5a6c4-d698-4820-8cd8-63cf5c8f94fa',
  idCategorie: 30
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'La hora de',
  description: 'Momento específico referido al tiempo.',
  imageUrl: 'hhttps://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ftiempo%2Fla-hora-de.png?alt=media&token=afa5a6c4-d698-4820-8cd8-63cf5c8f94fa',
  idCategorie: 30
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Mañana',
  description: 'Día siguiente al presente.',
  imageUrl: 'hhttps://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ftiempo%2Fmanana.png?alt=media&token=afa5a6c4-d698-4820-8cd8-63cf5c8f94fa',
  idCategorie: 30
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Menos cuarto',
  description: 'Faltan quince minutos para la hora.',
  imageUrl: 'hhttps://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ftiempo%2Fmenos-cuarto.png?alt=media&token=afa5a6c4-d698-4820-8cd8-63cf5c8f94fa',
  idCategorie: 30
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Por la mañana',
  description: 'Durante la primera parte del día.',
  imageUrl: 'hhttps://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ftiempo%2Fpor-la-manana.png?alt=media&token=afa5a6c4-d698-4820-8cd8-63cf5c8f94fa',
  idCategorie: 30
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Por la noche',
  description: 'Durante la oscuridad, noche.',
  imageUrl: 'hhttps://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ftiempo%2Fpor-la-noche.png?alt=media&token=afa5a6c4-d698-4820-8cd8-63cf5c8f94fa',
  idCategorie: 30
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Por la tarde',
  description: 'Durante la segunda parte del día.',
  imageUrl: 'hhttps://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ftiempo%2Fpor-la-tarde.png?alt=media&token=afa5a6c4-d698-4820-8cd8-63cf5c8f94fa',
  idCategorie: 30
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Y cuarto',
  description: 'Han pasado quince minutos de la hora.',
  imageUrl: 'hhttps://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ftiempo%2Fy-cuarto.png?alt=media&token=afa5a6c4-d698-4820-8cd8-63cf5c8f94fa',
  idCategorie: 30
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Y media',
  description: 'Han pasado treinta minutos de la hora.',
  imageUrl: 'hhttps://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ftiempo%2Fy-media.png?alt=media&token=afa5a6c4-d698-4820-8cd8-63cf5c8f94fa',
  idCategorie: 30
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);