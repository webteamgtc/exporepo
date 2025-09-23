const Metatrader5 = require("mt5-sdk");
const axios = require("axios");

const mt5Instance = new Metatrader5("mtapi.gtcfx.com", 443, {
    login: 5540,
    password: "DoZ@4ySo",
    build: 4380,
    agent: "WebManager",
});

async function clientPipeline(credentials) {
    // // Create the client
    // const newClient = {
    //     PersonName: credentials.first_name,
    //     ContactPhone: credentials.phone,
    //     ContactEmail: credentials.email,
    //     ClientType: "1",
    // };

    // const clientResponse = await mt5Instance.clients.create(newClient);
    // if (!clientResponse?.[0]?.id) {
    //     return {
    //         message: clientResponse?.[0]?.retcode,
    //         success: false,
    //     };
    // }
    // const client_id = clientResponse[0].id;
    // console.log("Client created:", clientResponse);


    // Create the user
    const userResponse = await mt5Instance.users.updateUser(credentials);
    console.log("User created:", userResponse);
    

    if (!userResponse?.Login) {
        return {
            message: "Something went wrong while adding the user. Try again!",
            success: false,
        };
    }

    // Deposit a fixed amount of 10,000 into the user's account
    // const depositResponse = await mt5Instance.users.deposit({
    //     Login: userResponse.Login,
    //     Amount: 10000,
    //     Comment: "Initial deposit of 10000",
    // });
    // console.log("Deposit result:", depositResponse);

    return {
        message: "Client and user added and bound successfully", 
        success: true,
        user: userResponse.Login,
    };
}

export default clientPipeline;
