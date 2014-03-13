var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

fuckin.Config = {
  viewport: {
    x: 0,
    y: 0,
    width: 180,
    height: 300,
    type: 'xFixed',
    xFixed: 70
  },
  floor: {
    x: 0,
    y: 250,
    width: 180,
    height: 50,
    velocity: new fuckin.Vector(1, 0),
    fill: 'rgba(20, 200, 20, 255)'
  },
  bird: {
    x: 70,
    y: 80,
    width: 20,
    height: 20,
    velocity: new fuckin.Vector(1, 0),
    dynamic: true,
    gravity: 18,
    fill: 'rgba(255, 255, 0, 255)'
  },
  pipes: {
    simple: [
      {
        x: 5,
        y: 0,
        width: 30,
        height: 80
      }, {
        x: 0,
        y: 80,
        width: 40,
        height: 20
      }, {
        x: 0,
        y: 150,
        width: 40,
        height: 20
      }, {
        x: 5,
        y: 170,
        width: 30,
        height: 80
      }
    ]
  }
};

fuckin.Bird = (function(_super) {
  __extends(Bird, _super);

  function Bird(options) {
    this.flap = __bind(this.flap, this);
    deepExtend(this, options);
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
    this.velocity.y = -7;
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
    Game.__super__.constructor.call(this, {
      canvas: canvas,
      viewport: new fuckin.Viewport(fuckin.Config.viewport)
    });
    this.createFloor();
    this.createBird();
    setInterval((function(_this) {
      return function() {
        return _this.createPipe();
      };
    })(this), 2000);
    this.addEventListeners();
    this.start();
  }

  Game.prototype.createFloor = function() {
    return this.solids.push(new fuckin.Rect(fuckin.Config.floor));
  };

  Game.prototype.createBird = function() {
    this.bird = new fuckin.Bird(fuckin.Config.bird);
    this.viewport.anchor = this.bird;
    return this.solids.push(this.bird);
  };

  Game.prototype.createPipe = function() {
    return 'ra';
  };

  Game.prototype.addEventListeners = function() {
    return this.bird.addEventListener('collide', (function(_this) {
      return function() {
        _this.pause();
        return alert('Morreu!');
      };
    })(this));
  };

  return Game;

})(fuckin.Engine);
