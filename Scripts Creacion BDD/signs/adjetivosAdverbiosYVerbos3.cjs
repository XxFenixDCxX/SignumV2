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

var id = 500;

id++;

var data = {
  id: id,
  name: 'Verbo',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fverbo.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Abrazar',
  description: 'Demostración de afecto físico.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fabrazar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Amar',
  description: 'Sentimiento profundo de afecto.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Famar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Andar',
  description: 'Moverse a pie o en vehículo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fandar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Aprender',
  description: 'Adquirir conocimiento o habilidad.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Faprender.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Ayudar',
  description: 'Brindar asistencia o apoyo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fayudar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Beber',
  description: 'Ingerir líquidos por la boca.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fbeber.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Besar',
  description: 'Contacto de labios en muestra de afecto.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fbesar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Comer',
  description: 'Ingerir alimentos para nutrirse.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fcomer.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Comprar',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fcomprar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Conocer',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fconocer.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Contar',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fcontar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Correr',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fcorrer.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cortar',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fcortar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Crecer (Planta)',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fcrecer-planta.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Crecer',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fcrecer.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Descansar',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fdescansar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Dormir',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fdormir.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Ducharse',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fducharse.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Entender',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fentender.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Escribir',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fescribir.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Esperar',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fesperar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Explicar',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fexplicar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Gritar',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fgritar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Gustar',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fgustar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Hablar lengua de señas Española',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fhablar-lse.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Hablar oral',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fhablar-oral.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Jugar',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fjugar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Lavar la cabeza',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Flavar-la-cabeza.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Lavar la ropa',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Flavar-la-ropa.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Lavar los dientes',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Flavar-los-dientes.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Leer',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fleer.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Llorar',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fllorar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Montar',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fmontar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Nacer',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fnacer.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'No conocer',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fno-conocer.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'No gustar',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fno-gustar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'No tener',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fno-tener.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Oir',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Foir.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Oler',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Foler.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pasear',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fpasear.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Patinar',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fpatinar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pegar',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fpegar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Peinarse',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fpeinarse.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Ponerse',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fponerse.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Quitarse',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fquitarse.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Regalar',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fregalar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Reir',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Freir.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Saborear',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fsaborear.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Saltar',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fsaltar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Sentarse',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fsentarse.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tener',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Ftener.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tocar',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Ftocar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Vamos a',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fvamos-a.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Ver',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fver.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Vestirse',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fvestirse.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Vivir',
  description: 'Expresión de acción o estado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fvivir.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);