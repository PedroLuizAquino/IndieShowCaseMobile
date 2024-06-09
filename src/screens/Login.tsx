import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  Heading,
  Input,
  NativeBaseProvider,
  Text,
  VStack,
  View,
} from "native-base";
import { InputPadrao } from "../components/Inputs/InputPadrao";
import { ButtonPadrao } from "../components/Buttun/ButtonPadrao";
import { TouchableOpacity } from "react-native";

export default function Login({ navigation }) {

  return (
    <View flex={1} p={5} backgroundColor={"#F4F4F4"} alignItems={'center'} justifyContent={'center'}>
        <Heading mb={5}>Entrar no IndieShowcase</Heading>

        <Box mt={4}>
          <Heading color={"black"} ml={2} fontSize={16}>Email</Heading>
          <InputPadrao  placeholder="Email" tipo="text" />
        </Box>


        <Box mt={4}>
          <Heading color={"black"} ml={2} fontSize={16}>Senha</Heading>
          <InputPadrao  placeholder="Senha" tipo="password" />
        </Box>

        <ButtonPadrao mt={5} texto="Entrar" onPress={() => {
          navigation.navigate("Menu");
        }} /> 

        <ButtonPadrao mt={5} texto="Esqueceu a senha?" tamanhoFonte={10} cor="#F4F4F4" corDaFonte="black" border
        onPress={() => {
          navigation.navigate("Login");
        }} /> 

        <Box
        w={"100%"}
        flexDirection={"row"}
        justifyContent={"center"}
        mt={6}
        mb={12}
      >
        <Text color={"black"} underline>
          Não tem uma conta?{" "}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cadastro");
          }}
        >
          <Text color={"blue.500"} underline>
            {" "}
            Inscreva-se
          </Text>
        </TouchableOpacity>
      </Box>


    </View>
  );
}
