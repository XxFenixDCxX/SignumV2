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
  description: 'Adquirir bienes o servicios a cambio de dinero.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fcomprar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Conocer',
  description: 'Estar familiarizado o informado sobre algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fconocer.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Contar',
  description: 'Narrar o relatar información.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fcontar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Correr',
  description: 'Desplazarse a gran velocidad a pie.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fcorrer.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Cortar',
  description: 'Dividir o separar con un instrumento.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fcortar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Crecer (Planta)',
  description: 'Desarrollar la planta en tamaño o altura.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fcrecer-planta.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Crecer',
  description: 'Aumentar en tamaño, cantidad o importancia.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fcrecer.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Descansar',
  description: 'Reposar para recuperar energía.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fdescansar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Dormir',
  description: 'Estado de descanso y sueño.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fdormir.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Ducharse',
  description: 'Limpiarse con agua en la ducha.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fducharse.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Entender',
  description: 'Comprender o comprender algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fentender.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Escribir',
  description: 'Plasmar ideas con texto escrito.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fescribir.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Esperar',
  description: 'Aguardar con anticipación.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fesperar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Explicar',
  description: 'Clarificar o hacer comprensible algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fexplicar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Gritar',
  description: 'Emitir un sonido fuerte y agudo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fgritar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Gustar',
  description: 'Disfrutar o tener preferencia por algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fgustar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Hablar lengua de señas Española',
  description: 'Comunicar usando lenguaje gestual.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fhablar-lse.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Hablar oral',
  description: 'Comunicarse verbalmente.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fhablar-oral.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Jugar',
  description: 'Participar en actividades recreativas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fjugar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Lavar la cabeza',
  description: 'Limpiar el cabello con agua y champú.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Flavar-la-cabeza.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Lavar la ropa',
  description: 'Limpiar prendas con agua y detergente.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Flavar-la-ropa.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Lavar los dientes',
  description: 'Higienizar la dentadura con pasta dental.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Flavar-los-dientes.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Leer',
  description: 'Interpretar texto escrito.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fleer.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Llorar',
  description: 'Expresar emociones con lágrimas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fllorar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Montar',
  description: 'Estar sobre o cabalgar algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fmontar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Nacer',
  description: 'Iniciar la existencia o vida.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fnacer.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'No conocer',
  description: 'Estar sin conocimiento de algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fno-conocer.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'No gustar',
  description: 'No disfrutar o tener aversión por algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fno-gustar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'No tener',
  description: 'Carecer de algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fno-tener.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Oir',
  description: 'Percepción de sonidos mediante el oído.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Foir.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Oler',
  description: 'Detectar o percibir olores.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Foler.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pasear',
  description: 'Recorrer un lugar por placer.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fpasear.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Patinar',
  description: 'Desplazarse sobre superficie deslizante.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fpatinar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pegar',
  description: 'Unir dos cosas con adhesivo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fpegar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Peinarse',
  description: 'Arreglar el cabello con peine.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fpeinarse.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Ponerse',
  description: 'Colocar o vestir algo en el cuerpo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fponerse.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Quitarse',
  description: 'Remover o desprender algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fquitarse.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Regalar',
  description: 'Dar algo como muestra de afecto.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fregalar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Reir',
  description: 'Manifestar alegría con risa.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Freir.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Saborear',
  description: 'Disfrutar el sabor de algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fsaborear.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Saltar',
  description: 'Elevarse desde el suelo con impulso.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fsaltar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Sentarse',
  description: 'Descanso momentáneo en silla.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fsentarse.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tener',
  description: 'Poseer algo o experimentar.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Ftener.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Tocar',
  description: 'Contactar físicamente o ejecutar música.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Ftocar.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Vamos a',
  description: 'Avanzar juntos con entusiasmo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fvamos-a.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Ver',
  description: 'Percepción visual de algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fver.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Vestirse',
  description: 'Ponerse prendas de vestir.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fvestirse.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Vivir',
  description: 'Existir y experimentar la vida.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Fvivir.png?alt=media&token=b0812e30-2b95-411d-92bc-746b560e8b42',
  idCategorie: 39
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);