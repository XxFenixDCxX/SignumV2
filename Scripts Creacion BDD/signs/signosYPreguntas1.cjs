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

var id = 30;

id++;

var data = {
  id: id,
  name: 'Preguntas',
  description: 'Petición general de información o clarificación sobre varios temas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2Fpreguntas%2Fpreguntas.png?alt=media&token=16a36393-5c23-4261-9741-895dad020af0',
  idCategorie: 3
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: '¿Como se dice?',
  description: 'Pregunta sobre la forma correcta de expresar algo en otro idioma o contexto.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2Fpreguntas%2Fcomo-se-dice.png?alt=media&token=16a36393-5c23-4261-9741-895dad020af0',
  idCategorie: 3
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: '¿Como se signa?',
  description: 'Pregunta sobre cómo representar algo en lengua de señas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2Fpreguntas%2Fcomo-se-signa.png?alt=media&token=16a36393-5c23-4261-9741-895dad020af0',
  idCategorie: 3
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: '¿Como?',
  description: 'Pregunta sobre el modo o manera de hacer algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2Fpreguntas%2Fcomo.png?alt=media&token=16a36393-5c23-4261-9741-895dad020af0',
  idCategorie: 3
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: '¿Como?',
  description: 'Pregunta que busca identificar una opción específica entre varias.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2Fpreguntas%2Fcual.png?alt=media&token=16a36393-5c23-4261-9741-895dad020af0',
  idCategorie: 3
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: '¿Cuando? (Pasado)',
  description: 'Pregunta sobre el momento específico en que ocurrió algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2Fpreguntas%2Fcuando-pasado.png?alt=media&token=16a36393-5c23-4261-9741-895dad020af0',
  idCategorie: 3
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: '¿Cuando? (Presente y futuro)',
  description: 'Pregunta sobre el momento en que ocurre o ocurrirá algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2Fpreguntas%2Fcuando-presente-y-futuro.png?alt=media&token=16a36393-5c23-4261-9741-895dad020af0',
  idCategorie: 3
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: '¿Cuanto?',
  description: 'Pregunta sobre la cantidad o medida de algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2Fpreguntas%2Fcuanto.png?alt=media&token=16a36393-5c23-4261-9741-895dad020af0',
  idCategorie: 3
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: '¿Donde?',
  description: 'Pregunta sobre el lugar específico de algo o alguien.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2Fpreguntas%2Fdonde.png?alt=media&token=16a36393-5c23-4261-9741-895dad020af0',
  idCategorie: 3
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: '¿Para que?',
  description: 'Pregunta sobre el propósito o finalidad de algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2Fpreguntas%2Fpara-que.png?alt=media&token=16a36393-5c23-4261-9741-895dad020af0',
  idCategorie: 3
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: '¿Por que?',
  description: 'Pregunta sobre la razón o motivo detrás de algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2Fpreguntas%2Fpor-que.png?alt=media&token=16a36393-5c23-4261-9741-895dad020af0',
  idCategorie: 3
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: '¿Que dia es?',
  description: 'Pregunta sobre la fecha actual o el día de la semana.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2Fpreguntas%2Fque-dia-es.png?alt=media&token=16a36393-5c23-4261-9741-895dad020af0',
  idCategorie: 3
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: '¿Que dice?',
  description: 'Pregunta sobre el contenido o significado de algo específico.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2Fpreguntas%2Fque-dice.png?alt=media&token=16a36393-5c23-4261-9741-895dad020af0',
  idCategorie: 3
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: '¿Que tal?',
  description: 'Saludo informal que pregunta sobre el estado o bienestar de alguien.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2Fpreguntas%2Fque-tal.png?alt=media&token=16a36393-5c23-4261-9741-895dad020af0',
  idCategorie: 3
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: '¿Que?',
  description: 'Interrogación sobre el contenido o la información específica que se requiere.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2Fpreguntas%2Fque.png?alt=media&token=16a36393-5c23-4261-9741-895dad020af0',
  idCategorie: 3
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: '¿Quien?',
  description: 'Pregunta sobre la identidad de una persona o entidad específica.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2Fpreguntas%2Fquien.png?alt=media&token=16a36393-5c23-4261-9741-895dad020af0',
  idCategorie: 3
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: '¿Si o no?',
  description: 'Pregunta de opción binaria que busca confirmación o negación.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2Fpreguntas%2Fsi-o-no.png?alt=media&token=16a36393-5c23-4261-9741-895dad020af0',
  idCategorie: 3
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);