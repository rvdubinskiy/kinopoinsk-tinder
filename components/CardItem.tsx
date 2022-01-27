import React from "react";
import { Text, View, Image, Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import Icon from "./Icon";
import SVG, {Path, Line, Circle} from 'react-native-svg';
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
  onSwipeLeft,
  onSwipeRight
}: CardItemT) => {
  // Custom styling
  const fullWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const imageStyle = [
    {
      borderRadius: 20,
      width: '100%',
      height: screenHeight - 390,
      flex: 1,
      overflow: 'hidden'
    },
  ];

  const nameStyle = [
    {
      paddingTop: hasVariant ? 10 : 15,
      // paddingBottom: hasVariant ? 5 : 7,
      paddingBottom: 10,
      color: "#ffffff",
      fontWeight: "bold",
      fontSize: hasVariant ? 15 : 30,
    },
  ];

  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <ImageBackground source={image} style={imageStyle}>

        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0, 0.25)',
          padding: 20,
          justifyContent: "flex-end"
        }}>
          {/* MATCHES */}
          {matches && (
              <View style={styles.matchesCardItem}>
                <Text style={styles.matchesTextCardItem}>
                  Ваша оценка
                </Text>
                <View style={{
                  backgroundColor: '#41A52A',
                  borderRadius: 100,
                  paddingTop: 2,
                  paddingBottom: 2,
                  paddingLeft: 6,
                  paddingRight: 6,
                  marginLeft: 10}}>
                  <Text style={{color: 'white'}}><Icon name="star" color={WHITE} size={13} />{matches}</Text>
                </View>
              </View>
          )}
          <View style={{ width: fullWidth - 80, alignItems: "center" }}>

            {/* NAME */}
            {/*<Text style={nameStyle}>{name}</Text>*/}

            {/* DESCRIPTION */}
            {/*{description && (*/}
            {/*  <Text style={styles.descriptionCardItem}>{description}</Text>*/}
            {/*)}*/}


            {/* STATUS */}
            {!description && (
              <View style={styles.status}>
                <View style={isOnline ? styles.online : styles.offline} />
                <Text style={styles.statusText}>
                  {isOnline ? "Online" : "Offline"}
                </Text>
              </View>
            )}
          </View>
        </View>
      </ImageBackground>
      {/* ACTIONS */}
      {hasActions && (
          <View style={styles.actionsCardItem}>
            <View>
              <TouchableOpacity style={styles.button}>
                <SVG width="30" height="30" viewBox="0 0 42 42" fill="none">
                  <Path fillRule="evenodd" clipRule="evenodd" d="M2.625 21C2.625 17.0625 9.1875 7.875 21 7.875C32.8125 7.875 39.375 17.0625 39.375 21C39.375 24.9375 32.8125 34.125 21 34.125C9.1875 34.125 2.625 24.9375 2.625 21ZM21 29.3125C23.2046 29.3125 25.3189 28.4367 26.8778 26.8778C28.4367 25.3189 29.3125 23.2046 29.3125 21C29.3125 18.7954 28.4367 16.6811 26.8778 15.1222C25.3189 13.5633 23.2046 12.6875 21 12.6875C18.7954 12.6875 16.6811 13.5633 15.1222 15.1222C13.5633 16.6811 12.6875 18.7954 12.6875 21C12.6875 23.2046 13.5633 25.3189 15.1222 26.8778C16.6811 28.4367 18.7954 29.3125 21 29.3125V29.3125ZM25.725 21C25.725 22.2531 25.2272 23.455 24.3411 24.3411C23.455 25.2272 22.2531 25.725 21 25.725C19.7469 25.725 18.545 25.2272 17.6589 24.3411C16.7728 23.455 16.275 22.2531 16.275 21C16.275 19.7469 16.7728 18.545 17.6589 17.6589C18.545 16.7728 19.7469 16.275 21 16.275C22.2531 16.275 23.455 16.7728 24.3411 17.6589C25.2272 18.545 25.725 19.7469 25.725 21Z" fill="white" />
                  <Line x1="2.12132" y1="3" x2="39" y2="39.8787" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </SVG>
              </TouchableOpacity>
              <Text style={styles.buttonText}>Не такое</Text>
            </View>

            <View>
              <TouchableOpacity style={[styles.button, styles.buttonLike]} onPress={onSwipeRight}>
                <SVG width="60" height="60" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Circle cx="41" cy="41" r="41" fill="#FF6600"/>
                  <Path fill-rule="evenodd" clip-rule="evenodd" d="M22.625 41C22.625 37.0625 29.1875 27.875 41 27.875C52.8125 27.875 59.375 37.0625 59.375 41C59.375 44.9375 52.8125 54.125 41 54.125C29.1875 54.125 22.625 44.9375 22.625 41ZM41 49.3125C43.2046 49.3125 45.3189 48.4367 46.8778 46.8778C48.4367 45.3189 49.3125 43.2046 49.3125 41C49.3125 38.7954 48.4367 36.6811 46.8778 35.1222C45.3189 33.5633 43.2046 32.6875 41 32.6875C38.7954 32.6875 36.6811 33.5633 35.1222 35.1222C33.5633 36.6811 32.6875 38.7954 32.6875 41C32.6875 43.2046 33.5633 45.3189 35.1222 46.8778C36.6811 48.4367 38.7954 49.3125 41 49.3125V49.3125ZM45.725 41C45.725 42.2531 45.2272 43.455 44.3411 44.3411C43.455 45.2272 42.2531 45.725 41 45.725C39.7469 45.725 38.545 45.2272 37.6589 44.3411C36.7728 43.455 36.275 42.2531 36.275 41C36.275 39.7469 36.7728 38.545 37.6589 37.6589C38.545 36.7728 39.7469 36.275 41 36.275C42.2531 36.275 43.455 36.7728 44.3411 37.6589C45.2272 38.545 45.725 39.7469 45.725 41Z" fill="white"/>
                </SVG>
              </TouchableOpacity>
              <Text style={styles.buttonText}>Такое</Text>
            </View>
          </View>
      )}
    </View>
  );
};

export default CardItem;
