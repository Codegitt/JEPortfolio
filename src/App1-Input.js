import React, {Component} from 'react';

class App1Input extends Component {

    state = {
        year: ' ',
        month: ' ',
        day: ' ',
        message: ' '
    }


    handleOnChangeYear = (e) => {
        this.setState({
            year: e.target.value });
          

    }

    handleOnChangeMonth = (e) => {
        this.setState({
            month: e.target.value });
      
    }

    handleOnChangeDay = (e) => {
        this.setState({
            day: e.target.value });
      
    }


    
    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({year: ' ', month: ' ', day: ' '}); 
    }

    render() {

        const style={
            color: '#cc6600',
            fontSize: '27px'            
        }    


        const output1 = () => {

                try {

                const year = this.state.year;
                const month = this.state.month;
                const day = this.state.day;               
        
                let today = new Date();
                let futureDate = new Date(year, month - 1, day);
                let futureDate1 = new Date(futureDate.getFullYear(), futureDate.getMonth(), futureDate.getDate());
        
                let bottom = (24 * 60 * 60 * 1000);
                let today_ms = today.getTime();
                let futureDate1_ms = futureDate1.getTime();
        
                // Calculates the difference between the two dates
                let dateDiff_ms = futureDate1_ms - today_ms;
        
                let totalDays = Math.ceil(dateDiff_ms / bottom);
        
                let tody = new Date();
                let year1 = today.getFullYear(); 
                let month1 = today.getMonth();
                let day1 = today.getDate();
        
                
                const {message} = ' ';

                                 
                if (year == ' ')  throw 'You did not enter a number for "Year".'    
                if (year < year1) throw  'The number for "Year" must be the same or greater than the current year.'                  
                if (month == ' ') throw 'You did not enter a number for "Month".'
                // if (month < month1+1) throw  "<span style='color:red';>" +  "The number for 'Month' must be the same or greater than the current month." + "</span>";
                if (month > 12)  throw 'The number for "Month" cannot be greater than 12.'
                if (day == ' ')  throw 'You did not enter a number for "Day".' 
                if (day <= 0)  throw 'The number for "Day" must be greater than zero.' 
                if (day > 31)  throw 'The number for "Day" cannot be greater than 31.'                          
                if (day < day1 && month <= month1+1 && year == year1)  throw 'The number for your "Month" and "Day" must be greater than today\'s date.'            
                        
                 else { this.setState({ message: 'You have ' + totalDays +  ' day(s) remaining until your upcoming event.'}) }          
                   
                }
        
              catch (error) {      
                     this.setState({message: error})                        
              }            

        }


        return(            

            <div className='container'  >
            <h3 className='center'>Event-Date Calculator App</h3>

            <div className='center'>
           
            <p className='flow-text'>Select or type the year, month, and day of your upcoming event or deadline</p>

            <br />
            <form onSubmit={this.handleSubmit}>
            <div className="input-field">
            <label htmlFor="year">Year</label>
            <input id="year"  name='year'  value={this.state.year}  type="number"  min="2019" onChange={this.handleOnChangeYear} />
            </div>
            <br />
            <br />
            <div className="input-field">
            <label htmlFor="month">Month</label>
            <input id="month"  name='month'  value={this.state.month}  type="number"  min="1"  max="12"  onChange={this.handleOnChangeMonth} />
            </div>
            <br />
            <br />
            <div className="input-field">
            <label htmlFor="day">Day</label>
            <input id="day"  name='day' value={this.state.day}  type="number"  min="1"  max="31"  onChange={this.handleOnChangeDay} />
            </div>
            <br />
            <br />        
            <br />

            <button  onClick={output1} className='btn-large blue lighten-3 waves-effect waves-light'> Submit</button> 
            <br />
            </form>
            <br />
            <p> <span style={style}> <b> {this.state.message} </b> </span> </p>        
            <br />
            <br />
            </div>       
        </div>
        )
    }
}

export default App1Input;