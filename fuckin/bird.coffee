class fuckin.Bird extends fuckin.Rect
  constructor: (options) ->
    deepExtend this, options
    super

    window.addEventListener 'click', =>
      @flap()
    window.addEventListener 'keydown', =>
      @flap()

  flap: =>
    @velocity.y = -7;
    return this
