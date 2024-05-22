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
} from "native-base";
import { useFonts } from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";
import CardPostagem from "../components/CardPostagem/CardPostagem";

export default function Home() {
  const [fontsCarregadas, fontsError] = useFonts({
    NeohellenicRegular: require("../assets/fonts/Neohellenic/GFSNeohellenic-Regular.ttf"),
    NeohellenicBold: require("../assets/fonts/Neohellenic/GFSNeohellenic-Bold.ttf"),
  });


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
    <ScrollView flex={1} p={5} backgroundColor={"#1D1D1D"}>
      <VStack flexDirection={"row"}>
        <Box pt={4}>
        <Ionicons
                name={'menu'}
                color={"#E29C31"}
                size={40}
              />
        </Box>
        <Box pt={5} pl={5}>
          <Text color="white" fontSize={20}>
            IndieShowCase
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
      <Box>
        <FlatList
        data={data}
        renderItem={({item}) => <CardPostagem data={item}/>}
        showsHorizontalScrollIndicator={false}
        />
      </Box>
    </ScrollView>
  );
}
