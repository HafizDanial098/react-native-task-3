import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



const Profile_card = ({profile}) => {
  return (
    <View style={style.container}>
    <View style={style.image_box}>
      <Image
        style={style.image}
        source={{
          uri: profile.uri
        }}
      />
      </View>
      <Text style={style.name}>{profile.name}</Text>
      <Text style={style.bio}>{profile.bio}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    margin: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 80,
    elevation: 25,
    borderRadius:20,
  },
  image_box: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 50,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 80,
    elevation: 25,
    
  },
  image : {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  name:{
    fontSize:16,
    fontWeight:'bold',
    padding:10,
    marginTop: -45,

  },
  bio:{
    textAlign:'center',
    color:'black',
    marginTop: 5
  }
});

export default Profile_card;
