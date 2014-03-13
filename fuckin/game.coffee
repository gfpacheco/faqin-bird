class fuckin.Game extends fuckin.Engine
  constructor: (canvas, options) ->
    super
      canvas: canvas
      viewport: new fuckin.Viewport fuckin.Config.viewport

    @createFloor()
    @createBird()

    setInterval =>
        @createPipe()
      , 2000

    @addEventListeners()
    @start()

  createFloor: =>
    @solids.push new fuckin.Rect fuckin.Config.floor

  createBird: =>
    @bird = new fuckin.Bird fuckin.Config.bird
    @viewport.anchor = @bird
    @solids.push @bird

  createPipe: =>
    'ra'

  addEventListeners: =>
    @bird.addEventListener 'collide', =>
      @pause()
      alert 'Morreu!'
