import { analytics } from './firebase-config.js';
import { logEvent } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

// Track page view
export function trackPageView(pageName) {
    logEvent(analytics, 'page_view', {
        page_name: pageName
    });
}

// Track login event
export function trackLogin(method) {
    logEvent(analytics, 'login', {
        method: method
    });
}

// Track sign up event
export function trackSignUp(method) {
    logEvent(analytics, 'sign_up', {
        method: method
    });
}

// Track button click event
export function trackButtonClick(buttonName) {
    logEvent(analytics, 'button_click', {
        button_name: buttonName
    });
}

// Track feature usage event
export function trackFeatureUse(featureName) {
    logEvent(analytics, 'feature_use', {
        feature_name: featureName
    });
} 