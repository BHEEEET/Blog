# Litepaper

TL;DR : Blockchain PvP on a 32x32 Grid.

> This is a "Lite" version of our Whitepaper currently being written, nothing is final !

## Background

We're Web2 students catching up on the Web3 stack.

We had zero knowledge about **C#** and **Unity Game Engine** but we got overwhelmed, so we worked on a minimal web-version of the Game to focus on smart-contract development.

## Abstract

Our initial Game idea was a **pure blockchain Player-versus-Player** (PvP) that can be played from the Blockchain with raw JSON RPC calls against a Node Provider, without any UI : after all, the UI renders the smart-contract state and simplify smart-contract interactions for the End-User.

Then, we shifted our Game Design thinking toward a community-owned metaverse.

We designed the Game to be smart-contract first, to have an evolving user-interface that we aim to scale as we get better at mastering **Unity Game Engine** :

- 1. Web version : core smart-contract functionalities
- 2. Unity 2D Isometric Tilemap : user-friendly UI, social features (chat, friends, clans, etc..)
- 3. Unity 3D : scale the grid by 4 : each grid unit represents 4 world units

## The Grid

A 32 by 32 grid where cells are ERC-721 tokens : capped at 1024 cells.

Cells are minted by the community for a price of **1,000 $CRO** each.

## The Player

You "summon" a character on the grid by minting a **soul-bound token** that represent your character. This token cannot be transferred or sold, but is required to play.

**A maximum of 1024 simultaneous players can be "summoned" on the Grid.**

Summoning cost is **100 $CRO**, directly lootable by other players on victory.

## Combat System

Your "summoned" character can have three different possible states :

- Idle : can attack and be attacked.
- attack : both attacking and defending players during an attack
- shield : cannot be attacked/cannot attack

The cell on which a fight happen has to be chosen randomly by an Oracle, due to the deterministic nature of block production on Blockchains.

**An attack takes 24h to resolve, processed by the Oracle.**

> _Frankly speaking, resolving a fight can be made a simple as a coin-flip, but isn't sustainable nor attractive or pleasurable for users in my opinion._

## Economy

Both "shield" and "attack" smart-contract calls cost **1 $CRO**., amount directly added to the lootable stack of the player calling the smart-contract.

Cell owners on which a fight occurs get 10% of the resulting fight.

## Expansion

Here's how we envision to grow the game, and enrich the gameplay.

**Combat System :**

- Resolve battles with a 2D auto-battler system, including PvE Game mode to loot items.

**Guild Territory :**

- As we scale out the game into 3D, cells will represent "**Guild Territory**" enabling rich gameplay features such as permissionned constructions and non-aggression toward Guild Members.

- Guilds will yield protocol fees collectively by rules defined by them.

**Crowd-Sourced Metaverse :**

- We want to encourage the community to learn and participate in the Game Design process.

The functionality's of the nfts will most likely be getting rewards of the battles that happen on their cells, exclusive access, governance, ...

We will be making a dao for the NFTS so they can make proposals about what they want to do or add to the community, because they are technically the owners of the land they decide what to do with the land. This looks like a democracy which some might say is a failed society, but we will be making it better by fractionizing the NFTS and let the people have control over the diffrenet cells.

There are many experiments we can do, so it is not clear what the real end goal is of the project.

All we know for now is we will add some gameplay and some more graphics.
