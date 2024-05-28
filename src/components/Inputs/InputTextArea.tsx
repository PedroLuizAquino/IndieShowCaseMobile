import { Input, IInputProps, Text, Icon, Box, TextArea } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import { InputPadrao } from "./InputPadrao";


interface InputProps extends IInputProps {
  placeholder?: string;
  tipo?: "text" | "password" ;
  tamanho?: string;
}

export function InputTextArea({ placeholder, tipo, tamanho = "100%",...rest }: InputProps) {
  return (
    <>
      <TextArea
        variant={"rounded"}
        autoCompleteType={InputPadrao}
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
        InputLeftElement={ <Icon as={<Ionicons  name={""} color={'#404040'} />} 
        size={5} ml={2} mb={9} color={'#404040'}/>}
        {...rest}
      />
    </>
  );
}
