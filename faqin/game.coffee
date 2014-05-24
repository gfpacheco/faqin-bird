class faqin.Game
  constructor: ->
    @engine = new faqin.Engine
      canvas: document.getElementById 'gameCanvas'
      viewport: new faqin.Viewport faqin.Config.viewport
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
    @engine.solids.push new faqin.Rect faqin.Config.floor

  createBird: =>
    @bird = new faqin.Bird faqin.Config.bird
    @engine.viewport.anchor = @bird
    @engine.solids.push @bird

  createPipe: =>
    pipe = []
    @lastPipeX += 4

    for solid in faqin.Config.pipes.simple
      solid = clone(solid)
      solid.x += @lastPipeX
      pipe.push solid
      @engine.solids.push solid

    @pipes.push pipe

  addEventListeners: =>
    @bird.addEventListener 'collide', =>
      @stop()

window.onload = ->
  new faqin.Game
