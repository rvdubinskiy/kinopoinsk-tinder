import React, { useState } from "react";
import { View, Text, ImageBackground, Dimensions } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { CardItem } from "../components";
import styles from "../assets/styles";
import DEMO from "../assets/data/demo";
import FINISH_SCREEN from '../assets/images/file_screen.jpg';
import { shuffleArray } from "../utils";

const { height, width } = Dimensions.get('screen');

const Home = () => {
  const [swiper, setSwiper] = useState<CardStack | null>(null);
  const [memoData] = useState(() => shuffleArray(DEMO));

  const [index, setIndex] = useState(0);
  return (
    <View
      // source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <Text style={styles.mainTitle}>
            Какое у вас настроение?
          </Text>
          {/*<Text style={{color: 'grey', fontSize: 16, marginTop: 10}}>Это фильмы, которые вы уже смотрели</Text>*/}
          {/*<Image source={require("../assets/kp-logo.png")} style={styles.logo}/>*/}
        </View>

        {index === 9 ? <ImageBackground source={FINISH_SCREEN} width={width} height={height} style={{ height, width }}/> : (

          <CardStack
            loop
            verticalSwipe={false}
            renderNoMoreCards={() => null}
            onSwiped={setIndex}
            ref={(newSwiper): void => setSwiper(newSwiper)}
          >
            {memoData.map((item) => (
              <Card key={item.id}>
                <CardItem
                  hasActions
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  matches={item.match}
                  onSwipeLeft={() => {
                    swiper?.swipeLeft();
                  }}
                  onSwipeRight={() => swiper?.swipeRight()}
                />
              </Card>
            ))}
          </CardStack>
        )}
      </View>
    </View>
  );
};

export default Home;
