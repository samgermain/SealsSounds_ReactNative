import React from 'react';
import Soundboard from '../components/Soundboard.js'
import store from '../redux/store.js'
import {setNavigation, setSounds} from '../redux/actions.js'
import HeaderButton from '../components/HeaderButton.js'

class GreyScreen extends React.Component{
    static navigationOptions = {
        headerRight: (
          <HeaderButton />  
        )
      }

    constructor(props){
        super(props)
        store.dispatch(setNavigation({navigation:this.props.navigation}))
        store.dispatch(setSounds({
            sounds: [
                ["A", "/assets/Sounds/Grey/A"], 
                ["B", "/assets/Sounds/Grey/B"], 
                ["B/C", "/assets/Sounds/Grey/B_C"], 
                ["C#", "/assets/Sounds/Grey/C_Sharp"], 
                ["C", "/assets/Sounds/Grey/C"], 
                ["D Other Seal", "/assets/Sounds/Grey/D_Other_Seal"], 
                ["C slight sharp", "/assets/Sounds/Grey/C_slight_sharp"], 
                ["D", "/assets/Sounds/Grey/D"], 
                ["D/D#", "/assets/Sounds/Grey/D_D_Sharp"], 
                ["E", "/assets/Sounds/Grey/E"], 
                ["Eb", "/assets/Sounds/Grey/Eb"], 
                ["Screemo", "/assets/Sounds/Grey/Screemo", "premium"], 
                ["Screemo 2", "/assets/Sounds/Grey/Screemo_2", "premium"], 
                ["Metal", "/assets/Sounds/Grey/Metal", "premium"], 
                ["Metal 2", "/assets/Sounds/Grey/Metal_2", "premium"], 
                ["Metal 3", "/assets/Sounds/Grey/Metal_3", "premium"], 
                ["H Metal", "/assets/Sounds/Grey/H_Metal", "premium"], 
                ["H Metal 2", "/assets/Sounds/Grey/H_Metal_2", "premium"], 
                ["H Metal 3", "/assets/Sounds/Grey/H_Metal_3", "premium"], 
                ["H Metal 4", "/assets/Sounds/Grey/H_Metal_4", "premium"]
            ]
        }))
    }

    render(){
        return(
            <Soundboard navigation={this.props.navigation}/>
        )
    }
}

export default GreyScreen