faqin.Config =
  viewport:
    x: 3
    y: 5
    width: 6
    height: 10
    type: 'xFixed'
    xFixed: 1
  floor:
    x: 3
    y: 9
    width: 6
    height: 2
    velocity: new faqin.Vector 2.5, 0
    fill: 'rgba(20, 200, 20, 255)'
    floor: true
  bird:
    x: 1
    y: 3
    width: 0.6
    height: 0.6
    velocity: new faqin.Vector 2.5, 0
    dynamic: true
    gravity: 10
    fill: 'rgba(255, 255, 0, 255)'
  pipes:
    simple: [
        new faqin.Rect
          x: 0.5
          y: 1.2
          width: 0.6
          height: 2.4
          fill: 'rgba(20, 200, 20, 255)'
          pipe: true
      ,
        new faqin.Rect
          x: 0.5
          y: 2.5
          width: 1
          height: 0.6
          fill: 'rgba(20, 200, 20, 255)'
          pipe: true
      ,
        new faqin.Rect
          x: 0.5
          y: 5.5
          width: 1
          height: 0.6
          fill: 'rgba(20, 200, 20, 255)'
          pipe: true
      ,
        new faqin.Rect
          x: 0.5
          y: 6.8
          width: 0.6
          height: 2.4
          fill: 'rgba(20, 200, 20, 255)'
          pipe: true
      ,
        new faqin.Rect
          x: 0.5
          y: 4
          width: 0.1
          height: 2.4
          checkpoint: true
    ]
