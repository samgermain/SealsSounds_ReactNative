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
                ["A", require("../assets/Sounds/Grey/A.mp3")], 
                ["B", require("../assets/Sounds/Grey/B.mp3")], 
                ["B/C", require("../assets/Sounds/Grey/B_C.mp3")], 
                ["C#", require("../assets/Sounds/Grey/C_Sharp.mp3")], 
                ["C", require("../assets/Sounds/Grey/C.mp3")], 
                ["D Other Seal", require("../assets/Sounds/Grey/D_Other_Seal.mp3")], 
                ["C slight sharp", require("../assets/Sounds/Grey/C_slight_sharp.mp3")], 
                ["D", require("../assets/Sounds/Grey/D.mp3")], 
                ["D/D#", require("../assets/Sounds/Grey/D_D_Sharp.mp3")], 
                ["E", require("../assets/Sounds/Grey/E.mp3")], 
                ["Eb", require("../assets/Sounds/Grey/Eb.mp3")], 
                ["Screemo", require("../assets/Sounds/Grey/Screemo.mp3"), "premium"], 
                ["Screemo 2", require("../assets/Sounds/Grey/Screemo_2.mp3"), "premium"], 
                ["Metal", require("../assets/Sounds/Grey/Metal.mp3"), "premium"], 
                ["Metal 2", require("../assets/Sounds/Grey/Metal_2.mp3"), "premium"], 
                ["Metal 3", require("../assets/Sounds/Grey/Metal_3.mp3"), "premium"], 
                ["H Metal", require("../assets/Sounds/Grey/H_Metal.mp3"), "premium"], 
                ["H Metal 2", require("../assets/Sounds/Grey/H_Metal_2.mp3"), "premium"], 
                ["H Metal 3", require("../assets/Sounds/Grey/H_Metal_3.mp3"), "premium"], 
                ["H Metal 4", require("../assets/Sounds/Grey/H_Metal_4.mp3"), "premium"]
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