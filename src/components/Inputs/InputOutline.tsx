import { Input, IInputProps, Text } from "native-base";

interface InputProps extends IInputProps {
  placeholder?: string;
  tipo?: "text" | "password";
}

export function InputOutline({ placeholder, tipo, ...rest }: InputProps) {
  return (
    <>
      <Input
        variant={"outline"}
        placeholder={placeholder}
        size="md"
        w="80%"
        shadow={3}
        borderColor={"#E29C31"}
        rounded={"full"}
        color={"white"}
        type={tipo}
        {...rest}
      />
    </>
  );
}
