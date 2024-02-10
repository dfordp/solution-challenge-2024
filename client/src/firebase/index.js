import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider} from "firebase/auth";
import axios from "axios";


const firebaseConfig = {

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