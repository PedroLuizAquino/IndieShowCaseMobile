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
import { useCallback, useEffect, useState } from "react";
import IPostagem from "../components/Interface/IPostagem";
import api from "../components/API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ButtonPadrao } from "../components/Buttun/ButtonPadrao";
import IUsuario from "../components/Interface/IUsuario";
import { useFocusEffect } from "@react-navigation/native";



export default function Perfil({navigation}) {

  const biografia = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry";
  
  
  const [postagem, setPostagem] = useState<IPostagem[]>([]);
  const [usuarioId, setUsuarioId] = useState("");
  const [usuario, setUsuario] = useState<IUsuario | null>(null); // Estado inicial como null


  useFocusEffect(
    useCallback(() => {
      const fetchNomeUsuario = async () => {
        try {
          const id = await AsyncStorage.getItem("usuarioId");
          setUsuarioId(id);
        } catch (error) {
          console.error("Erro ao obter o id do cliente:", error);
        }
      };
  
      fetchNomeUsuario();
    }, [])
  );

  console.log("id do usuario postagem",usuarioId)
  useEffect(() => {
      const fetchIdUsuario = async () => {
        try {
          const response = await api.get(`/usu_usuarios?&id=${usuarioId}`);
          setUsuario(response.data[0]);
        } catch (error) {
          console.log("Erro ao buscar servicos: ", error);
        }
      };
  
      fetchIdUsuario();

    }, [usuarioId]);

    console.log('usuario',usuario)

  useFocusEffect(
    useCallback(() => {
      const fetchPostagem = async () => {
        try {
          const response = await api.get(`/pos_postagem?order=desc&usuario=${usuario.nome}`);
          setPostagem(response.data);
        } catch (error) {
          console.log("Erro ao buscar servicos: ", error);
        }
      };
  
      fetchPostagem();
    }, [usuario])
  );


  console.log(usuario)
  console.log("usuarioId",usuarioId)
  if(usuario){
  return (
    <ScrollView flex={1} p={5} backgroundColor={"#F4F4F4"}>
      <VStack flexDirection={"row"}>
      <Box  pl={5}>
          <Heading color="#202020" fontSize={20}>
            IndieShowcase
          </Heading>
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
          <Ionicons name={"log-out"} color={"#f94449"} size={40} />
        </Box>
        </TouchableOpacity>
 
      </VStack>
      <VStack flexDirection={'column'}  alignItems={'center'} mb={10} mt={10}>
        <Box>
        {usuario.foto? (
              <Avatar
              source={{ uri: usuario.foto }}
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
          <Heading fontSize={16}>{usuario.nome}</Heading>
        </Box>
        <Box mt={3}>
          <Heading fontStyle={'italic'}>"{biografia}"</Heading>
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
                <Heading mt={4} fontSize={16} >Nenhuma Postagem encontrada </Heading>
                <ButtonPadrao mt={4} texto="Criar Postagem" onPress={() => navigation.navigate("Publicar")}/>
              </Center>
              </Box>
            )}
    </ScrollView> 
  );
  } else {
    return(
    <View
    flex={1}
    p={5}
    backgroundColor={"#F4F4F4"}
    alignItems={"center"}
    justifyContent={"center"}
  >
      <Heading>Não possui uma conta ? </Heading>
      <ButtonPadrao  mt={4} texto="Crie uma conta aqui " onPress={()=> navigation.navigate('Cadastro')}/>

      <Heading mt={10}>Já possui uma conta ? </Heading>
      <ButtonPadrao mt={4} texto="Entre aqui " onPress={()=> navigation.navigate('Login')}/>

    </View>
    )
  }
}
