const firebaseConfig = {
    apiKey: "ВАШ_API_KEY",
    authDomain: "https://console.firebase.google.com/project/cl212-ddc3b/settings/general.firebaseapp.com",
    projectId: "https://console.firebase.google.com/project/cl212-ddc3b/settings/general",
    storageBucket: "https://console.firebase.google.com/project/cl212-ddc3b/settings/general.appspot.com",
    messagingSenderId: "ВАШ_SENDER_ID",
    appId: "ВАШ_APP_ID"
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();