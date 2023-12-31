import { collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCy8h1VrIpOvbM-_ZCrTmLBGcsn2MJc9Hw",
  authDomain: "sistema-de-gastos-pessoais.firebaseapp.com",
  projectId: "sistema-de-gastos-pessoais",
});

export const App = () =>{
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [transacao, setTransacao] = useState([]);

  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "Transações");

  useEffect(() => {
    const getTransacao = async () =>{
      const data = await getDocs(userCollectionRef);
      console.log(data.docs.map((doc)=> ({...doc.data(), id:doc.id})));
    };
    getTransacao();
  }, []);
}
//firebase.initializeApp(firebaseApp);

//export { fbAuth, fbRestore, fbStorage };
//export default firebase;
