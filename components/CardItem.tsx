import React from "react";
import {Text, View, Image, Dimensions, TouchableOpacity, ImageBackground} from "react-native";
import Icon from "./Icon";
import { CardItemT } from "../types";
import styles, {
  DISLIKE_ACTIONS,
  FLASH_ACTIONS,
  LIKE_ACTIONS,
  STAR_ACTIONS,
  WHITE,
} from "../assets/styles";

const CardItem = ({
  description,
  hasActions,
  hasVariant,
  image,
  isOnline,
  matches,
  name,
}: CardItemT) => {
  // Custom styling
  const fullWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const imageStyle = [
    {
      borderRadius: 20,
      width: '100%',
      height: screenHeight - 250,
      flex: 1,
      overflow: 'hidden',
      // width: hasVariant ? fullWidth / 2 - 30 : fullWidth - 80,
      // height: hasVariant ? 170 : 350,
      // margin: hasVariant ? 0 : 20,
    },
  ];

  const nameStyle = [
    {
      paddingTop: hasVariant ? 10 : 15,
      paddingBottom: hasVariant ? 5 : 7,
      color: "#ffffff",
      fontWeight: "bold",
      fontSize: hasVariant ? 15 : 30,
    },
  ];

  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <ImageBackground source={image} style={imageStyle} >

        <View style={{flex: 1,
          backgroundColor: 'rgba(0,0,0, 0.35)',
          padding: 20,
          justifyContent: "flex-end"
        }}>
          <View style={{width: fullWidth - 80, alignItems: "center"}}>

      {/* NAME */}
      <Text style={nameStyle}>{name}</Text>

     {/* MATCHES */}
       {matches && (
           <View style={styles.matchesCardItem}>
           <Text style={styles.matchesTextCardItem}>
              <Icon name="heart" color={WHITE} size={13} /> Этот фильм подходит вам на {matches}%
           </Text>
         </View>
     )}

      {/* DESCRIPTION */}
      {description && (
        <Text style={styles.descriptionCardItem}>{description}</Text>
      )}

      {/* STATUS */}
      {!description && (
        <View style={styles.status}>
          <View style={isOnline ? styles.online : styles.offline} />
          <Text style={styles.statusText}>
            {isOnline ? "Online" : "Offline"}
          </Text>
        </View>
      )}

      {/* ACTIONS */}
      {hasActions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity style={styles.miniButton}>
            <Icon name="star" color={STAR_ACTIONS} size={14} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="heart" color={LIKE_ACTIONS} size={25} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="close" color={DISLIKE_ACTIONS} size={25} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.miniButton}>
            <Icon name="flash" color={FLASH_ACTIONS} size={14} />
          </TouchableOpacity>
        </View>
      )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CardItem;
