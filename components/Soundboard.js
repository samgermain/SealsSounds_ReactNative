import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, ImageBackground, Platform } from 'react-native';
import store from '../redux/store.js'
import {setBackgroundImage, setPurchases} from '../redux/actions.js'
import { AdMobBanner } from 'react-native-admob'
import * as RNIap from 'react-native-iap';
import { connect, Provider } from 'react-redux';

//import Sound from 'react-native-sound';
import SoundPlayer from 'react-native-sound-player'

const images = [
    'https://i.imgur.com/dKDjcNA.jpg',
    'https://i.imgur.com/R1R3xjo.jpg',
    'https://i.imgur.com/pRdxSlP.jpg',
    'https://i.imgur.com/gTuAQNU.jpg',
    'https://i.imgur.com/WdcVxhC.jpg',
    'https://i.imgur.com/jn1tGfx.jpg',
    'https://i.imgur.com/AJTeIh4.jpg',
    'https://i.imgur.com/GuM1KCy.jpg',
    'https://i.imgur.com/CAVK8an.jpg',
    'https://i.imgur.com/rZlLCqS.jpg',
    'https://i.imgur.com/evs1zsP.jpg',
    'https://i.imgur.com/cQD7xMN.jpg',
    'https://i.imgur.com/9ZQMfJ4.jpg',
    'https://i.imgur.com/kq4i0MO.jpg',
    'https://i.imgur.com/zxerOq4.jpg',
    'https://i.imgur.com/BHhC7Ek.jpg',
    'https://i.imgur.com/nhseuyw.jpg',
    'https://i.imgur.com/aDS4xKK.jpg',
    'https://i.imgur.com/Ax6veAn.jpg',
    'https://i.imgur.com/xRzLvRH.jpg',
    'https://i.imgur.com/G49OUpK.jpg',
    'https://i.imgur.com/VblOI3N.jpg',
    'https://i.imgur.com/nSy2Av1.jpg',
    'https://i.imgur.com/MiKajJX.jpg',
    'https://i.imgur.com/jlroAjk.jpg',
    'https://i.imgur.com/GYOkRQp.jpg'
]

const itemSkus = Platform.select({
    ios: [
      1985162691
    ],
    android: [
      1985162691
    ]
});
//const backgroundImage = images[Math.floor(Math.random() * 16)]

const styles = StyleSheet.create({
    bannerAd:{
        marginTop: 10
    },
    button:{
        backgroundColor: '#37E8E8',
        justifyContent: 'center',
        width:'31%',
        borderRadius: 5
    },
    container:{
        flex:1,
        alignItems:'center'
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
    row:{
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin:10
    },
    text:{
        textAlign:'center',
        color:'white',
        fontSize:15,
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

    askForPurchase = function(){
        if (store.getState().purchase == null){
            RNIap.getPurchaseHistory().then(purchase => {
                store.dispatch(setPurchases(purchase))
                if (purchase.length == 0){
                    this.buyProduct()
                }else{
                     RNIap.getAvailablePurchases()
                }
            })
        }
    }

    buyProduct = function(){
        RNIap.requestPurchase("1985162691", false).then(purchase => {
            store.dispatch(setPurchases(purchase))
           }).catch((error) => {
                console.log(error.message);
        })
    }

    isEmpty = function(obj){
        return Object.keys(obj).length === 0;
    }

    playSound = function(sound){
        if (Platform.OS == 'android'){
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
            onPrs = () => this.askForPurchase()
            premiumLabel = <PremiumLabel />
        }else{
            onPrs = () => this.playSound(props.sound)
        }
        return(
            <TouchableOpacity style={styles.button} onPress={onPrs} >
                <Text ellipsizeMode="middle" numberOfLines={1} style={styles.text}>{props.name}</Text>
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
        <ScrollView>
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

/**
 * @param {[String]} sounds: The names of the soundFiles, excluding the extension
 * @param {String} folder: The folder that the sound files are stored in
 */
class Soundboard extends React.Component {

    constructor(props){
        super(props)
        const backgroundImage = images[Math.floor(Math.random() * 16)]
        this.props.navigation.addListener('willFocus', () =>{
            store.dispatch(setBackgroundImage({image:{uri: backgroundImage}}))
        })
        store.dispatch(setBackgroundImage({image:{uri: backgroundImage}}))
    }

    onError(error){
        store.dispatch(setBackgroundImage({image: require('../assets/images/default_seal.jpg')}))
    }

    render(){
        //Actual ad-unit-id: ca-app-pub-6273488784837824/7629908270
        //test id: ca-app-pub-3940256099942544/6300978111
        return(
            <ImageBackground style={styles.container} source={store.getState().backgroundImage.image} onError={this.onError.bind(this)}>
                <AdMobBanner style={styles.bannerAd} adSize="banner" adUnitID="ca-app-pub-6273488784837824/7629908270" didFailToReceiveAdWithError={this.bannerError} />
                <Board  />
            </ImageBackground>
        )
    }
}

export default Soundboard