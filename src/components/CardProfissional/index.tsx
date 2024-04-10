import { useFonts } from "expo-font";
import { Avatar, Box, Center, Divider, Spacer, Text } from "native-base";

export default function CardProfissional() {
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
      mb={32}
    >
      <Center>
        {" "}
        <Avatar
          position={"absolute"}
          zIndex={1}
          top={3}
          size={"lg"}
          source={{ uri: "https://github.com/yohan-araujo.png" }}
          borderWidth={3}
          borderColor={"#E29C31"}
        />
      </Center>
      <Box h={48} bg={"black"} top={6} borderBottomRadius={"2xl"}>
        <Text
          color={"white"}
          textAlign={"center"}
          mt={8}
          fontFamily={"NeohellenicBold"}
        >
          André Ramos
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
      </Box>
    </Box>
  );
}
