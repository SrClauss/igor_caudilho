import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

  get(querycpf).then((snapshot) => {
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        const childKey = childSnapshot.key;
        if (childData.data === submitData.data) {
          const question = confirm('Já existe um registro com esses dados, deseja sobrescrever?')
          if (question) {
            update(ref(db, `${colecao}/${childKey}`), submitData).then(() => {
              console.log('Dados enviados com sucesso')
            }).catch((error) => {
              console.log('Erro ao enviar os dados', error)
            })
          }
        } else {
          push(ref(db, colecao), submitData).then(() => {
            console.log('Dados enviados com sucesso')
          }).catch((error) => {
            console.log('Erro ao enviar os dados', error)
          })
        }
      });
    } else {
      push(ref(db, colecao), submitData).then(() => {
        console.log('Dados enviados com sucesso')
      }).catch((error) => {
        console.log('Erro ao enviar os dados', error)
      })
    }
    document.location.href = "/";
  })
}



export const copyAndDelete= async (colecao, id) => {
  const docRef = ref(db, `${colecao}/${id}`);

  

  get(docRef).then((snapshot) => {
    const data = snapshot.val()
    remove(ref(db, `${colecao}/${id}`)).then(() => {
      push(ref(db, colecao), data).then(() => {
        console.log('Dados copiados com sucesso')
      }).catch((error) => {
        console.log('Erro ao copiar os dados', error)
      })
    }).catch((error) => {
      console.log('Erro ao copiar os dados', error)
    })


 
  }).catch((error) => {
    console.log('Erro ao copiar os dados', error)
  })
}