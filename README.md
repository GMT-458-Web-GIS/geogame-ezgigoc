### Oyunu Başlatmak

Bu projeyi çalıştırmak için aşağıdaki adımları izleyin:

1. Bilgisayarınıza indirin.
2. `index.html` dosyasını çift tıklayarak tarayıcınızda açın.
   - Dosya yolu: `file:///C:/Users/User/Desktop/geogame/index.html`

# World Food Quiz Game

This game is designed to show photos of food from around the world and have players guess which country's cuisine it belongs to. Each correct guess earns the player points, while wrong answers result in a loss of life. Players start the game with 3 lives and lose a life with each wrong answer. The game ends when their lives run out.

## Game Summary

- **Objective**: Players will try to correctly guess which country the food photo that appears on the screen belongs to.
- **Life Rights**: Players have 3 lives at the beginning. If they answer incorrectly, each incorrect answer will cost them a life.
- **Scoring**: Correct guesses earn 10 points.
- **Game End**: When the lives run out, the game ends and the player's total score is shown.
- **Meals**: A random food and country photo is shown on the screen each round. Players try to guess which country the food photo belongs to.
- 
## Technologies Used

- **HTML**: Used to create the game interface.
- **CSS**: Used to create the visual design of the game, control buttons and layout.
- **JavaScript**: Used to implement game logic, score and life management.
- **External Image URLs**: Used external image links to capture food photos over the internet. For example, photos of food were taken from a web server (external URLs were used for images).
  
## Game Flow

1. The player guesses which country's cuisine it belongs to by looking at the food photo.

2. 4 different options are presented. If they guess correctly, they earn 10 points and move on to the next dish.

3. If they guess incorrectly, they lose a life.

4. When the lives run out, the game ends and the player is shown their total score.

## Libraries Used

- **[Leaflet.js](https://leafletjs.com/)**: Used for map-based game elements.

- ## Images
### Sushi
As an example of the game, sushi from Japanese cuisine will also be included.
Other countries where sushi is famous outside of Japan can also be selected and the next question cannot be passed until all countries are selected.
![image](https://github.com/user-attachments/assets/b87f3275-237a-474b-87c5-ce14187d271b)

### World Map
Since this game is about world cuisines, the country that is famous for its food will be selected on the map. The map below shows which countries the food in the game comes from.

![image](https://github.com/user-attachments/assets/f12dea86-32e7-4050-ab96-0f25b7e3d9f7)

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ATV5e7Id)

## Start Game Button (startButton)

Description: This handler listens for the click event on the "Start" button and initiates the game. It hides the introduction screen, displays the game area, and starts the first round.

## Map Click (map.once('click', callback))

Description: This handler listens for a single click on the Leaflet map. It captures the latitude and longitude of the click to check the player's guess and validate their response.

## Answer Validation and Next Round Trigger (checkAnswer)

Description: After a map click, this function determines if the guess is correct based on the distance to the target location. It updates the score or lives and initiates the next round.

## Use of Closures
Closures are used in the game to maintain state and manage event listeners dynamically. For example, when adding a click listener to the map, the currentFood object (specific to the current round) is enclosed within the event handler. This ensures that even as rounds progress, the logic for the current round remains consistent.

## Learning from AI
I learned a great deal from AI tools like ChatGPT during the development process:

### Debugging Assistance: ChatGPT helped resolve issues such as ensuring the game progresses correctly and fixing the map display issue.
### Efficient Coding: I implemented better coding practices like event listener management and randomization of data with ChatGPT’s guidance.
### I learned how to add lives

https://chatgpt.com/c/67596b78-6e64-8007-a7b5-42758a9b9893

## Interaction with the DOM
The game interacts with the DOM to:

### Dynamically update scores and lives:
### Manage visibility of game sections:


## Interactivity/Complexity/Fun of the Game
### Chosen JS Library: Leaflet.js
####Functionalities Used:
Interactive Map: Used to display a world map where players can click to guess the country.
####Distance Calculation: 
Leveraged map.distance() to calculate the distance between the player’s guess and the target location.
Tile Layers: Added OpenStreetMap tiles for a visually appealing map interface.

### Complexity and Fun:

-Players get to learn about global cuisine while engaging with an interactive map.
-The game includes randomized rounds and dynamic difficulty through limited lives and increasing challenge with more foods.
-Feedback (alerts) keeps players motivated, and the scoring system adds a competitive edge.
