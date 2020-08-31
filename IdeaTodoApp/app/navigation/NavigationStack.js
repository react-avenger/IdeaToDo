import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DreamList from '../dreamList/index'
import AddEditDream from '../addEditDream/index'
import SplashScreen from '../splash/index'


const AppStack = createStackNavigator({
    DreamList: DreamList,
    AddEditDream :AddEditDream,
    SplashScreen :SplashScreen
 },
{    
initialRouteName: 'SplashScreen',
headerMode: 'none'     
}
);

export default createAppContainer(AppStack);