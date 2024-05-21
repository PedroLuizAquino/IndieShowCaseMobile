import { useFonts } from "expo-font";
import { Avatar, Box, Center, Divider, Text, VStack } from "native-base";
import IProfisisonal from "../../@types/IProfissional";

interface ICardProfissionalProps {
  profissional: IProfisisonal;
}

export default function CardProfissional({
  profissional,
}: ICardProfissionalProps) {
  const [fontsCarregadas, fontsError] = useFonts({
    NeohellenicRegular: require("../../assets/fonts/Neohellenic/GFSNeohellenic-Regular.ttf"),
    NeohellenicBold: require("../../assets/fonts/Neohellenic/GFSNeohellenic-Bold.ttf"),
  });

  return (
    <Box
      backgroundColor={"#E29C31"}
      h={64}
      w={40}
      mt={4}
      borderRadius={"2xl"}
      justifyContent={"center"}
      key={profissional.pro_id}
    >
      <Center mb={5}>
        <Avatar
          position={"absolute"}
          zIndex={1}
          top={3}
          size={"lg"}
          source={{ uri: profissional.usu_foto }}
          borderWidth={3}
          borderColor={"#E29C31"}
        />
      </Center>
      <VStack h={48} bg={"black"} top={6} borderBottomRadius={"2xl"}>
        <Text
          color={"white"}
          textAlign={"center"}
          mt={8}
          fontFamily={"NeohellenicBold"}
        >
          {profissional.usu_nomeCompleto}
        </Text>
        <Center>
          <Divider bg={"#E29C31"} w={24} />
        </Center>
        <Box my={2}>
          <Box flexDirection={"row"} mt={1} ml={3}>
            <Avatar size={"xs"} />

            <Text color={"white"} ml={2} fontFamily={"NeohellenicRegular"}>
              Cabelo
            </Text>
          </Box>
          <Box flexDirection={"row"} mt={1} ml={3}>
            <Avatar size={"xs"} />

            <Text color={"white"} ml={2} fontFamily={"NeohellenicRegular"}>
              Barba
            </Text>
          </Box>
          <Box flexDirection={"row"} mt={1} ml={3}>
            <Avatar size={"xs"} />

            <Text color={"white"} ml={2} fontFamily={"NeohellenicRegular"}>
              Sobrancelha
            </Text>
          </Box>
        </Box>
        <Center>
          <Divider bg={"#E29C31"} w={24} mt={1} />
        </Center>
        <Text
          color={"#E29C31"}
          textAlign={"center"}
          fontFamily={"NeohellenicBold"}
        >
          Barbeiro
        </Text>
      </VStack>
    </Box>
  );
}
