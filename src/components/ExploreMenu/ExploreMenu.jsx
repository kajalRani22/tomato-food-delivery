import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  console.log(menu_list);
  return (
    <div className="explore-menu flex flex-col gap-7" id="explore-menu">
      <h1 className="text-3xl md:font-bold">Explore our menu</h1>
      <p className="explore-menu-text font-serif">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() => {
              console.log(item?.menu_name);
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            }
            key={index}
            className="explore-menu-list-item"
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt=""
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
