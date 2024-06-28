import {
  Avatar,
  Box,
  Center,
  FlatList,
  HStack,
  Heading,
  ScrollView,
  Spacer,
  Text,
  VStack,
  View,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import CardPostagem from "../components/CardPostagem/CardPostagem";
import { TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import IPostagem from "../components/Interface/IPostagem";
import api from "../components/API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ButtonPadrao } from "../components/Buttun/ButtonPadrao";



export default function Perfil({navigation}) {

  const biografia = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry";
  
  
  const [postagem, setPostagem] = useState<IPostagem[]>([]);
  const [usuarioNome, setUsuarioNome] = useState("");
  const [usuarioFoto, setUsuarioFoto] = useState("");



  useEffect(() => {
    const fetchNomeUsuario = async () => {
      try {
        const nome = await AsyncStorage.getItem("usuarioNome");
        setUsuarioNome(nome);
      } catch (error) {
        console.error("Erro ao obter o id do cliente:", error);
      }
    };

    fetchNomeUsuario();
  }, []);

  useEffect(() => {
    const fetchFotoUsuario = async () => {
      try {
        const foto = await AsyncStorage.getItem("usuarioFoto");
        setUsuarioFoto(foto);
      } catch (error) {
        console.error("Erro ao obter o id do cliente:", error);
      }
    };

    fetchFotoUsuario();
  }, []);


  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const response = await api.get(`/pos_postagem?order=desc&usuario=${usuarioNome}`);
        setPostagem(response.data);
      } catch (error) {
        console.log("Erro ao buscar servicos: ", error);
      }
    };

    fetchServicos();
  }, []);

  return (
    <ScrollView flex={1} p={5} backgroundColor={"#F4F4F4"}>
      <VStack flexDirection={"row"}>
      <Box  pl={5}>
          <Text color="#202020" fontSize={20}>
            IndieShowcase
          </Text>
        </Box>
        <Spacer />
      <TouchableOpacity
          onPress={() => {
             AsyncStorage.removeItem("usuarioId");
             AsyncStorage.removeItem("usuarioNome",);
             AsyncStorage.removeItem("usuarioFoto")
            navigation.navigate('Login');
          }}
        >
        <Box>
          <Ionicons name={"settings"} color={"#187BDC"} size={40} />
        </Box>
        </TouchableOpacity>
 
      </VStack>
      <VStack flexDirection={'column'}  alignItems={'center'} mb={10} mt={10}>
        <Box>
        {usuarioFoto? (
              <Avatar
              source={{ uri: usuarioFoto }}
              size={"2xl"}
            />
          ): (
          <Avatar
            source={{ uri: "https://github.com/GustavoTF25.png" }}
            size={"2xl"}
          />
          )}
        </Box>
        <Box mt={2}>
          <Text fontSize={16}>{usuarioNome}</Text>
        </Box>
        <Box mt={3}>
          <Text fontStyle={'italic'}>"{biografia}"</Text>
        </Box>
      </VStack>
      {postagem.length > 0 ? (
      <Box mb={40}>
      <Heading color={"black"} mb={5}  fontSize={18}>Minhas Postagens</Heading>
        <FlatList
        scrollEnabled = {false}
        data={postagem}
        renderItem={({item}) => <CardPostagem data={item} navigation={navigation}/>}
        showsHorizontalScrollIndicator={false}
        />
      </Box>
            ) : (

              <Box mb={40}>
              <Heading color={"black"} mb={5}  fontSize={18}>Minhas Postagens</Heading>
              <Center>
                <Text mt={4} fontSize={16} >Nenhuma Postagem encontrada </Text>
                <ButtonPadrao mt={4} texto="Criar Postagem" onPress={() => navigation.navigate("Publicar")}/>
              </Center>
              </Box>
            )}
    </ScrollView> 
  );
}
