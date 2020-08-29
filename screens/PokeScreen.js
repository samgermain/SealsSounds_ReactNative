import React from 'react';
import { StyleSheet, ScrollView, Image, View, ImageBackground, TouchableOpacity } from 'react-native';
import {images} from '../components/images.js'
import {pokeButtons} from '../components/pokeButtons.js'
import {ShareSheet} from 'react-native-share'
import {ShareButton} from '../components/ShareButtons'
//import Modal from 'react-native-modal'

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%'
    },
    grid:{
        display:"flex",
        flexDirection:"column"
    },
    pokeButton:{
        maxWidth:100,
        maxHeight:100
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin:10
    },
})

// /**
//  * A row of sound buttons
//  * @param {[[Sound Object,String]]} props.sounds : An array where each is a 2d array with the Sound object and the name of the sound
//  */
// const Row = (props) => {
//     return(
//         <View style={styles.row}>
//             {props.images.map(img => <PokeButton source={img}/>)}
//         </View>
//     )
// }

// class PokeButton extends React.Component{
//     constructor(props){
//         super(props)
//         this.props = props
//     }
//     poke(){
//         // const options = {
//         //     title: 'Share via',
//         //     message: 'some message',
//         //     url: 'some share url',
//         //     social: Share.Social.SMS,
//         //     whatsAppNumber: "3062417019",  // country code + phone number
//         //     filename: 'test' , // only for base64 file in Android 
//         // }
//         // Share.shareSingle(options)
//         // const shareOptions = {
//         //     title: 'Share via',
//         //     message: 'some message',
//         //     url: 'some share url',
//         //     social: Share.Social.WHATSAPP, 
//         //     social: Share.Social.FACEBOOK,
//         //     whatsAppNumber: "9199999999",  // country code + phone number
//         //     filename: 'test' , // only for base64 file in Android 
//         // };
//         // Share.shareSingle(shareOptions);
        

        
//         // let options = {
//         //     message: "hello"
//         // }
//         // Share.open(options).then((res) => {
//         //      console.log(res) 
//         // }).catch((err) => {
//         //      err && console.log(err); 
//         // });
//     }
//     render(){
//         let props = this.props
//         return(
//             <TouchableOpacity 
//                 onPress={this.poke}
//                 style={styles.pokeButton}
//             >
//                 <Image resizeMode={'contain'} style={styles.pokeButton} source={props.source} />
//             </TouchableOpacity>
//         )
//     }
// }

class PokeScreen extends React.Component{
    constructor(){
        super()
        this.backgroundImage = images[Math.floor(Math.random() * 16)]
        this.shareVis = false
        this.userName = 'Sam'
        this.shareImage = ''
    }

    /**
     * A row of sound buttons
     * @param {[[Sound Object,String]]} props.sounds : An array where each is a 2d array with the Sound object and the name of the sound
     */
    row = function(images){
        return (
            <View style={styles.row}>
                {images.map(img => this.pokeButton(img))}
            </View>
        )
    }

    pokeButton = function(source){
        return ( 
            <TouchableOpacity 
                onPress={() => {
                    this.shareVis=true
                    this.shareImage=source
                }}
                style={styles.pokeButton}
            >
                <Image resizeMode={'contain'} style={styles.pokeButton} source={source} />
            </TouchableOpacity>
        )
    }

    render(){
        let curRow = []
        return(
            <ImageBackground style={styles.container} source={this.backgroundImage}>
                <ScrollView id="grid">
                    {pokeButtons.map((bName) => {
                        curRow.push(bName)
                        if (curRow.length >= 3){
                            let row = this.row(images)
                            curRow = []
                            return row
                        }else if (bName === pokeButtons[pokeButtons.length - 1]){
                            return this.row(curRow)
                        }
                    })}
                </ScrollView>
                <ShareSheet visible={this.shareVis} children={['FACEBOOK', 'INSTAGRAM'. 'WHATSAPP', 'SNAPCHAT', 'SMS'].map((social) => <ShareButton social={social} name={this.userName} image={this.shareImage} />)} />
            </ImageBackground>
        )
    }
}

export default PokeScreen