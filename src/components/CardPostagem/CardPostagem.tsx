import { ScrollView, Text, FlatList, Box, Image, Heading, Pressable } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";



export default function CardPostagem({ data, navigation}: any) {
  return (
    <Pressable onPress={() => navigation.navigate('DetalhePostagem', { id: data.id })}>    
    <Box
      flex={1}
      flexDirection={"column"}
      mb={4}
      p={2}
      backgroundColor={"#202020"}
      borderRadius={4}
    >
      <Box>
        <Image source={{ uri: data.capa }} alt="Imagem da postagem" w="100%" h={200} />
      </Box>
      <Box my={3}>
        <Heading fontSize={20} size={"sm"} pb={1} color={"white"}>
          {data.titulo}
        </Heading>
        <Heading fontSize={14} mt={2} numberOfLines={2} color={"white"}>
          {data.descricao}
        </Heading>
      </Box>
      <Box my={3} flexDirection={"row"} justifyContent={"space-between"}>
        <Box flexDirection={"row"}>
        <Ionicons name={"person"} color={"white"} size={20} />
        <Heading ml={2} fontSize={14} color={"white"} numberOfLines={1}>
          {data.usuario}
        </Heading>
        </Box>
        <Box flexDirection={"row"}>
          <Ionicons name={"heart"} color={"white"} size={20} />
          <Heading fontSize={14} ml={2} color={"white"} numberOfLines={1} pr={2}>
            {data.curtidas}
          </Heading>

          <Ionicons name={"chatbubble-ellipses"} color={"white"} size={20} />
          <Heading fontSize={14} ml={2} color={"white"} numberOfLines={1} pr={2}>
            {data.comentarios}
          </Heading>
        </Box>
      </Box>
    </Box>
    </Pressable>

  );
}
