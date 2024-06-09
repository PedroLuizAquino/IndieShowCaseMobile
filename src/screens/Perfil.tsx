import {
  Avatar,
  Box,
  FlatList,
  HStack,
  Heading,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import CardPostagem from "../components/CardPostagem/CardPostagem";
import { TouchableOpacity } from "react-native";

const data = [
  {
    id: '1',
    url: 'https://picsum.photos/204',
    name:'Nome do projeto',
    descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    usuario: 'Pedro',
    curtidas: '2',
    comentarios: '3'
  },
  {
    id: '2',
    url: 'https://picsum.photos/203',
    name:'Nome do projeto',
    descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    usuario: 'Pedro',
    curtidas: '12',
    comentarios: '5'
  }
]; 


export default function Perfil({navigation}) {
  const nome = 'Pedro'
  const biografia = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
  return (
    <ScrollView flex={1} p={5} backgroundColor={"#F4F4F4"}>
      <VStack flexDirection={"row-reverse"}>
      <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
        <Box>
          <Ionicons name={"settings"} color={"#187BDC"} size={40} />
        </Box>
        </TouchableOpacity>
      </VStack>
      <VStack flexDirection={'column'}  alignItems={'center'} mb={10} mt={5}>
        <Box>
          <Avatar
            source={{ uri: "https://github.com/PedroLuizAquino.png" }}
            size={"2xl"}
          />
        </Box>
        <Box mt={2}>
          <Text fontSize={16}>{nome}</Text>
        </Box>
        <Box mt={3}>
          <Text fontStyle={'italic'}>"{biografia}"</Text>
        </Box>
      </VStack>
      <Box mb={40}>
      <Heading color={"black"} mb={5}  fontSize={18}>Minhas Postagens</Heading>
        <FlatList
        scrollEnabled = {false}
        data={data}
        renderItem={({item}) => <CardPostagem data={item}/>}
        showsHorizontalScrollIndicator={false}
        />
      </Box>
    </ScrollView>
  );
}
