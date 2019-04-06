import React, {Component} from 'react';

class ReminderInput extends Component {  

 
     state = {
        item: ' ', 
        completed: null,       
    }       

    handleOnChange = (e) => {

        this.setState({
            item: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addReminder(this.state); 

        this.setState({item: ' '});
    }   
    

    render() { 

       const {reminders} = this.props

       const {deleteButton} = this.props
          

        return(
            <div className="container">
            <div className="center"> 
            <section className='section container'>
            <div className='row'>
            <div className='col s12 l5 offset-l2'>            
                <form  onSubmit={this.handleSubmit} action=''>
                <br />
                <br />
                 
                <br />
                <div className="input-field">
                 <label htmlFor='item'>Enter Item:</label> 
                    <input  type='text'  value={this.state.item}  name='item'  onChange={this.handleOnChange}  id='item' />   
                </div>                 
                <br />             
            
                <br />         
                 <button className='btn-large brown lighten-4 black-text waves-effect waves-light'>Submit</button>  
                </form>
                <br />
                <br />
                
                    </div>
                </div>
            </section>
            </div>
            </div>
        )
    }
}

export default ReminderInput;
