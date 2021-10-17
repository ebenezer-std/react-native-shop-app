import React from 'react';
import {View, Text} from 'react-native';
import { FontAwesome, Feather, AntDesign,Ionicons  } from '@expo/vector-icons'; 

const Cart = (  ) =>{
    return(
       
        <View style={{flex:1, paddingHorizontal:5, paddingTop:20 }}>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <Ionicons name="arrow-back" size={24} color="black" />

        <View>
        <Text style= {{fontSize:20}}> 
        Cart List
        </Text>
        <Text style={{justifyContent:'center', alignItems:'center'}}>
        (3 items)
        </Text>
        </View>
        
        <Text>

        </Text>

        </View>

        </View>
       

    
)
}

export default Cart;
