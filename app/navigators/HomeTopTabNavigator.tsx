import React from "react"
import { WelcomeScreen } from "app/screens"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

export type HomeTopTabNavigatorParamList = {
  Demo: undefined
}

const Tab = createMaterialTopTabNavigator<HomeTopTabNavigatorParamList>()
export const HomeTopTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen name="Demo" component={WelcomeScreen} />
    </Tab.Navigator>
  )
}
