import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBrtY32vbxl9CsnG-NP8kfKPUzRwm51Kho",
  authDomain: "tailwind-ecommerce-coder.firebaseapp.com",
  projectId: "tailwind-ecommerce-coder",
  storageBucket: "tailwind-ecommerce-coder.appspot.com",
  messagingSenderId: "1022896518832",
  appId: "1:1022896518832:web:beddd92b96b4fe48ebed75",
  measurementId: "G-N7SGQNG0D4"
};
const app= firebase.initializeApp(firebaseConfig)

// export function getFirebase(){
//     return app
// }

export function getFirestore(){
    return firebase.firestore(app)
}
