const firebaseConfig = {
    apiKey: "���_API_KEY",
    authDomain: "https://console.firebase.google.com/project/cl212-ddc3b/settings/general.firebaseapp.com",
    projectId: "https://console.firebase.google.com/project/cl212-ddc3b/settings/general",
    storageBucket: "https://console.firebase.google.com/project/cl212-ddc3b/settings/general.appspot.com",
    messagingSenderId: "���_SENDER_ID",
    appId: "���_APP_ID"
};

// ������������� Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();