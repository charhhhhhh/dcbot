
import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
.setName("ping")
.setDescription("for hello world")

export const action=sync(ctx)=>{//ctx-> context 上下文
    await ctx.reply("pong")
}