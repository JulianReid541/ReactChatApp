import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    projectId: 'reactchat-28cb5',
    apiKey: 'AIzaSyAi1BGx1MfYinJ5AanJO0Ij88pdAwivW3o',
    databaseURL: 'https://reactchat-28cb5.firebaseio.com'
};

firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;