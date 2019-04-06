import React, {Component} from 'react';

import ReminderInput from './ReminderInput'
import Template from './ReminderTemplate';


class ReminderApp extends Component {
    state = {
        reminders: [
            {item: 'First item (You can delete this item by clicking on the " - " icon to the right.)', completed: false, id: ' '}
        ]         
    }

    addReminder = (reminder) => {

            reminder.id = Math.random();   

          const remind = [...this.state.reminders, reminder];

         this.setState({reminders: remind})

    }

    deleteButton = (id) => {

        const nonDeletedItems = this.state.reminders.filter(remind => {
            return remind.id !== id
        });

        this.setState({reminders: nonDeletedItems});
    }


    handleOnChange = (id) => {

        this.setState(prevState => {  
           let updatedReminders = prevState.reminders.map(todo => {  
               if (todo.id === id) {
                   todo.completed = !todo.completed  
               }
               return todo  
           })

           return{  
               reminders: updatedReminders
           };
       }
       ); 
    }

    handleSubmit = (e) => {

        e.preventDefault(); 

        this.setState({item: ' '});  
   }

    componentDidUpdate() {
        console.log(this.state.reminders);
    }
    

    render() {
         
        
          const template = this.state.reminders.map(temp => <Template   reminders={temp}  item={temp.item}  id={temp.id}  completed={temp.completed}    deleteButton={this.deleteButton} addReminder = {this.addReminder}  handleOnChange={this.handleOnChange}  handleSubmit={this.handleSubmit}  /> );  

        
        return(

            <div>  
                <h3> Reminder List:</h3>    
                <br/>       
                 <p> {template} </p>  
               <ReminderInput  reminders={this.state.reminders}  addReminder = {this.addReminder}  item={this.state.reminders.item}    deleteButton={this.deleteButton} />
                <br />
                <br />             
            </div>
        )
    }
}

export default ReminderApp; 

