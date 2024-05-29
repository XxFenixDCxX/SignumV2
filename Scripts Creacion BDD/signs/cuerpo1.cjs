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

var id = 144;

id++;

var data = {
  id: id,
  name: 'Cuerpo',
  description: 'Estructura física, forma humana.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fcuerpo%2Fcuerpo.png?alt=media&token=ff7346be-2df6-4d69-8352-99e7559ece43',
  idCategorie: 11
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Boca',
  description: 'Orificio facial, para hablar y comer.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fcuerpo%2Fboca.png?alt=media&token=ff7346be-2df6-4d69-8352-99e7559ece43',
  idCategorie: 11
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Brazo',
  description: 'Extremidad superior, moviliza mano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fcuerpo%2Fbrazo.png?alt=media&token=ff7346be-2df6-4d69-8352-99e7559ece43',
  idCategorie: 11
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cabeza',
  description: 'Parte superior del cuerpo, contiene cerebro.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fcuerpo%2Fcabeza.png?alt=media&token=ff7346be-2df6-4d69-8352-99e7559ece43',
  idCategorie: 11
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Culo',
  description: 'Parte trasera del cuerpo, sienta.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fcuerpo%2Fculo.png?alt=media&token=ff7346be-2df6-4d69-8352-99e7559ece43',
  idCategorie: 11
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Dedo',
  description: 'Extremidad digital, en mano o pie.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fcuerpo%2Fdedo.png?alt=media&token=ff7346be-2df6-4d69-8352-99e7559ece43',
  idCategorie: 11
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Dientes',
  description: 'Piezas dentales, mastican alimentos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fcuerpo%2Fdientes.png?alt=media&token=ff7346be-2df6-4d69-8352-99e7559ece43',
  idCategorie: 11
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Lengua',
  description: 'Órgano muscular, habla y saborea.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fcuerpo%2Flengua.png?alt=media&token=ff7346be-2df6-4d69-8352-99e7559ece43',
  idCategorie: 11
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Mano',
  description: 'Extremidad superior, manipula objetos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fcuerpo%2Fmano.png?alt=media&token=ff7346be-2df6-4d69-8352-99e7559ece43',
  idCategorie: 11
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Nariz',
  description: 'Órgano olfativo, respira y huele.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fcuerpo%2Fnariz.png?alt=media&token=ff7346be-2df6-4d69-8352-99e7559ece43',
  idCategorie: 11
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Ojo',
  description: 'Órgano visual, percibe luz.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fcuerpo%2Fojo.png?alt=media&token=ff7346be-2df6-4d69-8352-99e7559ece43',
  idCategorie: 11
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Oreja',
  description: 'Órgano auditivo, escucha sonidos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fcuerpo%2Foreja.png?alt=media&token=ff7346be-2df6-4d69-8352-99e7559ece43',
  idCategorie: 11
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pelo',
  description: 'Filamentos capilares, cubren cuero cabelludo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fcuerpo%2Fpelo.png?alt=media&token=ff7346be-2df6-4d69-8352-99e7559ece43',
  idCategorie: 11
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pene',
  description: 'Órgano reproductor masculino.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fcuerpo%2Fpene.png?alt=media&token=ff7346be-2df6-4d69-8352-99e7559ece43',
  idCategorie: 11
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pie',
  description: 'Extremidad inferior, sostiene cuerpo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fcuerpo%2Fpie.png?alt=media&token=ff7346be-2df6-4d69-8352-99e7559ece43',
  idCategorie: 11
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pierna',
  description: 'Extremidad inferior, soporta cuerpo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fcuerpo%2Fpierna.png?alt=media&token=ff7346be-2df6-4d69-8352-99e7559ece43',
  idCategorie: 11
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Vulva',
  description: 'Órgano genital femenino exterior.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fcuerpo%2FVulva.png?alt=media&token=ff7346be-2df6-4d69-8352-99e7559ece43',
  idCategorie: 11
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);