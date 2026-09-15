const Metatrader5 = require("mt5-sdk");

const MT5_HOST = process.env.MT5_HOST || "mtapi.gtcfx.com";
const MT5_PORT = Number(process.env.MT5_PORT || 443);
const MT5_LOGIN = Number(process.env.MT5_LOGIN || 0);
const MT5_PASSWORD = process.env.MT5_PASSWORD || "";
const MT5_BUILD = Number(process.env.MT5_BUILD || 4380);
const MT5_AGENT = process.env.MT5_AGENT || "WebManager";

function getMt5Instance() {
  if (!MT5_LOGIN || !MT5_PASSWORD) {
    throw new Error("MT5 credentials are not configured");
  }
  return new Metatrader5(MT5_HOST, MT5_PORT, {
    login: MT5_LOGIN,
    password: MT5_PASSWORD,
    build: MT5_BUILD,
    agent: MT5_AGENT,
  });
}

async function clientPipeline(credentials) {
  const mt5Instance = getMt5Instance();
  const userResponse = await mt5Instance.users.updateUser(credentials);

  const depositPayload = {
    login: credentials?.Login,
    comment: "Promo-Credit-USC",
    balance: 0,
    type: 3,
  };

  const depositBalance =
    await mt5Instance.trade.updateTradeBalanceGet(depositPayload);

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
