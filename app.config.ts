import "dotenv/config";

export default {
  expo: {
    name: "pocket-trace",
    slug: "pocket-trace",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF"
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      APP_NAME: process.env.APP_NAME || "",
      APP_ENV: process.env.APP_ENV || "",
      APP_API_BASE_URL: process.env.APP_API_BASE_URL || ""
    }
  }
};
