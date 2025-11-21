[001] // firebase-config.js
[002] import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
[003] import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, updateProfile, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
[004] import { getFirestore, collection, addDoc, query, orderBy, getDocs, where } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
[005]
[006] const firebaseConfig = {
[007]   apiKey: "REPLACE_API_KEY",
[008]   authDomain: "REPLACE_AUTH_DOMAIN",
[009]   projectId: "REPLACE_PROJECT_ID",
[010]   storageBucket: "REPLACE_STORAGE_BUCKET",
[011]   messagingSenderId: "REPLACE_MESSAGING_SENDER_ID",
[012]   appId: "REPLACE_APP_ID"
[013] };
[014]
[015] const app = initializeApp(firebaseConfig);
[016] const auth = getAuth(app);
[017] const db = getFirestore(app);
[018]
[019] export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, updateProfile, onAuthStateChanged, collection, addDoc, query, orderBy, getDocs, where };
