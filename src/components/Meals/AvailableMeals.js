import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "오미베리 사과차",
    description: "문경오미자와 청송 사과, 레드커런트가 어우러진 달콤하고 상큼한 과일차",
    price: 6500,
  },
  {
    id: "m2",
    name: "제주 말차 라떼",
    description: "제주산 말차 파우더로 만들어 깊고 진한 말차 본연의 풍미를 살린 라떼",
    price: 7000,
  },
  {
    id: "m3",
    name: "민트초코",
    description: "진한 민트맛이 특징인 상쾌하면서 부드러운 맛의 민트초코 라떼",
    price: 7500,
  },
  {
    id: "m4",
    name: "밀크티 라떼",
    description: "향긋한 홍차에 우유의 고소함과 부드러운을 더한 티라떼",
    price: 6000,
  },
];

const AvailableMeals = () => {

  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList} </ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
