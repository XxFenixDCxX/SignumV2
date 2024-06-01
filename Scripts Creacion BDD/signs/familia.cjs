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

var id = 62;

id++;

var data = {
  id: id,
  name: 'Familia',
  description: 'Grupo de personas relacionadas por lazos de parentesco.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/familia%2Ffamilia.png?alt=media&token=2f9981e4-0a50-48bb-a916-523b7c76be39',
  idCategorie: 5
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Abuelo',
  description: 'Término que designa al padre o madre de uno de los padres de una persona.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/familia%2Fabuelo.png?alt=media&token=2f9981e4-0a50-48bb-a916-523b7c76be39',
  idCategorie: 5
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Amigo',
  description: 'Persona con la que se tiene una relación de afecto, confianza y camaradería.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/familia%2Famigo.png?alt=media&token=2f9981e4-0a50-48bb-a916-523b7c76be39',
  idCategorie: 5
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Bebe',
  description: 'Término que designa a un niño o niña recién nacido o de corta edad.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/familia%2Fbebe.png?alt=media&token=2f9981e4-0a50-48bb-a916-523b7c76be39',
  idCategorie: 5
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Ciego',
  description: 'Persona que carece total o parcialmente del sentido de la vista.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/familia%2Fciego.png?alt=media&token=2f9981e4-0a50-48bb-a916-523b7c76be39',
  idCategorie: 5
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Hermano',
  description: 'Término que designa a un hombre que tiene los mismos padres que otra persona.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/familia%2Fhermano.png?alt=media&token=2f9981e4-0a50-48bb-a916-523b7c76be39',
  idCategorie: 5
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Mama',
  description: 'Término que designa a la madre de una persona.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/familia%2Fmama.png?alt=media&token=2f9981e4-0a50-48bb-a916-523b7c76be39',
  idCategorie: 5
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Niña',
  description: 'Término que designa a una joven de sexo femenino, generalmente menor de edad.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/familia%2Fnina.png?alt=media&token=2f9981e4-0a50-48bb-a916-523b7c76be39',
  idCategorie: 5
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Niño',
  description: 'Término que designa a un joven de sexo masculino, generalmente menor de edad.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/familia%2Fnino.png?alt=media&token=2f9981e4-0a50-48bb-a916-523b7c76be39',
  idCategorie: 5
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Papa',
  description: 'Término que designa al padre de una persona.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/familia%2Fpapa.png?alt=media&token=2f9981e4-0a50-48bb-a916-523b7c76be39',
  idCategorie: 5
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Persona',
  description: 'Individuo de la especie humana, con características físicas, emocionales e intelectuales.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/familia%2Fpersona.png?alt=media&token=2f9981e4-0a50-48bb-a916-523b7c76be39',
  idCategorie: 5
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Primo',
  description: 'Término que designa a un hijo o hija de los tíos de una persona.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/familia%2Fprimo.png?alt=media&token=2f9981e4-0a50-48bb-a916-523b7c76be39',
  idCategorie: 5
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Sordo',
  description: 'Persona que carece total o parcialmente del sentido del oído.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/familia%2Fsordo.png?alt=media&token=2f9981e4-0a50-48bb-a916-523b7c76be39',
  idCategorie: 5
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Sordociego',
  description: 'Persona que carece tanto del sentido de la vista como del sentido del oído.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/familia%2Fsordociego.png?alt=media&token=2f9981e4-0a50-48bb-a916-523b7c76be39',
  idCategorie: 5
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tio',
  description: 'Término que designa al hermano o hermana del padre o madre de una persona.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/familia%2Ftio.png?alt=media&token=2f9981e4-0a50-48bb-a916-523b7c76be39',
  idCategorie: 5
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);