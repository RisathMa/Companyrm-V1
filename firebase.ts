
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAg7OXa5ALUak2G55tlaiO4g0mBvc9m2d4",
  authDomain: "rmcompany-c4705.firebaseapp.com",
  projectId: "rmcompany-c4705",
  storageBucket: "rmcompany-c4705.firebasestorage.app",
  messagingSenderId: "474034947608",
  appId: "1:474034947608:web:66d6fc74ad73b53cf9656d",
  measurementId: "G-1BN7CYFR96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Initialize Analytics (safely, as it might fail in some environments)
let analytics;
try {
  analytics = getAnalytics(app);
} catch (e) {
  console.warn("Firebase Analytics could not be initialized", e);
}

export { auth, googleProvider, analytics };
