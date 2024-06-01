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

var id = 412;

id++;

var data = {
  id: id,
  name: 'Animal',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fanimal.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Abeja',
  description: 'Insecto polinizador, vital para el ecosistema.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fabeja.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Aguila',
  description: 'Ave majestuosa, símbolo de poder y libertad.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Faguila.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Ballena',
  description: 'Mamífero marino gigante, esencial en los océanos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fballena.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Burro',
  description: 'Animal doméstico resistente, usado para carga.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fburro.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Caballo',
  description: 'Elegante equino, compañero de trabajo y deporte.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fcaballo.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cabra',
  description: 'Animal doméstico ágil, productor de leche y carne.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fcabra.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Camello',
  description: 'Mamífero desértico, adaptado para transportar carga.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fcamello.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cerdo',
  description: 'Animal doméstico omnívoro, criado por su carne.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fcerdo.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cocodrilo',
  description: 'Reptil semiacuático, depredador en hábitats acuáticos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fcocodrilo.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Conejo',
  description: 'Pequeño mamífero herbívoro, ágil y prolífico.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fconejo.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Delfin',
  description: 'Cetáceo inteligente, ágil y social, habitante de océanos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fdelfin.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Elefante',
  description: 'Majestuoso mamífero terrestre, de gran tamaño y memoria.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Felefante.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Foca',
  description: 'Pinnípedo nadador, con aletas y pelaje denso.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Ffoca.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Gallina',
  description: 'Ave doméstica, ponedora de huevos y carne común.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fgallina.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Gato',
  description: 'Felino doméstico, independiente y cazador ágil.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fgato.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Granja',
  description: 'Terreno agrícola con animales y cultivos para producción.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fgranja.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Jirafa',
  description: 'Mamífero herbívoro de cuello largo, habitante de sabanas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fjirafa.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Leon',
  description: 'Gran felino carnívoro, líder en la sabana africana.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fleon.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Loro',
  description: 'Ave exótica, colorida y parlante, popular como mascota.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Floro.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Mariposa',
  description: 'Insecto volador, colorido y delicado, polinizador.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fmariposa.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Mono',
  description: 'Primate ágil, habitante de selvas y bosques tropicales.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fmono.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Oso',
  description: 'Mamífero carnívoro, grande y poderoso, habitante de bosques.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Foso.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Oveja',
  description: 'Animal doméstico lanudo, productor de lana y carne.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Foveja.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pajaro',
  description: 'Ave pequeña, voladora y ornamental, con diversidad de especies.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fpajaro.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pato',
  description: 'Ave acuática, nadadora y migratoria, de colores llamativos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fpato.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Perro',
  description: 'Canino doméstico, leal y diverso en razas y funciones.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fperro.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tiburon',
  description: 'Pez depredador, temido en los océanos por su ferocidad.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Ftiburon.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tigre',
  description: 'Gran felino rayado, depredador ágil y poderoso.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Ftigre.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Toro',
  description: 'Animal robusto, usado en trabajo agrícola y en corridas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Ftoro.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tortuga',
  description: 'Reptil acuático o terrestre, con caparazón protector.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Ftoro.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Vaca',
  description: 'Animal herbívoro, productor de leche y carne, común en granjas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Ftoro.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Zoo',
  description: 'Recinto exhibidor de animales, popular para entretenimiento y educación.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Ftoro.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);