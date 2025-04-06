import { auth, db, doc, getDoc } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Check user login status
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is logged in, update user info
        updateUserInfo(user);
    } else {
        // User is not logged in, redirect to login page
        window.location.href = '/login.html';
    }
});

// Update user information
async function updateUserInfo(user) {
    console.log('Current user:', user); // Debug log: show current user information

    // Update avatar
    const userAvatar = document.getElementById('userAvatar');
    if (user.photoURL) {
        userAvatar.src = user.photoURL;
    }

    // Update username
    const userName = document.getElementById('userName');
    userName.textContent = user.displayName || '';

    // Update email from Auth
    const userEmail = document.getElementById('userEmail');
    if (user.email) {
        userEmail.textContent = user.email;
        userEmail.style.color = '#007bff';
    } else {
        userEmail.textContent = 'Email not found';
        userEmail.style.color = '#dc3545';
    }
    userEmail.style.fontWeight = '500';

    // Load user data from Firestore
    try {
        console.log('Fetching user data for uid:', user.uid); // Debug log: show uid being queried
        const userDocRef = doc(db, 'user', user.uid);
        const userDoc = await getDoc(userDocRef);
        
        if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log('Found user data:', userData); // Debug log: show found user data
            
            // Load order from Firestore
            const ordersList = document.getElementById('ordersList');
            if (!ordersList) {
                console.error('Orders container not found!');
                return;
            }
            
            ordersList.innerHTML = ''; // Clear loading message first
            
            if (userData && userData.order) {
                console.log('Found order data:', userData.order); // Debug log: show order data
                const orderElement = document.createElement('div');
                orderElement.className = 'order-item';
                orderElement.textContent = userData.order;
                ordersList.appendChild(orderElement);
                
                // Debug log to verify the element was added
                console.log('Order element added to container:', orderElement);
                console.log('Orders container content:', ordersList.innerHTML);
            } else {
                console.log('No order data found'); // Debug log: show no order found
                ordersList.innerHTML = '<p class="no-orders">No orders found</p>';
            }
        } else {
            console.log('No user document found for uid:', user.uid); // Debug log: show no user document found
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }

    // Update registration time
    const registerTime = document.getElementById('registerTime');
    registerTime.textContent = new Date(user.metadata.creationTime).toLocaleString();
}

// Add logout button to the page
const logoutBtn = document.createElement('button');
logoutBtn.id = 'logoutBtn';
logoutBtn.className = 'logout-btn';
logoutBtn.textContent = 'Logout';
document.querySelector('.profile-content').appendChild(logoutBtn);

// Logout
logoutBtn.addEventListener('click', async () => {
    try {
        await signOut(auth);
        window.location.href = '/login.html';
    } catch (error) {
        console.error('Error signing out:', error);
        alert('Failed to sign out, please try again later');
    }
}); 