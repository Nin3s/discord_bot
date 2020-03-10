import discord
from discord.ext import commands

#this sets the command prefix
client = commands.Bot(command_prefix = '.')

#when the code is run, it lets us know if the bot is ready, and
#will show up as online in the discord server
@client.event
async def on_ready():
    print('Bot is ready.')

@client.event
async def on_member_join(member):
    print(f'{member} has joined a server.')

@client.event
async def on_member_remove(member):
    print(f'{member} has left a server.')

@client.event
async def on_message(message):
    if message.author == client.user:
        return
    
    if message.content.startswith('$hello'):
        await message.channel.send('Hello!')

    
#client token for the bot
#DO NOT share this with anyone else
client.run()
