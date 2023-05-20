
import './ExpenseItem.css';
import Card from '../UI/Card';

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';





function ExpenseItem2(props) {

  return (
    <Card className='expense-item'>
    <div className="expense-item">


       <ExpenseDate date={props.item.date}/>
       <ExpenseDetails title={props.item.title} amount={props.item.amount} location={props.item.locationOfExpenditure}></ExpenseDetails>
      </div>
      </Card>
      

  );

}
export default ExpenseItem2;