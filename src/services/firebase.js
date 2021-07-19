import firebase from "firebase/app";
import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

import config from "./firebaseConfig"

// Initialize Firebase
firebase.initializeApp(config);
