import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyD09rYmN4rHc_telcP0CH-TjKNFmoFQDEQ',
	authDomain: 'slack-clone-krish7x.firebaseapp.com',
	databaseURL: 'https://slack-clone-krish7x.firebaseio.com',
	projectId: 'slack-clone-krish7x',
	storageBucket: 'slack-clone-krish7x.appspot.com',
	messagingSenderId: '323562093059',
	appId: '1:323562093059:web:030a8ecf71e775c241ec36',
	measurementId: 'G-ZQVZ5HNQMN'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export default db;

// import {db, auth, provide} = implicit imports
// if we give like  [ export default db ]
// we can import it directly import db from "./firebase.js" = explicit imports
