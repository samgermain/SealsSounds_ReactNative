import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground, Platform } from 'react-native';
import {TextStroke} from './TextStroke'
import store from '../redux/store.js'
import {setPurchases} from '../redux/actions.js'
import { AdMobBanner } from 'react-native-admob'
import * as RNIap from 'react-native-iap';
import { connect, Provider } from 'react-redux';
//import Sound from 'react-native-sound';
import SoundPlayer from 'react-native-sound-player'
import {images} from './images'

const styles = StyleSheet.create({
    bannerAd:{
        marginTop: 20
    },
    bottomAd:{
        marginTop: "auto"
    },
    button:{
        backgroundColor: '#37E8E8',
        justifyContent: 'center',
        width:'31%',
        borderRadius: 5
    },
    container:{
        flex:1,
        height:'100%',
        width:'100%',
        alignItems:'center'
    },
    premiumButton:{
        borderRadius: 5,
        padding:15,
        margin:'18%',
        backgroundColor: '#37E8E8',
        justifyContent: 'center',
    },
    premiumOverlay:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(125, 125, 125, 0.4)',
        borderRadius: 5
    },
    premiumText:{
        fontSize: 9,
        position: "absolute",
        top: 0,
        right: 0,
        color: 'rgb(75,75,75)'
    },
    premiumView:{
        display: 'flex',
        justifyContent: 'space-around',
        height:'80%',
        width: '80%',
        margin: 'auto',
        textAlign: 'center'
    },
    row:{
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin:10
    },
    scrollView:{
        height:'100%'
    },  
    text:{
        textAlign:'center',
        color:'white',
        fontSize:15
    },
    textStroke:{
        marginLeft:'auto',
        marginRight:"auto"
    }
})

/**
 * A small label that says premium. Goes in the corner of a sound button when the sound requires an in-app-purchase
 */
const PremiumLabel = () => {
    return (
        <View style={styles.premiumOverlay}>
            <Text style={styles.premiumText}>Premium</Text>
        </View>
    )
}

const buyProduct = function(){
    console.log(`Buy Product`)
    RNIap.requestPurchase("1985162691", false).then(purchase => {
        store.dispatch(setPurchases(purchase))
    }).catch((error) => {
        console.log(error.message);
    })
}

const askForPurchase = function(){
    if (!store.getState().purchase){
        console.log(RNIap.getPurchaseHistory())
        RNIap.getPurchaseHistory().then(purchase => {
            console.log(`Ask for purchase ${!store.getState().purchase}`)
            store.dispatch(setPurchases(purchase))
            if (purchase.length == 0){
                console.log(`if1`)
                buyProduct()
            }else{
                console.log(`else`)
                RNIap.getAvailablePurchases()
            }
        }, reason => {
            console.log(reason)
        })
        console.log(`end`)
    }
}

const StrokedText = ({text}) => {
    return (
        <TextStroke style={styles.textStroke} stroke={1} color={'#000000'}>
            <Text ellipsizeMode="middle" numberOfLines={1} style={styles.text}>{text}</Text>
        </TextStroke>
    )
}

/**
 * Creates a touchable button component that plays a sound when pressed
 * @param {Sound Object} props.sound : An object of type Sound
 * @param {String} props.name : The name of the sound
 */
class SButton extends React.Component{

    componentDidMount(){
        SoundPlayer.onFinishedLoading((success) => {
        })
    }

    isEmpty = function(obj){
        return Object.keys(obj).length === 0;
    }

    playSound = function(sound){
        
        if (Platform.OS === 'android'){
            let arr = sound.split('/')
            sound = arr[arr.length - 1].toLowerCase()
        }
        SoundPlayer.playSoundFile(sound, 'mp3')
    }
    
    render(){
        let props = this.props
        let onPrs
        let premiumLabel
        // let sound = this.createSound(props.sound)
        if (props.premium && this.isEmpty(props.purchases) ){
            onPrs = () => askForPurchase()
            premiumLabel = <PremiumLabel />
        }else{
            onPrs = () => this.playSound(props.sound)
        }
        return(
            <TouchableOpacity style={styles.button} onPress={onPrs} >
                <StrokedText text={props.name}></StrokedText>
                {premiumLabel}
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = state => {
    return {
        purchases: state.purchases
    };
}

const SoundButton = connect(mapStateToProps)(SButton)

/**
 * A row of sound buttons
 * @param {[[Sound Object,String]]} props.sounds : An array where each is a 2d array with the Sound object and the name of the sound
 */
const Row = (props) => {
    return(
        <View style={styles.row}>
            {props.sounds.map(sound => <Provider key={sound[0]} store={store}><SoundButton name={sound[0]} sound={sound[1]} premium={sound[2] == "premium"}/></Provider>)}
        </View>
    )
}

const Board = () => {
    let curRowSounds = []
    const soundLen = store.getState().sounds.sounds.length
    let count = 0
    return(
        <ScrollView style={styles.scrollView}>
            {store.getState().sounds.sounds.map((sound,i) => {
                curRowSounds.push(sound)
                if (curRowSounds.length >= 3){
                    let row = <Row key={count} sounds={curRowSounds} />
                    curRowSounds = []
                    count += 1
                    return row
                }else if (soundLen === i + 1){
                    count += 1
                    return <Row key={count} sounds={curRowSounds} />
                }
            })}
            
        </ScrollView>
    )
        
}

const AdUnit = function({style}){
    //Actual ad-unit-id: ca-app-pub-6273488784837824/7629908270
    //test id: ca-app-pub-3940256099942544/6300978111
    const adId = "ca-app-pub-3940256099942544/6300978111"
    return (
        <AdMobBanner style={style} adSize="banner" adUnitID={adId} didFailToReceiveAdWithError={this.bannerError} />
    )
}

/**
 * @param {[String]} sounds: The names of the soundFiles, excluding the extension
 * @param {String} folder: The folder that the sound files are stored in
 */
class Soundboard extends React.Component {

    constructor(props){
        super(props)
        this.backgroundImage = {uri: images[Math.floor(Math.random() * 16)]}
    }

    onError(error){
        this.backgroundImage = require('../assets/images/default_seal.jpg')
    }

    render(){
        if (this.props.screenType === "premium"){
            return (
                <ImageBackground style={styles.container} source={this.backgroundImage} onError={this.onError.bind(this)}>
                    <AdUnit style={styles.bannerAd} />
                    
                    <View style={styles.premiumView}>
                        <TouchableOpacity style={styles.premiumButton} onPress={buyProduct()} >
                            <StrokedText text="Buy Premium"></StrokedText>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.premiumButton} onPress={askForPurchase()} >
                            <StrokedText text="Restore Purchases"></StrokedText>
                        </TouchableOpacity>

                        <TextStroke style={{textAlign: 'center'}} stroke={1} color={'#000000'}>
                            <Text style={{color: 'white'}}>
                                Sounds collected from multiple sources including the Weddell Seal Science Project under NMFS Permit 1032-1917
                            </Text>
                        </TextStroke>

                    </View>

                </ImageBackground>
            )
        }else{
            return(
                <ImageBackground style={styles.container} source={this.backgroundImage} onError={this.onError.bind(this)}>
                    <AdUnit style={styles.bannerAd} />
                    <Board  />
                </ImageBackground>
            )
        }
    }
}

export default Soundboard