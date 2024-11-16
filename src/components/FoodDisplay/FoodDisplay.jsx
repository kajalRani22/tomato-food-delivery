import React, { useContext } from "react";

import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";
import { StoreContext } from "../Context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display mt-6" id="food-display">
      <h2 className="text-3xl">Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          console.log(category, item.category);
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
