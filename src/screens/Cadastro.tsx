import {
  Avatar,
  Box,
  Center,
  FormControl,
  ScrollView,
  Spacer,
  Text,
  VStack,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { InputOutline } from "../components/InputOutline";
import { ButtonEstilizado } from "../components/ButtonEstilizado";

export default function Cadastro({ navigation }) {
  return (
    <ScrollView flex={1} bg={"#1D1D1D"}>
      <Text
        fontSize={36}
        color={"#E29C31"}
        textAlign={"center"}
        fontWeight={"bold"}
        mt={5}
      >
        Cadastrar
      </Text>
      <FormControl mt={4} alignItems={"center"}>
        <Box>
          <Text color={"white"} fontWeight={"bold"} fontSize={16}>
            Nome
          </Text>
          <InputOutline placeholder="Insira seu nome completo..." mt={3} />
        </Box>
        <Box mt={4}>
          <Text color={"white"} fontWeight={"bold"} fontSize={16}>
            Email
          </Text>
          <InputOutline placeholder="Insira seu e-mail..." mt={3} />
        </Box>

        <Box mt={4}>
          <Text color={"white"} fontSize={16}>
            Foto de perfil
          </Text>
          <Text color={"gray.500"}>Envie um arquivo do seu dispositivo</Text>
          <Box flexDirection={"row"} mt={2}>
            <Avatar
              size={"xl"}
              source={{ uri: "https://github.com/yohan-araujo.png" }}
              borderWidth={1}
              borderColor={"#E29C31"}
              mt={3}
            />
            <Spacer />
            <ButtonEstilizado texto="Enviar" mt={10} h={12} />
          </Box>
        </Box>
        <Box mt={4}>
          <Text color={"white"} fontWeight={"bold"} fontSize={16}>
            Telefone
          </Text>
          <InputOutline placeholder="(00)00000-0000" mt={3} />
        </Box>
        <Box mt={4}>
          <Text color={"white"} fontWeight={"bold"} fontSize={16}>
            Senha
          </Text>
          <InputOutline
            placeholder="Insira sua senha..."
            mt={3}
            tipo="password"
          />
        </Box>
        <Box mt={4}>
          <Text color={"white"} fontWeight={"bold"} fontSize={16}>
            Confirmar a Senha
          </Text>
          <InputOutline
            placeholder="Insira sua senha novamente..."
            mt={3}
            tipo="password"
          />
        </Box>
      </FormControl>
      <Center mt={10}>
        <ButtonEstilizado texto="Cadastrar" />
      </Center>
      <Box
        w={"100%"}
        flexDirection={"row"}
        justifyContent={"center"}
        mt={6}
        mb={12}
      >
        <Text color={"white"} underline>
          Já possui conta?{" "}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text color={"yellow.500"} underline>
            {" "}
            Entrar
          </Text>
        </TouchableOpacity>
      </Box>
    </ScrollView>
  );
}
