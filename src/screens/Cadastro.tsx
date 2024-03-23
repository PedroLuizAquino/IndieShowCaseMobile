import {
  Avatar,
  Box,
  Center,
  FormControl,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ButtonEstilizado } from '../components/ButtonEstilizado';
import { InputOutline } from '../components/InputOutline';

export default function Cadastro({ navigation }) {
  return (
    <VStack flex={1} bg={'#1D1D1D'} justifyContent={'center'}>
      <Text
        fontSize={36}
        color={'#E29C31'}
        textAlign={'center'}
        fontWeight={'bold'}
      >
        Cadastrar
      </Text>
      <FormControl mt={4}>
        <Center>
          <Text color={'white'} ml={4} fontWeight={'bold'}>
            Nome
          </Text>
          <InputOutline placeholder="Insira seu nome completo..." mt={1} />
        </Center>
        <Center mt={4}>
          <Text color={'white'} ml={4} fontWeight={'bold'}>
            Email
          </Text>
          <InputOutline placeholder="Insira seu e-mail..." mt={1} />
        </Center>

        <Box mt={4}>
          <Text color={'white'} ml={9}>
            Foto de perfil
          </Text>
          <Text color={'white'} ml={9}>
            Envie um arquivo do seu dispositivo
          </Text>
          <Box flexDirection={'row'} mt={2} px={12}>
            <Avatar
              size={'lg'}
              source={{ uri: 'https://github.com/yohan-araujo.png' }}
            />
            <Spacer />
            <ButtonEstilizado texto="Enviar Foto" mt={1} h={12} />
          </Box>
        </Box>
        <Center mt={4}>
          <Text color={'white'} ml={4} fontWeight={'bold'}>
            Telefone
          </Text>
          <InputOutline placeholder="(00)00000-0000" mt={1} />
        </Center>
        <Center mt={4}>
          <Text color={'white'} ml={4} fontWeight={'bold'}>
            Senha
          </Text>
          <InputOutline placeholder="Insira sua senha..." mt={1} />
        </Center>
        <Center mt={4}>
          <Text color={'white'} ml={4} fontWeight={'bold'}>
            Confirmar a Senha
          </Text>
          <InputOutline placeholder="Insira sua senha novamente..." mt={1} />
        </Center>
      </FormControl>
      <Center mt={4}>
        <ButtonEstilizado texto="Cadastrar" />
      </Center>
      <Box w={'100%'} flexDirection={'row'} justifyContent={'center'} mt={2}>
        <Text color={'white'} underline>
          Ja possui conta?{' '}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cadastro');
          }}
        >
          <Text color={'yellow.500'} underline>
            {' '}
            Entrar
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
