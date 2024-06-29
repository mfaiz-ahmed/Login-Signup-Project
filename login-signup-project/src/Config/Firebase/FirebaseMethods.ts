import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from './FirebaseConfig'



const auth = getAuth(app)


export const SignUpUser = (email:string , password:string)=>{
    createUserWithEmailAndPassword(auth , email , password)
    .then(res=>{
        console.log(res , "Success");
    })
    .catch(err=>{
        console.log(err , "Error");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    })
}



export const loginUser = (email:string , password:string)=>{
    signInWithEmailAndPassword(auth , email , password)
    .then(res=>{
        console.log(res , "Success");
    })
    .catch(err=>{
        console.log(err , "Error");
    })
}