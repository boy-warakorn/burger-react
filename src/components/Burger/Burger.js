import React from "react";
import { withRouter } from "react-router-dom";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  // Tranform its by map the keys of this object and map to create an empty array that have length = amount of ingredients
  // and use the array to tranfrom to jsx (BurgerIngredient) after that if data have like this {salad:0,meat:2,bacon:0,cheese:0}
  // [Array(0),Array(2),Array(0),Array(0))] in Array is a JSX so use reduce function to tranfrom it to new array
  // [{...},{...}] like this
  let tranformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      // if {salad:0,meat:2,bacon:0,cheese:0} data in ...Array(props.ingredients['meat']) will be [undefined,undefined]
      // return [...Array(props.ingredients[igKey])].map((_, i) => {
      //   return <BurgerIngredient key={igKey + i} type={igKey} />;
      // });
      // and above will be like [{...},{...}] but if after map return it will be [Array(0),Array(2),Array(0),Array(0))] so i have to reduce
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  console.log(tranformedIngredients);

  if (tranformedIngredients.length === 0) {
    tranformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {tranformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default withRouter(burger);
