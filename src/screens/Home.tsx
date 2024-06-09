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
  Heading,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import CardPostagem from "../components/CardPostagem/CardPostagem";

export default function Home() {
  const data = [
    {
      id: "1",
      url: "https://picsum.photos/202",
      name: "Nome do projeto",
      descricao:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      usuario: "Pedro",
      curtidas: "2",
      comentarios: "3",
    },
    {
      id: "2",
      url: "https://picsum.photos/201",
      name: "Nome do projeto",
      descricao:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      usuario: "Pedro",
      curtidas: "12",
      comentarios: "5",
    },
  ];

  return  (
    <View flex={1} p={5} backgroundColor={"#F4F4F4"}>
      <VStack flexDirection={"row"}>
        <Box pt={4}>
          <Ionicons name={"menu"} color={"#187BDC"} size={40} />
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
          renderItem={({ item }) => <CardPostagem data={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </Box>
    </View>
  );
}
