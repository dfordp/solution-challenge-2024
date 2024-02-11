import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider} from "firebase/auth";
import axios from "axios";


const firebaseConfig = {
    apiKey: "AIzaSyB0n5JNYBIaQ5fgrPmfRrZ7MCuxdykaN70",
    authDomain: "tree-trooper.firebaseapp.com",
    projectId: "tree-trooper",
    storageBucket: "tree-trooper.appspot.com",
    messagingSenderId: "47571234524",
    appId: "1:47571234524:web:0e71675429e312819d8e19",
    measurementId: "G-4LR9TB5M7M"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth();

const googleProvider=new GoogleAuthProvider()
const githubProvider=new GithubAuthProvider();

const sendUserData = async (data) => {
    try{
        const res = await axios.post(`http://localhost:8080/api/socialauth`, data );
        document.cookie = `id=${res.data._id}; max-age=900000; path=/`;
    }
    catch(error){
        console.log(error);
    }
}

export const signInWithGoogle = async () => {
    signInWithPopup(auth,googleProvider).then((result)=>{
        const email = result._tokenResponse.email
        const data = {
            email : email,
            provider : "google"
        }
        sendUserData(data)
    }).catch((error) => {
        console.log(error);
    });

}

export const signInWithGithub=()=>{
    signInWithPopup(auth,githubProvider).then((result)=>{
        const email = result._tokenResponse.email
        const data = {
            email : email,
            provider : "github"
        }

        sendUserData(data)
    }).catch((error)=>{
        console.log(error);
    })
}