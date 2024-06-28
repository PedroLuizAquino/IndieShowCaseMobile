import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar, Box, Divider, Heading, ScrollView, Spacer, Text, VStack, View } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import Video from 'react-native-video';
import videoPostagem from '../assets/video/videoPostagem.mp4';  // Importando o vídeo local
import YoutubeIframe from 'react-native-youtube-iframe'
import IPostagem from '../components/Interface/IPostagem';
import api from '../components/API';
import { ActivityIndicator } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { DetalhesPostagemUsuario } from '../components/DetalhesPostagemUsuario/DetalhesPostagemUsuario';
import { ButtonPadrao } from '../components/Buttun/ButtonPadrao';
import ComentariosPostagem from '../components/ComentariosPostagem/ComentariosPostagem';
import Ionicons from "react-native-vector-icons/Ionicons";


export default function DetalhePostagem({ route }) {
  const { id } = route.params;
  const [ fotoUsuario, setFotoUsuario] = useState("");
  const [ videoReady, setVideoReady] = useState(false);
  const [postagem, setPostagem] = useState<IPostagem | null>(null); // Estado inicial como null

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
  });

  useEffect(() => {
    const fetchPostagem = async () => {
      try {
        const response = await api.get(`/pos_postagem?id=${id}`);
        console.log('postagem',response.data[0])
        console.log('id',id)
        setPostagem(response.data[0]);
      } catch (error) {
        console.log("Erro ao buscar servicos: ", error);
      }
    };

    fetchPostagem();

  }, [id]);

  const onFullScreenChange = useCallback((isFullScreen: boolean) => {
        if(isFullScreen){
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        }else{
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        }
  },[])

  
  // Aqui você pode buscar os detalhes da postagem usando o id
  if(postagem){
  return (
    <ScrollView flex={1} p={5} backgroundColor={"#F4F4F4"}>
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
      {/* <Video
          //source={{uri: '../assets/video/videoPostagem.mp4'}} // Usando vídeo local se não houver vídeo remoto    
          source={require('../assets/video/videoPostagem.mp4')}
          style={{ width: '100%', height: 200 }}
          controls={true}
          resizeMode="contain"
        /> */}
        <Box>
        <YoutubeIframe
        videoId={postagem.arquivo ? postagem.arquivo : 'scPBmrzdD0g'}
        height={ videoReady? 200 : 100}
        onReady={() =>  setVideoReady(true)}
        onFullScreenChange={onFullScreenChange}
        />
        {!videoReady && <ActivityIndicator color='red'  /> }

        </Box>
        <DetalhesPostagemUsuario usuarioId={postagem.usuarioId}/>
        <VStack flexDirection={"row"} mt={10} >
            <Box >
                <ButtonPadrao ml={10} texto='Curtir'/>
            </Box>
            <Spacer/>
            <Box>
            <ButtonPadrao ml={5} texto='Baixar'/>
            </Box>
        </VStack>
        <ComentariosPostagem idPostagem={postagem.id}/>
        
      </Box>
     
    </ScrollView>
  );
}else {
    return (
        <Heading color={'black'}>Carregando...</Heading> 
    )
}
}

