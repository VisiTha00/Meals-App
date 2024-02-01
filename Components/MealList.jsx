import { FlatList, StyleSheet, View } from "react-native";
import DisplayedMeal from "./DisplayedMeal";

function MealList({ items }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={(itemData) => <DisplayedMeal meal={itemData.item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
