import { NativeBaseProvider, StatusBar, theme } from 'native-base';
import Rotas from './src/components/Rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.black} />
      <Rotas>
    </NativeBaseProvider>
  );
}
