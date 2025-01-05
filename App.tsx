import {Text, View} from 'react-native';
import {AppNavigation} from './src/navigation/appNavigation';
import {AppProvider} from './src/providers/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <AppNavigation />
    </AppProvider>
  );
};
export default App;