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
    const usuarioLogado = {
      email: email,
      senha: senha,
    };
    try {
      const usuarioResponse = await api.post("/usuarios/login", usuarioLogado);
      const usuario = usuarioResponse.data;

      
      if (usuarioResponse.status === 201) {

        const { usu_id, usu_nome, usu_foto } = usuario;

      await AsyncStorage.setItem("usuarioId", usu_id);
      await AsyncStorage.setItem("usuarioNome", usu_nome);
      await AsyncStorage.setItem("usuarioFoto", usu_foto);

      console.log("usuario.data",usuario.data)
      console.log("usuarioId", usu_id);
      console.log("usuarioNome", usu_nome);
      console.log("usuarioFoto", usu_foto);

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
        tamanhoFonte={10}
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
