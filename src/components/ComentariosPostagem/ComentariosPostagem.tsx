import { Box, Center, FlatList, Heading, Text } from "native-base";
import { ButtonPadrao } from "../Buttun/ButtonPadrao";
import CardComentarios from "../CardComentarios/CardComentarios";
import { useEffect, useState } from "react";
import IComentario from "../Interface/IComentario";
import api from "../API";


export default function ComentariosPostagem ({idPostagem}) {
    const [comentarios, setComentarios] = useState<IComentario[]>([]);


    console.log("idPostagemComentario",idPostagem)
    useEffect(() => {
        const fetchServicos = async () => {
          try {
            const response = await api.get(`/com_comentarios?&idPostagem=${idPostagem}`);
            setComentarios(response.data);
          } catch (error) {
            console.log("Erro ao buscar servicos: ", error);
          }
        };
    
        fetchServicos();
        console.log('comentarios',comentarios)

      }, [idPostagem]);


    return(
        <>
        {comentarios.length > 0 ? (
            <Box mb={30} mt={10}>
            <Heading color={"black"} mb={5} fontSize={18}>Comentários</Heading>
              <FlatList
              scrollEnabled = {false}
              data={comentarios}
              renderItem={({item}) => <CardComentarios PostagemComentarios={item}/>}
              showsHorizontalScrollIndicator={false}
              />
            </Box>
                  ) : (
      
                    <Box mb={40} mt={10}>
                    <Heading color={"black"} mb={5}  fontSize={18}>Comentários</Heading>
                    <Center>
                      <Text mt={4} fontSize={16} >Sem Comentários </Text>
                    </Center>
                    </Box>
                  )}
        </>
    )
}