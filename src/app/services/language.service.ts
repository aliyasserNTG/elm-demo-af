import { signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Language = 'ar' | 'en';

const STORAGE_KEY = 'elm-language';

function getStoredLanguage(): Language {
  if (isPlatformBrowser(inject(PLATFORM_ID))) {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'ar' || stored === 'en') {
        return stored;
      }
    } catch (e) {
      // localStorage not available
    }
  }
  return 'ar';
}

function inject(platformId: Object) {
  // Simple inject function for use in factory
  return platformId;
}

export const currentLanguage = signal<Language>(getStoredLanguage());

export function setLanguage(lang: Language, platformId: Object) {
  currentLanguage.set(lang);

  if (isPlatformBrowser(platformId)) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // localStorage not available
    }
    updateDirection(lang);
  }
}

export function updateDirection(lang: Language) {
  const html = document.documentElement;

  // Set direction on html
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  html.setAttribute('lang', lang);
  html.setAttribute('data-lang', lang);

  // Update Bootstrap CSS for RTL/LTR
  updateBootstrapCSS(lang);
}

function updateBootstrapCSS(lang: Language) {
  // Remove existing RTL/LTR CSS first
  const existingRtl = document.getElementById('bootstrap-rtl');
  const existingLtr = document.getElementById('bootstrap-ltr');

  // Clean up existing
  if (existingRtl) existingRtl.remove();
  if (existingLtr) existingLtr.remove();

  const link = document.createElement('link');
  link.id = lang === 'ar' ? 'bootstrap-rtl' : 'bootstrap-ltr';
  link.rel = 'stylesheet';

  if (lang === 'ar') {
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.rtl.min.css';
    link.integrity = 'sha384-CfCrinSRH2IR6a4e6fy2q6ioOX7O6Mtm1L9vRvFZ1trBncWmMePhzvafv7oIcWiW';
    link.crossOrigin = 'anonymous';
  } else {
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css';
    link.integrity = 'sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB';
    link.crossOrigin = 'anonymous';
  }

  // Insert after the main bootstrap link
  const firstLink = document.querySelector('head link[rel="stylesheet"]');
  if (firstLink) {
    firstLink.parentNode?.insertBefore(link, firstLink.nextSibling);
  } else {
    document.head.appendChild(link);
  }
}

// Initialize on first call - will be called from header component
export function initLanguage() {
  const lang = getStoredLanguage();
  if (isPlatformBrowser(inject(PLATFORM_ID))) {
    updateDirection(lang);
  }
}
