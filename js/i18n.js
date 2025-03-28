// 语言配置
const i18n = {
    zh: {
        nav: {
            company: '公司',
            contact: '联系我们',
            docs: '文档',
            signin: '登录',
            getstarted: '开始使用'
        },
        hero: {
            title: '以先进的AI计算\n赋能创新',
            subtitle: '高性能GPU实例起价$2.09/GPU/小时',
            launch: '启动GPU实例',
            contact: '联系销售'
        },
        deals: {
            title: '独家GPU优惠',
            subtitle: '专为AI研究人员和初创企业定制',
            starter: {
                title: '入门套餐',
                topup: '充值1,000美元',
                receive: '获得100美元代金券',
                validity: '(有效期3个月)'
            },
            growth: {
                title: '成长套餐',
                topup: '充值3,000美元',
                receive: '获得400美元代金券',
                validity: '(有效期3个月)'
            },
            enterprise: {
                title: '企业套餐',
                topup: '充值10,000美元',
                receive: '获得1,500美元代金券',
                validity: '(有效期5个月)'
            }
        },
        specs: {
            title: 'GPU规格',
            subtitle: '为您的AI工作负载提供高性能计算解决方案',
            contactSales: '联系销售 >',
            lowestTo: '最低至'
        },
        why: {
            title: '为什么选择AIPhi',
            subtitle: '体验性能与价值的完美平衡',
            pricing: {
                title: '云GPU最优价格',
                advantage: '价格优势. AIPhi每GPU每小时$1.99，比其他供应商便宜近33%',
                comparison: '与AWS、GCP和Azure相比，节省超过82%的成本',
                flexible: '灵活使用。无年度承诺，无不可预测的竞价实例'
            },
            performance: {
                title: '卓越性能',
                computing: '高性能计算',
                gpus: '配置优化的最新NVIDIA GPU',
                networking: '先进的网络',
                training: '分布式训练的高速互连'
            }
        },
        footer: {
            company: '公司',
            resources: '资源',
            legal: '法律',
            about: '关于我们',
            careers: '招贤纳士',
            contact: '联系我们',
            docs: '文档',
            api: 'API参考',
            status: '系统状态',
            privacy: '隐私政策',
            terms: '服务条款',
            security: '安全',
            copyright: '版权所有',
            slogan: '以先进的AI计算解决方案赋能创新'
        },
        privacy: {
            title: "隐私政策",
            dataOwnership: {
                title: "1. 数据所有权",
                content: "所有客户数据（"您的数据"）均为您的专有财产。我们仅按照本政策所述，为提供服务和提升用户体验而处理您的数据。"
            },
            infoCollection: {
                title: "2. 信息收集",
                intro: "我们仅收集提供服务所必需的信息，包括：",
                items: [
                    "账户信息（登录名、密码）用于访问服务",
                    "项目信息，如作业类型、数据、shell设置和docker镜像",
                    "使用数据（作业状态、错误日志）特定服务性能和资源使用情况",
                    "支付信息（仅存储编码后的支付方式ID，不存储原始支付数据）",
                    "用户提供的数据：使用服务时明确提交的任何内容"
                ],
                cookies: "Cookie和类似技术：我们使用cookie和类似跟踪数据来改进服务并定制您的体验。"
            },
            useOfInfo: {
                title: "3. 信息使用方式",
                intro: "我们将收集的信息用于以下目的：",
                items: [
                    "提供服务、处理请求并改善您的整体服务体验",
                    "处理交易并发送相关信息",
                    "就我们的服务与您沟通，如回应询问",
                    "监控数据安全并防止未经授权的访问",
                    "分析使用模式以改进服务、解决问题并提供更好的支持",
                    "遵守法律义务"
                ]
            },
            dataSecurity: {
                title: "4. 数据安全",
                intro: "我们不会与第三方共享您的个人信息，除非：",
                items: [
                    "获得您的明确同意",
                    "法律要求或为保护我们的权利"
                ],
                security: "我们采用行业标准的安全措施保护您的数据，包括加密、防火墙和安全数据存储。但是，没有任何电子存储或传输方法是100%安全的。因此，虽然我们努力保护您的个人信息，但我们不能保证其绝对安全。",
                breach: "技术安全：如发生任何数据泄露、未经授权访问或数据丢失，我们将在发现后72小时内通知您。我们将与您合作减轻任何潜在影响。"
            },
            serviceQuality: {
                title: "5. 服务质量保证",
                content: "我们致力于为您提供最好的服务。为实现这一目标，我们可能会收集有关您与服务交互的数据。这些数据帮助我们了解您如何使用平台并确定需要改进的领域。",
                monitoring: "服务监控：我们监控服务性能和用户活动，以维护和改进安全系统的有效性。但是，我们不会监控您在平台上运行的应用程序或源代码。我们仅收集用于改进服务的指标。"
            },
            rights: {
                title: "6. 您的权利和选择",
                content: "您有权访问、更新或删除您的个人信息并控制您的互动。",
                access: "数据访问和控制活动：您可以按照这些通信中的说明或联系我们来选择退出某些数据收集和处理活动。",
                retention: "数据保留：我们仅在提供服务和遵守法律义务所需的时间内保留您允许的账户信息。",
                withdraw: "您可以随时通过联系我们来撤回您的同意。"
            },
            children: {
                title: "7. 儿童隐私",
                content: "我们的服务不面向13岁以下儿童。我们不会故意收集13岁以下儿童的个人信息。如果您发现有儿童向我们提供了个人信息，请立即联系我们。"
            },
            changes: {
                title: "8. 隐私政策的变更",
                content: "我们可能会不时更新本隐私政策。我们会通过在本页面发布新的隐私政策来通知您任何变更。建议您定期查看本隐私政策以了解任何变更。隐私政策的变更在本页面发布时生效。"
            },
            compliance: {
                title: "9. 法律合规",
                content: "我们致力于遵守适用的数据保护法律法规，包括但不限于针对从欧盟/欧洲经济区访问的客户的《通用数据保护条例》(GDPR)以及其他相关法规和标准。我们对数据保护的承诺体现在我们的各种数据处理实践中。"
            },
            transfers: {
                title: "10. 欧洲经济区外的数据传输",
                content: "对于来自欧洲经济区(EEA)、瑞士或英国的用户，我们将确保任何此类个人数据传输均符合适用的数据保护法。数据将通过适当的保护措施（如标准合同条款）得到保护。"
            },
            contact: {
                title: "11. 联系我们",
                intro: "如果您对本隐私政策或我们如何处理您的个人数据有任何问题或疑虑，您可以通过以下方式联系我们：",
                items: [
                    "电子邮件：support@aiphi.tech",
                    "通过我们网站上的联系表单",
                    "适用于员工、管理人员和合作伙伴"
                ],
                assurance: "请放心，我们将优先考虑您的数据隐私和个人数据。"
            }
        }
    },
    en: {
        nav: {
            company: 'Company',
            contact: 'Contact Us',
            docs: 'Documentation',
            signin: 'Sign in',
            getstarted: 'Get Started'
        },
        hero: {
            title: 'Empowering Innovation\nwith Advanced AI Computing',
            subtitle: 'High-performance GPU instances starting at $2.09/GPU/Hr',
            launch: 'Launch GPU Instance',
            contact: 'Contact Sales'
        },
        deals: {
            title: 'Exclusive GPU Deals',
            subtitle: 'Specially crafted for AI Researchers and Startups',
            starter: {
                title: 'Starter Package',
                topup: 'Top up 1,000USD',
                receive: 'receive a 100USD voucher',
                validity: '(valid for 3 months)'
            },
            growth: {
                title: 'Growth Package',
                topup: 'Top up 3,000USD',
                receive: 'receive a 400USD voucher',
                validity: '(valid for 3 months)'
            },
            enterprise: {
                title: 'Enterprise Package',
                topup: 'Top up 10,000USD',
                receive: 'receive a 1,500USD voucher',
                validity: '(valid for 5 months)'
            }
        },
        specs: {
            title: 'GPU Specifications',
            subtitle: 'High-performance computing solutions for your AI workloads',
            contactSales: 'Contact Sales >',
            lowestTo: 'Lowest to'
        },
        why: {
            title: 'Why Choose AIPhi',
            subtitle: 'Experience the perfect balance of performance and value',
            pricing: {
                title: 'Best Price for Cloud GPUs',
                advantage: 'Pricing Advantage. AIPhi at $1.99/GPU/hour, nearly 33% cheaper compared to other providers',
                comparison: 'Compared to AWS, GCP, and Azure. Save over 82% in costs',
                flexible: 'Flexible Usage. No annual commitments or unpredictable spot instances'
            },
            performance: {
                title: 'Superior Performance',
                computing: 'High Performance Computing',
                gpus: 'Latest NVIDIA GPUs with optimized configurations',
                networking: 'Advanced Networking',
                training: 'High-speed interconnects for distributed training'
            }
        },
        footer: {
            company: 'Company',
            resources: 'Resources',
            legal: 'Legal',
            about: 'About Us',
            careers: 'Careers',
            contact: 'Contact',
            docs: 'Documentation',
            api: 'API Reference',
            status: 'Status',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
            security: 'Security',
            copyright: 'All rights reserved',
            slogan: 'Empowering innovation with advanced AI computing solutions'
        },
        privacy: {
            title: "Privacy Policy",
            dataOwnership: {
                title: "1. Data Ownership",
                content: "All data is owned by the customer ("Your Data") remains your sole property. We process your data exclusively to deliver our services and enhance your user experience, as described in this policy."
            },
            infoCollection: {
                title: "2. Information Collection",
                intro: "We collect only the information necessary to provide our services properly and securely. This information may include:",
                items: [
                    "Account information (login, password) to use and access our services",
                    "Project information such as job type and data, shell settings and docker images",
                    "Usage Data (job status, error logs) specific service performance and resource usage",
                    "Payment information (only coded payment method ids, we do not store raw payment data)",
                    "User-Provided Data: Any content of data explicitly submitted when using our services"
                ],
                cookies: "Cookies and Similar Technologies: We use cookies and similar tracking data to improve our services and customize your experience."
            },
            useOfInfo: {
                title: "3. How We Use Information",
                intro: "We use the collected information for the following purposes:",
                items: [
                    "Provide our services, handle requests, and improve your overall service experience",
                    "Process transactions and send related information",
                    "Communicate with you regarding our services, such as responding to inquiries",
                    "Monitor the security of your data and prevent unauthorized access",
                    "Analyze usage patterns to improve services, troubleshoot issues, and provide better support",
                    "Comply with legal obligations"
                ]
            },
            dataSecurity: {
                title: "4. Data Security",
                intro: "We do not share your personal information with third parties except in the following circumstances:",
                items: [
                    "With your explicit consent",
                    "When required by law or to protect our rights"
                ],
                security: "We maintain industry-standard security measures to protect your data, including encryption, firewalls, and secure data storage. However, no method of electronic storage or transmission is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.",
                breach: "Technical Security: In the case of any breach, unauthorized, or lost data, we will notify you within 72 hours of discovery. We will work with you to mitigate any potential impact."
            },
            serviceQuality: {
                title: "5. Quality of Service Assurance",
                content: "We strive to provide you with the best possible service. To help us achieve this goal, we may collect data about your interactions with our services. This data helps us understand how you use our platform and identify areas for improvement.",
                monitoring: "Service Monitoring: We monitor service performance and user activity to maintain and improve the effectiveness of our security systems. However, we do not monitor the application or source code you run on our platform. We only collect metrics to improve our service."
            },
            rights: {
                title: "6. Your Rights and Choices",
                content: "You have the right to access, update, or delete your personal information and control your interactions.",
                access: "Data Access and Control Activities: You can opt out of certain data collection and processing activities by following the instructions in these communications or contacting us.",
                retention: "Data Retention: We only retain the data you allow your account information for as long as needed to provide our services and comply with legal obligations.",
                withdraw: "Information you may withdraw your consent at any time by contacting us."
            },
            children: {
                title: "7. Children's Privacy",
                content: "Our Services are not directed to or by children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately."
            },
            changes: {
                title: "8. Changes to This Privacy Policy",
                content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
            },
            compliance: {
                title: "9. Compliance with Laws",
                content: "We are committed to complying with applicable data protection laws and regulations, including but not limited to the General Data Protection Regulation (GDPR) for customers accessing from the EU/EEA, and other relevant regulations and standards. Our commitment to data protection is reflected in our range of data handling practices."
            },
            transfers: {
                title: "10. Transfers Outside the European Economic Area",
                content: "For parties located in countries along our Service from the European Economic Area (EEA), Switzerland, or the UK, we will ensure that any such transfer of your personal data is done in accordance with applicable data protection laws. The data will be protected by appropriate safeguards, such as Standard Contractual Clauses."
            },
            contact: {
                title: "11. Contact Us",
                intro: "If you have any questions or concerns about this Privacy Policy or how we handle your personal data, you can contact us at:",
                items: [
                    "Email: support@aiphi.tech",
                    "Through our contact form on our website",
                    "For employees, managers, and associates"
                ],
                assurance: "Rest assured that we prioritize your data privacy and personal data."
            }
        }
    }
};

// 当前语言
let currentLang = 'en';

// 初始化语言切换功能
function initLanguageSwitch() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            switchLanguage(lang);
        });
    });

    // 设置初始语言
    updateLanguageButtons();
    updateContent();
}

// 切换语言
function switchLanguage(lang) {
    currentLang = lang;
    updateContent();
    updateLanguageButtons();
    document.documentElement.lang = lang;
    
    // 触发语言变化事件
    document.dispatchEvent(new Event('languageChanged'));
}

// 更新语言按钮状态
function updateLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
}

// 更新页面内容
function updateContent() {
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        const translation = getTranslation(key);
        if (translation) {
            element.innerHTML = translation.replace(/\n/g, '<br>');
        }
    });

    // 更新所有带有 data-i18n-placeholder 属性的元素
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        const translation = getTranslation(key);
        if (translation) {
            element.placeholder = translation;
        }
    });
}

// 获取翻译文本
function getTranslation(key) {
    const keys = key.split('.');
    let value = i18n[currentLang];
    
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            return null;
        }
    }
    
    return value;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitch();
}); 