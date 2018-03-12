import { AppRegistry } from 'react-native';
import StackNavigator from "react-navigation/src/navigators/StackNavigator";
import ComponentHall from "./src/ComponentHall";
import ButtonPage from "./src/ButtonPage";

import progressBoxPage from "./src/progressBoxPage";
import radioBoxPage from "./src/radioBoxPage";
import ratingBar from "./src/ratingBar";
import seekBar from "./src/seekBar";
import selectBoxPage from "./src/selectBoxPage";
import TextPage from "./src/TextPage";
import ListPage from "./src/ListPage";

const appNav = StackNavigator({
    'route.ComponentHall': { screen: ComponentHall },
    'route.ButtonPage': { screen: ButtonPage },
    'route.progressBoxPage': { screen: progressBoxPage },
    'route.radioBoxPage': { screen: radioBoxPage },
    'route.ratingBar': { screen: ratingBar },
    'route.seekBar': { screen: seekBar },
    'route.selectBoxPage': { screen: selectBoxPage },
    'route.TextPage': { screen: TextPage },
    'route.ListPage': { screen: ListPage },
});

AppRegistry.registerComponent('DemoApp', () => appNav);
