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

var id = 167;

id++;

var data = {
  id: id,
  name: 'Casa',
  description: 'Residencia, hogar habitable.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fcasa.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Alfombra',
  description: 'Tapete de suelo, cubre superficie.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Falfombra.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Armario',
  description: 'Mueble de almacenaje, guarda prendas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Farmario.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Baño',
  description: 'Espacio sanitario, higiene personal.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fbano.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cama',
  description: 'Mobiliario para dormir, descansar.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fcama.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cocina',
  description: 'Área culinaria, prepara alimentos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fcocina.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cristal',
  description: 'Material transparente, sólido y frágil.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fcristal.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Despertador',
  description: 'Dispositivo temporal, avisa para levantarse.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fdespertador.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Dormitorio',
  description: 'Habitación para dormir, descansar.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fdormitorio.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Fax',
  description: 'Máquina de fax, envía documentos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Ffax.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Lampara',
  description: 'Fuente de luz, ilumina espacios.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Flampara.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Maceta',
  description: 'Recipiente para plantas, decora ambientes.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fmaceta.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Manta',
  description: 'Cobertor de tela, abriga en frío.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fmanta.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Maquina',
  description: 'Dispositivo mecánico, realiza funciones específicas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fmaquina.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Mesa',
  description: 'Superficie plana, soporta objetos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fmesa.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Mesilla',
  description: 'Mueble pequeño, al lado cama.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fmesilla.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Mueble',
  description: 'Mobiliario, para guardar objetos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fmueble.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Muñeco',
  description: 'Juguete antropomorfo, imita humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fmuneco.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Objeto',
  description: 'Elemento físico, material.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fobjeto.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Ordenador',
  description: 'Dispositivo electrónico, procesa información.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fordenador.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pelota',
  description: 'Objeto esférico, usado en juegos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fpelota.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Plancha',
  description: 'Electrodoméstico, alisa prendas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fplancha.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Puerta',
  description: 'Entrada y salida, cerramiento arquitectónico.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fpuerta.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Sabana',
  description: 'Cubre cama.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fsabana.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Silla',
  description: 'Asiento con respaldo, para sentarse.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fsilla.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Sofa',
  description: 'Mueble de descanso, cómodo asiento.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fsofa.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Telefono',
  description: 'Dispositivo de comunicación, llamadas telefónicas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Ftelefono.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Televisor',
  description: 'Dispositivo de entretenimiento, muestra imágenes.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Ftelevisor.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Ventana',
  description: 'Abertura en pared, permite luz.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fventana.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Video',
  description: 'Contenido audiovisual, visualización digital.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Fcasa%2Fvideo.png?alt=media&token=ff87a2e5-b064-413b-a693-4a5a8d38171d',
  idCategorie: 14
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);