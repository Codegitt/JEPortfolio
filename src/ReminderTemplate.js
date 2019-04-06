import React, {Component} from 'react';
import ReminderInput from './ReminderInput';


const Template = ({reminders, item, id, completed, addReminder, deleteButton, handleOnChange, handleSubmit}) =>  {
 
        const style = {  
        fontStyle: 'italic',
        color: 'blue', 
        textDecoration: 'line-through'
         }   

         const deleteItem = () => {
             deleteButton(id)
         }
    
        return(

            <div className='col s12 l5 offset-l2' >
                <form onSubmit={handleSubmit} action=''>
                    <div className='input-field'>
                        <p>
                            <label>
                             <input type='checkbox' name='completed' checked={completed} value={completed} onChange={() => handleOnChange(id)}  id='completed' />  
                             <span    style={completed ? style : null} > {item} </span>  

                             <a href='#' class='btn-floating  btn-small red lighten-2  right'>
                         <i class="material-icons right" onClick={() => deleteButton(id)} >remove</i>
                        </a>
                            </label>     
                        </p>                        
                    </div>                               
                </form>
            </div>             
                
        )
    }

export default Template;