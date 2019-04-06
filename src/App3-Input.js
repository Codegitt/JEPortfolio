import React, {Component} from 'react';

class App3Input extends Component {

    state = {
        min: ' ',
        max: ' ',
        message: ' '
    }

    handleChangeMin = (e) => {

        this.setState({min: e.target.value});

    }

    handleChangeMax = (e) => {

        this.setState({max: e.target.value});

    }

    handleSubmit = (e) => {
        
        e.preventDefault();
    
    }

    handleReset = () => {

        this.setState({min: ' ', max: ' ', message: ' '})

    }



    render() {

        const style = {
            color: 'blueviolet',
            fontSize: '27px'
        }

        const styleErr = {
            color: 'red',
            fontSize: '22px'
        }

        const output = () => {           
               
             try {  

                let min = this.state.min
                let max = this.state.max
                let min1 = Math.floor(min);
                let max1 = Math.ceil(max);
                let equ = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;         


                if (min == ' ')  throw  'You must enter a number as a minimum value.'
                if (max == ' ')  throw   'You must enter a number as a maximum number.'
                if (max <= min)  throw    'The number as your maximum number must be greater than your minimum number.'
                if (isNaN(min))  throw   'You must enter a number.'           
                if (isNaN(max))  throw    'You must enter a number.'              
                                               
                else {this.setState({message: equ })}                  
               
             }
            

            catch (error) {

                this.setState({message: error})

            }
            
        } 

        return(
            <div className="container">
            <div className='center'>
            <h6 > After entering your numbers, click the submit button multiple times to generate different numbers between your minimum and your maximum numbers </h6>

            <br />
            <br />
            <br />

            <form onSubmit={this.handleSubmit}>
            <div>
                <p>Enter your minimum number:</p>
                <input type='number'  id='min'  name='min' placeholder='Min. Number'  value={this.state.min}    onChange={this.handleChangeMin} />
                <br/>
                <br />
                <br />
                <p>Enter your maximum number:</p>
                <input type='number'  id='max'  name='max' placeholder='Max. Number'  value={this.state.max}   onChange={this.handleChangeMax} />
                <br/>
                <br/>
                <br/>
                <p> <span style={style}> <b>{this.state.message}  </b> </span> </p> 
                <br/>
                <br/>
                <button  onClick={output}  className='btn-large blue lighten-3 waves-effect waves-light'> Submit</button> 
                <br/>
                <br/>

                <button id='reset' onClick={this.handleReset}  className='btn-small red lighten-3 waves-effect waves-light'> Reset </button> 
            </div>
            </form>
             <br/>
             <br/>                
            <br />
            <br />
            </div>
            </div>
        )
    }
}

export default App3Input;