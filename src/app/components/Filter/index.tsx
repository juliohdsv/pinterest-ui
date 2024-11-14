import { Pressable, PressableProps, Text } from "react-native";

import { styles } from "./style";
import { FilterProps } from "./filter";

export default function Filter({
  filter, 
  selected, 
  ...rest
}: PressableProps & FilterProps){
  return(
    <Pressable style={[styles.pressable, styles.pressableSelected]} {...rest}>
      <Text style={styles.text}>{filter}</Text>
    </Pressable>
  )
}