import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Perfil from './Perfil';
import Agendamento from './Agendamento';
import Galeria from './Galeria';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: 'Home',
    component: Home,
    icon: 'home',
  },
  {
    name: 'Agendamento',
    component: Agendamento,
    icon: 'calendar',
  },
  {
    name: 'Galeria',
    component: Galeria,
    icon: 'image',
  },
  {
    name: 'Perfil',
    component: Perfil,
    icon: 'person',
  },
];

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          // Menu
          backgroundColor: '#000000',
          borderTopColor: '#000000',
        },
        tabBarLabelStyle: {
          // Texto
          fontSize: 10,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: 'black',
        tabBarActiveBackgroundColor: '#E29C31',
        tabBarInactiveTintColor: 'white',
        tabBarInactiveBackgroundColor: 'black',
      }}
    >
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,

            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
