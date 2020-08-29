import React from 'react';
import {  TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

class ShareButton extends Component {
  constructor(props) {
    super(props);
    this.props = props
  }

  share(social, name, image){
    //social can be fbMessenger, instagramDM, whatsapp, sms, snapchat
    const shareOptions = {
        title: `${name} SealPoked You`,
        message: 'Tap to SealPoke them back!',
        url: Platform.select({
            ios: 'https://apps.apple.com/ca/app/sealsounds/id1479633015',
            android: 'https://play.google.com/store/apps/details?id=com.samgermain.sealsoundsapp&hl=en&showAllReviews=true',
        }),
        social: social,
        whatsAppNumber: "9199999999",  //TODO: What is this?
        filename: image, // only for base64 file in Android 
    };
    Share.shareSingle(shareOptions);
  }

  render() {
    const social = this.props.social
    const name = this.props.name
    const image = this.props.image
    return (
        <TouchableOpacity style={styles.button} onPress={this.share(social, name, image)} >
            <FontAwesomeIcon icon={['fab', social.toLowerCase()]} />
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    button:{
        width: 50,
        height: 50
    },
    icons:{
        width:'100%',
        height:'100%'
    }
})

export default ShareButton