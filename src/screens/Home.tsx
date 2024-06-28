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
import { useEffect, useState } from "react";
import api from "../components/API";
import IPostagem from "../components/Interface/IPostagem";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home({navigation}) {

  const [postagem, setPostagem] = useState<IPostagem[]>([]);
  const [ fotoUsuario, setFotoUsuario] = useState("");


  useEffect(() => {
    const fetchPostagem = async () => {
      try {
        const response = await api.get("/pos_postagem?order=desc");
        setPostagem(response.data);
      } catch (error) {
        console.log("Erro ao buscar servicos: ", error);
      }
    };

    fetchPostagem();
  }, []);


  useEffect(() => {
    const fetchFotoUsuario = async () => {
      try {
        const foto = await AsyncStorage.getItem("usuarioFoto");
        setFotoUsuario(foto);
      } catch (error) {
        console.error("Erro ao obter o id do cliente:", error);
      }
    };

    fetchFotoUsuario();
  }, []);

  return  (
    <View flex={1} p={5} backgroundColor={"#F4F4F4"}>
      <VStack flexDirection={"row"}>
        <Box pt={5} pl={5}>
          <Text color="#202020" fontSize={20}>
            IndieShowcase
          </Text>
        </Box>
        <Spacer />
        <Box>
          {fotoUsuario? (
              <Avatar
              source={{ uri: fotoUsuario }}
              size={"lg"}
            />
          ): (
          <Avatar
            source={{ uri: 'https://github.com/GustavoTF25.png' }}
            size={"lg"}
          />
          )}
        </Box>
      </VStack>

      <Divider mt={15} mb={10} />
      <Box mb={40}>
        <FlatList
          data={postagem}
          renderItem={({ item }) => <CardPostagem data={item} navigation={navigation} />}
          showsHorizontalScrollIndicator={false}
        />
      </Box>
    </View>
  );
}
