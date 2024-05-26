import { Input, IInputProps, Text, Icon, Box } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";


interface InputProps extends IInputProps {
  placeholder?: string;
  tipo?: "text" | "password" ;
  tamanho?: string;
}

export function InputPadrao({ placeholder, tipo, tamanho = "100%",...rest }: InputProps) {
  return (
    <>
      <Input
        variant={"rounded"}
        placeholder={placeholder}
        placeholderTextColor={"#404040"}
        m={2}
        size="md"
        w={tamanho}
        bgColor="#F4F4F4" 
        shadow={0}
        textAlign={"left"}
        borderWidth={2}
        borderColor={'#404040'}
        type={tipo}
        color={'#404040'}
        InputLeftElement={ <Icon as={<Ionicons  name={"search-outline"} color={'#404040'} size={20} />} 
        size={5} ml={2} color={'#404040'}/>}
        {...rest}
      />
    </>
  );
}
