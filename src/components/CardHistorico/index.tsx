import { Divider, Text, VStack } from "native-base";

export default function CardHistorico() {
  return (
    <VStack w={"95%"} h={120} bgColor={"black"} rounded={"3xl"} p={4}>
      <Text
        color={"#E29C31"}
        fontFamily={"NeohellenicBold"}
        textTransform={"uppercase"}
        fontSize={18}
      >
        Corte de cabelo
      </Text>
      <Divider />
      <Text
        color={"white"}
        fontFamily={"NeohellenicBold"}
        textTransform={"uppercase"}
        fontSize={18}
        my={1}
      >
        Carlos
      </Text>
      <Divider />
      <Text color={"gray.300"} fontFamily={"NeohellenicRegular"}>
        4 de janeiro de 2024 | 9:00 Horas
      </Text>
    </VStack>
  );
}
