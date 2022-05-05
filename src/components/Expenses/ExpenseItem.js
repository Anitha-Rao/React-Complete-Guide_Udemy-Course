import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { date, title, amount } = props.item;

  return (
    <Card className="expense-item">
      <div>{<ExpenseDate date={date} />}</div>
      <div>
        <h2 className="expense-item__description">{title}</h2>
      </div>
      <div className="expense-item__price">{amount}</div>
    </Card>
  );
};

export default ExpenseItem;
