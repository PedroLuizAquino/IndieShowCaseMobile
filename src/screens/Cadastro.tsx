import {
  Avatar,
  Box,
  Center,
  FormControl,
  Heading,
  ScrollView,
  Spacer,
  Text,
  VStack,
  View,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { InputOutline } from "../components/Inputs/InputOutline";
import { ButtonPadrao } from "../components/Buttun/ButtonPadrao";
import { InputPadrao } from "../components/Inputs/InputPadrao";

export default function Cadastro({ navigation }) {
  return (
    <View flex={1} bg={"#F4F4F4"} alignItems={'center'} justifyContent={'center'}>
      <Heading
        color={"black"}
        textAlign={"center"}
        fontWeight={"bold"}
        mt={10}
      >
        Cadastrar
      </Heading>
      <FormControl mt={4} alignItems={"center"}>
        <Box mt={4}>
        <Heading color={"black"} ml={2} fontSize={16}>Nome</Heading>
          <InputPadrao placeholder="Insira seu nome de usuário..." tamanho="80%" mt={3} />
        </Box>
        <Box mt={4}>
        <Heading color={"black"} ml={2} fontSize={16}>Email</Heading>
        <InputPadrao placeholder="Insira seu email..." tamanho="80%" mt={3} />
        </Box>
        <Box mt={4}>
        <Heading color={"black"} ml={2} fontSize={16}>Senha</Heading>
        <InputPadrao placeholder="Insira sua senha..." tipo="password" tamanho="80%" mt={3} />
        </Box>
        <Box mt={4}>
        <Heading color={"black"} ml={2} fontSize={16}>Confirmação da senha</Heading>
          <InputPadrao
            placeholder="Confirma sua senha..."
            tamanho="80%"
            mt={3}
            tipo="password"
          />
        </Box>
      </FormControl>
        <ButtonPadrao mt={5} texto="Cadastrar" 
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      <Box
        w={"100%"}
        flexDirection={"row"}
        justifyContent={"center"}
        mt={6}
        mb={12}
      >
        <Text color={"black"} underline>
          Já possui conta?{" "}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text color={"blue.500"} underline>
            {" "}
            Entre aqui.
          </Text>
        </TouchableOpacity>
      </Box>
    </View>
  );
}
