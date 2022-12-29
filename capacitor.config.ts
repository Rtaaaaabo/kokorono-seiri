import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.taku-cloud.tasukeai',
  appName: 'kokorono-seiri',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId: "168946736362-6rt61b4quk1gmkvt2kcfci1e2dvlb6po.apps.googleusercontent.com",
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
