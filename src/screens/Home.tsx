import {
  Avatar,
  Box,
  Text,
  VStack,
  Spacer,
  Divider,
  ScrollView,
  Image,
} from "native-base";
import imgCarrosel from "../assets/images/imgCarroselHome.png";
import { useFonts } from "expo-font";

export default function Home() {
  const [fontsCarregadas, fontsError] = useFonts({
    NeohellenicRegular: require("../assets/fonts/Neohellenic/GFSNeohellenic-Regular.ttf"),
    NeohellenicBold: require("../assets/fonts/Neohellenic/GFSNeohellenic-Bold.ttf"),
  });

  return (
    <ScrollView flex={1} p={5} backgroundColor={"#1D1D1D"}>
      <VStack flexDirection={"row"}>
        <Box>
          <Text color="white" fontSize={20} fontFamily={"NeohellenicRegular"}>
            Bem vindo de volta,
          </Text>
          <Text color={"#E29C31"} fontSize={20} fontFamily={"NeohellenicBold"}>
            Yohan
            <Text color="white" fontSize={20} fontFamily={"NeohellenicRegular"}>
              !
            </Text>
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Avatar
            source={{ uri: "https://github.com/yohan-araujo.png" }}
            size={"lg"}
          />
        </Box>
      </VStack>

      <Divider mt={15} />
      <Box
        backgroundColor={"black"}
        h={125}
        mt={12}
        borderRadius={"xl"}
        justifyContent={"center"}
      >
        <Image
          source={imgCarrosel}
          alt="foto do carrosel"
          h={125}
          borderRadius={"xl"}
        />
      </Box>
      <Text color={"white"} textAlign={"center"}>
        Stepper aqui
      </Text>

      <VStack bg={"#E29C31"} mt={4} w={"24"} rounded={"full"}>
        <Text fontSize={16} textAlign={"center"} fontFamily={"NeohellenicBold"}>
          Categorias
        </Text>
      </VStack>

      <Text
        color={"#E29C31"}
        mt={8}
        fontSize={20}
        fontFamily={"NeohellenicBold"}
      >
        Serviços
      </Text>
      <Box
        backgroundColor={"black"}
        h={150}
        mt={4}
        borderRadius={"xl"}
        justifyContent={"center"}
      >
        <Text color={"white"} textAlign={"center"}>
          Aqui vai o carrosel de servicos
        </Text>
      </Box>

      <Text
        color={"#E29C31"}
        mt={8}
        fontSize={20}
        fontFamily={"NeohellenicBold"}
      >
        Profissionais
      </Text>
      <Box
        backgroundColor={"black"}
        h={250}
        mt={4}
        borderRadius={"xl"}
        justifyContent={"center"}
        mb={32}
      >
        <Text color={"white"} textAlign={"center"}>
          Aqui vai o carrosel de profissionais
        </Text>
      </Box>
    </ScrollView>
  );
}
