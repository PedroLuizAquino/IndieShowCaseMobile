import { Box, FlatList, Input, ScrollView, Text, VStack, View } from 'native-base';
import { InputPesquisa } from '../components/Inputs/InputPesquisa';
import CardPostagem from '../components/CardPostagem/CardPostagem';

const data = [
  {
    id: '1',
    url: 'https://cdn.discordapp.com/attachments/722058173095084064/948073992944762880/iu.png?ex=664e1cf6&is=664ccb76&hm=b75df47540b49b00d8dc41b1e4e076ecb050825266b607984618708ee7e83ec2&',
    name:'Nome do projeto',
    descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    usuario: 'Pedro',
    curtidas: '2',
    comentarios: '3'
  },
  {
    id: '2',
    url: 'https://cdn.discordapp.com/attachments/722058173095084064/948073992944762880/iu.png?ex=664e1cf6&is=664ccb76&hm=b75df47540b49b00d8dc41b1e4e076ecb050825266b607984618708ee7e83ec2&',
    name:'Nome do projeto',
    descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    usuario: 'Pedro',
    curtidas: '2',
    comentarios: '3'
  }
]; 


export default function Pesquisar() {
  return (
    <>
    <Box flex={1} bg={'#202020'} p={5} maxH={20} >
      <InputPesquisa placeholder='Pesquisar'></InputPesquisa>
    </Box>
    <Box  flex={2} p={5} mb={20}>
        <FlatList
        data={data}
        renderItem={({item}) => <CardPostagem data={item}/>}
        showsHorizontalScrollIndicator={false}
        />
      </Box>
    </>
  );
}
