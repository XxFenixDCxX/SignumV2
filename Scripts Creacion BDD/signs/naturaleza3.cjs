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
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fabeja.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Aguila',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Faguila.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Ballena',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fballena.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Burro',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fburro.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Caballo',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fcaballo.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cabra',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fcabra.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Camello',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fcamello.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cerdo',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fcerdo.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cocodrilo',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fcocodrilo.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Conejo',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fconejo.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Delfin',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fdelfin.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Elefante',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Felefante.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Foca',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Ffoca.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Gallina',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fgallina.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Gato',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fgato.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Granja',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fgranja.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Jirafa',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fjirafa.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Leon',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fleon.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Loro',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Floro.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Mariposa',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fmariposa.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Mono',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fmono.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Oso',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Foso.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Oveja',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Foveja.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pajaro',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fpajaro.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pato',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fpato.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Perro',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Fperro.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tiburon',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Ftiburon.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tigre',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Ftigre.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Toro',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Ftoro.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tortuga',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Ftoro.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Vaca',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Ftoro.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Zoo',
  description: 'Creatura de la naturaleza; ser vivo no humano.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Ftoro.png?alt=media&token=f7cf6506-5994-430f-8a0d-b695ae6b771e',
  idCategorie: 35
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);