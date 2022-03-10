
function Header(props){
    return (
    <header>
        <h1>{props.title}</h1>
        <span>Total Players: {props.totalPlayers}</span>
    </header>)
}

function Player (props){

    // func1(){
    //     indexNo = handler(index);
    //     console.log(indexNo)
    // }
        return(
            <div className="player">
                <span className="player-name">
                <button className="remove-player" onClick={()=>props.deleteData(props.id)}>✖</button>
                    {props.name}
                </span>
                <Counter score={props.score}/>
            </div>
        )


}

class Counter extends React.Component{
    state={
        score:this.props.score
    }

    decrementScore(){
        if(this.state.score>0){

            this.setState((prevState)=>({
                score: prevState.score-1
            }))
        }
    }

    incrementScore(){
        this.setState((prevState)=>({
            score: prevState.score+1
        }))
    }
    render(){
        console.log(this.state.score);
        return(
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}>-</button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore.bind(this)}>+</button>
            </div>
        )
    }

}

class App extends React.Component{

    state= {
        players: [
            {name:"John",
            score:15,
            id:1},
            {name:"Ben",
            score:20,
            id:2},
            {name:"Jack",
            score:50,
            id:3},
            {name:"Jane",
            score:55,
            id:4}
        ]
    }

    deleteData=(x)=>{
        this.setState(prevState=>{
            
            return {

                players: prevState.players.filter(index=>index.id!==x)
            }
        }

        )
    }
    
    render(){
        return(
            <div className="scoreboard">
                <Header title="Scoreboard" totalPlayers={this.state.players.length}/>
                {this.state.players.map(
                    player=>
                <Player name ={player.name} score={player.score} key={player.id} id={player.id} 
                deleteData = {this.deleteData}
                />
                )}

            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);