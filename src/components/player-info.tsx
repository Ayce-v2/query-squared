import { useQuery } from "react-query"

export type BasketballPlayer = {
    playerId: number
    fname: string
    lname: string
    bioMetrics: BioMetrics
    careerStats: CareerStats
}

export type BioMetrics = {
    heightInches: number
    weightLbs: number
}

export type CareerStats = {
    shotAttempts: number
    madeBaskets: number
    rebounds: number
    assists: number
    blocks: number
}



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
                <th>FirstName</th> <th>LastName</th> <th>ShotsAttempted</th> <th>ShotsMade</th> <th>Assists</th> <th>Blocks</th> <th>Rebounds</th>
                </tr>
            </thead>
            <tbody>
            {data.map(p => <tr><td>{p.fname}</td> <td>{p.lname}</td> <td>{p.careerStats.shotAttempts}</td> <td>{p.careerStats.madeBaskets}</td> <td>{p.careerStats.assists}</td> <td>{p.careerStats.blocks}</td> <td>{p.careerStats.rebounds}</td></tr>)}
            </tbody>
            

        </table>
    
    </>
}


