import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function DisplayedMeal({ meal }) {
  const { id, title, imageUrl, duration, complexity, affordability } = meal;
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("details", { id: id });
  }

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.pressItem,
          pressed ? { opacity: 0.5 } : null,
        ]}
        onPress={handlePress}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <View style={styles.detailContainer}>
            <Text style={styles.details}>🔸{duration} MINUTES </Text>
            <Text style={styles.details}>🔸{complexity.toUpperCase()} </Text>
            <Text style={styles.details}>🔸{affordability.toUpperCase()} </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default DisplayedMeal;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    shadowRadius: 10,
    elevation: 4,
    backgroundColor: "#edaba6",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    overflow: "hidden",
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  details: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
    marginHorizontal: 2,
  },
});
