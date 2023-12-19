import { NavigationContainer } from '@react-navigation/native';
import HomePageStack from './src/pages/HomeStack/HomePageStack';

const App = () => {
  return (
    <NavigationContainer>
      <HomePageStack />
    </NavigationContainer>
  )
}

export default App