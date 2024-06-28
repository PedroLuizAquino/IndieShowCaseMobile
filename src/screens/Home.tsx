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
import { useCallback, useEffect, useState } from "react";
import api from "../components/API";
import IPostagem from "../components/Interface/IPostagem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export default function Home({navigation}) {

  const [postagem, setPostagem] = useState<IPostagem[]>([]);
  const [ fotoUsuario, setFotoUsuario] = useState("");


  useFocusEffect(
    useCallback(() => {
      const fetchPostagem = async () => {
        try {
          const response = await api.get("/pos_postagem?order=desc");
          setPostagem(response.data);
        } catch (error) {
          console.log("Erro ao buscar servicos: ", error);
        }
      };
  
      fetchPostagem();
    }, [])
  );

  
useFocusEffect(
  useCallback(() => {
    const fetchFotoUsuario = async () => {
      try {
        const foto = await AsyncStorage.getItem("usuarioFoto");
        setFotoUsuario(foto);
      } catch (error) {
        console.error("Erro ao obter o id do cliente:", error);
      }
    };

    fetchFotoUsuario();
  }, [])
);

  console.log(fotoUsuario)
  return  (
    <View flex={1} p={5} backgroundColor={"#F4F4F4"}>
      <VStack flexDirection={"row"}>
        <Box pt={5} pl={5}>
          <Heading color="#202020" fontSize={20}>
            IndieShowcase
          </Heading>
        </Box>
        <Spacer />
        <Box>
          {fotoUsuario? (
              <Avatar
              source={{ uri: fotoUsuario }}
              size={"lg"}
            />
          ): (
          <></>
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
