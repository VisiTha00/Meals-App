import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { useEffect } from "react";
import IconButton from "../Components/IconButton";
import { useFavourite } from "../Store/Contexts/FavouriteContext";

function DetailsScreen({ route, navigation }) {
  const mealId = route.params.id;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const { addFavourite, removeFavourite, favourite } = useFavourite();
  const isFavourite = favourite.find((id) => id === mealId);

  function handleStarPress() {
    if (isFavourite) {
      removeFavourite(mealId);
    } else {
      addFavourite(mealId);
    }
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={isFavourite ? "star" : "star-outline"}
          color="white"
          onPress={handleStarPress}
        />
      ),
    });
  }, [navigation, handleStarPress]);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <View>
          <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
          <Text style={[styles.text, { fontSize: 18 }]}>
            {selectedMeal.title.toUpperCase()}
          </Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.details}>🔸{selectedMeal.duration} MINUTES </Text>
          <Text style={styles.details}>
            🔸{selectedMeal.complexity.toUpperCase()}{" "}
          </Text>
          <Text style={styles.details}>
            🔸{selectedMeal.affordability.toUpperCase()}{" "}
          </Text>
        </View>
        <View>
          <Text style={[styles.text, { marginTop: 20 }]}>INGREDIENTS</Text>
          {selectedMeal.ingredients.map((ingredient) => (
            <Text key={ingredient} style={styles.lowerText}>
              🔸 {ingredient}
            </Text>
          ))}
        </View>
        <View>
          <Text style={[styles.text, { marginTop: 20 }]}>STEPS</Text>
          {selectedMeal.steps.map((step) => (
            <Text key={step} style={styles.lowerText}>
              🔸 {step}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    margin: 15,
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#4e09bb",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
    marginVertical: 10,
    backgroundColor: "#207eea",
    borderRadius: 8,
  },
  lowerText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "#7494f5",
    margin: 2,
    borderRadius: 8,
    padding: 2,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#7494f5",
    borderRadius: 8,
  },
  details: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    marginHorizontal: 2,
  },
});
