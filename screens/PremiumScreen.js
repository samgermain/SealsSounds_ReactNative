import React from 'react';
import Soundboard from '../components/Soundboard.js'
import store from '../redux/store.js'
import {setNavigation} from '../redux/actions.js'
import HeaderButton from '../components/HeaderButton.js'

class PremiumScreen extends React.Component{
    static navigationOptions = {
        headerRight: (
          <HeaderButton />  
        )
      }

    constructor(props){
        super(props)
        store.dispatch(setNavigation({navigation:this.props.navigation}))
    }
    
    render(){
        return(
            <Soundboard screenType="premium" navigation={this.props.navigation}/>
        )
    }

}

export default PremiumScreen