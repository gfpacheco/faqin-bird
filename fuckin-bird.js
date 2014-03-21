var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

fuckin.Config = {
  viewport: {
    x: 0,
    y: 0,
    width: 6,
    height: 10,
    type: 'xFixed',
    xFixed: 1
  },
  floor: {
    x: 3,
    y: 9,
    width: 6,
    height: 2,
    velocity: new fuckin.Vector(2.2, 0),
    fill: 'rgba(20, 200, 20, 255)'
  },
  bird: {
    x: 1,
    y: 3,
    width: 0.6,
    height: 0.6,
    velocity: new fuckin.Vector(2.2, 0),
    dynamic: true,
    gravity: 10,
    fill: 'rgba(255, 255, 0, 255)'
  },
  pipes: {
    simple: [
      new fuckin.Rect({
        x: 0.5,
        y: 1.2,
        width: 0.6,
        height: 2.4,
        fill: 'rgba(20, 200, 20, 255)'
      }), new fuckin.Rect({
        x: 0.5,
        y: 2.5,
        width: 1,
        height: 0.6,
        fill: 'rgba(20, 200, 20, 255)'
      }), new fuckin.Rect({
        x: 0.5,
        y: 5.5,
        width: 1,
        height: 0.6,
        fill: 'rgba(20, 200, 20, 255)'
      }), new fuckin.Rect({
        x: 0.5,
        y: 6.8,
        width: 0.6,
        height: 2.4,
        fill: 'rgba(20, 200, 20, 255)'
      })
    ]
  }
};

fuckin.Bird = (function(_super) {
  __extends(Bird, _super);

  function Bird(options) {
    this.flap = __bind(this.flap, this);
    Bird.__super__.constructor.apply(this, arguments);
    window.addEventListener('click', (function(_this) {
      return function() {
        return _this.flap();
      };
    })(this));
    window.addEventListener('keydown', (function(_this) {
      return function() {
        return _this.flap();
      };
    })(this));
  }

  Bird.prototype.flap = function() {
    this.velocity.y = -5;
    return this;
  };

  return Bird;

})(fuckin.Rect);

fuckin.Game = (function(_super) {
  __extends(Game, _super);

  function Game(canvas, options) {
    this.addEventListeners = __bind(this.addEventListeners, this);
    this.createPipe = __bind(this.createPipe, this);
    this.createBird = __bind(this.createBird, this);
    this.createFloor = __bind(this.createFloor, this);
    this.start = __bind(this.start, this);
    Game.__super__.constructor.call(this, {
      canvas: canvas,
      viewport: new fuckin.Viewport(fuckin.Config.viewport),
      fps: 48
    });
    this.pipes = [];
    this.lastPipeX = 0;
    this.createFloor();
    this.createBird();
    this.addEventListeners();
    this.start();
  }

  Game.prototype.start = function() {
    Game.__super__.start.apply(this, arguments);
    this.createPipe();
    return this.pipesInterval = setInterval((function(_this) {
      return function() {
        return _this.createPipe();
      };
    })(this), 2000);
  };

  Game.prototype.createFloor = function() {
    return this.solids.push(new fuckin.Rect(fuckin.Config.floor));
  };

  Game.prototype.createBird = function() {
    this.bird = new fuckin.Bird(fuckin.Config.bird);
    this.viewport.anchor = this.bird;
    return this.solids.push(this.bird);
  };

  Game.prototype.createPipe = function() {
    var pipe, solid, _i, _len, _ref;
    pipe = [];
    this.lastPipeX += 4;
    _ref = fuckin.Config.pipes.simple;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      solid = _ref[_i];
      solid = clone(solid);
      solid.x += this.lastPipeX;
      pipe.push(solid);
      this.solids.push(solid);
    }
    return this.pipes.push(pipe);
  };

  Game.prototype.addEventListeners = function() {
    return this.bird.addEventListener('collide', (function(_this) {
      return function() {
        _this.pause();
        return clearInterval(_this.pipesInterval);
      };
    })(this));
  };

  return Game;

})(fuckin.Engine);

window.onload = function() {
  return new fuckin.Game(document.getElementById('gameCanvas'));
};
