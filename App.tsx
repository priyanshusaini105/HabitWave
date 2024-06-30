import "@expo/metro-runtime"
import React from "react"
import * as SplashScreen from "expo-splash-screen"
import App from "./app/app"
import * as eva from "@eva-design/eva"
import { ApplicationProvider } from "@ui-kitten/components"
import { myTheme } from './custom-theme';

SplashScreen.preventAutoHideAsync()

function IgniteApp() {
  return (
    <ApplicationProvider {...eva} theme={{...eva.light,...myTheme}}>
      <App hideSplashScreen={SplashScreen.hideAsync} />
    </ApplicationProvider>
  )
}

export default IgniteApp
