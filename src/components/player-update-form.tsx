import { useQueryClient } from "react-query";
import { useMutation } from "react-query/types/react";


export type BasketballPlayer = {
    playerId:    number
    fname:       string
    lname:       string
    bioMetrics:  BioMetrics
    careerStats: CareerStats
}

export type BioMetrics = {
    heightInches: number
    weightLbs:    number
}

export type CareerStats = {
    shotAttempts: number
    madeBaskets:  number
    rebounds:     number
    assists:      number
    blocks:       number
}

export type BasketballPlayerUpdate = {
    fname:       string
    lname:       string
    bioMetrics:  BioMetrics
    careerStats: CareerStats
}

// use (write in) graph ql end point "merge" and then write a function in VS code that uses that info 
// export async function updatePlayerStats(basketballPlayer: BasketballPlayerUpdate):Promise<BasketballPlayer>{
//     const httpResponse = await fetch("http://127.0.0.1:8000/players", {
//         method:"PUT", 
//         body:JSON.stringify(basketballPlayer),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     });

//     const player:BasketballPlayer = await httpResponse.json();
//     return player;
// }

export async function updatePlayerStats():Promise<BasketballPlayer[]>{

    const query = `mutation UpdateCareerStats{
        mergeStats(input:{
          playerId: 10001
        }){
          ...on BaksetballPlayer{
            careerStats{
              shotAttempts
              madeBaskets
              rebounds
              assists
              blocks
            }
          }
        }
      }
      
      `

      
      const body = JSON.stringify({query:query})

      const httpResponse = await fetch("http://127.0.0.1:8000/graphql", {method:"PUT", body, headers:{"Content-Type":"application/json"}})
      const responseBody = await httpResponse.json();
      const players:BasketballPlayer[] = responseBody.data;
      return players;
}



export async function PlayerUpdateForm(){

    const queryClient = useQueryClient(); 

    const updatePlayerMutation = useMutation(updatePlayerStats, {
        onSuccess: () => queryClient.invalidateQueries("clearcache")
    })




    return <>


    
    
    </>
}