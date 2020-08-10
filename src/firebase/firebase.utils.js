import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyBIKFjKKeJ05OSX-khYfTT3xXYN_dO-FDI",
    authDomain: "crwn-db-93cd9.firebaseapp.com",
    databaseURL: "https://crwn-db-93cd9.firebaseio.com",
    projectId: "crwn-db-93cd9",
    storageBucket: "crwn-db-93cd9.appspot.com",
    messagingSenderId: "108787316249",
    appId: "1:108787316249:web:0deecda2344463039adc88",
    measurementId: "G-Z00PFJTDCE"
};



export const createUserProfileDocument = async(userAuth,additionalData)=>{
    if(!userAuth)return;                  //to protect database from saving null or signout action data

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot =await userRef.get();       //in snapshot there is exist property which tell whether object is really there or not
    
    //if snapshot does not exist then we have to create that
    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user' , error);
        }
    }

    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});  //it will trigger google popup whenever we trigger google auth provider

export const signInWithGoogle =() => auth.signInWithPopup(provider);  //signwith popup can be used for different popup like for twitter etc.

export default firebase;