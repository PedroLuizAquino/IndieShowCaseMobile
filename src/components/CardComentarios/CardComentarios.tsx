import { useState } from "react";
import IComentario from "../Interface/IComentario";
import { Avatar, Box, Heading, Text, VStack } from "native-base";

export default function CardComentarios ({PostagemComentarios}: any) {
    //const [comentarios, setComentario] = useState<IComentario | null>(null); // Estado inicial como null
    console.log('comentario da postagem',PostagemComentarios)


    return(
        <>
            <VStack flexDirection={"row"} mt={10}>
    
            <Box>
            {PostagemComentarios.foto? (
                  <Avatar
                  source={{ uri: PostagemComentarios.foto }}
                  size={"lg"}
                />
              ): (
              <Avatar
                source={{ uri: "https://github.com/GustavoTF25.png" }}
                size={"lg"}
              />
              )}
            </Box>
            <Box mt={2} ml={4}>
              <Heading  fontSize={18} color={'black'}>{PostagemComentarios.nome} </Heading> 
            </Box>
            </VStack>
            <Box ml={20} mt={'-6'} mb={6}>
                <Heading fontSize={14}>{PostagemComentarios.comentario}</Heading>
            </Box>
            </>
    )
}