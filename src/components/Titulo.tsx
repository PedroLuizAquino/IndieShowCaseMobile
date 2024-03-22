import { useFonts } from 'expo-font';
import { Text } from 'native-base';

export default function Titulo() {
  const [fontCarregada] = useFonts({
    Amithen: require('../assets/fonts/Amithen.ttf'),
  });

  return <Text fontFamily={'Amithen'}>BarberShop</Text>;
}
