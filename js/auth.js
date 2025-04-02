import { auth } from './firebase-config.js';
import { 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Email password login
export async function loginWithEmail(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}

// Email password registration
export async function registerWithEmail(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}

// Google login
export async function loginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account'
        });
        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (error) {
        console.error('Google login error:', error);
        if (error.code === 'auth/cancelled-popup-request') {
            throw new Error('登录被取消，请确保允许浏览器弹窗并重试');
        } else if (error.code === 'auth/popup-blocked') {
            throw new Error('登录弹窗被阻止，请允许网站显示弹窗');
        } else if (error.code === 'auth/popup-closed-by-user') {
            throw new Error('登录窗口被关闭，请重试');
        } else {
            throw new Error('登录失败：' + error.message);
        }
    }
}

// Sign out
export async function logout() {
    try {
        await signOut(auth);
    } catch (error) {
        throw error;
    }
}

// Auth state change listener
export function onAuthStateChange(callback) {
    return onAuthStateChanged(auth, callback);
} 