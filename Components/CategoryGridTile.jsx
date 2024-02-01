import { Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.pressItem,
          pressed ? { opacity: 0.5 } : null,
        ]} // This is the ripple effect for IOS
        onPress={onPress}
      >
        <View style={styles.mealItem}>
          <Text style={styles.textItem}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    width: 150,
    borderRadius: 10,
    shadowRadius: 10,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    overflow: "hidden",
  },
  pressItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mealItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textItem: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
