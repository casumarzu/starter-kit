// import React, {Component, PropTypes, PureComponent} from 'react'
import appCSS from './app.css'
import image from '../files/image.jpg'

const getRandomInt = (min, max) =>
  Math.floor(
    Math.random() * (max - min + 1)
  ) + min

const addEl = (element, options) => {
  const elementNode = document.createElement(element)

  const {text, className, attributes} = options

  if(text) elementNode.innerText = text

  if(className) elementNode.className = className

  if(attributes) {
    for(let name in attributes) {
      if(Object.prototype.hasOwnProperty.call(attributes, name)) {
        const value = attributes[name]
        elementNode.setAttribute(name, value)
      }
    }
  }

  return elementNode
}

const request = () => {
  fetch('/api/photos')
  .then(data => data.json())
  .then(data => {
    console.log(data)
  })
}


class App {
  constructor() {
    const root = document.getElementById('root')
    root.classList.add(appCSS.root)
    // request()
    let i = 1
    while(i > 0) {
      root.appendChild( this.renderRootNode() )
      i--
    }
  }

  renderImage(image) {
    const imageNode = addEl('img', {
      attributes: {
        src: image
      }
    })
    return imageNode
  }

  renderHeader() {
    const rocket = '🚀'
    console.log(rocket)
    const text = 'Hey,dude! 1 1 1'
    const headerNode = addEl('h1', { text })
    return headerNode
  }s

  renderRootNode() {
    this.rootNode = addEl('section', {
      className: appCSS.rootElement
    })

    this.rootNode.appendChild(
      this.renderHeader()
    )
    setTimeout( () => {
      this.rootNode.classList.add(appCSS['rootElement--active'])
    }, 300)

    this.renderEffects(this.rootNode)

    return this.rootNode
  }

  renderColors(element) {
    const rColor = getRandomInt(0, 255)
    const gColor = getRandomInt(0, 255)
    const bColor = getRandomInt(0, 255)

    // rgba(134, ${someNumber}, 10)

    // Красивые цвета
    const randomColor = `rgba(${rColor}, ${gColor}, ${bColor}, 1)`

    const colors = [
      'rgb(250, 164, 150)',
      'rgb(55, 155, 185)',
      'rgb(83, 1, 27)',
      'rgb(17, 40, 23)',
      'rgb(76, 209, 182)',
      randomColor
    ]


    let {style} = document.body
    if(element) {
      style = element.style
    }

    style.backgroundColor = colors[getRandomInt(0, colors.length - 1)]
    // style.fontSize = `${getRandomInt(10, 35)}px`
  }

  renderImages() {
    fetch('/api/photos')
    .then(data => data.json())
    .then(data => {
      data.forEach( item => {
        console.log(item)
        this.rootNode.appendChild(this.renderImage(item.url))
      })
    })
    // const arr = [1,2,3,4,5]
    // arr.forEach( item => {
    //   rootNode.appendChild(this.renderImage(image))
    // })
  }

  renderEffects(rootNode) {
    this.renderColors(rootNode)
  }
}

const app = new App()
