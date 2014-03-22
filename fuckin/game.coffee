class fuckin.Game
  constructor: ->
    @engine = new fuckin.Engine
      canvas: document.getElementById 'gameCanvas'
      viewport: new fuckin.Viewport fuckin.Config.viewport
      fps: 48
      debug: true

    @pipes = []
    @lastPipeX = 0

    @createFloor()
    @createBird()

    @addEventListeners()
    @start()

  start: =>
    @createPipe()
    @pipesInterval = setInterval =>
        @createPipe()
      , 2000
    @engine.start()

  stop: =>
    @engine.pause()
    clearInterval @pipesInterval

  createFloor: =>
    @engine.solids.push new fuckin.Rect fuckin.Config.floor

  createBird: =>
    @bird = new fuckin.Bird fuckin.Config.bird
    @engine.viewport.anchor = @bird
    @engine.solids.push @bird

  createPipe: =>
    pipe = []
    @lastPipeX += 4

    for solid in fuckin.Config.pipes.simple
      solid = clone(solid)
      solid.x += @lastPipeX
      pipe.push solid
      @engine.solids.push solid

    @pipes.push pipe

  addEventListeners: =>
    @bird.addEventListener 'collide', =>
      @stop()

window.onload = ->
  new fuckin.Game
