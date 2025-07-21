import { initializeApp } from "firebase/app";
import { getDatabase, ref, update, push, query, orderByChild, equalTo, get, remove } from "firebase/database";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_APP_DATABASE_URL,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const enviarDados = async (colecao, data) => {
  let submitData = { ...data }
  submitData.cpf = data.dadosPessoais.cpf
  submitData.data = data.dadosPessoais.data
  submitData.nome = data.dadosPessoais.nome
  const querycpf = query(ref(db, colecao), orderByChild('cpf'), equalTo(submitData.cpf))

  try {
    const snapshot = await get(querycpf);
    if (snapshot.exists()) {
      let shouldUpdate = false;
      let childKey = null;

      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        if (childData.data === submitData.data) {
          shouldUpdate = confirm('Já existe um registro com esses dados, deseja sobrescrever?');
          childKey = childSnapshot.key;
        }
      });

      if (shouldUpdate && childKey) {
        await update(ref(db, `${colecao}/${childKey}`), submitData);
        console.log('Dados enviados com sucesso');
      } else {
        await push(ref(db, colecao), submitData);
        console.log('Dados enviados com sucesso');
      }
    } else {
      await push(ref(db, colecao), submitData);
      console.log('Dados enviados com sucesso');
    }
    document.location.href = "/";
  } catch (error) {
    console.log('Erro ao enviar os dados', error);
  }
}



export const copyAndDelete = async (colecao, id) => {
  try {
    const docRef = ref(db, `${colecao}/${id}`);
    const snapshot = await get(docRef);
    const data = snapshot.val();
    
    await remove(docRef);
    await push(ref(db, colecao), data);
    
    console.log('Dados copiados com sucesso');
  } catch (error) {
    console.log('Erro ao copiar os dados:', error);
  }
};

export const deleteData = async (colecao, id) => {
  remove(ref(db, `${colecao}/${id}`)).then(() => {
    console.log('Dados deletados com sucesso')
  }).catch((error) => {
    console.log('Erro ao deletar os dados', error)
  })
}