import { SlashCommandBuilder } from "discord.js";
//定義名稱
export const command = new SlashCommandBuilder()
.setName("ping")
.setDescription("for hello world")

//功能
export const action=async(ctx)=>{//ctx-> context 上下文
    await ctx.reply("pong")
}