import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Menu from "../screens/Menu";

const Tab = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={Menu}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Tabs"
          component={Menu}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
