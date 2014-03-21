class fuckin.Game extends fuckin.Engine
  constructor: (canvas, options) ->
    super
      canvas: canvas
      viewport: new fuckin.Viewport fuckin.Config.viewport
      fps: 48

    @pipes = [];
    @lastPipeX = 0

    @createFloor()
    @createBird()

    @addEventListeners()
    @start()

  start: =>
    super
    @createPipe()
    @pipesInterval = setInterval =>
        @createPipe()
      , 2000

  createFloor: =>
    @solids.push new fuckin.Rect fuckin.Config.floor

  createBird: =>
    @bird = new fuckin.Bird fuckin.Config.bird
    @viewport.anchor = @bird
    @solids.push @bird

  createPipe: =>
    pipe = []
    @lastPipeX += 4

    for solid in fuckin.Config.pipes.simple
      solid = clone(solid)
      solid.x += @lastPipeX
      pipe.push solid
      @solids.push solid

    @pipes.push pipe

  addEventListeners: =>
    @bird.addEventListener 'collide', =>
      @pause()
      clearInterval @pipesInterval

window.onload = ->
  new fuckin.Game document.getElementById 'gameCanvas'
