import { DrawerNavigator } from 'react-navigation';
import ProfileScreen from './ProfileScreen.js';
import Feed from './Feed.js';
import Collab from './Collab.js';
import Settings from './Settings.js';

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
