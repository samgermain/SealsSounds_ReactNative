import React from 'react';
import Soundboard from '../components/Soundboard.js'
import store from '../redux/store.js'
import {setNavigation, setSounds} from '../redux/actions.js'
import HeaderButton from '../components/HeaderButton.js'

class HarpScreen extends React.Component{
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
                ["Ag", "/assets/Sounds/Harp/Ag"], 
                ["baGAA", "/assets/Sounds/Harp/baGAA"], 
                ["GreenDay", "/assets/Sounds/Harp/GreenDay"], 
                ["Hallelujah", "/assets/Sounds/Harp/Hallelujah"], 
                ["Ma", "/assets/Sounds/Harp/Ma"], 
                ["Mom", "/assets/Sounds/Harp/Mom"], 
                ["Mom2", "/assets/Sounds/Harp/Mom2"], 
                ["Mrrh", "/assets/Sounds/Harp/Mrrh", "premium"], 
                ["Naa", "/assets/Sounds/Harp/Naa", "premium"], 
                ["Umba", "/assets/Sounds/Harp/Umba", "premium"], 
                ["Wow", "/assets/Sounds/Harp/Wow", "premium"], 
                ["ahHgh", "/assets/Sounds/Harp/ahHgh", "premium"], 
                ["ahHhghGa", "/assets/Sounds/Harp/ahHhghGa", "premium"], 
                ["brrrga", "/assets/Sounds/Harp/brrrga", "premium"], 
                ["haa", "/assets/Sounds/Harp/haa", "premium"], 
                ["mmmmmmmmmmmm", "/assets/Sounds/Harp/mmmmmmmmmmmm", "premium"], 
                ["mrhrmph", "/assets/Sounds/Harp/mrhrmph", "premium"]
            ]
        }))
    }

    render(){
        return(
            <Soundboard navigation={this.props.navigation}/>
        )
    }
}

export default HarpScreen