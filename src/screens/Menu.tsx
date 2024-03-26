import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import Home from './Home';
import Agendamento from './Agendamento';
import Galeria from './Galeria';
import Perfil from './Perfil';

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    activeIcon: 'home',
    inActiveIcon: 'home-outline',
    component: Home,
  },
  {
    route: 'Agendamento',
    label: 'Agendamento',

    activeIcon: 'calendar',
    inActiveIcon: 'calendar-outline',
    component: Agendamento,
  },
  {
    route: 'Galeria',
    label: 'Galeria',

    activeIcon: 'image',
    inActiveIcon: 'image-outline',
    component: Galeria,
  },
  {
    route: 'Perfil',
    label: 'Perfil',
    activeIcon: 'person',
    inActiveIcon: 'person-outline',
    component: Perfil,
  },
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 0.5, rotate: '0deg' },
        1: { scale: 1.5, rotate: '360deg' },
      });
    } else {
      viewRef.current.animate({
        0: { scale: 1.5, rotate: '360deg' },
        1: { scale: 1, rotate: '0deg' },
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { top: 0 }]}
    >
      <Animatable.View ref={viewRef} duration={1000}>
        <Ionicons
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? '#E29C31' : 'white'}
          size={20}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function AnimTab1() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            position: 'absolute',
            margin: 16,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1D1D1D',
            borderColor: 'black',
            borderWidth: 2,
          },
        }}
      >
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarButton: (props) => <TabButton {...props} item={item} />,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
});
