import { Avatar, Box, Heading, VStack, Text } from "native-base";
import { useEffect, useState } from "react";
import api from "../API";
import IUsuario from "../Interface/IUsuario";


export function DetalhesPostagemUsuario ({usuarioId})  {
    const [usuario, setUsuario] = useState<IUsuario| null>(null); // Estado inicial como null


    console.log("usuarioId",usuarioId)
    useEffect(() => {
        const fetchServicos = async () => {
          try {
            const response = await api.get(`/usu_usuarios?&id=${usuarioId}`);
            setUsuario(response.data[0]);
          } catch (error) {
            console.log("Erro ao buscar servicos: ", error);
          }
        };
    
        fetchServicos();
      }, [usuarioId]);

      if(usuario){
    return (
        <VStack flexDirection={"row"} mt={10}>

        <Box>
        {usuario? (
              <Avatar
              source={{ uri: usuario.foto }}
              size={"lg"}
            />
          ): (
          <Avatar
            source={{ uri: "https://github.com/GustavoTF25.png" }}
            size={"lg"}
          />
          )}
        </Box>
        <Box mt={6} ml={4}>
          <Heading  fontSize={18} color={'black'}>{usuario.nome} </Heading> 
        </Box>
        </VStack>
    )
}
else{
    return(
        <Heading mt={10} color={'black'}>Carregando...</Heading> 
    )
}

}