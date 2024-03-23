import { Input, IInputProps, Text } from 'native-base';

interface InputProps extends IInputProps {
  placeholder?: string;
}

export function InputOutline({ placeholder, ...rest }: InputProps) {
  return (
    <>
      <Input
        variant={'outline'}
        placeholder={placeholder}
        size="md"
        w="80%"
        shadow={3}
        borderColor={'#E29C31'}
        rounded={'full'}
        {...rest}
      />
    </>
  );
}
