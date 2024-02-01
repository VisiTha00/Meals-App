import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../Components/CategoryGridTile";

function CategoryDisplayScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        renderItem={(itemData) => (
          <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={() =>
              navigation.navigate("Meals Overview", {
                categoryId: itemData.item.id,
              })
            }
          />
        )}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default CategoryDisplayScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 20,
  },
});
