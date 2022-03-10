class App extends React.Componene{
state ={
  player : [
        {
            name: "jijo",
            score: 40,
            id: 1
        },
        {
            name: "jejo",
            score: 40,
            id: 1
        },
        {
            name: "jajo",
            score: 40,
            id: 1
        },
        {
            name: "jujo",
            score: 40,
            id: 1
        }   
        ]
        
const Header = (props)=> {
    return(
    <header>
        <h1>{props.title}</h1>
        <span className="stats">
            
            {props.players}</span>
    </header>
)}

const Player = (props)=>{
    return (
        <div className="player">
        <span className="player-name">
            <button className="remove-player">✖</button>
            {props.name}</span>
        <Counter score={props.score}/>
        </div> 
    )
}

const Counter = (props)=>{
    return(
        <div className="counter" >
            <button className="counter-action incriment" >+</button>
            <span className="counter-score" >{props.score}</span>
            <button className="counter-action decrement" >-</button>
        </div>
    )
}
}

render(){
    return(
        <div> 
            <Header
            title= 'Scoreboard app of Javkhaa'
            players= {props.Minii.length}/>
            {props.Minii.map(player=>
                <Player name ={player.name} score={player.score}/>
            )}
        </div>)
    }
}