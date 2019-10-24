<h1 align="center">
Interactive Frontend Development
<br> Second Milestone Project
</h1>

For my second milestone project I decided to create the [Simon Memory Game](https://github.com/cgaynor91/Simon-Memory-Game.git). This game dates back to 1978 when it was first manufactured by Milton Bradley in 1978. The game is a test of memory. The programme creates a series of sounds and lights and requires the player to then repeat the sequence. Provided the player succeeds the sequence continues, incrementing by one each time. 

The original game had 4 settings of difficulty levels, I have adapted this idea by implementing a "strict mode". In this mode the player must get each sequence correctly, failure to do so would revert the player back to the beginning. In order for the player to win the game they must repeat the sequenec correctly 20 times. 

## Contents Table

1. [**UX**](#ux)
    - [**Player Experience**](#player-experience)
    - [**User Stories**](#user-stories)
    - [**Design Ideas**](#design-ideas)
    - [**Wireframes**](#wireframes)

2. [**Features**](#features)

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
- [Tablet Display](assets/wireframes/mockuptabletsimon.png)<br>
- [Mobile Display](assets/wireframes/mockupphonesimon.png)<br>


### Features

#### Dashboard

- When you first arrive at the page you are greeted with the Game title, a link to click for a modal for rules and instructions and a further link below this to bring you to a demo video of the game. 

- Below these three is the simon board game itself, by clicking any of the pads the user will be able to initiate a game. 

- When the user is first on the website the number display will show "-" until a pad is clicked. 

- Strict mode is automatically selected and this is highlighted to the user as the toggle is bright green when active. 

#### Rules and Instructions Modal

-  When the user clicks on the Rules and Instructions link they are presented with the game information, some of which was taken from the original game publishers Milton Bradley. The instructions are clear and easy to read as they are broken down numerically. The modal breaks down what the purpose of the game is, how to play and what strict mode is. 

#### Demo Link

- As some players might not understand the rules or would prefer to see the game being played first I included a link for a demonstrational video on Youtube so that the user can watch someone play the game to unerstand it better.

#### Simon Board

- The coloured pads are the main interactive components of the game. 

- The Board itself containers four coloured pads, the player can initiate a game by clicking one of these pads which will start a new game. 

- When the game starts a sequence will begin, a coloured pad will light up and create a sound, all pads have their own sounds. 

#### Number Display

- The board contains a number display which allows the user to keep track of what level their on. When the game is first loaded the display shows "-", however as the player continues through the game the display will increase count from 1 up to 20. Should the player get the sequence wrong the display will read **"NO!!"**, if the player reaches 20 the display will read **"WIN!!"**. 

#### Strict Mode

- There is a toggle button located below the display labelled strict mode. Strict mode allows the user to increase the difficulty of the game. Strict mode is automatically active and this is shown as it is highlighted in luminuous green, should the player toggle the button to deactive strict mode the colour will change to a dark green. 

- If activated and the player makes a mistake in the sequence the display will revert back to 0 and the sequence will begin again.

- If the player is not playing in strict mode and elects to do so during the game, again it will be reverted back to 0. 


## Technologies Used

- [Bootstrap](https://getbootstrap.com/) 
   - The Bootstrap framework was used to create a responsive design and plan the overall layout of the website. 
- [Google Fonts](https://fonts.google.com/)
    - Used Google Fonts to style the website using arcade styled font
    
- [JQuery](https://jquery.com/)
    - This was used to work with the DOM
 
- [FavIcon](https://www.favicongenerator.com/)
  - I used the FavIcon generator to create the page icon and compress it to its required size.

- [Git](https://git-scm.com/)
  - Use of git to commit different stages of my project

- HTML
    
- CSS

- JavaScript

## Testing 

 - Using [Browserling](https://www.browserling.com/) I tested the website across multiple browsers to ensure responsiveness and compatibility. 
 
 - Using Google Chrome developer tools I tested the websites responsiveness across various devices ie. iPhone, Android and Tablets. 
 
 - Manually tested all the hover styling on the navbar and also the links - all operating correctly.

- [W3C Markup Validation Service](https://validator.w3.org/) was used to validate HTML code

- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) was used to validate CSS code. 

- [Code Beautify JavaScript Validator](https://codebeautify.org/jsvalidate) was used to validate Javascript code. 


### Issues when testing

 - On some browsers, if the sequence shows the same colour twice it fails to play a sound the second time which may confuse some players. I was able to fix this bug by adding the below function which resets the audio to the start to ensure the audio is played for **each** sequence.

 ```javascript
 function playAudio(audio) {
  if (volume === true) {
    audio.play();
    audio.currentTime = 0;
    }
```


#### Addressing Testing from User Stories

*As a player I would like to see a clean, user friendly website*

The website layout is clear and uncluttered. The user is immediately greeted with the game and written and visual innstructions on how tp play.

*As a player I would like to see clear and conscise instructions on how to play the game*

There is a rules and instructions link located directly below the title of the game in bright green. Selecting this will display a modal which explains the purpose of the game, how to play and how to increase difficulty. If the user is still confused about the game another link is provided below the rules and instructions bringing the user to a demonstrational video of the game on Youtube. 

*As a player I would like to see visible and well labelled controls*

The controls are nicely styled and well labelled for the user. They are evident from once you first load the website. The colours in the game light up and play unique sounds for the user throughout the game. The start button and the strict button are both in bright green, drawing the users attention to them on the board. 

*As a player I would like to see an option to make the game harder*

A strict slider has been provided for the user, when activated it is bright green, when deactivated it is dark green. This option allows the user to increase the difficuluty of the game. I f the strict slighter is activated the player must get the sequence right everytime or the game will revert back to 0 and the user must start again. 

*As a player I would like to see bright colours and sounds that coincide with the game as it plays*

The game was styled with the theme of a retro arcade game in mind. This means the styling is quite bright, using block primary colours and luminuouscolours. The pads on the game are all block primary colours and when clicked upon light up and they each play their own unique sounds. 

*As a player I would like to see some form of indicator to advise what level I am on*

The number display in the center of the board displays what level the user is on. The display increases by one as each sequence is correctly matched. If the user makes a mistake the display will tell them "NO!!" and similaily if the player wins the display will show "WIN!!".

## Deployment

This website is hosted using GitHub pages which were deployed directly from the master branch. The webiste will automatically update when updated commits are made to the master branch. 
The webiste was developed using AWS IDE, it was then committed to git and pushed to GitHub using the terminal in AWS.

To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:

- Log into GitHub.
- Select the repository **cgaynor91/Simon-memory-Game**.
- At the top of the page, under the "watch" icon select *settings*.
- Scroll down to the GitHub Pages section.
- Under Source, click on the dropdown menu and select **Master Branch**
- The selection refreshes the page and in turn the website is deployed
- The live link for the webiste will now appear beneath the **GitHub Pages** header. 


### How to run this project locally
If you wish to clone this project from GitHub:

- Click on this [link](https://github.com/cgaynor91/Simon-Memory-Game.git) to the GitHub repository.
- There is a green button saying "Clone or download" - click on this.
- Copy the clone URL for the repository.
- Open Git Bash in your local IDE.
- Change the current working directory to the location where you want the cloned directory to be created.
- Type git clone, and then paste the URL copied in Step 3.
- git clone https://github.com/yourusername/repository
- Press Enter to create your local clone.


## Credits

### Content

- Text was taken from Milton Bradleys 1978 instructions manual to sue in the rules and instructions modal

### Media

- The background image was taken from Google Image Search
- The youtube link was taken from [This site](https://www.youtube.com/watch?v=1Yqj76Q4jJ4)
- The audio clips were converted to mp3s and downloaded from [Zapslat](https://www.zapsplat.com/sound-effect-category/game-sounds/)

### Help With Code

- Inspiration for the HTML code I got from [How to Program a Simon Game: HTML](https://www.youtube.com/watch?v=zwKoo7VDj44).
- Inspiration for the CSS code I got from [How to Program Simon Game: CSS](https://www.youtube.com/watch?v=muPIIfjazcU).
- An idea on how to get started and how the JavaScript code could work I got from [Simon Game JavaScript Tutorial for Beginners](https://www.youtube.com/watch?v=n_ec3eowFLQ). I did use some of the code in this tutorial however I did adapt it to suit my own game. 
- I got the code for my modal on [w3schools](https://www.w3schools.com/bootstrap/bootstrap_modal.asp).
- I also found myself re-watching a lot of the videos and tutorials on [Code Institute](https://codeinstitute.net/), especially The Document Object Model tutorial. 

### Acknowledgements

I would like to thank my family, who undoubtedly never want to play the simon game again. 