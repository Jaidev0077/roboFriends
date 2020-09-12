import React, {Component} from 'react';
import CardList from '../Components/CardList';
import Scroll from '../Components/Scroll.js';
import SearchBox from '../Components/SearchBox';
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots:[],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users') //gets user data
        .then(response=>response.json())
        .then(users =>this.setState({robots: users}));
    }

    onSearchChange= (event)=>{
        this.setState({searchfield: event.target.value})

    }

    render(){
        const {robots, searchfield} = this.state;
        const filteredRobot = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!robots.length){ //if users don't get passed
            return <h1 className = 'tc'>LOADING...</h1>
        }else{
            return(
            <div className= 'tc'>
            <h1 className= 'f1'>RoboFriends</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <Scroll>
                <CardList robots = {filteredRobot}/>
            </Scroll>
            </div>
            )
        }
    }
}

export default App;