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

  if (!userResponse?.Login) {
    return {
      message: "Something went wrong while updating the user. Try again!",
      success: false,
    };
  }

  return {
    message: "Client record updated successfully",
    success: true,
    user: userResponse.Login,
  };
}

export default clientPipeline;
