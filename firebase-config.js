// Firebase Configuration
// PHOTLOGY - Agency Firebase Project

const firebaseConfig = {
    apiKey: "AIzaSyCpqujJa_MlFmCAbeWCs-tuptuGNAq9JqM",
    authDomain: "agency-abe45.firebaseapp.com",
    databaseURL: "https://agency-abe45-default-rtdb.firebaseio.com",
    projectId: "agency-abe45",
    storageBucket: "agency-abe45.firebasestorage.app",
    messagingSenderId: "758327590163",
    appId: "1:758327590163:web:e19e4c5d57b258e32aaee6",
    measurementId: "G-ZKRJ2QM1CX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = firebase.database();

// Initialize Analytics
const analytics = firebase.analytics();

console.log('🔥 Firebase initialized successfully!');
console.log('📊 Project: agency-abe45');
console.log('💾 Realtime Database connected!');


