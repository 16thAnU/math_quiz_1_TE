// Create function addUser()
function addUser() {
  // Get value of user by id player1_name_input and player2_name_input
player1_name = getElementById("player1_name_input");
player2_name = getElementById("player2_name_input");
  // Store these values locally
localStorageStorage.set("player1_name", player1_name);
localStorageStorage.set("player2_name", player2_name);
  //Assign "game_page.html" to window.location
  window.location("game_page.html");
}

