import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyAfyz2EILscpf133OL4itblIA05rM_XY7o',
	authDomain: 'fireshiplink.firebaseapp.com',
	projectId: 'fireshiplink',
	storageBucket: 'fireshiplink.appspot.com',
	messagingSenderId: '706965781746',
	appId: '1:706965781746:web:fa7d253a25c1f5d7dc246b'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
