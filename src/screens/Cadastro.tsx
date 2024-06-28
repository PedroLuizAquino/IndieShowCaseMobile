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
import { ButtonPadrao } from "../components/Buttun/ButtonPadrao";
import { InputPadrao } from "../components/Inputs/InputPadrao";
import { useState } from "react";
import api from "../components/API";

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [idade, setIdade] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleCadastro = async () => {
    if (!nome || !email || !senha || !idade || !confirmarSenha) {
      //setMensagemErro("Todos os campos são obrigatórios.");
      return;
    }

    if (senha !== confirmarSenha) {
      //setMensagemErro("As senhas não coincidem.");
      return;
    }

    const novoUsuario = {
      nome: nome,
      email: email,
      idade: idade,
      senha: senha,
      foto: "https://github.com/GustavoTF25.png"
    };

    try {
      const usuarioResponse = await api.post("/usu_usuarios", novoUsuario);

      if (usuarioResponse.status === 201) {
        //usuario cadastrado
        console.log("usuario cadastrado novo", usuarioResponse);
        navigation.navigate("Login");
      } else {
        throw new Error("Erro ao cadastrar", usuarioResponse.data);
      }
    } catch (error) {
      console.error("Erro ao cadastrar", error);
      //mensagem de erro
    }
  };

  return (
    <View
      flex={1}
      bg={"#F4F4F4"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Heading color={"black"} textAlign={"center"} fontWeight={"bold"} mt={10}>
        Cadastrar
      </Heading>
      <FormControl mt={4} alignItems={"center"}>
        <Box mt={4}>
          <Heading color={"black"} ml={2} fontSize={16}>
            Nome
          </Heading>
          <InputPadrao
            placeholder="Insira seu nome de usuário..."
            tamanho="80%"
            mt={3}
            value={nome}
            onChangeText={setNome}
          />
        </Box>

        <Box mt={4}>
          <Heading color={"black"} ml={2} fontSize={16}>
            Email
          </Heading>
          <InputPadrao
            placeholder="Insira seu email..."
            tamanho="80%"
            mt={3}
            value={email}
            onChangeText={setEmail}
          />
        </Box>

        <Box mt={4}>
          <Heading color={"black"} ml={2} fontSize={16}>
            Idade
          </Heading>
          <InputPadrao 
            placeholder="Insira sua idade..." 
            tamanho="80%" 
            mt={3} 
            value={idade}
            onChangeText={setIdade}
          />
        </Box>

        <Box mt={4}>
          <Heading color={"black"} ml={2} fontSize={16}>
            Senha
          </Heading>
          <InputPadrao
            placeholder="Insira sua senha..."
            tipo="password"
            tamanho="80%"
            mt={3}
            value={senha}
            onChangeText={setSenha}
          />
        </Box>

        <Box mt={4}>
          <Heading color={"black"} ml={2} fontSize={16}>
            Confirmação da senha
          </Heading>
          <InputPadrao
            placeholder="Confirma sua senha..."
            tamanho="80%"
            mt={3}
            tipo="password"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />
        </Box>
      </FormControl>
      <ButtonPadrao
        mt={5}
        texto="Cadastrar"
        onPress={handleCadastro}
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
