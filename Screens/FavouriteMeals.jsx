import { StyleSheet, Text, View } from "react-native";
import { useFavourite } from "../Store/Contexts/FavouriteContext";
import MealList from "../Components/MealList";
import { MEALS } from "../data/dummy-data";

function FavouriteMeals() {
  const { favourite } = useFavourite();
  if (favourite.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          No favourite meals found. Start adding some!
        </Text>
      </View>
    );
  }

  const favouriteList = MEALS.filter((meal) => favourite.includes(meal.id));

  return <MealList items={favouriteList} />;
}

export default FavouriteMeals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
