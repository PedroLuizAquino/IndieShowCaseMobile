import { Button, IButtonProps, Text } from 'native-base';

interface IBotaoProps extends IButtonProps {
  texto: string;
  outline?: boolean;
}

export function ButtonEstilizado({ texto, outline, ...rest }: IBotaoProps) {
  return (
    <Button
      w="50%"
      bg="yellow.500"
      borderRadius="3xl"
      {...rest}
      px={5}
      fontWeight={'bold'}
    >
      <Text color={'white'}> {texto}</Text>
    </Button>
  );
}
