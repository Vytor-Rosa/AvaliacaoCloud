const { initializeApp } = require("firebase/app");
const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    where,
    getDoc,
    deleteDoc,
    getDocs } = require("firebase/firestore/lite");

const firebaseConfig = {
    apiKey: "AIzaSyAYVaRc6PXm9sXH_QJDhpsTd9Br3qRlsUo",
    authDomain: "avaliacaocloud.firebaseapp.com",
    projectId: "avaliacaocloud",
    storageBucket: "avaliacaocloud.appspot.com",
    messagingSenderId: "478083711717",
    appId: "1:478083711717:web:d999d5edded9e4e6968a0c",
    measurementId: "G-TVT7EFH7BN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function salvar(nomeTabela, id, dado) {
    if (id) {
        const referenceEntity = await setDoc(doc(db, nomeTabela, id), dado);
        const savedData = {
            ...dado,
            id: id
        }
        return savedData;
    } else {
        const referenceEntity = await addDoc(collection(db, nomeTabela), dado);
        const savedData = {
            ...dado,
            id: referenceEntity.id
        }
        return savedData;
    }
}

async function pegar(nomeTabela) {
    const tableRef = collection(db, nomeTabela);
    const q = query(tableRef);

    const querySnapshot = await getDocs(q);

    const lista = [];

    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(data);
    });
    return lista;
}

module.exports = {
    salvar,
    pegar
}