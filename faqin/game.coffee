class faqin.Game
  constructor: ->
    @engine = new faqin.Engine
      canvas: document.getElementById 'gameCanvas'
      viewport: new faqin.Viewport faqin.Config.viewport
      fps: 48
      debug: false

    @pipes = []
    @lastPipeX = 3.3
    @score = 0
    @scoreDisplay = document.getElementById 'score'
    @updateScore()

    @createFloor()
    @createBird()

    @addEventListeners()
    @start()

  start: =>
    @createPipe()
    setTimeout =>
        @createPipe()
      , 1500
    @engine.start()

  stop: =>
    @engine.pause()

  createFloor: =>
    @engine.solids.push new faqin.Rect faqin.Config.floor

  createBird: =>
    @bird = new faqin.Bird faqin.Config.bird
    @engine.viewport.anchor = @bird
    @engine.solids.push @bird

  createPipe: =>
    @lastPipeX += 3.75
    pipe = []
    hidden = 0

    for solid in faqin.Config.pipes.simple
      solid = clone(solid)
      solid.x += @lastPipeX
      solid.addEventListener 'hide', =>
        hidden++
        if hidden == faqin.Config.pipes.simple.length
          @createPipe()
      pipe.push solid
      @engine.solids.push solid

    @pipes.push pipe

  addEventListeners: =>
    @bird.addEventListener 'collide', (event) =>
      if event.solid.pipe || event.solid.floor
        @stop()
      else if event.solid.checkpoint
        event.solid.checkpoint = false
        @score++
        @updateScore()

  updateScore: =>
    @scoreDisplay.innerHTML = @score
