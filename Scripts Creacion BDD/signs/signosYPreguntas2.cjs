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

var id = 47;

id++;

var data = {
  id: id,
  name: 'Saludo',
  description: 'Expresión de cortesía o bienvenida al comenzar una interacción.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2FsaludosYCortesia%2Fsaludo.png?alt=media&token=57799be9-9686-4521-9337-d94cb1af32b2',
  idCategorie: 4
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cortesia',
  description: 'Gesto de amabilidad o consideración hacia otra persona.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2FsaludosYCortesia%2Fcortesia.png?alt=media&token=57799be9-9686-4521-9337-d94cb1af32b2',
  idCategorie: 4
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Adios',
  description: 'Despedida que indica finalización o separación.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2FsaludosYCortesia%2Fadios.png?alt=media&token=57799be9-9686-4521-9337-d94cb1af32b2',
  idCategorie: 4
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Buenas noches',
  description: 'Saludo de despedida que se utiliza al final del día antes de irse a dormir.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2FsaludosYCortesia%2Fbuenas-noches.png?alt=media&token=57799be9-9686-4521-9337-d94cb1af32b2',
  idCategorie: 4
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Buenas tardes',
  description: 'Saludo que se utiliza durante la tarde, generalmente entre mediodía y el anochecer.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2FsaludosYCortesia%2Fbuenas-tardes.png?alt=media&token=57799be9-9686-4521-9337-d94cb1af32b2',
  idCategorie: 4
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Buenos dias',
  description: 'Saludo que se utiliza por la mañana, generalmente hasta mediodía.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2FsaludosYCortesia%2Fbuenos-dias.png?alt=media&token=57799be9-9686-4521-9337-d94cb1af32b2',
  idCategorie: 4
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cuidado',
  description: 'Advertencia sobre un peligro inminente o una situación riesgosa.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2FsaludosYCortesia%2Fcuidado.png?alt=media&token=57799be9-9686-4521-9337-d94cb1af32b2',
  idCategorie: 4
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'De nada',
  description: 'Respuesta común de cortesía en respuesta a un agradecimiento.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2FsaludosYCortesia%2Fde-nada.png?alt=media&token=57799be9-9686-4521-9337-d94cb1af32b2',
  idCategorie: 4
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Gracias',
  description: 'Expresión de agradecimiento por algo recibido o realizado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2FsaludosYCortesia%2Fgracias.png?alt=media&token=57799be9-9686-4521-9337-d94cb1af32b2',
  idCategorie: 4
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Hola',
  description: 'Saludo informal utilizado para iniciar una conversación.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2FsaludosYCortesia%2Fhola.png?alt=media&token=57799be9-9686-4521-9337-d94cb1af32b2',
  idCategorie: 4
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'No',
  description: 'Negación o rechazo a una proposición o pregunta.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2FsaludosYCortesia%2Fno.png?alt=media&token=57799be9-9686-4521-9337-d94cb1af32b2',
  idCategorie: 4
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Nombre',
  description: 'Solicitud de identificación personal.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2FsaludosYCortesia%2Fnombre.png?alt=media&token=57799be9-9686-4521-9337-d94cb1af32b2',
  idCategorie: 4
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Por favor',
  description: 'Expresión de cortesía utilizada para solicitar algo de manera educada.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2FsaludosYCortesia%2Fpor-favor.png?alt=media&token=57799be9-9686-4521-9337-d94cb1af32b2',
  idCategorie: 4
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Si',
  description: 'Confirmación o acuerdo con algo previamente expresado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2FsaludosYCortesia%2Fsi.png?alt=media&token=57799be9-9686-4521-9337-d94cb1af32b2',
  idCategorie: 4
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Signo',
  description: 'Símbolo gráfico utilizado para representar algo específico, como en matemáticas o en la escritura.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2FsaludosYCortesia%2Fsigno.png?alt=media&token=57799be9-9686-4521-9337-d94cb1af32b2',
  idCategorie: 4
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);