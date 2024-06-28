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
import { useState } from "react";
import api from "../components/API";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      const usuarioResponse = await api.get("/usu_usuarios");
      const usuarios = usuarioResponse.data;
      console.log("usuarios",usuarios)

      const usuarioEncontrado = usuarios.find(
        (usuario) =>
          usuario.email === email && usuario.senha === senha
      );

      
      if (usuarioEncontrado) {

        const { id, nome, foto } = usuarioEncontrado;

      await AsyncStorage.setItem("usuarioId", id);
      await AsyncStorage.setItem("usuarioNome", nome);
      await AsyncStorage.setItem("usuarioFoto", foto);


      console.log("usuario.data",usuarios.data)
      console.log("usuarioId", id);
      console.log("usuarioNome", nome);
      console.log("usuarioFoto", foto);

      navigation.navigate("Home");

        //sucesso ao logar
      } else {
        //erro ao logar
        throw new Error("Erro ao cadastrar", usuarioResponse.data);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      console.log("Erro ao fazer login. Por favor, tente novamente.");

      //mensagem de erro
    }
  };

  return (
    <View
      flex={1}
      p={5}
      backgroundColor={"#F4F4F4"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Heading mb={5}>Entrar no IndieShowcase</Heading>
      <FormControl>
      <Box mt={4}>
        <Heading color={"black"} ml={2} fontSize={16}>
          Email
        </Heading>
        <InputPadrao placeholder="Email" tipo="text" value={email} onChangeText={setEmail} />
      </Box>

      <Box mt={4}>
        <Heading color={"black"} ml={2} fontSize={16}>
          Senha
        </Heading>
        <InputPadrao placeholder="Senha" tipo="password" value={senha} onChangeText={setSenha}/>
      </Box>
      </FormControl>
      <ButtonPadrao
        mt={5}
        texto="Entrar"
        onPress={handleLogin}
      />

      <ButtonPadrao
        mt={5}
        texto="Esqueceu a senha?"
        tamanhoFonte={14}
        cor="#F4F4F4"
        corDaFonte="black"
        border
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
