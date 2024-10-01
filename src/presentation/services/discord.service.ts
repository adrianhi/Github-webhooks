import { envs } from "../../config";

export class DiscordService {
  private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL
  constructor() { }

  async notify(message: string) {

    const body = {
      content: message,
      //Github media embeds: [
      //   {
      //     image: {
      //       url: 'https://cdn.dribbble.com/userupload/2608299/file/original-00f24643a2c18bc04251f7a2019d4743.gif'
      //     }
      //   }
      // ]
    }

    const resp = await fetch(this.discordWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })

    if (!resp.ok) {
      console.log('Error sending message to discord');
      return false;
    }

    return true;

  }
}