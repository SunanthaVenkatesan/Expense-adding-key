import React ,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
 
 
  /*const Expenses=(props)=>{

    return(
    <Card className='expenses'>
    {
    props.map((expense,index) => {
        return(
        <div key={index}>
            <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
            />

        </div>
        )
    })}
       
</Card>
)}

export default Expenses;
*/



const Expenses=(props) =>{
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  //filters the year 
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
    return (
      <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {
          //here we are not using props.items.map(expense,index)=>index will always take the same order of keys which sometime leads to bug
        filteredExpenses.map((expense ) => 
        (
        //and hence we go with the key as it is a unique identifier
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
            />

       
        )
        
    )}
        
      </Card>
      </div>
    );
  }
  
  export default Expenses;  
