import { Button, IButtonProps, Text } from 'native-base';

interface IBotaoProps extends IButtonProps {
  texto: string;
  outline?: boolean;
}

export function ButtonEstilizado({ texto, outline, ...rest }: IBotaoProps) {
  return (
    <Button w="50%" bg="#E29C31" borderRadius="3xl" {...rest} px={5}>
      <Text color={'white'} fontWeight={'bold'}>
        {' '}
        {texto}
      </Text>
    </Button>
  );
}
