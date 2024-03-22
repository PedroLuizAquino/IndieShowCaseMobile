import { Input, IInputProps, Text } from 'native-base';

interface InputProps extends IInputProps {
  placeholder?: string;
  label?: string;
}

export function InputEstilizado({ label, placeholder, ...rest }: InputProps) {
  return (
    <>
      <Text color={'blue.800'} fontWeight={'bold'} fontSize={'md'}>
        {label}
      </Text>
      <Input
        variant={'rounded'}
        placeholder={placeholder}
        size="md"
        w="80%"
        bgColor="white"
        shadow={3}
        textAlign={'center'}
        {...rest}
      />
    </>
  );
}
