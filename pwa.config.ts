import type { Config } from './types';

export default {
  id: '/',
  name: 'Piyush SRP',
  shortName: 'Piyush SRP',
  description: 'Hello Guies I'm Piyush Trivedi (Rahul). I'm Creative Director and UI/UX Designer from Madhya Pradesh, India.',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Piyush SRP',
      shortName: 'Piyush SRP',
      description: 'Hello Guies I'm Piyush Trivedi (Rahul). I'm Creative Director and UI/UX Designer from Madhya Pradesh, India .',
      url: '/search/label/shortcut-1?utm_source=homescreen',
    },
    {
      name: 'Piyush SRP',
      shortName: 'Piyush SRP',
      description: 'Hello Guies I'm Piyush Trivedi (Rahul). I'm Creative Director and UI/UX Designer from Madhya Pradesh, India .',
      url: '/search/label/shortcut-2?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is only available if you are using cloudflare workers
    oneSignalEnabled: false, // To enable OneSignal, set this to true
    oneSignalConfig: {
      appId: '********-****-****-****-************', // Replace with your OneSignal App Id
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://piyush-srp.blogspot.com',
} satisfies Config;
