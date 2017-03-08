var scene = document.querySelector('a-scene');
var sky = document.querySelector('a-sky');
var objectContainer = document.querySelector('#object-container');

var totalSteps = getRandomNumber(17, 10)
var totalRotations = getRandomNumber(17, 10)

sky.setAttribute('color', getRandomColor())
sky.setAttribute('animation__color', {
  property: 'color',
  dir: 'alternate',
  dur: 2000,
  easing: 'easeInOutSine',
  loop: true,
  to: getRandomColor()
})

generateElements()
alterEveryOtherPath()

function generateElements() {
  for (var i = 1; i <= totalRotations; i++) {
    var currentRotation = 360 / totalRotations * i
    var rotateContainer = document.createElement('a-entity')
    rotateContainer.setAttribute('rotation', {x: 0, y: 0, z: currentRotation})
    for (var j = 1; j <= totalSteps; j++) {
      var evenDistance = j / totalSteps
      var currentSize = j / totalSteps
      var circleElementContainer = document.createElement('a-entity')
      circleElementContainer.setAttribute('class', 'circleElementContainer' + j)
      circleElementContainer.setAttribute('position', {x: 0, y: evenDistance, z: 0})
      var circleElement = document.createElement('a-entity')
      circleElement.setAttribute('class', 'circleElement' + j)
      circleElement.setAttribute('scale', {x: currentSize, y: currentSize, z: currentSize})
      circleElement.setAttribute('material', {color: getRandomColor(), metalness: 0, roughness: 0})
      circleElement.setAttribute('geometry', {primitive: 'sphere', radius: 1.5})
      circleElement.setAttribute('animation__yoyo', {
        property: 'scale',
        dir: 'alternate',
        dur: currentSize * 10000,
        easing: 'easeInOutSine',
        loop: true,
        to: '0 0 0'
      })
      circleElementContainer.appendChild(circleElement)
      rotateContainer.appendChild(circleElementContainer)
    }
    objectContainer.appendChild(rotateContainer)
  }
}

function alterEveryOtherPath() {
  var path;
  for (var i = 0; i <= totalSteps; i++) {
    var circleRing = document.getElementsByClassName('circleElement' + i)
    var valueOne = getRandomNumber(21, -10)
    var valueTwo = getRandomNumber(21, -10)
    var randomDuration = getRandomNumber(6, 5)
    for (var j = 0; j < circleRing.length; j++) {
      if (j % 2 == 0) {
        path = [[0, 0, 0], [valueOne, valueTwo, valueOne], [valueTwo, valueOne, valueTwo]];
      } else {
        path = [[0, 0, 0], [valueTwo, valueOne, valueTwo], [valueOne, valueTwo, valueOne]];
      }
      circleRing[j].setAttribute('alongpath', {
        path: path.map(function (x) { return x.join(','); }).join(', '),
        closed: true,
        dur: randomDuration * 1000,
        loop: true
      })
    }
  }
}

function getRandomNumber(x, y) {
  return Math.floor(Math.random() * x + y);
}

function getRandomColor() {
  var varters = '0123456789abcdef'
  var randomColor = ''
  for (var i = 0; i < 6; i++) {
    randomColor += varters[Math.floor(Math.random() * 16)]
  }
  return '#' + randomColor
}

function getRandomShape() {
  var shapes = ['sphere', 'octahedron', 'icosahedron', 'torus', 'tetrahedron']
  return shapes[Math.floor(Math.random() * shapes.length)]
}
