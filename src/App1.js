import React, {Component} from 'react';
import App1Input from './App1-Input';



class App1 extends Component  { 

    state = {

        eventDate:[
            {

            year: ' ',
            month: ' ',
            day: ' ',
            message: ' '

            }
        ]
    }

    output = (eventItem) => {              
        

        const eventItems = [...this.state.eventDate, eventItem]
        
        this.setState({
            eventDate: eventItems
        })

    } 
    

    handleSubmit = (e) => {
        e.preventDefault();  
        this.props.output(this.state);  
        this.setState({year: ' '});   
        this.setState({month: ' '});   
        this.setState({day: ' '});   

    } 


    render() {

        const displayMessage = this.state.eventDate.map(item => <App1Input  year={item.year}  month={item.month}  day={item.day}  message={item.message}  output={this.output} answer={this.answer}  handleSubmit={this.handleSubmit}  />)


        const style ={
            backgroundColor: '#f9e6ff'
        }
        
       

        return(

            <div  style={style}  >

                 <p>{displayMessage}</p>         
                
            </div>

        )
    }    
}   

export default App1;