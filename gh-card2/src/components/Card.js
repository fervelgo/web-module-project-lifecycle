import React, { Component } from 'react';
import axios from 'axios';

class Card extends Component {
    state = {
        user: null,
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/fervelgo')
        .then((res) => {
            this.setState({
                user: res.data,
            });
            console.log(res.data)
        })
        .catch((err) => console.log(err));
    }
    render() {
        //destructure state
        const { user } = this.state;
        if (!user) return <p>Loading data...</p>;
        return <div>
            <img 
            style={{width: '150px'}}
            src={user.avatar_url} 
            alt={user.name} 
            />
            <h3>{user.name}</h3>
            <p>username: {user.login}</p>
            <p>repos: {user.public_repos}</p>
        </div>
    }
}

export default Card

