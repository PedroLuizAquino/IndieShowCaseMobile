import { useFonts } from "expo-font";
import { Input, IInputProps, Text } from "native-base";

interface InputProps extends IInputProps {
  placeholder?: string;
  tipo?: "text" | "password";
}

export function InputEstilizado({ placeholder, tipo, ...rest }: InputProps) {
  const [fontsCarregadas, fontsError] = useFonts({
    NeohellenicRegular: require("../assets/fonts/Neohellenic/GFSNeohellenic-Regular.ttf"),
    NeohellenicBold: require("../assets/fonts/Neohellenic/GFSNeohellenic-Bold.ttf"),
  });
  return (
    <>
      <Input
        variant={"rounded"}
        placeholder={placeholder}
        placeholderTextColor={"black"}
        size="md"
        w="80%"
        bgColor="white"
        shadow={3}
        textAlign={"center"}
        borderWidth={0}
        fontFamily={"NeohellenicBold"}
        type={tipo}
        {...rest}
      />
    </>
  );
}
