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

var id = 0;

id++;

var data = {
  id: id,
  name: 'Dactilología',
  description: 'Sistema de comunicación mediante el uso de las manos y los dedos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fdactilologia.png?alt=media&token=0736b7b2-0f1d-46af-bce6-52b8c78e107c',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'A',
  description: 'Primera letra del alfabeto, vocal y símbolo de excelencia.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fa.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'B',
  description: 'Segunda letra del alfabeto, usada en música para la nota Si en inglés.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fb.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'C',
  description: 'Tercera letra del alfabeto, connotaciones de velocidad y eficiencia.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fc.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'CH',
  description: 'Combinación de letras, puede representar el sonido fuerte en español.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fch.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'D',
  description: 'Cuarta letra del alfabeto, utilizada en matemáticas para representar una variable.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fd.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'E',
  description: 'Quinta letra del alfabeto, vocal común y símbolo de energía y vitalidad.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fe.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'F',
  description: 'Sexta letra del alfabeto, a menudo asociada con la calificación escolar.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Ff.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'G',
  description: 'Séptima letra del alfabeto, a menudo asociada con la gravedad y la aceleración.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fg.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'H',
  description: 'Octava letra del alfabeto, vocal y símbolo de altura en inglés musical.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fh.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'I',
  description: 'Novena letra del alfabeto, vocal corta y común en varios idiomas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fi.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'J',
  description: 'Décima letra del alfabeto, asociada con la fuerza y el valor en español.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fj.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'K',
  description: 'Undécima letra del alfabeto, con connotaciones de velocidad en abreviaturas.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fk.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'L',
  description: 'Duodécima letra del alfabeto, símbolo de longitud y dirección en geometría.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fl.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'LL',
  description: 'Combinación de letras que representa un sonido consonante en español.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fll.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'M',
  description: 'Décimotercera letra del alfabeto, símbolo de masa en física.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fm.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Ñ',
  description: 'Carácter especial del alfabeto español, vocal nasalizada.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fn-fuerte.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'O',
  description: 'Decimoquinta letra del alfabeto, vocal redonda y abierta.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fo.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'P',
  description: 'Decimosexta letra del alfabeto, símbolo de potencia y presión.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fp.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Q',
  description: 'Decimoséptima letra del alfabeto, rara en español y común en inglés.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fq.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'R',
  description: 'Decimoctava letra del alfabeto, sonido vibrante y fuerte en español.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fr.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'RR',
  description: 'Consonante doble en español, representa un sonido vibrante múltiple.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Frr.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'S',
  description: 'Decimonovena letra del alfabeto, usada para representar pluralidad.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fs.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'T',
  description: 'Vigésima letra del alfabeto, utilizada para simbolizar tiempo.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Ft.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'U',
  description: 'Vigésimo primera letra del alfabeto, vocal cerrada y redondeada.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fu.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'V',
  description: 'Vigésima segunda letra del alfabeto, símbolo de velocidad en física.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fv.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'W',
  description: 'Vigésima tercera letra del alfabeto, usada en inglés y en acrónimos.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fw.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'X',
  description: 'Vigésima cuarta letra del alfabeto, símbolo de incógnita y multiplicación.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fx.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Y',
  description: 'Vigésima quinta letra del alfabeto, a menudo asociada con la unión y la continuidad.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fy.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

id++;

var data = {
  id: id,
  name: 'Z',
  description: 'Vigésima sexta letra del alfabeto, comúnmente asociada con el final y el sueño.',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Fz.png?alt=media&token=c74d4907-0d87-46da-925c-5c705de96fc3',
  idCategorie: 1
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);