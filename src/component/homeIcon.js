import React from 'react';
import { View, Text } from 'react-native';
import { Card, CardItem, Thumbnail } from 'native-base';
import { Icon } from 'react-native-elements';


const Homeicon=({icons,types,name})=>{
    return(
        <View style={{ alignItems: 'center', width: '30%', marginVertical: 20 }}>
            <Icon
                name={icons}
                size={40}
                type={types}
                color='tomato'
                containerStyle={{borderWidth:2,borderColor:'tomato',borderRadius:60,width:60,height:60,justifyContent: 'center',alignItems: 'center'
                }}
            />
            <Text style={{fontSize:15}}>{name}</Text>
        </View>
    )
}

export default Homeicon;