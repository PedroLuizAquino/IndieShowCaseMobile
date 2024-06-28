import { Button, IButtonProps, Text } from "native-base";

interface IBotaoProps extends IButtonProps {
  texto: string;
  border?: boolean;
  tamanhoFonte?: number;
  cor?: string;
  corDaFonte?: string;
  
}

export function ButtonPadrao({
  texto,
  border,
  cor = '#187BCD',
  tamanhoFonte = 16,
  corDaFonte = 'white',
  ...rest
}: IBotaoProps) {
  return (
    <Button
      w="60%"
      bg={cor}
      borderRadius="3xl"
      borderColor={border? 'black' : ''}
      borderWidth={border? 2 : 0}
      {...rest}
      px={5}
      _pressed={{ backgroundColor: border? "#DBDBDB" : "#125C99", _text: { color: "white" } }}
    >
      <Text
      color={corDaFonte}
      fontSize={tamanhoFonte}
      >
        {texto}
        </Text>
    </Button>
  );
}
