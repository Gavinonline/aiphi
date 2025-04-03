import { auth, db } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 检查用户登录状态
onAuthStateChanged(auth, (user) => {
    if (user) {
        // 用户已登录，更新用户信息
        updateUserInfo(user);
        // 加载用户订单
        loadOrders(user.uid);
    } else {
        // 用户未登录，重定向到登录页面
        window.location.href = '/login.html';
    }
});

// 更新用户信息
function updateUserInfo(user) {
    // 更新头像
    const userAvatar = document.getElementById('userAvatar');
    if (user.photoURL) {
        userAvatar.src = user.photoURL;
    }

    // 更新用户名
    const userName = document.getElementById('userName');
    userName.textContent = user.displayName || '未设置用户名';

    // 更新邮箱
    const userEmail = document.getElementById('userEmail');
    userEmail.textContent = user.email;

    // 更新注册时间
    const registerTime = document.getElementById('registerTime');
    registerTime.textContent = new Date(user.metadata.creationTime).toLocaleString();
}

// 加载用户订单
async function loadOrders(userId) {
    const ordersList = document.getElementById('ordersList');
    try {
        const ordersRef = collection(db, 'orders');
        const q = query(ordersRef, where('userId', '==', userId));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            ordersList.innerHTML = '<div class="no-orders">暂无订单</div>';
            return;
        }

        ordersList.innerHTML = '';
        querySnapshot.forEach((doc) => {
            const order = doc.data();
            const orderElement = createOrderElement(doc.id, order);
            ordersList.appendChild(orderElement);
        });
    } catch (error) {
        console.error('Error loading orders:', error);
        ordersList.innerHTML = '<div class="no-orders">加载订单失败，请稍后重试</div>';
    }
}

// 创建订单元素
function createOrderElement(orderId, order) {
    const div = document.createElement('div');
    div.className = 'order-item';
    div.innerHTML = `
        <div class="order-header">
            <h3>订单号：${orderId}</h3>
            <span class="order-status ${order.status}">${getStatusText(order.status)}</span>
        </div>
        <div class="order-details">
            <p>服务器型号：${order.serverType}</p>
            <p>配置：${order.configuration}</p>
            <p>下单时间：${new Date(order.orderTime).toLocaleString()}</p>
            <p>价格：¥${order.price}</p>
        </div>
    `;
    return div;
}

// 获取状态文本
function getStatusText(status) {
    const statusMap = {
        'pending': '待处理',
        'processing': '处理中',
        'completed': '已完成',
        'cancelled': '已取消'
    };
    return statusMap[status] || status;
}

// 退出登录
document.getElementById('logoutBtn').addEventListener('click', async () => {
    try {
        await signOut(auth);
        window.location.href = '/login.html';
    } catch (error) {
        console.error('Error signing out:', error);
        alert('退出登录失败，请稍后重试');
    }
}); 