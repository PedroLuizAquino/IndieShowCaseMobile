import {
  Avatar,
  Box,
  Text,
  VStack,
  Spacer,
  Divider,
  ScrollView,
  Center,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import CardServico from "../components/CardServico";
import CardProfissional from "../components/CardProfissional";
import { ButtonEstilizado } from "../components/ButtonEstilizado";

export default function Agendamento({ navigation }) {
  const [numSecao, setNumSecao] = useState(0);

  const avancarSecao = () => {
    setNumSecao(numSecao + 1);
  };
  const voltarSecao = () => {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    } else {
      navigation.navigate("Login");
    }
  };

  return (
    <ScrollView flex={1} p={5} backgroundColor={"#1D1D1D"}>
      {numSecao >= 1 && (
        <VStack
          w={8}
          h={8}
          bg={"#E29C31"}
          rounded={"full"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <TouchableOpacity
            onPress={() => {
              voltarSecao();
            }}
          >
            <Ionicons name="arrow-back-outline" color="black" size={24} />
          </TouchableOpacity>
        </VStack>
      )}

      {numSecao === 0 && (
        <>
          <VStack flexDirection={"row"} mt={4}>
            <Box mt={2}>
              <Text
                color={"#E29C31"}
                fontSize={28}
                textTransform={"uppercase"}
                fontFamily={"NeohellenicBold"}
              >
                Agendamento
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
          <Text
            color={"white"}
            mt={2}
            fontSize={18}
            fontFamily={"NeohellenicRegular"}
          >
            Escolha seu serviço e profissional!
          </Text>
          <Text
            color={"#E29C31"}
            mt={8}
            fontSize={20}
            fontFamily={"NeohellenicBold"}
          >
            Serviços
          </Text>

          <Box flexDirection={"row"}>
            <CardServico />
            <Box mx={2}></Box>
            <CardServico />
          </Box>

          <Text
            color={"#E29C31"}
            mt={8}
            fontSize={20}
            fontFamily={"NeohellenicBold"}
          >
            Profissionais
          </Text>
          <Box flexDirection={"row"}>
            <CardProfissional />
            <Box mx={2}></Box>
            <CardProfissional />
          </Box>

          <Center>
            <ButtonEstilizado
              texto="Próximo"
              mb={32}
              onPress={() => {
                avancarSecao();
              }}
            />
          </Center>
        </>
      )}
      {numSecao === 1 && (
        <>
          <Text color={"#E29C31"} mt={8} fontSize={24} fontWeight={"bold"}>
            Suas escolhas:
          </Text>
          <Box
            backgroundColor={"black"}
            h={150}
            mt={4}
            borderRadius={"xl"}
            justifyContent={"center"}
          >
            <Text color={"white"} textAlign={"center"}>
              Aqui vao suas escolhas
            </Text>
          </Box>

          <Text color={"#E29C31"} mt={8} fontSize={24} fontWeight={"bold"}>
            Escolha dia e horario:
          </Text>
          <Box
            backgroundColor={"black"}
            h={150}
            mt={4}
            borderRadius={"xl"}
            justifyContent={"center"}
          >
            <Text color={"white"} textAlign={"center"}>
              Calendario
            </Text>
          </Box>

          <Box
            backgroundColor={"black"}
            h={30}
            mt={4}
            borderRadius={"xl"}
            justifyContent={"center"}
          >
            <Text color={"white"} textAlign={"center"}>
              Carrosel de horarios
            </Text>
          </Box>
          <Text color={"white"} textAlign={"center"}>
            Stepper aqui
          </Text>

          <Center mt={5} mb={12}>
            <ButtonEstilizado texto="Agendar" />
          </Center>
        </>
      )}
    </ScrollView>
  );
}
