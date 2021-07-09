import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";



export function GuildIcon({  }) {

    const uri = 'https://i.pinimg.com/originals/9d/58/a3/9d58a37a34c0c4122a52d033a7808d4a.png'

  return (
   
    <Image 
        source={{ uri }}
        style={styles.image}
        resizeMode='cover'
    />
        
    
  );
}
