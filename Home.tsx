import * as React from 'react';
import {Text, View, Image,TextInput,Button} from 'react-native';

export default function Home({ navigation }: {navigation: any}) {
  return (  
    <View style={{flex:1, backgroundColor:'white'}}>
      <View style={{backgroundColor:'#fff000',height:35}}/>   
      <View style={{backgroundColor:'yellow',height:80,flexDirection:'row'}}>
        <Image
          source={require('./UserDefaultPhoto.png')} 
          style={{width:60, height:60, alignSelf:'left',margin:10}}>
        </Image>
        <Image
          source={require('./IconSearch.png')} 
          style={{width:40, height:40, alignSelf:'right',margin:10, alignSelf:'center'}}>
        </Image>        
      </View>  
              
      <View style={{backgroundColor:'transparent',padding:0,alignSelf:'center',width:210,height:210, marginTop:100, justifyContent:'center'}}>  
        <Button 
          title='ACESSAR CONTA'
          onPress={() => {navigation.navigate('Login') }}/>
      </View>

    </View>    
  );
}