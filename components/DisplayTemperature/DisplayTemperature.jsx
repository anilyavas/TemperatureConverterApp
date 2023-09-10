import { style } from "./DisplayTemperature.style";
import { Text } from "react-native";
export function DisplayTemperature({ temperature, unit }) {
  return (
    <Text style={style.temperatureText}>
      {temperature}
      {unit}
    </Text>
  );
}
