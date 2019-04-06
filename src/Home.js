import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'; 
import {BrowserRouter as Router} from 'react-router-dom';
import './Home.css';


class  Home extends Component {   

 
    render() {        

        const {posts} = this.props;  
        const postList = posts.length ? (posts.map((post) => {

            return(

            <div>     

                <Router>
                <Link to={'/' + post.id } target='_blank' >
                 <div className='post card' key={post.id}>

                 <img  src={post.src} alt='a pic' /> 
             

               <div className='card-content'>

                <span className='card-title' style={{color: 'blue'}}> {post.title} </span>

                 <p><span style={{color:'black'}} >{post.body} </span> </p>
                </div>
             </div>
             </Link></Router>            
             </div>

        )})) : (
            <div className='center' > Nothing yet. </div>)  

        return(

            <div className='container'>
            <br />
            <br />
            <br />
            <h3 className='center'><u><b>J.E. Portfolio</b></u></h3>
            <br />
            <br />
             <p> {postList} </p>
            <br />
            <br />
            <br />
            <br />

            <div className="container indigo lighten-3">
            <br />
            <h4 className='center'>About Me</h4>
            <p className='center'>I am a Full Stack Developer and I enjoy coding.  All of the apps on this website were built by me and the website was also built by me.</p>
            <br />
            <br />
            </div>
            <br />
            <br />
            <br />
            <br />
            
             </div>
    )
    }
}

const mapStateToProps = (state) => {  

    return{ 
        posts:  state.posts  
    }
}  

export default connect(mapStateToProps) (Home);  
