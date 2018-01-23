import { DrawerNavigator } from 'react-navigation';
import ProfileScreen from './containers/ProfileScreen';
import Feed from './containers/Feed.js';
import Collab from './containers/Collab.js';
import Settings from './containers/Settings.js';

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
