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
import Perfil from "./Perfil";
import Pesquisar from "./Pesquisar";
import Publicar from "./Publicar";
import Favoritos from "./Favoritos";
import Login from "./Login";


const TabArr = [
  {
    route: "Home",
    label: "Home",
    icon: "home",
    component: Home,
    color: "#187BCD",
    alphaClr: "black",
  },
  {
    route: "Pesquisar",
    label: "Pesquisar",
    icon: "search-outline",
    component: Pesquisar,
    color: "#187BCD",
    alphaClr: "black",
  },
  {
    route: "Publicar",
    label: "Publicar",
    icon: "add-circle",
    component: Publicar,
    color: "#187BCD",
    alphaClr: "black",
  },
  // {
  //   route: "Favoritos",
  //   label: "Favoritos",
  //   icon: "heart",
  //   component: Favoritos,
  //   color: "#187BCD",
  //   alphaClr: "black",
  // },
  {
    route: "Perfil",
    label: "Perfil",
    icon: "person",
    component: Perfil,
    color: "#187BCD",
    alphaClr: "black",
  },
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);



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
            { backgroundColor: focused? item.color : "#F4F4F4", borderRadius: 16 },
          ]}
        />
        <View style={[styles.btn]}>
          {focused ? (
            <></>
          ) : (
            <View style={[styles.btn]}>
              <Ionicons
                name={item.icon}
                color={focused ? "black" : "#187BCD"}
                size={30}
              />
            </View>
          )}

          <Animatable.View ref={textViewRef}>
            {focused && (
              <View style={styles.btn2}>
                <Ionicons
                  name={item.icon}
                  color={focused ? "#F4F4F4" : "#F4F4F4"}
                  size={20}
                />
                <Text
                  style={{
                    color: "#F4F4F4",
                    paddingHorizontal: 8,
                    fontSize: 16,
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
            height: 80,
            position: "absolute",
            backgroundColor: "#F4F4F4",
            borderColor: "#F4F4F4",
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
    justifyContent: "center",
    alignItems: "center",
    height: 80,
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
