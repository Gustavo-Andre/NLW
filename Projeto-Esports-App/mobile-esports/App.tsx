import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { Background } from './src/components/backgroung';
import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

export default function App() {
  const [fonts] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });
  return (
    <Background>
      <StatusBar
        backgroundColor='transparent'
        translucent
      />
      {fonts?<Home/>:<Loading/>}
      
    </Background>
  );
}

