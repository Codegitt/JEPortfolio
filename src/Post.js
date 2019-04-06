import React, {Component} from 'react';
import {connect} from 'react-redux';


class Post extends Component {

  
    render() {
        const post = this.props.post ? <div className='post'> 
            <p><span style={{color:'purple', fontSize:'20px'}}><b>Description:</b></span> {this.props.post.body}</p>   
        </div> 
        : (
            <div className='center' style={{color:'purple', fontSize:'20px'}} ><b>Click on any tab above</b> </div>
        )
        return(
            <div className='container'  style={{color:'purple', fontSize:'40px'}}>
           
                {post}
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => { 
    let id = ownProps.match.params.post_id  
    return{
        post: state.posts.find(post => post.id === id)  
    }
}

export default connect(mapStateToProps) (Post);  
