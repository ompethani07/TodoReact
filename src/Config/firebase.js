
import { initializeApp } from "firebase/app";
import {getauth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCotDNZiib5_hm874jw9gkVuHtniula3qE",
  authDomain: "firstproject-cb02f.firebaseapp.com",
  projectId: "firstproject-cb02f",
  storageBucket: "firstproject-cb02f.appspot.com",
  messagingSenderId: "831635806968",
  appId: "1:831635806968:web:7b5af62a40ba8108bdb90d",
  measurementId: "G-E6XDHZ0FXB"
};


const app = initializeApp(firebaseConfig);
export const auth=getauth(app);