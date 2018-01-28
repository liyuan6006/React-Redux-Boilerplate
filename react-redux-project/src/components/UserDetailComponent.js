import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
    render() {
        return (      
            <div>
            <h2>User Detail</h2>
            <h3>{this.props.activeUser.first} {this.props.activeUser.last}</h3>  
            <h3>{this.props.activeUser.age} </h3>
            <h3>{this.props.activeUser.description} </h3>
         </div>
        );
      }
    }

    function mapStateToProps(state){
        return {
            activeUser: state.activeUser
        }
      }
      

    
      export default connect(mapStateToProps)(UserDetail);