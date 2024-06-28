import { Box, FlatList, Heading, Input, ScrollView, Text, VStack, View } from 'native-base';
import { InputPesquisa } from '../components/Inputs/InputPesquisa';
import CardPostagem from '../components/CardPostagem/CardPostagem';
import { useEffect, useState } from 'react';
import api from '../components/API';
import IPostagem from '../components/Interface/IPostagem';


export default function Pesquisar({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState<IPostagem[]>([]);
  const [postagem, setPostagem] = useState<IPostagem[]>([]);


  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const response = await api.get("/pos_postagem?order=desc");
        setPostagem(response.data);
      } catch (error) {
        console.log("Erro ao buscar servicos: ", error);
      }
    };

    fetchServicos();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = postagem.filter(item =>
      item.titulo.toString().toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <Box flex={1} bg={'#202020'} p={5} maxH={20}>
        <Input
          value={searchQuery}
          onChangeText={handleSearch}
          placeholder='Pesquisar'
          color={'light.100'}
         />
      </Box>
      {filteredData.length > 0 ? (
        <Box flex={2} p={5} mb={20}>
          <FlatList
            data={filteredData}
            renderItem={({ item }) => <CardPostagem data={item} navigation={navigation}/>}
            showsHorizontalScrollIndicator={false}
          />
        </Box>
      ) : (
        <Box flex={1} alignItems={'center'} justifyContent={'center'}>
          <Heading mb={10}>
            Nenhum resultado encontrado
          </Heading>
        </Box>
      )}
    </>
  );
};

