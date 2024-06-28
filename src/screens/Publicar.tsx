import { Avatar, Box, Button, Center, Divider, FormControl, Heading, Image, ScrollView, Slide, Spacer, Text, TextArea, VStack, View } from 'native-base';
import { ButtonPadrao } from '../components/Buttun/ButtonPadrao';
import { InputPadrao } from '../components/Inputs/InputPadrao';
import { TouchableOpacity } from 'react-native';
import { InputTextArea } from '../components/Inputs/InputTextArea';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useCallback, useEffect, useState } from 'react';
import api from '../components/API';
import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function Publicar({ navigation }) {
  const [titulo, setTitulo] = useState("");
  const [tag, setTag] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [capa, setCapa] = useState(null);
  const [arquivo, setArquivo] = useState(null);
  const [ fotoUsuario, setFotoUsuario] = useState("");
  const [ usuarioId, setUsuarioId] = useState("");
  const [ usuarioNome, setUsuarioNome] = useState("");
  const [isOpenTop, setIsOpenTop] = useState(false);




  const handleSelectCapa = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Desculpe, precisamos de permissão para acessar a galeria!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setCapa(result.assets[0]);
    }
  };



  const handleSelectArquivo = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // Pega qualquer tipo de arquivo
        multiple: false, // Garante que apenas um arquivo pode ser selecionado
      });

      if (result.canceled === true) {
        setArquivo(result);
      }
    } catch (err) {
      console.error("Erro ao selecionar arquivo:", err);
      // Defina uma mensagem de erro adequada para o usuário
    }
  };

  useFocusEffect(
    useCallback(() => {
      const fetchIdUsuario = async () => {
        try {
          const id = await AsyncStorage.getItem("usuarioId");
          setUsuarioId(id);
        } catch (error) {
          console.error("Erro ao obter o id do cliente:", error);
        }
      };
  
      fetchIdUsuario();
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      const fetchNomeUsuario = async () => {
        try {
          const nomeUsuario = await AsyncStorage.getItem("usuarioNome");
          setUsuarioNome(nomeUsuario);
        } catch (error) {
          console.error("Erro ao obter o id do cliente:", error);
        }
      };
  
      fetchNomeUsuario();
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

  const handlePublicar = async () => {

    const NovaPostagem = {
      titulo: titulo,
      tag: tag,
      categoria: categoria,
      descricao: descricao,
      capa: "https://github.com/PedroLuizAquino.png",
      arquivo: "E_Cvk-Q4HRU", 
      comentarios: '0',
      curtidas: Math.floor(Math.random() * (12 - 1 + 1)) + 1,
      usuario: usuarioNome,
      usuarioId: usuarioId,

    }

    try{
      const publicarRespose = await api.post("/pos_postagem", NovaPostagem)

      if(publicarRespose.status === 201){
        //postagem publicada com sucesso
        setIsOpenTop(true)
        navigation.navigate('Home');
      }else{
        console.error("Erro ao fazer a postagem: ", publicarRespose.data);
        throw new Error("Erro ao realizar a postagem");
      }


    }catch(error){
      console.error("Erro ao publicar:", error);
      //definir mensagem de erro
    }

  }

  console.log(usuarioId)

  if(usuarioId){
  return (
    <ScrollView flex={1} bg={"#F4F4F4"}>
       <VStack  p={5}  flexDirection={"row"}>
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
          <Avatar
            source={{ uri: "https://github.com/GustavoTF25.png" }}
            size={"lg"}
          />
          )}
        </Box>
      </VStack>
      <Box mt={"-25px"} p={5}>
      <Divider  />
      </Box>


      <Heading
        color={"black"}
        textAlign={"center"}
        fontWeight={"bold"}
        mt={10}
      >
        Criar Postagem
      </Heading>
      <FormControl mt={4} alignItems={"center"}>

        <Box mt={4}>
          <Heading color={"black"} ml={2} fontSize={16}>Titulo da Postagem</Heading>
          <InputPadrao placeholder="Insira o título da postagem..." tamanho="80%" mt={3} value={titulo} onChangeText={setTitulo} />
        </Box>

        <Box mt={4}>
        <Heading color={"black"} ml={2} fontSize={16}>Tag</Heading>
        <InputPadrao placeholder="Insira a tag..." tamanho="80%" mt={3}  value={tag} onChangeText={setTag}  />
        </Box>

        <Box mt={4}>
        <Heading color={"black"} ml={2} fontSize={16}>Categoria</Heading>
        <InputPadrao  placeholder="Insira sua categoria..." tamanho="80%" mt={3}   value={categoria} onChangeText={setCategoria} />
        </Box>

        <Box mt={4}>
          <Heading color={"black"} ml={2} fontSize={16}>Descrição</Heading>
          <InputTextArea placeholder='Insira a descrição...' tamanho='80%'  value={descricao} onChangeText={setDescricao} />
        </Box>

        <Box mt={4}>
          <Heading color={"black"} ml={2} fontSize={16}>Capa</Heading>
          {/* <InputTextArea placeholder='Insira a capa...' tamanho='80%'/> */}

          <Button mt={2} onPress={handleSelectCapa}>Selecione uma Capa</Button>
          {capa && <Image source={{ uri: capa.uri }} style={{ width: 100, height: 100 }} />}

        </Box>

        <Box mt={4}>
          <Heading color={"black"} ml={2} fontSize={16}>Arquivo</Heading>
          {/* <InputTextArea placeholder='Insira a Arquivo...' tamanho='80%'/> */}
          <Button mt={2} onPress={handleSelectArquivo} >Selecionar Arquivo</Button>
          {arquivo && <Text>Arquivo selecionado: {arquivo.name}</Text>}
      
        </Box>

        <ButtonPadrao mt={8} mb={40} texto="Publicar" 
          onPress={handlePublicar}
        />
      
      </FormControl>
    </ScrollView>
  );
}else {
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
