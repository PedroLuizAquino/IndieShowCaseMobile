import { ScrollView, Text, FlatList, Box, Image, Heading } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CardPostagem({ data }: any) {
  return (
    <Box
      flex={1}
      flexDirection={"column"}
      mb={4}
      p={2}
      backgroundColor={"#3D0066"}
      borderRadius={4}
    >
      <Box>
        <Image source={{ uri: data.url }} w="100%" h={200} />
      </Box>
      <Box my={3}>
        <Heading size={"sm"} pb={1} color={"white"}>
          {data.name}
        </Heading>
        <Text numberOfLines={2} color={"white"}>
          {data.descricao}
        </Text>
      </Box>
      <Box my={3} flexDirection={"row"} justifyContent={"space-between"}>
        <Box flexDirection={"row"}>
        <Ionicons name={"person"} color={"white"} size={20} />
        <Text ml={2} color={"white"} numberOfLines={1}>
          {data.usuario}
        </Text>
        </Box>
        <Box flexDirection={"row"}>
          <Ionicons name={"thumbs-up"} color={"white"} size={20} />
          <Text ml={2} color={"white"} numberOfLines={1} pr={2}>
            {data.curtidas}
          </Text>

          <Ionicons name={"chatbubble-ellipses"} color={"white"} size={20} />
          <Text ml={2} color={"white"} numberOfLines={1} pr={2}>
            {data.comentarios}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}