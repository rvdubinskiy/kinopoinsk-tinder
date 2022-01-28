import React, { useState } from "react";
import { View, Text, ImageBackground, Dimensions, Button } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { CardItem } from "../components";
import styles from "../assets/styles";
import DEMO from "../assets/data/demo";
import FINISH_SCREEN from '../assets/images/file_screen.jpg';
import START_SCREEN from '../assets/images/final_screen.gif';
import { shuffleArray } from "../utils";

const { height, width } = Dimensions.get('screen');
const MAX_CARD_INDEX = 9;

type Tab = 'startScreen' | 'main' | 'endScreen';

const Home = () => {
  const [swiper, setSwiper] = useState<CardStack | null>(null);
  const [memoData] = useState(() => shuffleArray(DEMO));

  const [tabId, setCurrentTabId] = useState<Tab>('startScreen');
  return (
    <View
      // source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      {/* {tabId === 'startScreen' && <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height, width }}><View onTouchStart={() => setCurrentTabId('main')}><Text style={{ color: 'white' }}>Start</Text></View></View>} */}
      {tabId === 'startScreen' && (
        <View onTouchStart={() => setCurrentTabId('main')}>
          <ImageBackground  source={START_SCREEN} style={{ height, width, flex: 1 }} />
        </View>
      )}
      {tabId === 'main' && (
        <View style={styles.containerHome}>
          <View style={styles.top}>
            <Text style={styles.mainTitle}>
              Какое у вас настроение?
            </Text>
            {/*<Text style={{color: 'grey', fontSize: 16, marginTop: 10}}>Это фильмы, которые вы уже смотрели</Text>*/}
            {/*<Image source={require("../assets/kp-logo.png")} style={styles.logo}/>*/}
          </View>
          <CardStack
            loop
            verticalSwipe={false}
            renderNoMoreCards={() => null}
            onSwiped={(index: number) => {
              if (index === MAX_CARD_INDEX) {
                setCurrentTabId('endScreen');
              }
            }}

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
        </View>
      )}
      {tabId === 'endScreen' && <ImageBackground source={FINISH_SCREEN} width={width} height={height} style={{ height, width }} />}
    </View>
  );
};

export default Home;
