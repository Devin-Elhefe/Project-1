# **Slot Machine Game Project Plan**

### Game Overview

> **Objective**: Create a simple slot machine game where the player can spin the reels, win or lose virtual money, and optionally reset the game.

#### Main Features:
* A user interface with three reels that spin independently.
* A “Spin” button to initiate the spin.
* A display showing the player’s current balance.
* Win conditions that determine when the player wins money.
* A reset button to start over.

#### Components

* **Reels**: Three independent reels, each displaying one of several possible symbols.
* **Symbols**: Define a set of symbols (e.g., cherries, lemons, bars) that can appear on the reels.
* **Spin Button**: Triggers the reels to spin.
* **Balance Display**: Shows the player’s current balance.
* **Win Conditions**: Logic to determine if the player wins based on the symbols displayed.
* **Reset Button**: Resets the game to its initial state.

#### Mechanics

* **Starting Balance**: The player starts with a certain amount of virtual money (Example, 100 credits).
* **Betting**: Each spin costs a certain amount (Example, 10 credits).
* **Reel Spin**: Each reel randomly selects a symbol from the set of possible symbols.
* **Winning Conditions**:
  * If all three reels match the same symbol, the player wins a jackpot.
  * If two out of three reels match, the player wins a smaller amount.
  * Other combinations can have varying payouts.
  * Game Over: The game ends if the player’s balance reaches zero.
  * Reset: Resets the balance and reels to their initial state.

*Additional "Possible" Options*

* **Animations**: Consider adding animations to make the spinning reels visually appealing.
* **Sound Effects**: Add sound effects for spinning and winning. (*It would be cool but sounds like it would be tough to do*)
* **Bonus Features**: Include bonus rounds, multipliers, or other features to add depth to the game.
* **Pull Button**: Resembles the stick you pull on a real slot machine. So you would have the option to pull/click the stick or hit the spin button.

[Live Game](https://devin-elhefe.github.io/Project-1/)

