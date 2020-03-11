import discord
import time
import random
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

#checks for ping
@client.command()
async def ping(ctx): #name the function what you want the command to be
    await ctx.send(f'Pong! {round(client.latency * 1000)}ms') #seconds to milliseconds * 1000


#8ball command
#since functions cannot start with a number in python, use aliases
#it allows any string in the list to be used to call the command!
@client.command(aliases=['8ball'])
async def _8ball(ctx, *, question): # * allows multiple arguments as one
    
    responses = ['It is certain.',
                 'It is decidedly so.',
                 'Without a doubt.',
                 'Yes - definitely.',
                 'You may rely on it.',
                 'As I see it, yes.',
                 'Most likely.',
                 'Outlook good.',
                 'Yes.',
                 'Signs point to yes.',
                 'Reply hazy, try again.',
                 'Ask again later.',
                 'Better not tell you now.',
                 'Cannot predict now.',
                 'Concentrate and ask again.',
                 "Don't count on it.",
                 'My reply is no.',
                 'My sources say no.',
                 'Outlook not so good.',
                 'Very doubtful.']
    await ctx.send('<@{}>'.format(ctx.author.id) + ' ' + f'{random.choice(responses)}')

#coin flip
@client.command()
async def coinflip(ctx):
    responses = ['Heads', 'Tails']
    await ctx.send('<@{}>'.format(ctx.author.id) + ' flipping coin...')
    await ctx.send('...')
    time.sleep(1) #waits one second before sending another message
    await ctx.send('...')
    time.sleep(1)
    await ctx.send('...')
    time.sleep(1)
    await ctx.send(f'{random.choice(responses)}!')

    
#client token for the bot
#DO NOT share this with anyone else
client.run('Njg3MDMwMTc0OTE0NzA3NDgy.Xmf6Vg.W1tRzfw4MF9ucQICBMP2NI-fouU')
