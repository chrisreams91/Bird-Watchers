
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBW7cyRyBKBg_9GTmULGJBKRJVdPfmVhf0",
  authDomain: "birdtracker-a965b.firebaseapp.com",
  projectId: "birdtracker-a965b",
  storageBucket: "birdtracker-a965b.appspot.com",
  messagingSenderId: "143373958162",
  appId: "1:143373958162:web:bd609f87248af88f65accb",
  measurementId: "G-BX9XPL3SS1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);