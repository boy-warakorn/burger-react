import React from "react";
import Aux from "../../../hoc/Aux/Auxilary";
import Button from "../../UI/Button/Button";
import ListItemText from "@material-ui/core/ListItemText";


const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <ListItemText key={igKey}>
        <span
          style={{
            textTransform: "capitalize",
          }}
        >
          {igKey}
        </span>
        : {props.ingredients[igKey]}
      </ListItemText>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      {ingredientsSummary}
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
