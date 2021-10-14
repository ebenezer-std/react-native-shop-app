import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import { FontAwesome, Feather, AntDesign,Ionicons  } from '@expo/vector-icons'; 
// import Bike from 'Bike';

export default function Home({component}) {
    return (
        <View style={{flex: 1, backgroundColor:"white", paddingLeft: 10}}>
            <View style={{padding:10, flexDirection: 'row', justifyContent:"space-between"}}>
           <Feather name="menu" size={24} color="black" />
           <FontAwesome name="bicycle" size={24} color="black" />
           <View style={{flexDirection:"row"}}>
           <AntDesign name="search1" size={24} color="black" style={{paddingRight:10}}/>
           <Ionicons name="notifications-outline" size={24} color="black" />
          </View>
          </View>
          <View style={{flexDirection: 'row', paddingBottom:1}}>
              <Text style={{fontWeight: '100', fontSize: 20, color:'grey'}}>The World's &nbsp;
              <Text style={{fontWeight: 'bold', fontSize: 30, color:'orange'}}>Best Bike</Text>
              </Text>
          </View>
          <Text style={{fontSize: 22, fontWeight:'bold', paddingTop:10}}>
              Categories
          </Text>

          <View style={{flexDirection:'row', justifyContent:"space-between",marginTop: 10}}>
              <Text style={{backgroundColor:'#F5F5F5', borderRadius:5,paddingHorizontal:15, color:'#686868'}}>All</Text>
              <Text style={{backgroundColor:'#F5F5F5', borderRadius:5,paddingHorizontal:15, color:'#686868'}}>Roadbike</Text>
              <Text style={{backgroundColor:'#F5F5F5', borderRadius:5,paddingHorizontal:15, color:'#686868'}}>Mountain</Text>
              <Text style={{backgroundColor:'#F5F5F5', borderRadius:5,paddingHorizontal:15, color:'#686868'}}>Urb</Text>
          </View>

          
          <View  style={{width: 150, height:200, backgroundColor:'#F5F5F5', marginTop:15 , alignItems:'center', justifyContent:'center',borderRadius:15, marginRight:10}}>
              <View>
            <Image 
            style={{width: 100, height:120, resizeMode:'contain'
            }}
            source={{
                uri:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            }} 
            />

              </View>
              <Text style={{color:'grey'}}>
                  Pinarello Bike
              </Text>
              <Text style={{fontWeight:"bold"}}>
                 <Text style={{color:'orange'}}>$</Text> 1,700.00
              </Text>


        </View>



        <View style={{flex: 1,flexDirection: 'row'}}>

         <View  style={{width: 150, height:200, backgroundColor:'#F5F5F5', marginTop:15 , alignItems:'center', justifyContent:'center',borderRadius:15, marginRight:10}}>
              <View>
            <Image 
            style={{width: 100, height:120, resizeMode:'contain'
            }}
            source={{
                uri:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            }} 
            />

              </View>
              <Text style={{color:'grey'}}>
                  Pinarello Bike
              </Text>
              <Text style={{fontWeight:"bold"}}>
                 <Text style={{color:'orange'}}>$</Text> 1,700.00
              </Text>


        </View>

        </View>
        

        

        
        


        </View>
    )
}


