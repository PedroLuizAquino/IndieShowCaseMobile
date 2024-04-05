import {
  Box,
  Divider,
  FormControl,
  NativeBaseProvider,
  Text,
  VStack,
} from "native-base";
import bgLogin from "../assets/images/bgLogin.png";
import { ImageBackground, TouchableOpacity, Dimensions } from "react-native";
import { InputEstilizado } from "../components/InputEstilizado";
import { ButtonEstilizado } from "../components/ButtonEstilizado";
import { useFonts } from "expo-font";
import { color } from "native-base/lib/typescript/theme/styled-system";

export default function Login({ navigation }) {
  const [fontsCarregadas, fontsError] = useFonts({
    Amithen: require("../assets/fonts/Amithen/Amithen.otf"),
    NeohellenicRegular: require("../assets/fonts/Neohellenic/GFSNeohellenic-Regular.ttf"),
    NeohellenicBold: require("../assets/fonts/Neohellenic/GFSNeohellenic-Bold.ttf"),
  });

  if (!fontsCarregadas && !fontsError) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <ImageBackground
        source={bgLogin}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
      >
        <VStack flex={1} alignItems={"center"} p={5}>
          <Text
            color={"white"}
            fontSize={"2xl"}
            textAlign={"center"}
            mt={24}
            fontFamily={"Amithen"}
          >
            Desde{"      "}2021
          </Text>

          <Divider w={"45%"} />

          <Text
            color={"white"}
            fontSize={"54"}
            textAlign={"center"}
            fontFamily={"Amithen"}
          >
            BarberShop
          </Text>

          <Box mt={64}>
            <FormControl>
              <InputEstilizado placeholder="E-mail" mt={4} fontSize={20} />
              <InputEstilizado
                placeholder="Senha"
                tipo="password"
                mt={4}
                fontSize={20}
              />
            </FormControl>
          </Box>

          <ButtonEstilizado
            texto="Entrar"
            mt={5}
            onPress={() => {
              navigation.navigate("Tabs");
            }}
            _text={{ color: "white" }}
            login
          />
          <Box
            w={"100%"}
            flexDirection={"row"}
            justifyContent={"center"}
            mt={4}
          >
            <Text
              color={"white"}
              underline
              fontFamily={"NeohellenicRegular"}
              fontSize={18}
            >
              Esqueceu a{" "}
            </Text>
            <TouchableOpacity>
              <Text
                color={"#E29C31"}
                underline
                fontFamily={"NeohellenicRegular"}
                fontSize={18}
              >
                {" "}
                senha?
              </Text>
            </TouchableOpacity>
          </Box>
          <Box
            w={"100%"}
            flexDirection={"row"}
            justifyContent={"center"}
            mt={2}
          >
            <Text
              color={"white"}
              underline
              fontFamily={"NeohellenicRegular"}
              fontSize={18}
            >
              Não possui conta?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Cadastro");
              }}
            >
              <Text
                color={"#E29C31"}
                underline
                fontFamily={"NeohellenicRegular"}
                fontSize={18}
              >
                {" "}
                Cadastrar
              </Text>
            </TouchableOpacity>
          </Box>
        </VStack>
      </ImageBackground>
    </NativeBaseProvider>
  );
}
