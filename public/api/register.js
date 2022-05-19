
  const { REST } = require('@discordjs/rest');
  const { Routes } = require('discord-api-types/v9');
  const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

  const INVITE_COMMAND = {
    name: "invite",
    description: "Get an invite link to add the bot to your server",
  };
  
  const HI_COMMAND = {
    name: "hi",
    description: "Say hello!",
  };
module.exports = async (request, response) => {
    await rest.put(
      Routes.applicationGuildCommands(process.env.APPLICATION_ID, '921962253262155876'),
      { body: [INVITE_COMMAND, HI_COMMAND] },
  );  
    response.status(200).send({ ok: "OK" });
};