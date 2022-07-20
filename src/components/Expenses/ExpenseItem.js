//A custom made component(components are functions that return HTML code)
import React from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'
//component is a regular function 
const ExpenseItem=(props) =>{
  
  
  return(
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>

      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className='expense-item__description'><h2>{props.location}</h2></div>
        <div className="expense-item__price">Rs.{props.amount}</div>
        
        
        
      </div>
    </Card>
  )
}
//to use tis component we have to export it else it isonly usable in this file
export default ExpenseItem;
//states are used to reactivate the execution.Without state the user interface will not make any changes on event handler
