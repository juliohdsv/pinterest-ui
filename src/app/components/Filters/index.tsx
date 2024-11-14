import { FlatList } from "react-native";

import Filter from "../Filter";
import { FILTERS } from "@/utils/filters";
import { styles } from "./style";

export default function Filters(){
  return(
  <FlatList 
    data={FILTERS}
    keyExtractor={item => item}
    renderItem={({ item }) => <Filter filter={item} selected/>}
    horizontal
    style={styles.list}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.content}
  />
)
}