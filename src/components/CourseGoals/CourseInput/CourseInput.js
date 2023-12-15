import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isvalid,setValid]= useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0)
    {
      setValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0)
    {
      setValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
   
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control  ${!isvalid? 'invalid':''}`} >
        <label>Course Goal</label>
        <input type="text"  onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" className={`${!isvalid? 'invalid':''}`}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
