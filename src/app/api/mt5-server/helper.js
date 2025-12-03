const Metatrader5 = require("mt5-sdk");
const axios = require("axios");

const mt5Instance = new Metatrader5("mtapi.gtcfx.com", 443, {
  login: 5550,
  password: "API-l6zBqIz",
  build: 4380,
  agent: "WebManager",
});

async function clientPipeline(credentials) {
  const userResponse = await mt5Instance.users.updateUser(credentials);

  const depositPayload = {
    login: credentials?.Login,
    comment: "Promo-Credit-USC",
    balance: 5000,
    type: 3,
  };

  const depositBalance = await mt5Instance.trade.updateTradeBalanceGet(depositPayload)

  if (!userResponse?.Login) {
    return {
      message: "Something went wrong while updating the user. Try again!",
      success: false,
    };
  }

  return {
    message: "Client record updated successfully",
    success: true,
    ticket: depositBalance?.ticket || "ticket",
    user: userResponse.Login,
  };
}

export default clientPipeline;
