import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import App from "../App"



// test("It should be able to update individual players stats", async () => {

//     render(<App/>)

//     const playerIdInput = await screen.findByPlaceholderText("10001");
//     const shotAttemptsInput = await screen.findByPlaceholderText("0");
//     const madeBasketsInput = await screen.findByPlaceholderText("1");
//     const reboundsInput = await screen.findByPlaceholderText("2");
//     const assistsInput = await screen.findByPlaceholderText("3");
//     const blocksInput = await screen.findByPlaceholderText("4");
//     const updateButton = await screen.findByText(/Update Stats!/);

//     const shotAttemptsOriginal = await 

//     userEvent.type(playerIdInput, "10001");
//     userEvent.type(shotAttemptsInput, "15");
//     userEvent.type(madeBasketsInput, "10");
//     userEvent.type(reboundsInput, "5");
//     userEvent.type(assistsInput, "5");
//     userEvent.type(blocksInput, "5");
//     userEvent.click(updateButton);

//     const check = await screen.getByTestId("10001")
//     console.log(check)
// })


test("It should display all players first names, last names, career stats, and player ID", async () => {
    
    render(<App/>);

    const element = await screen.findByRole("table");

   
    const player1 = await screen.findByText(/Billy/);
    const player2 = await screen.findByText(/Marcus/);
    const player3 = await screen.findByText(/Tim/);
    const player4 = await screen.findByText(/Kevin/);



})