class fuckin.Bird extends fuckin.Rect
  constructor: (options) ->
    super

    window.addEventListener 'click', =>
      @flap()
    window.addEventListener 'keydown', =>
      @flap()

  flap: =>
    @velocity.y = -5;
    return this
