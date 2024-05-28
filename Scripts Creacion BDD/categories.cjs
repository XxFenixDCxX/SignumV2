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

var collectionRef = collection(db, 'categories');

var id = 1;

var data = {
  id: id,
  name: 'Dactilología',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/dactologia%2Flogo.png?alt=media&token=2432d2cf-ea78-4c02-96da-1b4e1604f958',
  hasSubcategories: false,
  isSubCategory: false
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 2;

var data = {
  id: id,
  name: 'Saludos y preguntas',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2Flogo.png?alt=media&token=0611156b-df5d-4e61-ace6-8c96c01930fc',
  hasSubcategories: true,
  isSubCategory: false
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 3;

var data = {
  id: id,
  name: 'Preguntas',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2Fpreguntas%2Flogo.png?alt=media&token=0c69ff54-55ba-48ad-8116-e601fcf99709',
  isSubCategory: true,
  categoriDadId: 2
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 4;

var data = {
  id: id,
  name: 'Saludos y cortesía',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/saludosYPreguntas%2FsaludosYCortesia%2Flogo.png?alt=media&token=67dbb07d-9aa7-4181-b096-39f88ac199db',
  isSubCategory: true,
  categoriDadId: 2
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 5;

var data = {
  id: id,
  name: 'Familia',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/familia%2Flogo.png?alt=media&token=523aeb69-a636-42fc-99b9-754ade7a39ab',
  hasSubcategories: false,
  isSubCategory: false
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 6;

var data = {
  id: id,
  name: 'Comidas y bebidas',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2Flogo.png?alt=media&token=ee3490fd-e297-4890-bf9f-12446ccfef61',
  hasSubcategories: true,
  isSubCategory: false
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 7;

var data = {
  id: id,
  name: 'Comidas y bebidas',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2Flogo.png?alt=media&token=ee3490fd-e297-4890-bf9f-12446ccfef61',
  isSubCategory: true,
  categoriDadId: 6
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 8;

var data = {
  id: id,
  name: 'Postres',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/comidasYBebidas%2Fpostres%2Flogo.png?alt=media&token=6f95e605-753a-408b-b8bc-2fe40f62242c',
  isSubCategory: true,
  categoriDadId: 6
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 9;

var data = {
  id: id,
  name: 'Ropa',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ropa%2Flogo.png?alt=media&token=9f5839aa-517e-46ef-9294-64f6aa817549',
  hasSubcategories: false,
  isSubCategory: false
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 10;

var data = {
  id: id,
  name: 'Cuerpo',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Flogo.png?alt=media&token=306d8905-9e46-48f7-9c00-9fc07dd3d6a5',
  hasSubcategories: true,
  isSubCategory: false
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 11;

var data = {
  id: id,
  name: 'Cuerpo',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Flogo.png?alt=media&token=306d8905-9e46-48f7-9c00-9fc07dd3d6a5',
  isSubCategory: true,
  categoriDadId: 10
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 12;

var data = {
  id: id,
  name: 'Sentidos',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/cuerpo%2Fsentidos%2Flogo.png?alt=media&token=45f07d88-6478-4ba9-bb95-159d332b5f5f',
  isSubCategory: true,
  categoriDadId: 10
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 13;

var data = {
  id: id,
  name: 'Casa',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Flogo.png?alt=media&token=f5449fc8-a991-4d7a-a8da-4de849c159a7',
  hasSubcategories: true,
  isSubCategory: false
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 14;

var data = {
  id: id,
  name: 'Casa',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2Flogo.png?alt=media&token=f5449fc8-a991-4d7a-a8da-4de849c159a7',
  isSubCategory: true,
  categoriDadId: 13
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 15;

var data = {
  id: id,
  name: 'Objetos del baño',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDelBano%2Flogo.png?alt=media&token=66ec1e0c-da40-4f21-b833-33c70f3b84cf',
  isSubCategory: true,
  categoriDadId: 13
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 16;

var data = {
  id: id,
  name: 'Objetos de la cocina',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/casa%2FobjectosDeLaCocina%2Flogo.png?alt=media&token=58464d5e-88eb-48d6-8ccc-a4027ff51fba',
  isSubCategory: true,
  categoriDadId: 13
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 17;

var data = {
  id: id,
  name: 'Colegio',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Flogo.png?alt=media&token=5615e35d-f065-4544-931a-106c54df92e7',
  hasSubcategories: true,
  isSubCategory: false
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 18;

var data = {
  id: id,
  name: 'Colegio',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Flogo.png?alt=media&token=5615e35d-f065-4544-931a-106c54df92e7',
  isSubCategory: true,
  categoriDadId: 17
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 19;

var data = {
  id: id,
  name: 'Colores',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2Fcolores%2Flogo.png?alt=media&token=3d189e4e-c45c-4c98-ba0d-a8ba4b03e359',
  isSubCategory: true,
  categoriDadId: 17
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 20;

var data = {
  id: id,
  name: 'Cosas del colegio',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FcosasDelColegio%2Flogo.png?alt=media&token=7aa1966b-435e-41de-a17c-52c6e568fbc3',
  isSubCategory: true,
  categoriDadId: 17
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 21;

var data = {
  id: id,
  name: 'Formas y tamaños',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/colegio%2FformasYTama%C3%B1os%2Flogo.png?alt=media&token=4eb1a236-f16e-47de-a2f5-4caa212f20d2',
  isSubCategory: true,
  categoriDadId: 17
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 22;

var data = {
  id: id,
  name: 'Ciudad',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Flogo.png?alt=media&token=6581f123-a636-441b-84a5-33f0701a4ca1',
  hasSubcategories: true,
  isSubCategory: false
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 23;

var data = {
  id: id,
  name: 'Ciudad',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Flogo.png?alt=media&token=6581f123-a636-441b-84a5-33f0701a4ca1',
  isSubCategory: true,
  categoriDadId: 22
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 24;

var data = {
  id: id,
  name: 'Medios de transporte',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2FmediosDeTransporte%2Flogo.png?alt=media&token=0624f636-82e9-49c4-a18d-2dcfb38ecd51',
  isSubCategory: true,
  categoriDadId: 22
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 25;

var data = {
  id: id,
  name: 'Profesiones',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/ciudad%2Fprofesiones%2Flogo.png?alt=media&token=1c6434df-b2bb-4d4a-a14b-a6c0c9821583',
  isSubCategory: true,
  categoriDadId: 22
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 26;

var data = {
  id: id,
  name: 'Calendario',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Flogo.png?alt=media&token=4c7f4a05-ea0a-48b4-a5c3-6787e99edfee',
  hasSubcategories: true,
  isSubCategory: false
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 27;

var data = {
  id: id,
  name: 'Meses del año',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FmesDelAno%2Flogo.png?alt=media&token=6c03b807-9a28-49e8-8112-a8eeb968a32c',
  isSubCategory: true,
  categoriDadId: 26
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 28;

var data = {
  id: id,
  name: 'Días de la semana',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2FdiasDeLaSemana%2Flogo.png?alt=media&token=60d4dc90-b0f2-4ac8-8433-0bc5d9625b36',
  isSubCategory: true,
  categoriDadId: 26
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 29;

var data = {
  id: id,
  name: 'Estaciones',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Festaciones%2Flogo.png?alt=media&token=a700c12a-a1eb-494d-90a6-614e9c842987',
  isSubCategory: true,
  categoriDadId: 26
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 30;

var data = {
  id: id,
  name: 'Tiempo',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ftiempo%2Flogo.png?alt=media&token=a2cec558-f076-466b-97c0-ad5584f20409',
  isSubCategory: true,
  categoriDadId: 26
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 31;

var data = {
  id: id,
  name: 'Fiestas',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/calendario%2Ffiestas%2Flogo.png?alt=media&token=54df966b-f20c-487d-a61f-0e139702fde3',
  isSubCategory: true,
  categoriDadId: 26
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 32;

var data = {
  id: id,
  name: 'Naturaleza',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Flogo.png?alt=media&token=9939c6f6-cc81-4252-97a7-787f23d34ee2',
  hasSubcategories: true,
  isSubCategory: false
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 33;

var data = {
  id: id,
  name: 'Naturaleza',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Flogo.png?alt=media&token=9939c6f6-cc81-4252-97a7-787f23d34ee2',
  isSubCategory: true,
  categoriDadId: 32
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 34;

var data = {
  id: id,
  name: 'Tiempo atmosférico',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2FtiempoAtmosferico%2Flogo.png?alt=media&token=6bf3ffe1-6dec-4a9a-aa52-669e1ab97436',
  isSubCategory: true,
  categoriDadId: 32
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 35;

var data = {
  id: id,
  name: 'Animales',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/naturaleza%2Fanimales%2Flogo.png?alt=media&token=5ea46229-9160-4410-b06a-304b2aa638cf',
  isSubCategory: true,
  categoriDadId: 32
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 36;

var data = {
  id: id,
  name: 'Adjetivos, adverbios y verbos',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2Flogo.png?alt=media&token=c83467fc-63b1-4332-8dd2-8d9345230b1e',
  hasSubcategories: true,
  isSubCategory: false
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 37;

var data = {
  id: id,
  name: 'Adjetivos',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdjetivos%2Flogo.png?alt=media&token=6616dec3-f9ec-4a3a-9d71-575f0ec0bc23',
  isSubCategory: true,
  categoriDadId: 36
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 38;

var data = {
  id: id,
  name: 'Adverbios',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FAdverbios%2Flogo.png?alt=media&token=255fe861-2aee-4cd4-97e1-72586973bdc5',
  isSubCategory: true,
  categoriDadId: 36
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);

var id = 39;

var data = {
  id: id,
  name: 'Verbos',
  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/signumv2.appspot.com/o/adjetivosAdverbiosYVerbos%2FVerbos%2Flogo.png?alt=media&token=6a31252c-c248-4d09-9fb1-e1f45e666ba8',
  isSubCategory: true,
  categoriDadId: 36
};

var documentRef = doc(collectionRef, id.toString());

setDoc(documentRef, data);