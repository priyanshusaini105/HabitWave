import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeStack } from "./AppNavigator"

export type BottomTabNavigatorParamList = {
  HomeStack: undefined
}

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();
export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, }}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
    </Tab.Navigator>
  )
}
