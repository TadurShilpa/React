
import ExpenseItem1  from './components/ExpenseItem';
function App() {
  const expenses = [
    {
      id: 'e1',
      date: new Date(2023, 5,15), 
      title: 'Toilet Paper',
      amount: 94.12,
      locationOfExpenditure: 'Pune',
    },
    {
      id: 'e2',
      date: new Date(2023, 5,13), 
      title: 'New TV',
      amount: 799.96,
      locationOfExpenditure: 'Solapur',

    },
    {
      id: 'e3',
      date: new Date(2023, 5,5), 
      title: 'Car Insurance',
      amount: 294.45,
      locationOfExpenditure: 'Hyderabad',
    },
    {
      id: 'e4',
      date: new Date(2023, 5,25), 
      title: 'Laptop',
      amount: 989.47,
      locationOfExpenditure: 'Mumbai',
    },
  ];
    
  return (
    <div>

      <h2>Let's get started!</h2>
      
      {expenses.map((expense) => (
        <ExpenseItem1 item = {expense}> 
        </ExpenseItem1>
      ))}

      
    </div>
  );
}

export default App;
