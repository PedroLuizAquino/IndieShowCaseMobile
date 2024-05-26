import { Input, IInputProps, Text, Icon, Box } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";


interface InputProps extends IInputProps {
  placeholder?: string;
  tipo?: "text" | "password";
}

export function InputPesquisa({ placeholder, tipo, ...rest }: InputProps) {
  return (
    <Box>
      <Input
        variant={"rounded"}
        placeholder={placeholder}
        placeholderTextColor={"#F4F4F4"}
        size="md"
        w="100%"
        bgColor="#404040"
        shadow={0}
        textAlign={"left"}
        borderWidth={0}
        type={tipo}
        color={'#F4F4F4'}
        InputLeftElement={ <Icon as={<Ionicons  name={"search-outline"} color={"white"} size={20} />} 
        size={5} ml={2} color={'white'}/>}
        {...rest}
      />
    </Box>
  );
}
