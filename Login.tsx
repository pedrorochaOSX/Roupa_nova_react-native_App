import React from 'react';
import {Text, View, Image,TextInput,Button} from 'react-native';

export default function Login({navigation}: {navigation: any}) {
  return (  
    <View style={{flex:1, backgroundColor:'yellow'}}>
      <Image 
        source={require('./logo.png')} 
        style={{width:100, height:100, alignSelf:'center',marginTop:50}}>
      </Image>        
      <Text style={{backgroundColor:'yellow',paddingTop:30,alignSelf:'center',fontSize:35,fontWeight:'bold',marginBottom:5}}>LOGIN</Text>
      <Button 
        title='Cadastrar nova conta'
        onPress={() => {navigation.navigate('Registrar')}}>Cadastrar nova conta
      </Button>

      <View style={{flex:1,flexDirection:'column',backgroundColor:'yellow',alignItems:'center',marginTop:25,marginBottom:0}}>        
        <View style={{flex:1,backgroundColor:'yellow',padding:10,justifyContent:'space-between'}}>
          <TextInput style={{borderColor:'transparent',borderBottomColor:'black',borderWidth:2,padding:1,margin:0,fontSize:18}} placeholder = 'E-mail'/>
        </View>  

        <View style={{flex:1,backgroundColor:'yellow',padding:0,justifyContent:'space-between'}}>
          <TextInput style={{borderColor:'transparent',borderBottomColor:'black',borderWidth:2,padding:1,margin:0,marginTop:-20,fontSize:18}}secureTextEntry={true} placeholder = 'Senha'/>
        </View> 
      </View>  

      <View style={{flex:1,backgroundColor:'yellow',padding:0,alignSelf:'center',width:210,marginTop:-20}}>  
        <Button 
          title='Login'
          onPress={()=>{navigation.navigate('Home')}}/>
      </View>

    </View>    
  );
}