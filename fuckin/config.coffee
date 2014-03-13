fuckin.Config =
  viewport:
    x: 0
    y: 0
    width: 180
    height: 300
    type: 'xFixed'
    xFixed: 70
  floor:
    x: 0
    y: 250
    width: 180
    height: 50
    velocity: new fuckin.Vector 1, 0
    fill: 'rgba(20, 200, 20, 255)'
  bird:
    x: 70
    y: 80
    width: 20
    height: 20
    velocity: new fuckin.Vector 1, 0
    dynamic: true
    gravity: 18
    fill: 'rgba(255, 255, 0, 255)'
  pipes:
    simple: [
        x: 5
        y: 0
        width: 30
        height: 80
      ,
        x: 0
        y: 80
        width: 40
        height: 20
      ,
        x: 0
        y: 150
        width: 40
        height: 20
      ,
        x: 5
        y: 170
        width: 30
        height: 80
    ]
