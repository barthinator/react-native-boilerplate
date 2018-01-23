import { DrawerNavigator } from 'react-navigation';
import ProfileScreen from './views/ProfileScreen.js';
import Feed from './views/Feed.js';
import Collab from './views/Collab.js';
import Settings from './views/Settings.js';

const App = DrawerNavigator({

  ProfileScreen: {
    screen: ProfileScreen,
  },
  Feed: {
    screen: Feed,
  },
  Collab: {
    screen: Collab,
  },
  Settings: {
    screen: Settings,
  },
});

export default App;
