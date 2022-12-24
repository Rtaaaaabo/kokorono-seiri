import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.kokoronoseiri',
  appName: 'kokorono-seiri',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId: "587456068999-smqbquih3ajrl33o28kvl8i1jmirlbvr.apps.googleusercontent.com",
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
