import { useQuery } from "react-query"
import { BasketballPlayer } from "../api/requests";




export async function getAllPlayersInfo():Promise<BasketballPlayer[]>{
    const httpResponse = await fetch("http://127.0.0.1:8000/players");
    const players: BasketballPlayer[] = await httpResponse.json();
    return players;
}

export function PlayerInfo() {

    const {isLoading, isError, data = []} = useQuery("clearcache", getAllPlayersInfo);

    if(isLoading){
        return <p>Still Loading...</p>
    }
    if(isError){
        return <p>Something went wrong!</p>
    }

    

    return <>
        <h1>Information on all Brick League Superstars:</h1>
        <table>
            <thead>
                <tr>
                <th>FirstName</th> <th>LastName</th> <th>ShotsAttempted</th> <th>ShotsMade</th> <th>Assist</th> <th>Blocks</th> <th>Rebounds</th> <th>Player ID</th>
                </tr>
            </thead>
            <tbody>
            {data.map(p => <tr><td>{p.fname}</td> <td>{p.lname}</td> <td>{p.careerStats.shotAttempts}</td> <td>{p.careerStats.madeBaskets}</td> <td>{p.careerStats.assists}</td> <td>{p.careerStats.blocks}</td> <td>{p.careerStats.rebounds}</td> <td>{p.playerId}</td></tr>)}
            </tbody>
            

        </table>
    
    </>
}


