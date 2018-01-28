import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectUser} from '../actions/index';
import { bindActionCreators } from 'redux';

class User extends Component {

    createListItems(){
        return this.props.users.map((user)=>{
            return(<li key={user.id} onClick={()=>this.props.selectUser(user)}>{user.first} {user.last}</li>);
        });
    }


    render() {
      return (
          <div>
          <h2>User List</h2>
       <ul>
       {this.createListItems()}
       </ul>       
 
       </div>
      );
    }
  }



  function mapStateToProps(state){
    return {
        users: state.users
    }
  }
  
  function matchDispatchToProps(dispathch){
    return bindActionCreators({selectUser:selectUser},dispathch)
  }

  export default connect(mapStateToProps,matchDispatchToProps)(User);