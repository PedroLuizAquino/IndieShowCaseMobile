import { Box, FlatList, Input, ScrollView, Text, VStack, View } from 'native-base';
import { InputPesquisa } from '../components/Inputs/InputPesquisa';
import CardPostagem from '../components/CardPostagem/CardPostagem';

const data = [
  {
    id: '1',
    url: 'https://picsum.photos/200/300',
    name:'exemplo de resultado de busca 1',
    descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    usuario: 'Pedro',
    curtidas: '2',
    comentarios: '3'
  },
  {
    id: '2',
    url: 'https://picsum.photos/200',
    name:'exemplo de resultado de busca 2',
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
