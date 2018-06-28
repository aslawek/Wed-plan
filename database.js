import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyARXoycEier-kEHiLcDFtV-okHAteNxVO0",
    authDomain: "wed-plan-database.firebaseapp.com",
    databaseURL: "https://wed-plan-database.firebaseio.com",
    projectId: "wed-plan-database",
    storageBucket: "",
    messagingSenderId: "459764284518"
});

const database = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default database;