import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";
import Home from "./Home";
import Agendamento from "./Agendamento";
import Galeria from "./Galeria";
import Perfil from "./Perfil";

const TabArr = [
  {
    route: "Home",
    label: "Home",
    icon: "home",
    component: Home,
    color: "#E29C31",
    alphaClr: "black",
  },
  {
    route: "Agendamento",
    label: "Agendar",
    icon: "calendar",
    component: Agendamento,
    color: "#E29C31",
    alphaClr: "black",
  },
  {
    route: "Galeria",
    label: "Galeria",
    icon: "image",
    component: Galeria,
    color: "#E29C31",
    alphaClr: "black",
  },
  {
    route: "Perfil",
    label: "Perfil",
    icon: "person",
    component: Perfil,
    color: "#E29C31",
    alphaClr: "black",
  },
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
      viewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
      textViewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
    } else {
      viewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
      textViewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { flex: focused ? 1 : 0.65 }]}
    >
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: item.color, borderRadius: 16 },
          ]}
        />
        <View style={[styles.btn]}>
          {focused ? (
            <></>
          ) : (
            <View style={[styles.btn]}>
              <Ionicons
                name={item.icon}
                color={focused ? "black" : "#E29C31"}
                size={20}
              />
            </View>
          )}

          <Animatable.View ref={textViewRef}>
            {focused && (
              <View style={styles.btn2}>
                <Ionicons
                  name={item.icon}
                  color={focused ? "black" : "#E29C31"}
                  size={18}
                />
                <Text
                  style={{
                    color: "black",
                    paddingHorizontal: 8,
                    fontWeight: "bold",
                    fontSize: 12,
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </Text>
              </View>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function Menu() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            position: "absolute",
            margin: 16,
            borderRadius: 16,
            backgroundColor: "#1D1D1D",
            borderColor: "black",
            borderWidth: 1,
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
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 16,
  },
  btn2: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 1,
    paddingVertical: 2,
    borderRadius: 16,
  },
});
