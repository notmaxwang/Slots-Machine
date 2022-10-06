Pseudocode and the functionality of this game program, the Slots-Machine.

Main Functionality
Supply the machine with money("credits") and press a button, the reels will roll and within seconds it will tell the player whether he or she has won or not. 

Winning Condition
To get a reward, the machine has to form a winning symbol combination on adjacent reels left to right. 


PseudoCode

1. Define Required Constants:
    1.1) Define a color object with keys from 1-9 that represent the colors on the reels.
    1.2) Define the 9 total winning conditions, when all of the colors are the same in a row.

2. Define Required Variables used to track the state of the game.
    2.1) Use three arrays to represent the three reels.
    2.2) Use a credit veriable to track the user's earning & losses.
    2.3) Use a wager variable to track the user's wagers.  


3. Cached Elements
    3.1) The three reels elements will be stored.


4. Upon loading the app should:
    4.1) Initialize the state variables.
    4.2) Render the state variables to the page.
    4.3) Wait for user to wager and click play.

5. Handle a player clicking play
    5.1) Check for credits, if it is 0 or negative, game is over.
    5.2) Randomize the three colors that will be displayed.
    5.3) Display the three colors.
    5.4) Check for condition, if the three colors are the same, player will be credited the earning
    5.5) Render the updated credits to the page.
    5.6) Wait for user to wager and click play again.