import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions'
 class UsersList extends Component {

componentDidMount(){
    this.props.fetchUsers()
}


renderUsers(){
    return this.props.users.map(user =>{
        return <li key={user.id}>{user.name}</li>
    })
}

    render() {
        return (
            <div>
                Heres a list of users:
   <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}


function loadData(store){
    return store.dispatch(fetchUsers())

}



const mapState = (state)=>{
    return {
        users: state.users
    }
}



export default {
    loadData,
   component: connect(mapState, {fetchUsers})(UsersList)
}