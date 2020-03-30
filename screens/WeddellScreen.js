import React from 'react';
import Soundboard from '../components/Soundboard.js'
import store from '../redux/store.js'
import {setNavigation, setSounds} from '../redux/actions.js'
import HeaderButton from '../components/HeaderButton.js'

class WeddellScreen extends React.Component{
    static navigationOptions = {
        headerRight: (
          <HeaderButton />  
        )
      }

    constructor(props){
        super(props)
        // const args = {
        //     playsInSilentModeIOS:true,
        //     interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        //     interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX
        // }
//        const s = await Audio.Sound.createAsync(sound, args)
        store.dispatch(setNavigation({navigation:this.props.navigation}))
        store.dispatch(setSounds({
            sounds: [
                ["AAAAAAAAAAAAAAAAAA", "/assets/Sounds/Weddell/AAAAAAAAAAAAAAAAAA"], 
                ["(sneezes)", "/assets/Sounds/Weddell/sneezes"], 
                ["baguette", "/assets/Sounds/Weddell/baguette"], 
                ["bliss", "/assets/Sounds/Weddell/bliss"], 
                ["d\'egff", "/assets/Sounds/Weddell/d_egff"], 
                ["d\'egg", "/assets/Sounds/Weddell/d_egg"], 
                ["egg!", "/assets/Sounds/Weddell/egg_2"], 
                ["egg! 2", "/assets/Sounds/Weddell/egg_3"], 
                ["egg", "/assets/Sounds/Weddell/egg"], 
                ["fibsh", "/assets/Sounds/Weddell/fibsh"], 
                ["fish", "/assets/Sounds/Weddell/fish"], 
                ["geaaaagh", "/assets/Sounds/Weddell/geaaaagh"], 
                ["gegg", "/assets/Sounds/Weddell/gegg"], 
                ["gighphbh", "/assets/Sounds/Weddell/gighphbh"], 
                ["guh", "/assets/Sounds/Weddell/guh"], 
                ["guess", "/assets/Sounds/Weddell/guess"], 
                ["l\'egg", "/assets/Sounds/Weddell/l_egg"], 
                ["lligkk", "/assets/Sounds/Weddell/lligkk"], 
                ["mibph", "/assets/Sounds/Weddell/mibph"], 
                ["mnnnbpbbhbhpth", "/assets/Sounds/Weddell/mnnnbpbbhbhpth"], 
                ["murph!", "/assets/Sounds/Weddell/murph"], 
                ["Alien", "/assets/Sounds/Weddell/Alien"], 
                ["Alien 2", "/assets/Sounds/Weddell/Alien_2", "premium"], 
                ["Alien 3", "/assets/Sounds/Weddell/Alien_3", "premium"], 
                ["Alien 4", "/assets/Sounds/Weddell/Alien_4", "premium"], 
                ["Alien 5", "/assets/Sounds/Weddell/Alien_5", "premium"], 
                ["Alien 6", "/assets/Sounds/Weddell/Alien_6", "premium"], 
                ["AAAAA", "/assets/Sounds/Weddell/AAAAA", "premium"], 
                ["AAAAAHHHHH", "/assets/Sounds/Weddell/AAAAAHHHHH", "premium"], 
                ["AAAAGH", "/assets/Sounds/Weddell/AAAAGH", "premium"], 
                ["AAAGHA", "/assets/Sounds/Weddell/AAAGHA", "premium"], 
                ["AAAGHAAAA", "/assets/Sounds/Weddell/AAAGHAAAA", "premium"], 
                ["AAGH", "/assets/Sounds/Weddell/AAGH", "premium"], 
                ["AAGHHH", "/assets/Sounds/Weddell/AAGHHH", "premium"], 
                ["AANNNNAAAGGHHHH", "/assets/Sounds/Weddell/AANNNNAAAGGHHHH", "premium"], 
                ["BNNNGHPHH", "/assets/Sounds/Weddell/BNNNGHPHH", "premium"], 
                ["BEHH", "/assets/Sounds/Weddell/BEHH", "premium"], 
                ["BGGHHNNHHH", "/assets/Sounds/Weddell/BGGHHNNHHH", "premium"], 
                ["BNNNGGHHPH", "/assets/Sounds/Weddell/BNNNGGHHPH", "premium"], 
                ["BNNNGH", "/assets/Sounds/Weddell/BNNNGH", "premium"], 
                ["Beh", "/assets/Sounds/Weddell/Beh", "premium"], 
                ["Bleaahh", "/assets/Sounds/Weddell/Bleaahh", "premium"], 
                ["Bleeaaaahhh", "/assets/Sounds/Weddell/Bleeaaaahhh", "premium"], 
                ["Fair", "/assets/Sounds/Weddell/Fair", "premium"], 
                ["GAAAAGHAA", "/assets/Sounds/Weddell/GAAAAGHAA", "premium"], 
                ["GAGHAAGAHH", "/assets/Sounds/Weddell/GAGHAAGAHH", "premium"], 
                ["GEELOLIGLET", "/assets/Sounds/Weddell/GEELOLIGLET", "premium"], 
                ["HAAAAAAAA", "/assets/Sounds/Weddell/HAAAAAAAA", "premium"], 
                ["Hello", "/assets/Sounds/Weddell/Hello", "premium"], 
                ["MMGGGNN", "/assets/Sounds/Weddell/MMGGGNN", "premium"], 
                ["MMMGHHH", "/assets/Sounds/Weddell/MMMGHHH", "premium"], 
                ["Move", "/assets/Sounds/Weddell/Move", "premium"], 
                ["Rats", "/assets/Sounds/Weddell/Rats", "premium"], 
                ["Trumpet", "/assets/Sounds/Weddell/Trumpet", "premium"], 
                ["UEAAGHH", "/assets/Sounds/Weddell/UEAAGHH", "premium"]
            ]
        }))
    }

    render(){
        return(
            <Soundboard navigation={this.props.navigation}/>
        )
    }
}

export default WeddellScreen