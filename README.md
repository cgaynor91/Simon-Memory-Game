<h1 align="center">
Interactive Frontend Development
<br> Second Milestone Project
</h1>

For my second milestone project I decided to create the [Simon Memory Game](https://github.com/cgaynor91/Simon-Memory-Game/). This game dates back to 1978 when it was first manufactured by Milton Bradley in 1978. The game is a test of memory. The programme creates a series of sounds and lights and requires the player to then repeat the sequence. Provided the player succeeds the sequence continues, incrementing by one each time. 

The original game had 4 settings of difficulty levels, I have adapted this idea by implementing a "strict mode". In this mode the player must get each sequence correctly, failure to do so would revert the player back to the beginning. In order for the player to win the game they must repeat the sequenec correctly 20 times. 

## Contents Table

1. [**UX**](#ux)
    - [**Player Experience**](#player-experience)
    - [**User Stories**](#user-stories)
    - [**Design Ideas**](#design-ideas)
    - [**Wireframes**](#wireframes)
    - [**Developer and Business Purpose**](#developer-and-business-purpose)

2. [**Features**](#features)
    - [**Existing Features**](#existing-features)
    - [**Features Left to Implement**](#features-left-to-implement)

3. [**Technologies Used**](#technologies-used)

4. [**Testing**](#testing)

5. [**Deployment**](#deployment)

6. [**Credits**](#credits)
    - [**Contents**](#contents)
    - [**Media**](#media)
    - [**Help with code**](#help-with-code)
    - [**Acknowledgements**](#acknowledgements)
    


## UX

The aim of the Simon game is to have fun, while testing your memory. The game itself is not too complex in ideals so this lends itself suitable to all age groups. The option of having strict mode means, if younger children are playing strict mode could be disabled in order for them to not be discouraged if they get one wrong and are reverted to the start. Likewise, adults may find this not challenging enough therefore strict mode allows for a greater challenge of memory. 

### Player Experience

- Upon visiting the site players are greeted with a clear one page website. The Simon game itself is located in the middle of the page with the start button and strict button clearly labelled. <br>
- If the user finds themselves confused at any point there is a "Rules and Instructions" link which, upon clicking, displays a pop-up modal with clear written instructions on how to play. <br>
- If the user is still struggling to understand the concept of the game there is a link below the "Rules and Instructions" labelled "See Demo Video on Youtube Here!" and this brings them to a clear and concise short video explaing how to play the Simon Game. 
- When playing the game there is a number display counter which tells the player at every stage what level they are on from 1 - 20. 
- If the player gets a sequence incorrect the display will advise them "No!" and depending whether in strict mode or not, will revert them back to the start or repeat the pattern again.
- If the player reaches 20 and wins the game the display will read "Win!"

### User Stories

- As a player I would like to see
     1. A clean, user friendly website
     2. Clear and conscise instructions on how to play the game
     3. Visible and well labelled controls 
     4. An option to make the game harder 
     5. Bright colours and sounds that coincide with the game as it plays
     6. Some form of indicator to advise what level I am on
     7. A fun game which can be played by both adults and children


### Design Ideas

- When designing the game I wanted to stick with the original layout of the circular Simon board however, as the game is "old-school" I wanted to give it a retro, arcade style look. The game was originally built as a handheld device. As I was creating the game to be played on computer devices I wanted the game to still have a retro feel. 

- I incorporated this arcade style by having a space invaders theme, a popular arcade game from the 1980's. Using a space image as my background and similar coulours and sounds to space invaders I was able to make the Simon Board game have the feel of an arcade game. 

- I also used audio clips from old games to reinforce the theme, from the audios used to signy which colour pad is being selected to audio played when you win or lose the game. 

- The font I selected as the primary font is *"Fascinate Inline"* as it lends itself to the old style theme. 

- All the colours I used were primary block colours. Having the colours primary is in keeping with the original Simon Game and also compares to arcade games of the 80's which used bright primary colours. I used luminuous green for the modal link, the demo video link, the start and strict button. I thought this tied in nicely with the space invaders theme and also draws the users eyes to these features. 

### Wireframes

I kept with the original board of the simon game and wanted to keep the rest of the webpage relatively clear.

- [Desktop Display](assets/wireframes/mockupdesktop.png)<br>
- [Tablet Display](assets/wireframes/mockuptabeletsimon.png)<br>
- [Mobile Display](assets/wireframes/mockupphonesimon.png)<br>


### Features

As I mentioned above the website has a