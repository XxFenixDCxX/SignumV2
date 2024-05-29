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

var id = 223;

id++;

var data = {
  id: id,
  name: 'Colegio',
  description: 'Espacio educativo, formación integral, interacción social, aprendizaje.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolegio%2Fcolegio.png?alt=media&token=d8d5f683-06b1-41bc-bfe6-4264bdc55c1c',
  idCategorie: 18
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Abecedario',
  description: 'Fundamental, base del lenguaje, orden de letras.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolegio%2Fabecedario.png?alt=media&token=d8d5f683-06b1-41bc-bfe6-4264bdc55c1c',
  idCategorie: 18
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Alumno',
  description: 'Estudiante, aprendiz, protagonista del proceso educativo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolegio%2Falumno.png?alt=media&token=d8d5f683-06b1-41bc-bfe6-4264bdc55c1c',
  idCategorie: 18
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Clase',
  description: 'Grupo de estudiantes, enseñanza en aula, interacción educativa.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolegio%2Fclase.png?alt=media&token=d8d5f683-06b1-41bc-bfe6-4264bdc55c1c',
  idCategorie: 18
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Dibujo',
  description: 'Expresión visual, arte plasmado, creatividad representada.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolegio%2Fdibujo.png?alt=media&token=d8d5f683-06b1-41bc-bfe6-4264bdc55c1c',
  idCategorie: 18
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Diferencia',
  description: 'Discrepancia, variación entre cosas, contraste, singularidad.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolegio%2Fdiferencia.png?alt=media&token=d8d5f683-06b1-41bc-bfe6-4264bdc55c1c',
  idCategorie: 18
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Gramo',
  description: 'Unidad de medida de masa, fracción de kilogramo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolegio%2Fgramo.png?alt=media&token=d8d5f683-06b1-41bc-bfe6-4264bdc55c1c',
  idCategorie: 18
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Litro',
  description: 'Unidad de volumen, medida líquidos, equivalente a 1,000 mililitros.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolegio%2Flitro.png?alt=media&token=d8d5f683-06b1-41bc-bfe6-4264bdc55c1c',
  idCategorie: 18
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Lenguaje de signos española',
  description: 'Comunicación gestual, accesibilidad para sordos, expresión visual.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolegio%2Flsa.png?alt=media&token=d8d5f683-06b1-41bc-bfe6-4264bdc55c1c',
  idCategorie: 18
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Medida',
  description: 'Evaluación de magnitud, cuantificación de atributos, cantidad determinada.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolegio%2Fmedida.png?alt=media&token=d8d5f683-06b1-41bc-bfe6-4264bdc55c1c',
  idCategorie: 18
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Metro',
  description: 'Unidad de longitud, medida estándar, equivalente a 100 centímetros.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolegio%2Fmetro.png?alt=media&token=d8d5f683-06b1-41bc-bfe6-4264bdc55c1c',
  idCategorie: 18
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Multiplicacion',
  description: 'Operación matemática, combinación de sumandos, producto de factores.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolegio%2Fmultiplicacion.png?alt=media&token=d8d5f683-06b1-41bc-bfe6-4264bdc55c1c',
  idCategorie: 18
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Numero',
  description: 'Entero, valor cuantitativo, representación de cantidad.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolegio%2Fnumero.png?alt=media&token=d8d5f683-06b1-41bc-bfe6-4264bdc55c1c',
  idCategorie: 18
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Palabra',
  description: 'Elemento lingüístico, unidad de comunicación, significante de ideas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolegio%2Fpalabra.png?alt=media&token=d8d5f683-06b1-41bc-bfe6-4264bdc55c1c',
  idCategorie: 18
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Resta',
  description: 'Operación matemática, diferencia entre números, substracción de cantidades.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolegio%2Fresta.png?alt=media&token=d8d5f683-06b1-41bc-bfe6-4264bdc55c1c',
  idCategorie: 18
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Servicio',
  description: 'Función ofrecida, atención o ayuda proporcionada, satisfacción de necesidades.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolegio%2Fservicio.png?alt=media&token=d8d5f683-06b1-41bc-bfe6-4264bdc55c1c',
  idCategorie: 18
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Suma',
  description: 'Operación matemática, adición de cantidades, resultado combinado.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolegio%2Fsuma.png?alt=media&token=d8d5f683-06b1-41bc-bfe6-4264bdc55c1c',
  idCategorie: 18
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);