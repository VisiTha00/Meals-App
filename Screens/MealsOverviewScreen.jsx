import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useEffect } from "react";
import MealList from "../Components/MealList";

function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useEffect(() => {
    const mealTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    navigation.setOptions({ title: mealTitle });
  }, [navigation, categoryId]);

  return <MealList items={displayedMeals} />;
}

export default MealsOverviewScreen;
