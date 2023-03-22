import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createDrawerNavigator} from "@react-navigation/drawer"

import FavoriteJobs from "./Pages/FavoriteJobs";
import Jobs from "./Pages/Jobs";
import JobsDetail from "./Pages/JobsDetail";

const Drawer=createDrawerNavigator()
const Stack=createNativeStackNavigator()

function JobsDrawer(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Jobs" component={Jobs} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="JobsDetail" component={JobsDetail}></Stack.Screen>
        </Stack.Navigator>
    )
}
function FavoriteDrawer(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="FavoriteJobs" component={FavoriteJobs} options={{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
    )
}
const Router=()=>{

    return(
        <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Jobs" component={JobsDrawer} options={{headerShown:false}}></Drawer.Screen>
            <Drawer.Screen name="Favorites" component={FavoriteDrawer} options={{headerShown:false}}></Drawer.Screen>
        </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default Router