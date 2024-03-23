import {
  Box,
  Divider,
  FormControl,
  NativeBaseProvider,
  Text,
  VStack,
} from 'native-base';
import bgLogin from '../assets/images/bgLogin.png';
import { ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { InputEstilizado } from '../components/InputEstilizado';
import { ButtonEstilizado } from '../components/ButtonEstilizado';
import { useFonts } from 'expo-font';

export default function Login({ navigation }) {
  const [fontsCarregadas, fontsError] = useFonts({
    Amithen: require('../assets/fonts/Amithen/Amithen.otf'),
  });

  if (!fontsCarregadas && !fontsError) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <ImageBackground
        source={bgLogin}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
      >
        <VStack flex={1} alignItems={'center'} p={5}>
          <Text
            color={'white'}
            fontSize={'2xl'}
            textAlign={'center'}
            mt={24}
            fontFamily={'Amithen'}
          >
            Desde{'      '}2021
          </Text>

          <Divider w={'45%'} />

          <Text
            color={'white'}
            fontSize={'54'}
            textAlign={'center'}
            fontFamily={'Amithen'}
          >
            BarberShop
          </Text>

          <Box mt={64}>
            <FormControl>
              <InputEstilizado placeholder="E-mail" mt={4} />
              <InputEstilizado placeholder="Senha" type="password" mt={4} />
            </FormControl>
          </Box>

          <ButtonEstilizado
            texto="Entrar"
            mt={5}
            onPress={() => {
              navigation.navigate('Tabs');
            }}
          />
          <Box
            w={'100%'}
            flexDirection={'row'}
            justifyContent={'center'}
            mt={8}
          >
            <Text color={'white'} underline>
              Esqueceu a{' '}
            </Text>
            <TouchableOpacity>
              <Text color={'yellow.500'} underline>
                {' '}
                senha?
              </Text>
            </TouchableOpacity>
          </Box>
          <Box
            w={'100%'}
            flexDirection={'row'}
            justifyContent={'center'}
            mt={2}
          >
            <Text color={'white'} underline>
              Não possui conta?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Cadastro');
              }}
            >
              <Text color={'yellow.500'} underline>
                {' '}
                Cadastrar
              </Text>
            </TouchableOpacity>
          </Box>
        </VStack>
      </ImageBackground>
    </NativeBaseProvider>
  );
}
