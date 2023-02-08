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




export type BasketballPlayerUpdate = {
    playerId: number
    careerStats: CareerStats
}




export async function updatePlayerStats(playerUpdate:BasketballPlayerUpdate):Promise<BasketballPlayer>{

    const query = `mutation UpdateCareerStats($idToMerge:Int!,
        $shotsToMerge:Int, 
        $madeBasketsToMerge:Int, 
        $reboundsToMerge:Int,
          $assistsToMerge:Int,
          $blocksToMerge:Int){
        mergeStats(input:{
          playerId: $idToMerge
          shotAttempts: $shotsToMerge
          madeBaskets: $madeBasketsToMerge
          rebounds: $reboundsToMerge
          assists: $assistsToMerge
          blocks: $blocksToMerge
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

      const variables = {
      idToMerge: playerUpdate.playerId,
      shotsToMerge: playerUpdate.careerStats.shotAttempts,
      madeBasketsToMerge: playerUpdate.careerStats.madeBaskets,
      reboundsToMerge: playerUpdate.careerStats.rebounds,
      assistsToMerge: playerUpdate.careerStats.assists,
      blocksToMerge: playerUpdate.careerStats.blocks
     };

      
      const body = JSON.stringify({query:query, variables:variables})

      const httpResponse = await fetch("http://127.0.0.1:8000/graphql", 
      {method:"POST", body, headers:{"Content-Type":"application/json"}})
      const responseBody = await httpResponse.json();
      const players:BasketballPlayer = responseBody.data;
      return players;
}