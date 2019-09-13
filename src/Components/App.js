import React, {Component, Fragment } from 'react';
import {Header,Footer} from './Layouts'
import Excercises from './Excercises';
import {muscles,exercises} from '../store'


class App extends React.Component{
  state = {
    exercises
  }

  getExercisesByMuscles(){
    return Object.entries (this.state.exercises.reduce((exercises, exercise)=>{
        const {muscles} = exercise;
        
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles],exercise]
          : [exercise]

        return exercises;
      },{})
    )
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  render(){ 
    const exercises = this.getExercisesByMuscles(),
    {category} = this.state
    return (
      <Fragment>
        <Header/>

        <Excercises 
        category = {category}
        exercises={exercises} />

        <Footer 
        category = {category}
        muscles={muscles}
        onSelect={this.handleCategorySelected}
        />
        
      </Fragment>
    );    
  }
}


export default App;
