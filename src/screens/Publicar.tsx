import { Avatar, Box, Button, Center, Divider, FormControl, Heading, Image, ScrollView, Spacer, Text, TextArea, VStack } from 'native-base';
import { ButtonPadrao } from '../components/Buttun/ButtonPadrao';
import { InputPadrao } from '../components/Inputs/InputPadrao';
import { TouchableOpacity } from 'react-native';
import { InputTextArea } from '../components/Inputs/InputTextArea';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from 'react';
import api from '../components/API';
import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';

export default function Publicar({ navigation }) {
  const [titulo, setTitulo] = useState("");
  const [tag, setTag] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [capa, setCapa] = useState(null);
  const [arquivo, setArquivo] = useState(null);

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
  const handlePublicar = async () => {
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('tag', tag);
    formData.append('categoria', categoria);
    formData.append('descricao', descricao);
    if(capa){
      formData.append('capa', capa);
    }
    if(arquivo){
      formData.append('arquivo', arquivo);
    }


    ///postagens/publicar

    try{
      const publicarRespose = await api.post("/postagens/publicar", formData,{
        headers:{
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${"token"}`,
        }
      })

      if(publicarRespose.status === 201){
        //postagem publicada com sucesso
        navigation.navigate('Home');
      }else{
        console.error("Erro ao cadastrar usuário: ", publicarRespose.data);
        throw new Error("Erro ao cadastrar usuário");
      }


    }catch(error){
      console.error("Erro ao publicar:", error);
      //definir mensagem de erro
    }

  }



  return (
    <ScrollView flex={1} bg={"#F4F4F4"}>
       <VStack  p={5}  flexDirection={"row"}>
        <Box pt={4}>
          <Ionicons name={"menu"} color={"#187BDC"} size={40} 
           onPress={() => {
            navigation.navigate("Drawer");
          }}
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
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      
      </FormControl>
    </ScrollView>
  );
}
