import React, {Component, PropTypes, PureComponent} from 'react'

import appCSS from './app.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  onChange(event) {
    const {value} = event.target
    const {list} = this.state
    list.push(value)
    this.setState({list})
  }

  render() {
    const {list} = this.state
    return <section style={{background: 'rgba(134,34,134,1)'}}>
      <h1>Hello 4</h1>
      <input onChange={::this.onChange}/>
    <ul>
      {
        list.map( (item, i) => {
          return <li key={i}>Hello: {item}</li>
        })
      }
    </ul>
    </section>
  }
}
