
import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';





function ExpenseItem2(props) {

  return (

    <div className="expense-item">

       <ExpenseDate date={props.item.date}/>
       <ExpenseDetails title={props.item.title} amount={props.item.amount} location={props.item.locationOfExpenditure}></ExpenseDetails>
      </div>
      

  );

}
export default ExpenseItem2;