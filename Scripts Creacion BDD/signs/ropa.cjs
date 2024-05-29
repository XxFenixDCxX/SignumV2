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

var id = 124;

id++;

var data = {
  id: id,
  name: 'Ropa',
  description: 'Prendas textiles utilizadas para vestirse y proteger el cuerpo humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Fropa.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 9
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Abrigo',
  description: 'Prenda de vestir exterior, generalmente larga y con mangas, utilizada para protegerse del frío.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Fabrigo.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 9
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Babi',
  description: 'Prenda de vestir cómoda y suelta, a menudo usada por niños pequeños para proteger la ropa mientras juegan o comen.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Fbabi.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 9
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Bañador Chica',
  description: 'Prenda de vestir diseñada para mujeres, usada para nadar o tomar el sol, comúnmente compuesta por un sujetador y una parte inferior.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Fbanador-chica.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 9
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Bañador Chico',
  description: 'Prenda de vestir diseñada para hombres, usada para nadar o tomar el sol, comúnmente compuesta por pantalones cortos ajustados.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Fbanador-chico.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 9
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Braga',
  description: 'Prenda de ropa interior femenina que cubre la zona pélvica y las nalgas, comúnmente usada debajo de faldas o vestidos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Fbraga.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 9
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Bufanda',
  description: 'Accesorio de invierno, abriga cuello.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Fbufanda.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 9
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Calzoncillo',
  description: 'Ropa interior masculina, cubre parte inferior.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Fcalzoncillo.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 9
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Camiseta',
  description: 'Prenda básica, cubre torso.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Fcamiseta.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 9
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Chandal',
  description: 'Conjunto deportivo, cómodo y casual.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Fchandal.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 9
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Disfraz',
  description: 'Atuendo temático, transforma apariencia.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Fdisfraz.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 9
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Gafas',
  description: 'Accesorio óptico, mejora visión.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Fgafas.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 9
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Gorra',
  description: 'Accesorio de cabeza, protege del sol.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Fgorra.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 9
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Jersey',
  description: 'Prenda de abrigo, cubre torso.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Fjersey.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 9
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Mochila',
  description: 'Bolsa para llevar objetos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Fmochila.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 9
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pantalon',
  description: 'Prenda inferior, cubre piernas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Fpantalon.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 9
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pijama',
  description: 'Atuendo de dormir, cómodo y relajado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Fpijama.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 9
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Reloj',
  description: 'Accesorio de muñeca, indica tiempo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Freloj.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 9
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Zapatilla',
  description: 'Calzado deportivo, para pies.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Fzapatilla.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 9
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Zapato',
  description: 'Calzado formal, cubre pies.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Fzapato.png?alt=media&token=e010e69a-7e72-4d5f-860b-70c41083ab06',
  idCategorie: 9
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);