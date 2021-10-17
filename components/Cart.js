import React from 'react';
import {View, Text, Image} from 'react-native';
import { FontAwesome, Feather, AntDesign,Ionicons  } from '@expo/vector-icons'; 

const Cart = (  ) =>{
    return(
       
        <View style={{flex:1, paddingHorizontal:5, paddingTop:20, paddingRight:10, backgroundColor:'white' }}>
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
        <Text></Text>
        </View>

        <View style={{flexDirection:'row',paddingVertical:10}}>
        <View style={{backgroundColor:'white', paddingHorizontal:10, paddingTop:10}}> 
        <Image 
            style={{width: 70, height:70, borderRadius:10
            }}
            source={{
                uri:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            }} 
            />

        </View>
        <View style={{paddingLeft:15,paddingTop: 5,flexDirection:'column', flex:4}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View>
        <Text>Pinarello Bike</Text>
        </View>
        <View>
        <AntDesign name="delete" size={24} color="orange" />
        </View>
        </View>
        <View>
        <Text style={{paddingTop:5,paddingBottom:10, color:'grey',fontSize:10}}>Mountain Bike</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
        <Feather name="dollar-sign" size={15} color="orange" />
        <Text style={{fontSize:17,fontWeight:'bold'}}>1,700.00</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <AntDesign name="minuscircle" size={24} color="black" />
        <Text style={{paddingHorizontal:10}}>1</Text>
        <AntDesign name="pluscircle" size={24} color="orange" />
        </View>
        </View>
        </View>

</View>

 <View style={{flexDirection:'row', paddingVertical:10}}>
        <View style={{backgroundColor:'white', paddingHorizontal:10, paddingTop:10}}> 
        <Image 
            style={{width: 70, height:70, borderRadius:10
            }}
            source={{
                uri:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            }} 
            />

        </View>
        <View style={{paddingLeft:15,paddingTop: 5,flexDirection:'column', flex:4}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View>
        <Text>Brompton Bike</Text>
        </View>
        <View>
        <AntDesign name="delete" size={24} color="orange" />
        </View>
        </View>
        <View>
        <Text style={{paddingTop:5,paddingBottom:10, color:'grey',fontSize:10}}>Mountain Bike</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
        <Feather name="dollar-sign" size={15} color="orange" />
        <Text style={{fontSize:17,fontWeight:'bold'}}>1,500.00</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <AntDesign name="minuscircle" size={24} color="black" />
        <Text style={{paddingHorizontal:10}}>1</Text>
        <AntDesign name="pluscircle" size={24} color="orange" />
        </View>
        </View>
        </View>

</View>

 <View style={{flexDirection:'row', paddingVertical:10}}>
        <View style={{backgroundColor:'white', paddingHorizontal:10, paddingTop:10}}> 
        <Image 
            style={{width: 70, height:70, borderRadius:10
            }}
            source={{
                uri:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            }} 
            />

        </View>
        <View style={{paddingLeft:15,paddingTop: 5,flexDirection:'column', flex:4}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View>
        <Text>Pinarello Bike</Text>
        </View>
        <View>
        <AntDesign name="delete" size={24} color="orange" />
        </View>
        </View>
        <View>
        <Text style={{paddingTop:5,paddingBottom:10, color:'grey',fontSize:10}}>Mountain Bike</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
        <Feather name="dollar-sign" size={15} color="orange" />
        <Text style={{fontSize:17,fontWeight:'bold'}}>1,200.00</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <AntDesign name="minuscircle" size={24} color="black" />
        <Text style={{paddingHorizontal:10}}>1</Text>
        <AntDesign name="pluscircle" size={24} color="orange" />
        </View>
        </View>
        </View>

</View>


<View style={{justifyContent:'center',padding:15,backgroundColor:'grey',flexDirection:'column',margin:15,marginTop:50,borderRadius:20}}>
<View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:5}}>
<Text>Subtotal</Text>
<Text><Feather name="dollar-sign" size={15} color="orange" />3,400.00</Text>
</View>

<View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:5, borderBottomWidth:1, borderStyle:'dashed'}}>
<Text>Shipping Fee</Text>
<Text><Feather name="dollar-sign" size={15} color="orange" />1,00.00</Text>
</View>

<View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:5}}>
<Text>Total</Text>
<Text><Feather name="dollar-sign" size={15} color="orange" />3,500.00</Text>
</View>


</View>

<View style={{alignItems:"center", justifyContent:"center",backgroundColor:'red',margin:20,borderRadius:10,height:50}}>

<Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Proceed to Checkout
</Text>

</View>






        </View>
       

    
)
}

export default Cart;
