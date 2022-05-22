import React, { useState } from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the course'},
    {id: 'cg2', text: 'Learn all about the course main topic'},
    {id: 'cg3', text: 'Help other students in the couse QA'},
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals)=> prevCourseGoals.concat(newGoal));
  }
  return <div className='app_div'>
    <h2 className='header'>Course Goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler}/>
    <GoalList goals={courseGoals}/>
  </div>
};

export default App;
