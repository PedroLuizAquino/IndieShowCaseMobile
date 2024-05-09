import { Avatar, Image, ScrollView, Text, VStack } from "native-base";
import bgPerfil from "../assets/images/bgPerfil.png";
import CardHistorico from "../components/CardHistorico";

export default function Perfil() {
  return (
    <ScrollView flex={1} bg={"#1D1D1D"}>
      <Image
        w={"100%"}
        h={200}
        source={bgPerfil}
        alt="Foto de fundo do perfil"
      />
      <VStack
        position="absolute"
        top={32}
        w={"100%"}
        h={150}
        roundedTop={52}
        bgColor={"#1D1D1D"}
        alignItems={"center"}
      >
        <VStack position={"absolute"}>
          <Avatar
            source={{ uri: "https://github.com/yohan-araujo.png" }}
            size={"2xl"}
            bottom={12}
          />
        </VStack>
      </VStack>
      <VStack justifyContent={"center"} alignItems={"center"} mt={8}>
        <Text
          color={"#E29C31"}
          fontSize={32}
          textTransform={"uppercase"}
          fontFamily={"NeohellenicBold"}
        >
          Yohan Neves
        </Text>
      </VStack>

      <VStack p={5}>
        <Text color={"#E29C31"} fontFamily={"NeohellenicBold"} fontSize={24}>
          Historico:
        </Text>

        <VStack mt={5}>
          <CardHistorico />
        </VStack>

        <Text
          color={"white"}
          fontFamily={"NeohellenicRegular"}
          fontSize={16}
          textAlign={"right"}
          mt={4}
          mr={6}
          underline
        >
          Ver mais..
        </Text>
      </VStack>
    </ScrollView>
  );
}
