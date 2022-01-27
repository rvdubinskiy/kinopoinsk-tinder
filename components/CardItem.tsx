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
      height: screenHeight - 300,
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

        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0, 0.35)',
          padding: 20,
          justifyContent: "flex-end"
        }}>
          <View style={{ width: fullWidth - 80, alignItems: "center" }}>

            {/* NAME */}
            <Text style={nameStyle}>{name}</Text>

            {/* MATCHES */}
            {matches && (
              <View style={styles.matchesCardItem}>
                <SVG width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#13B4BF"/>
                  <Path fill-rule="evenodd" clip-rule="evenodd" d="M12 16.5L6.70993 19.2812L7.72024 13.3906L3.44049 9.21885L9.35497 8.35942L12 3L14.645 8.35942L20.5595 9.21885L16.2798 13.3906L17.2901 19.2812L12 16.5Z" fill="white"/>
                </SVG>
                <Text style={styles.matchesTextCardItem}>
                  {/*<Icon name="heart" color={WHITE} size={13} /> */}
                  Ваша оценка {matches}%
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
                <View>
                  <TouchableOpacity style={styles.button}>
                    <SVG width="42" height="42" viewBox="0 0 42 42" fill="none">
                      <Path fillRule="evenodd" clipRule="evenodd" d="M2.625 21C2.625 17.0625 9.1875 7.875 21 7.875C32.8125 7.875 39.375 17.0625 39.375 21C39.375 24.9375 32.8125 34.125 21 34.125C9.1875 34.125 2.625 24.9375 2.625 21ZM21 29.3125C23.2046 29.3125 25.3189 28.4367 26.8778 26.8778C28.4367 25.3189 29.3125 23.2046 29.3125 21C29.3125 18.7954 28.4367 16.6811 26.8778 15.1222C25.3189 13.5633 23.2046 12.6875 21 12.6875C18.7954 12.6875 16.6811 13.5633 15.1222 15.1222C13.5633 16.6811 12.6875 18.7954 12.6875 21C12.6875 23.2046 13.5633 25.3189 15.1222 26.8778C16.6811 28.4367 18.7954 29.3125 21 29.3125V29.3125ZM25.725 21C25.725 22.2531 25.2272 23.455 24.3411 24.3411C23.455 25.2272 22.2531 25.725 21 25.725C19.7469 25.725 18.545 25.2272 17.6589 24.3411C16.7728 23.455 16.275 22.2531 16.275 21C16.275 19.7469 16.7728 18.545 17.6589 17.6589C18.545 16.7728 19.7469 16.275 21 16.275C22.2531 16.275 23.455 16.7728 24.3411 17.6589C25.2272 18.545 25.725 19.7469 25.725 21Z" fill="white" />
                      <Line x1="2.12132" y1="3" x2="39" y2="39.8787" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    </SVG>
                  </TouchableOpacity>
                  <Text style={styles.buttonText}>Не такое</Text>
                </View>

                <View>
                  <TouchableOpacity style={[styles.button, styles.buttonLike]} onPress={onSwipeRight}>
                    <SVG width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <Circle cx="41" cy="41" r="41" fill="#FF6600"/>
                      <Path fill-rule="evenodd" clip-rule="evenodd" d="M22.625 41C22.625 37.0625 29.1875 27.875 41 27.875C52.8125 27.875 59.375 37.0625 59.375 41C59.375 44.9375 52.8125 54.125 41 54.125C29.1875 54.125 22.625 44.9375 22.625 41ZM41 49.3125C43.2046 49.3125 45.3189 48.4367 46.8778 46.8778C48.4367 45.3189 49.3125 43.2046 49.3125 41C49.3125 38.7954 48.4367 36.6811 46.8778 35.1222C45.3189 33.5633 43.2046 32.6875 41 32.6875C38.7954 32.6875 36.6811 33.5633 35.1222 35.1222C33.5633 36.6811 32.6875 38.7954 32.6875 41C32.6875 43.2046 33.5633 45.3189 35.1222 46.8778C36.6811 48.4367 38.7954 49.3125 41 49.3125V49.3125ZM45.725 41C45.725 42.2531 45.2272 43.455 44.3411 44.3411C43.455 45.2272 42.2531 45.725 41 45.725C39.7469 45.725 38.545 45.2272 37.6589 44.3411C36.7728 43.455 36.275 42.2531 36.275 41C36.275 39.7469 36.7728 38.545 37.6589 37.6589C38.545 36.7728 39.7469 36.275 41 36.275C42.2531 36.275 43.455 36.7728 44.3411 37.6589C45.2272 38.545 45.725 39.7469 45.725 41Z" fill="white"/>
                    </SVG>
                  </TouchableOpacity>
                  <Text style={styles.buttonText}>Такое</Text>
                </View>

                {/*<View>*/}
                {/*  <TouchableOpacity style={styles.button} onPress={onSwipeLeft}>*/}
                {/*    /!* <Icon name="heart" color={LIKE_ACTIONS} size={25} /> *!/*/}
                {/*    <SVG width="42" height="42" viewBox="0 0 42 42" fill="none">*/}
                {/*      <Path fillRule="evenodd" clipRule="evenodd" d="M33.6122 10.8623C33.931 10.5322 34.1074 10.0902 34.1034 9.63131C34.0994 9.17246 33.9154 8.73354 33.5909 8.40908C33.2665 8.08461 32.8275 7.90057 32.3687 7.89658C31.9098 7.89259 31.4678 8.06898 31.1377 8.38776L21 18.5255L10.8622 8.38776C10.5322 8.06898 10.0901 7.89259 9.63129 7.89658C9.17244 7.90057 8.73352 8.08461 8.40906 8.40908C8.08459 8.73354 7.90055 9.17246 7.89656 9.63131C7.89257 10.0902 8.06896 10.5322 8.38774 10.8623L18.5255 21L8.38774 31.1378C8.2206 31.2992 8.08728 31.4923 7.99556 31.7058C7.90385 31.9193 7.85557 32.1489 7.85355 32.3813C7.85153 32.6137 7.89581 32.8441 7.9838 33.0592C8.07179 33.2742 8.20174 33.4696 8.36605 33.634C8.53036 33.7983 8.72575 33.9282 8.94082 34.0162C9.15589 34.1042 9.38633 34.1485 9.61869 34.1465C9.85106 34.1444 10.0807 34.0962 10.2942 34.0044C10.5077 33.9127 10.7008 33.7794 10.8622 33.6123L21 23.4745L31.1377 33.6123C31.4678 33.931 31.9098 34.1074 32.3687 34.1034C32.8275 34.0995 33.2665 33.9154 33.5909 33.5909C33.9154 33.2665 34.0994 32.8276 34.1034 32.3687C34.1074 31.9099 33.931 31.4678 33.6122 31.1378L23.4745 21L33.6122 10.8623Z" fill="white" />*/}
                {/*    </SVG>*/}
                {/*  </TouchableOpacity>*/}
                {/*  <Text style={styles.buttonText}>Не такое</Text>*/}
                {/*</View>*/}

                {/*<View>*/}
                {/*<TouchableOpacity style={[styles.button, styles.buttonLike]} onPress={onSwipeRight}>*/}
                {/*  <SVG width="42" height="42" viewBox="0 0 42 42" fill="none">*/}
                {/*    <Path fillRule="evenodd" clipRule="evenodd" d="M27.825 7.875C27.825 5.25 25.2315 3.5 23.205 3.5C21.7945 3.5 21.6842 4.571 21.4673 6.685C21.371 7.6125 21.2555 8.7395 21 10.0625C20.3245 13.566 17.99 18.0425 15.757 19.3812V29.75C15.75 33.6875 17.0625 35 22.75 35H29.3528C33.1608 35 34.083 32.4922 34.426 31.563L34.4487 31.5C34.6482 30.9645 35.0753 30.5428 35.5653 30.065C36.1077 29.5295 36.7272 28.9223 37.1875 28C37.7318 26.9097 37.66 25.9403 37.5952 25.0775C37.555 24.5543 37.5182 24.0713 37.625 23.625C37.737 23.1525 37.8805 22.7938 38.0188 22.4508C38.269 21.8278 38.5 21.2502 38.5 20.125C38.5 17.5 37.191 15.7535 34.4487 15.7535H27.125C27.125 15.7535 27.825 10.5 27.825 7.875ZM9.625 17.5C8.92881 17.5 8.26113 17.7766 7.76884 18.2688C7.27656 18.7611 7 19.4288 7 20.125V32.375C7 33.0712 7.27656 33.7389 7.76884 34.2312C8.26113 34.7234 8.92881 35 9.625 35C10.3212 35 10.9889 34.7234 11.4812 34.2312C11.9734 33.7389 12.25 33.0712 12.25 32.375V20.125C12.25 19.4288 11.9734 18.7611 11.4812 18.2688C10.9889 17.7766 10.3212 17.5 9.625 17.5Z" fill="white" />*/}
                {/*  </SVG>*/}
                {/*</TouchableOpacity>*/}
                {/*  <Text style={styles.buttonText}>Такое</Text>*/}
                {/*</View>*/}
              </View>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CardItem;
