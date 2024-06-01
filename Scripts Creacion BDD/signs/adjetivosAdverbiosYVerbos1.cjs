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

var id = 439;

id++;

var data = {
  id: id,
  name: 'Adjetivos',
  description: 'Especifican cualidades.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fadjetivos.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Aburrido',
  description: 'Explorando nuevas actividades para animarme.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Faburrido.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Acido',
  description: 'Producto químico corrosivo usado en varias aplicaciones.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Facido.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Agradable',
  description: 'Ambiente acogedor y amistoso para relajarse.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fagradable.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Alegre',
  description: 'Brillante y lleno de energía positiva.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Falegre.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Alto',
  description: 'Nivel elevado o distancia vertical significativa.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Falto.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Amargo',
  description: 'Sabor desagradable, opuesto a dulce.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Famargo.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Bajo',
  description: 'Nivel o altura cercana al suelo o inferior.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fbajo.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Blando',
  description: 'Textura suave y maleable al tacto.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fblando.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Bueno',
  description: 'Calidad positiva o aceptable.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fbueno.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Caliente',
  description: 'Elevada temperatura, ardiente al tacto.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fcaliente.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Castaño',
  description: 'Color café oscuro, similar al color de la madera.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fcastano.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Claro',
  description: 'Obvio o transparente, fácil de entender o ver.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fclaro.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Contento',
  description: 'Estado de felicidad o satisfacción.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fcontento.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Delgado',
  description: 'Físico esbelto o de poca anchura.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fdelgado.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Desagradable',
  description: 'Sensación o experiencia negativa o repulsiva.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fdesagradable.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Diferente',
  description: 'Único o variado, distinto de lo común.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fdiferente.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Divertido',
  description: 'Entretenido o agradable, que provoca risas y alegría.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fdivertido.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Dulce',
  description: 'Sabor agradablemente azucarado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fdulce.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Duro',
  description: 'Resistente o difícil de romper o penetrar.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fduro.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Enfadado',
  description: 'Irritado o molesto, con emociones negativas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fenfadado.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Enfermo',
  description: 'Con malestar físico o enfermedad.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fenfermo.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Feo',
  description: 'Poco atractivo o desagradable a la vista.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Ffeo.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Frio',
  description: 'Baja temperatura, sensación de frescura intensa.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Ffrio.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Gordo',
  description: 'Persona con sobrepeso o volumen corporal notable.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fgordo.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Guapo',
  description: 'Atractivo físicamente, con buen aspecto.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fguapo.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Igual',
  description: 'Lo mismo, idéntico o similar.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Figual.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Lento',
  description: 'Velocidad reducida o movimiento pausado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Flento.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Limpio',
  description: 'Libre de suciedad o impurezas, impecable.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Flimpio.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Lleno',
  description: 'Contenido completo, sin espacio vacío.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Flleno.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Malo',
  description: 'De baja calidad o poco favorable.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fmalo.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Moreno',
  description: 'Color de piel más oscuro, generalmente asociado con tonos de marrón.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fmoreno.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Mucho',
  description: 'Gran cantidad o abundancia.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fmucho.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Oscuro',
  description: 'Ausencia de luz, tono más profundo en color.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Foscuro.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Pelirrojo',
  description: 'Persona con cabello rojizo o anaranjado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fpelirrojo.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Poco',
  description: 'Cantidad limitada o escasa.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fpoco.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Primer',
  description: 'El primero en orden o secuencia.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fprimer.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Rapido',
  description: 'Veloz, de rápida velocidad o acción.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Frapido.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Rubio',
  description: 'Color de cabello claro, generalmente asociado con tonos dorados o amarillos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Frubio.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Salado',
  description: 'Con sabor salado, contenido de sal.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fsalado.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Sano',
  description: 'Estado de buena salud física y mental.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fsano.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Sucio',
  description: 'Con presencia de suciedad o manchas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fsucio.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Templado',
  description: 'De temperatura moderada, neither too hot nor too cold.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Ftemplado.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Triste',
  description: 'Sentimiento de melancolía o pesar.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Ftriste.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Ultimo',
  description: 'El último en orden o secuencia.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fultimo.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Vacio',
  description: 'Sin contenido o ocupación, ausencia de algo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Fvacio.png?alt=media&token=d2fb53c1-cc1b-4ffd-97a3-b467c33b93e1',
  idCategorie: 37
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);