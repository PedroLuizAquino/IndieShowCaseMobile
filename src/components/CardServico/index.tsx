import { useFonts } from "expo-font";
import { Box, Image, Text } from "native-base";
import IServico from "../../@types/IServico";

interface CardServico {
  servico: IServico;
}

export default function CardServico({ ser_id, ser_tipo, ser_preco }: IServico) {
  const [fontsCarregadas, fontsError] = useFonts({
    NeohellenicRegular: require("../../assets/fonts/Neohellenic/GFSNeohellenic-Regular.ttf"),
    NeohellenicBold: require("../../assets/fonts/Neohellenic/GFSNeohellenic-Bold.ttf"),
  });

  return (
    <Box
      backgroundColor={"black"}
      h={175}
      w={40}
      mt={4}
      borderRadius={"2xl"}
      justifyContent={"center"}
      key={ser_id}
    >
      <Image
        h={100}
        source={{ uri: "https://picsum.photos/150" }}
        borderTopLeftRadius={"2xl"}
        borderTopRightRadius={"2xl"}
        alt={"servicos"}
      />
      <Box h={75}>
        <Text
          color={"white"}
          textAlign={"center"}
          mt={3}
          fontFamily={"NeohellenicBold"}
          fontSize={18}
        >
          {ser_tipo}
        </Text>
        <Text
          color={"white"}
          textAlign={"center"}
          fontFamily={"NeohellenicRegular"}
        >
          Preço: R${ser_preco.toFixed(2)}
        </Text>
      </Box>
    </Box>
  );
}
