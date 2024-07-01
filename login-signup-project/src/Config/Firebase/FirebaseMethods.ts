import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from './FirebaseConfig'
import Swal from 'sweetalert2'
import 'animate.css';
import {getFirestore , collection, addDoc} from 'firebase/firestore'





const auth = getAuth(app)
const db = getFirestore(app)




export const SignUpUser = (email:string , password:string)=>{
    createUserWithEmailAndPassword(auth , email , password)
    .then(res=>{
        console.log(res , "Success");
        Swal.fire({
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9L3VNHLIKDobzfP6_1FVe09UAU71t929y4UqT-pvKSD2U0B44iDvCr8FQjvaV2N4PEXs&usqp=CAU",
            imageHeight: 200,
            imageAlt: "Tick Image",
            title: "Signup Successfull!",
            showClass: {
              popup: `
                animate__animated
                animate__backInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__backOutDown
                animate__faster
              `
            }
          });
        })
        .catch(err=>{
            console.log(err , "Error");         
            Swal.fire({
                imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMv3Q1XF6C8X2aZvm-HB1fsngbeoV6CjH90C-KwN6cVolsd9ed",
                imageHeight: 200,
                imageAlt: "Cross Image",
                title: "Signup Unsuccessfull!",
                showClass: {
                  popup: `
                    animate__animated
                    animate__backInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__backOutDown
                    animate__faster
                  `
                }
              });                                                                                    
    })
}




export const loginUser = (email:string , password:string)=>{
    signInWithEmailAndPassword(auth , email , password)
    .then(res=>{
        console.log(res , "Success");
        Swal.fire({
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9L3VNHLIKDobzfP6_1FVe09UAU71t929y4UqT-pvKSD2U0B44iDvCr8FQjvaV2N4PEXs&usqp=CAU",
            imageHeight: 200,
            imageAlt: "Tick Image",
            title: `Welcome back ${email} ! You have successfully logged in.`,
            showClass: {
              popup: `
                animate__animated
                animate__backInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__backOutDown
                animate__faster
              `
            }
          });
    })
    .catch(err=>{
        console.log(err , "Error");
        Swal.fire({
            imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMv3Q1XF6C8X2aZvm-HB1fsngbeoV6CjH90C-KwN6cVolsd9ed",
            imageHeight: 200,
            imageAlt: "Cross Image",
            title: "Login Unsuccessfull!",
            showClass: {
              popup: `
                animate__animated
                animate__backInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__backOutDown
                animate__faster
              `
            }
          });           
    })
}



export const sendData = (model:any)=>{
const docRef = collection(db , 'todos')
  addDoc(docRef , {
    title:'Todos',
    Name:model.Name,
    Brand:model.Brand,
    Model:model.Model,
    Category:model.Category,
    Condition:model.Condition,
    Description:model.Description,
  })
}

