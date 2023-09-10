import { style } from "./Input.style";
import { Text, TextInput, View } from "react-native";
export function Input({ defaultValue, onChange, unit }) {
  return (
    <View style={style.inputContainer}>
      <TextInput
        maxLength={4}
        style={style.input}
        placeholder="Type your temperature"
        defaultValue={defaultValue.toString()}
        onChangeText={(text) => {
          onChange(text);
        }}
      ></TextInput>
      <Text style={style.unit}>{unit}</Text>
    </View>
  );
}
