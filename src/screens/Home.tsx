import {
  Avatar,
  Box,
  Text,
  VStack,
  Spacer,
  Divider,
  ScrollView,
  Image,
  Row,
  FlatList,
  View,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import CardPostagem from "../components/CardPostagem/CardPostagem";

export default function Home() {



  const data = [
    {
      id: '1',
      url: 'https://cdn.discordapp.com/attachments/722058173095084064/948073992944762880/iu.png?ex=664e1cf6&is=664ccb76&hm=b75df47540b49b00d8dc41b1e4e076ecb050825266b607984618708ee7e83ec2&',
      name:'Nome do projeto',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      usuario: 'Pedro',
      curtidas: '2',
      comentarios: '3'
    },
    {
      id: '2',
      url: 'https://cdn.discordapp.com/attachments/722058173095084064/948073992944762880/iu.png?ex=664e1cf6&is=664ccb76&hm=b75df47540b49b00d8dc41b1e4e076ecb050825266b607984618708ee7e83ec2&',
      name:'Nome do projeto',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      usuario: 'Pedro',
      curtidas: '2',
      comentarios: '3'
    }
  ]; 

  return (
    <View flex={1} p={5} backgroundColor={"#F4F4F4"}>
      <VStack flexDirection={"row"}>
        <Box pt={4}>
        <Ionicons
                name={'menu'}
                color={"#187BDC"}
                size={40}
              />
        </Box>
        <Box pt={5} pl={5}>
          <Text color="#202020" fontSize={20}>
          IndieShowcase
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Avatar
            source={{ uri: "https://github.com/PedroLuizAquino.png" }}
            size={"lg"}
          />
        </Box>
      </VStack>

      <Divider mt={15} mb={10} />
      <Box mb={40}>
        <FlatList
        data={data}
        renderItem={({item}) => <CardPostagem data={item}/>}
        showsHorizontalScrollIndicator={false}
        />
      </Box>
    </View>
  );
}
