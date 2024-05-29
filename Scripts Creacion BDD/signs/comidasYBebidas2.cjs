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

var id = 110;

id++;

var data = {
  id: id,
  name: 'Postre',
  description: 'Plato dulce que se sirve al final de una comida como broche de oro.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2Fpostres%2Fpostre.png?alt=media&token=afadaf76-d6f7-4e12-a159-08030ebacad1',
  idCategorie: 8
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Dulce',
  description: 'Alimento rico en azúcar, generalmente con sabor dulce y a menudo consumido como postre o golosina.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2Fpostres%2Fdulce.png?alt=media&token=afadaf76-d6f7-4e12-a159-08030ebacad1',
  idCategorie: 8
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Flan',
  description: 'Postre cremoso y suave hecho con huevos, leche y azúcar, a menudo cubierto con caramelo líquido.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2Fpostres%2Fflan.png?alt=media&token=afadaf76-d6f7-4e12-a159-08030ebacad1',
  idCategorie: 8
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Fresa',
  description: 'Fruta pequeña y roja, dulce y jugosa, ampliamente apreciada en la cocina y consumida fresca o en postres.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2Fpostres%2Ffresa.png?alt=media&token=afadaf76-d6f7-4e12-a159-08030ebacad1',
  idCategorie: 8
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Fruta',
  description: 'Producto natural comestible, generalmente jugoso y dulce, producido por plantas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2Fpostres%2Ffruta.png?alt=media&token=afadaf76-d6f7-4e12-a159-08030ebacad1',
  idCategorie: 8
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Helado',
  description: 'Postre congelado hecho de crema, leche, azúcar y otros ingredientes, disponible en una variedad de sabores.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2Fpostres%2Fhelado.png?alt=media&token=afadaf76-d6f7-4e12-a159-08030ebacad1',
  idCategorie: 8
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Manzana',
  description: 'Fruta de color rojo, verde o amarillo, con sabor dulce o ácido, apreciada por su frescura y versatilidad culinaria.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2Fpostres%2Fmanzana.png?alt=media&token=afadaf76-d6f7-4e12-a159-08030ebacad1',
  idCategorie: 8
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Naranja',
  description: 'Fruta cítrica de color naranja, jugosa y refrescante, rica en vitamina C y consumida fresca o en jugos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2Fpostres%2Fnaranja.png?alt=media&token=afadaf76-d6f7-4e12-a159-08030ebacad1',
  idCategorie: 8
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pera',
  description: 'Fruta de forma redondeada con un extremo más estrecho, de pulpa jugosa y dulce, apreciada por su sabor y textura.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2Fpostres%2Fpera.png?alt=media&token=afadaf76-d6f7-4e12-a159-08030ebacad1',
  idCategorie: 8
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Platano',
  description: 'Fruta alargada de cáscara amarilla, rica en potasio y con pulpa dulce y suave, consumida fresca o en postres.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2Fpostres%2Fplatano.png?alt=media&token=afadaf76-d6f7-4e12-a159-08030ebacad1',
  idCategorie: 8
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Sandia',
  description: 'Fruta grande y jugosa de pulpa roja o rosada, muy refrescante y perfecta para consumir en días calurosos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2Fpostres%2Fsandia.png?alt=media&token=afadaf76-d6f7-4e12-a159-08030ebacad1',
  idCategorie: 8
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tarta',
  description: 'Pastel dulce o salado, horneado en un molde y a menudo cubierto con crema, frutas o gelatina.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2Fpostres%2Ftarta.png?alt=media&token=afadaf76-d6f7-4e12-a159-08030ebacad1',
  idCategorie: 8
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Uva',
  description: 'Fruta pequeña y redonda, generalmente de color morado, verde o rojo, que crece en racimos y es comúnmente consumida fresca o para hacer vino.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2Fpostres%2Fuva.png?alt=media&token=afadaf76-d6f7-4e12-a159-08030ebacad1',
  idCategorie: 8
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Yougur',
  description: 'Producto lácteo fermentado, cremoso y espeso, a menudo consumido como postre o refrigerio.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2Fpostres%2Fyogur.png?alt=media&token=afadaf76-d6f7-4e12-a159-08030ebacad1',
  idCategorie: 8
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);