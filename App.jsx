import { style } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ImageBackground } from "react-native";
import hotbackground from "./assets/hot.png";
import coldbackground from "./assets/cold.png";
import { Input } from "./components/Input/Input";
import { useEffect, useState } from "react";
import { DisplayTemperature } from "./components/DisplayTemperature/DisplayTemperature";
import {
  UNITS,
  convertTemperatureTo,
  getOppositeUnit,
  isIceTemperature,
} from "./utils/temperature";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");
  const oppositeFunction = getOppositeUnit(currentUnit);
  const [currentBackground, setCurrentBackground] = useState(coldbackground);

  useEffect(() => {
    const isCold = isIceTemperature(inputValue, currentUnit);
    setCurrentBackground(isCold ? coldbackground : hotbackground);
  }, [inputValue, currentUnit]);

  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      convertTemperatureTo(inputValue, oppositeFunction).toFixed(1);
    }
  }
  return (
    <ImageBackground style={style.backgroundImage} source={currentBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={style.root}>
          <View style={style.workspace}>
            <DisplayTemperature
              unit={oppositeFunction}
              temperature={convertTemperatureTo(
                inputValue,
                oppositeFunction
              ).toFixed(1)}
            />
            <Input
              unit={currentUnit}
              onChange={setInputValue}
              defaultValue={0}
            />
            <ButtonConvert
              onPress={() => {
                setCurrentUnit(getOppositeUnit);
              }}
              unit={currentUnit}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
