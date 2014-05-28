do ->
  wellcomeContainer = document.getElementById 'wellcomeContainer'
  gameContainer = document.getElementById 'gameContainer'
  game = null

  playGame = (event) ->
    wellcomeContainer.style.display = 'none';
    gameContainer.style.display = 'block';
    game = new faqin.Game

    window.removeEventListener 'keydown', playGame
    event.stopPropagation()
    return false

  window.onload = ->
    playButton = document.getElementById 'playButton'
    playButton.addEventListener 'click', playGame
    window.addEventListener 'keydown', playGame
