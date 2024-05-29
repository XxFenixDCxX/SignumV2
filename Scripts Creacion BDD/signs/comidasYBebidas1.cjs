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

var id = 77;

id++;

var data = {
  id: id,
  name: 'Comida',
  description: 'Alimento consumido para satisfacer las necesidades nutricionales del cuerpo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fcomida.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Bebida',
  description: 'Líquido consumido para satisfacer la sed o para el disfrute, como agua, jugo o refresco.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fbebida.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Aceite',
  description: 'Líquido graso derivado de plantas o animales, utilizado para cocinar o como ingrediente en diversas recetas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Faceite.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Agua',
  description: 'Líquido incoloro, insípido e inodoro esencial para la vida y la supervivencia de los seres vivos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fagua.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Alimento',
  description: 'Sustancia sólida o líquida que se ingiere para mantener la vida y el crecimiento del organismo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Falimento.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Arroz',
  description: 'Grano alimenticio básico, fuente de carbohidratos, ampliamente consumido en diversas culturas culinarias.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Farroz.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Azucar',
  description: 'Sustancia dulce utilizada para endulzar alimentos y bebidas, extraída principalmente de la caña de azúcar o de la remolacha.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fazucar.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Bocadillo',
  description: 'Pequeña porción de comida generalmente consumida entre comidas principales.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fbocadillo.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Caramelo',
  description: 'Dulce hecho de azúcar, generalmente de consistencia dura o blanda, a menudo aromatizado o coloreado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fcaramelo.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Carne',
  description: 'Tejido muscular de animales, utilizado como alimento en la dieta humana.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fcarne.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cebolla',
  description: 'Vegetal de sabor fuerte y aroma característico, utilizado como condimento en diversas preparaciones culinarias.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fcebolla.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cena',
  description: 'Comida ligera, generalmente consumida al final del día como última comida principal.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fcena.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Chocolate',
  description: 'Delicioso dulce derivado del cacao, apreciado por su sabor rico y cremoso.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fchocolate.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Desayuno',
  description: 'Primera comida del día, generalmente consumida por la mañana.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fdesayuno.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Galleta',
  description: 'Pequeño dulce horneado, crujiente y delicioso, a menudo acompañante perfecto para el café o el té.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fgalleta.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Hambre',
  description: 'Sensación fisiológica de necesidad de alimento, indicando la necesidad de comer.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fhambre.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Huevo',
  description: 'Alimento versátil de forma ovalada, que contiene proteínas y se puede cocinar de diversas formas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fhuevo.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Leche',
  description: 'Líquido nutritivo producido por las glándulas mamarias de los mamíferos, utilizado como alimento y bebida.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fleche.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Lechuga',
  description: 'Vegetal de hojas verdes, crujientes y de sabor suave, comúnmente utilizadas en ensaladas y sándwiches.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Flechuga.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Limon',
  description: 'Fruta cítrica de sabor ácido y aroma fresco, utilizada en la cocina para dar sabor y como adorno.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Flimon.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Merienda',
  description: 'Pequeña comida ligera generalmente consumida entre el almuerzo y la cena.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fmerienda.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pan',
  description: 'Alimento básico hecho de harina, agua y levadura, horneado para producir un producto de masa esponjosa.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fpan.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Patata',
  description: 'Tubérculo comestible de planta herbácea, ampliamente utilizado en la cocina para preparar una variedad de platos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fpatata-dibujo.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pescado',
  description: 'Animal acuático comestible, rico en proteínas y ácidos grasos omega-3, consumido en muchas culturas culinarias.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fpescado.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pollo',
  description: 'Ave de corral comúnmente consumida en la dieta humana, conocida por su carne blanca y magra.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fpollo.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pure',
  description: 'Preparación culinaria hecha de ingredientes cocidos y triturados, generalmente suave y cremosa en textura.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fpure.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Queso',
  description: 'Producto lácteo sólido obtenido mediante la coagulación de la leche, utilizado en la cocina y como aperitivo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fqueso.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Sal',
  description: 'Sustancia cristalina utilizada para sazonar y preservar alimentos, esencial para la vida.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fsal.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Sed',
  description: 'Sensación de sequedad en la boca y garganta que indica la necesidad de beber líquidos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fsed.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Sopa',
  description: 'Plato líquido o semilíquido que consiste en caldo y diversos ingredientes, a menudo verduras y carne, cocidos juntos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fsopa.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tomate',
  description: 'Fruto comestible de la planta Solanum lycopersicum, utilizado en la cocina en una variedad de platos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Ftomate.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Zanahoria',
  description: 'Raíz comestible de color anaranjado y sabor dulce, rica en betacaroteno y utilizada en diversas recetas culinarias.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fzanahoria.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Zumo',
  description: 'Bebida obtenida al exprimir o licuar frutas o vegetales frescos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2FcomidasYBebidas%2Fzumo.png?alt=media&token=b6b861ae-9ce8-4924-9598-8979a08282f0',
  idCategorie: 7
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);