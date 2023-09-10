import { TouchableOpacity, Text } from "react-native";
import { style } from "./ButtonConvert.style";

export function ButtonConvert({ unit, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={style.button}>
      <Text style={style.buttonText}>Convert to {unit}</Text>
    </TouchableOpacity>
  );
}
