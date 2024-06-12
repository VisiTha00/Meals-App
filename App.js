import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryDisplayScreen from "./Screens/CategoryDisplayScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsOverviewScreen from "./Screens/MealsOverviewScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import FavouriteMeals from "./Screens/FavouriteMeals";
import { Ionicons } from "@expo/vector-icons";
import FavouriteProvider from "./Store/Contexts/FavouriteContext";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0c49f2",
        },
        headerTintColor: "#fff",
        sceneContainerStyle: {
          backgroundColor: "#231687",
        },
        drawerStyle: {
          backgroundColor: "#0c49f2",
        },
        drawerActiveBackgroundColor: "#231687",
        drawerActiveTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryDisplayScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="fast-food-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouriteMeals}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <FavouriteProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#0c49f2",
              },
              headerTintColor: "#fff",
              contentStyle: {
                backgroundColor: "#7494f5",
              },
            }}
          >
            <Stack.Screen
              name="Types of Meals"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Meals Overview"
              component={MealsOverviewScreen}
              options={{
                title: "Available Meals",
              }}
            />
            <Stack.Screen
              name="details"
              component={DetailsScreen}
              options={{
                title: "Details",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouriteProvider>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
