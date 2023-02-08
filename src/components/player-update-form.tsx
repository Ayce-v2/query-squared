import { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import { BasketballPlayerUpdate, CareerStats, updatePlayerStats } from "../api/requests";



type UpdateForm = CareerStats & {playerId:number}
   
    // type UpdateForm = {
    //     playerId: number,
    //     shotAttempts:number
    //     madeBaskets: number
    //     rebounds: number
    //     assists: number
    //     blocks: number 
    //     }
    




export function PlayerUpdateForm(){

    const [form, setForm] = useState<UpdateForm>({
        playerId: 0,
        shotAttempts: 0,
        madeBaskets: 0,
        rebounds: 0,
        assists: 0,
        blocks: 0
    })

    const queryClient = useQueryClient(); 

    const updatePlayerMutation = useMutation(updatePlayerStats, {
        onSuccess: () => queryClient.invalidateQueries("clearcache")
    });

    function submitPlayerData(){
        const playerUpdate: BasketballPlayerUpdate = {
            playerId: form.playerId,
            careerStats:{ 
            shotAttempts:form.shotAttempts,
            madeBaskets: form.madeBaskets,
            rebounds: form.rebounds,
            assists: form.assists,
            blocks: form.blocks
            }
        }
        updatePlayerMutation.mutate(playerUpdate);
    }




    return <>
    <h1>Update a Superstars' Stats:</h1>

    <label htmlFor="playerid">Player ID of Superstar</label> 
    <br></br>
    <input id="playerid" type="number" placeholder="10001" onChange={p => setForm({...form, playerId:Number(p.target.value)})}/> 
    
    <br></br>

    <label htmlFor="attempts">Insert New Shot Attempts</label> 
    <br></br>
    <input id="attempts" type="number" placeholder="0" onChange={p => setForm({...form, shotAttempts:Number(p.target.value)})}/>
    
    <br></br>

    <label htmlFor="made">Insert New Amount of Shots Made</label> 
    <br></br>
    <input id="made" type="number" placeholder="0" onChange={p => setForm({...form, madeBaskets:Number(p.target.value)})}/>
    
    <br></br>

    <label htmlFor="rebounds"> Insert New Amount of Rebounds</label> 
    <br></br>
    <input id="rebounds" type="number" placeholder="0" onChange={p => setForm({...form, rebounds:Number(p.target.value)})}/>
    
    <br></br>

    <label htmlFor="assists">Insert New Amount of Assists</label> 
    <br></br>
    <input id="assists" type="number" placeholder="0" onChange={p => setForm({...form, assists:Number(p.target.value)})}/>
    
    <br></br>

    <label htmlFor="blocks">Insert New Amount of Blocks</label> 
    <br></br>
    <input id="blocks" type="number" placeholder="0" onChange={p => setForm({...form, blocks:Number(p.target.value)})}/>

    <br></br>

    <button onClick={submitPlayerData}>Update Stats!</button> 


    
    
    </>
}