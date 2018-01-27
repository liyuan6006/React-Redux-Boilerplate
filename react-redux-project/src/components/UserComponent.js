import React, { Component } from 'react';
import { connect } from 'react-redux';


class User extends Component {

    createListItems(){
        return this.props.users.map((user)=>{
            return(<li key={user.id}>{user.first} {user.last}</li>);
        });
    }


    render() {
      return (
          <div>
          <h2>User List</h2>
       <ul>
       {this.createListItems()}
       </ul>
       <hr/>
       <h2>User Detail</h2>
       </div>
      );
    }
  }



  function mapStateToProps(state){
    return {
        users: state.users
    }
  }
  
  export default connect(mapStateToProps)(User);