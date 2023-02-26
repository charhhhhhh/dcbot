import { REST, Routes } from "discord.js"
import fg from "fast-glob"
const updatecommands = (guildid) => {//註冊以及更新新斜線指令
    const res = new REST({ version: 10 }).setToken(process.env.TOKEN)
    res.put(
        Routes.applicationGuildCommands(
            process.env.APPLICATION_ID,
            guildid//伺服器id 可以寫死
        ),
        {
            body: {}
        },
    ) //依照要做的事選取請求方式 詳細去看api
}
export const loadCommands = async () => {
    const file = await fg('./src/commands/**/index.js')
    for (const i of file) {
        const box = await import(i)
        console.log(box)
    }
}