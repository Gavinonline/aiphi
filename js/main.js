// 价格数据
const pricingData = {
    zh: [
        {
            name: 'H100 GPU',
            price: '￥XX/小时',
            features: [
                '高性能计算能力',
                '24/7技术支持',
                '灵活计费',
                '专属网络'
            ]
        },
        {
            name: 'H200 GPU',
            price: '￥XX/小时',
            features: [
                '新一代AI加速器',
                '24/7技术支持',
                '灵活计费',
                '专属网络'
            ]
        }
    ],
    en: [
        {
            name: 'H100 GPU',
            price: '$XX/hour',
            features: [
                'High-Performance Computing',
                '24/7 Technical Support',
                'Flexible Billing',
                'Dedicated Network'
            ]
        },
        {
            name: 'H200 GPU',
            price: '$XX/hour',
            features: [
                'Next-Gen AI Accelerator',
                '24/7 Technical Support',
                'Flexible Billing',
                'Dedicated Network'
            ]
        }
    ]
};

// 性能对比数据
const performanceData = {
    labels: {
        zh: ['H100', 'H200', '其他GPU'],
        en: ['H100', 'H200', 'Other GPUs']
    },
    datasets: [{
        label: {
            zh: '性能对比',
            en: 'Performance Comparison'
        },
        data: [100, 120, 80],
        backgroundColor: [
            'rgba(0, 123, 255, 0.5)',
            'rgba(0, 188, 212, 0.5)',
            'rgba(108, 117, 125, 0.5)'
        ]
    }]
};

// 生成价格卡片
function generatePricingCards() {
    const pricingGrid = document.querySelector('.pricing-grid');
    if (!pricingGrid) return;

    // 清空现有内容
    pricingGrid.innerHTML = '';

    // 获取当前语言的价格数据
    const currentPricingData = pricingData[currentLang];

    currentPricingData.forEach(plan => {
        const card = document.createElement('div');
        card.className = 'pricing-card';
        card.innerHTML = `
            <h3>${plan.name}</h3>
            <div class="price">${plan.price}</div>
            <ul class="features">
                ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="contact-button" data-i18n="pricing.contact">联系我们</button>
        `;
        pricingGrid.appendChild(card);
    });
}

// 初始化性能图表
function initPerformanceChart() {
    const ctx = document.querySelector('.performance-chart');
    if (!ctx) return;

    // 这里可以使用Chart.js等图表库来绘制性能对比图表
    // 示例代码：
    /*
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: performanceData.labels[currentLang],
            datasets: [{
                label: performanceData.datasets[0].label[currentLang],
                data: performanceData.datasets[0].data,
                backgroundColor: performanceData.datasets[0].backgroundColor
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    */
}

// 表单提交处理
function handleFormSubmit() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // 这里添加表单提交逻辑
        alert(currentLang === 'zh' ? 
            '感谢您的咨询，我们会尽快与您联系！' : 
            'Thank you for your inquiry. We will contact you soon!');
        form.reset();
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    generatePricingCards();
    initPerformanceChart();
    handleFormSubmit();

    // 汉堡菜单功能
    const menuToggle = document.querySelector('.menu-toggle');
    const navCenter = document.querySelector('.nav-center');
    const body = document.body;

    // 创建遮罩层
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    // 切换菜单状态
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navCenter.classList.toggle('active');
        overlay.classList.toggle('active');
        body.style.overflow = navCenter.classList.contains('active') ? 'hidden' : '';
    }

    // 点击汉堡菜单
    menuToggle.addEventListener('click', toggleMenu);

    // 点击遮罩层关闭菜单
    overlay.addEventListener('click', toggleMenu);

    // 点击导航链接关闭菜单
    const navLinks = navCenter.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navCenter.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // 处理表单提交
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted successfully!');
            contactForm.reset();
        });
    }

    // 处理订阅表单
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Subscription successful!');
            subscribeForm.reset();
        });
    }
});

// 监听语言变化
document.addEventListener('languageChanged', () => {
    generatePricingCards();
    initPerformanceChart();
}); 