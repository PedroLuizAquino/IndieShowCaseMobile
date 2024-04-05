import { useFonts } from "expo-font";
import { Button, IButtonProps, Text } from "native-base";

interface IBotaoProps extends IButtonProps {
  texto: string;
  outline?: boolean;
  tamanhoFonte?: number;
  login?: boolean;
}

export function ButtonEstilizado({
  texto,
  outline,
  tamanhoFonte = 12,
  login,
  ...rest
}: IBotaoProps) {
  const [fontsCarregadas, fontsError] = useFonts({
    NeohellenicRegular: require("../assets/fonts/Neohellenic/GFSNeohellenic-Regular.ttf"),
    NeohellenicBold: require("../assets/fonts/Neohellenic/GFSNeohellenic-Bold.ttf"),
  });

  return (
    <Button
      w="50%"
      bg="#E29C31"
      borderRadius="3xl"
      {...rest}
      px={5}
      _pressed={{ backgroundColor: "black", _text: { color: "white" } }}
    >
      <Text
        color={login ? "white" : "black"}
        textTransform={"uppercase"}
        fontFamily={"NeohellenicBold"}
        fontSize={18}
      >
        {texto}
      </Text>
    </Button>
  );
}
