import { Box, Center, FormControl, Heading, ScrollView, Text, TextArea, VStack } from 'native-base';
import { ButtonPadrao } from '../components/Buttun/ButtonPadrao';
import { InputPadrao } from '../components/Inputs/InputPadrao';
import { TouchableOpacity } from 'react-native';
import { InputTextArea } from '../components/Inputs/InputTextArea';

export default function Publicar({ navigation }) {
  return (
    <ScrollView flex={1} bg={"#F4F4F4"}>
      <Heading
        color={"black"}
        textAlign={"center"}
        fontWeight={"bold"}
        mt={10}
      >
        Criar Postagem
      </Heading>
      <FormControl mt={4} alignItems={"center"}>
        <Box>
          <InputPadrao placeholder="Insira o título da postagem..." tamanho="80%" mt={3} />
        </Box>
        <Box mt={4}>
        <InputPadrao placeholder="Insira a tag..." tamanho="80%" mt={3} />
        </Box>
        <Box mt={4}>
        <InputPadrao  placeholder="Insira sua senha..." tipo="password" tamanho="80%" mt={3} />
        </Box>
        <Box mt={4}>
          {/* <InputPadrao
            placeholder="Insira a descrição..."
            tamanho="80%"
            mt={3}
            tipo="password"
          /> */}

          <InputTextArea placeholder='Insira a descrição...' tamanho='80%'/>

        </Box>
      </FormControl>
      <Center mt={10}>
        <ButtonPadrao texto="Publicar" 
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </Center>
    </ScrollView>
  );
}
