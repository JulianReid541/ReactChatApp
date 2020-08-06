import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    projectID = process.env.REACT_APP_PROJECT_ID,
    apiKey: process.env.REACT_APP_APIKEY,
    databaseURL: REACT_APP_DB_URL
};

firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;