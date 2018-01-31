import React, { Component } from 'react';

/* --Lifecycle--
Mounting : constructor -> componentWillMount -> render -> componentDidMount
Updating: compoponentWillReceiveProps -> shouldComponentUpdate -> render -> componentDidUpdate
Unmounting: componentWillUnmount
*/

//--- Foo Component----------------
class Foo extends Component {
  componentDidMount() {
    console.log('Foo componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('Foo componentWillReceiveProps', nextProps)
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Foo componentWillUpdate', nextProps, nextState)
  }

  componentWillUnmount() {
    console.log('Foo componentWillUnmount')
  }

  render() {
    return <p>Foo!</p>
  }
}

//--- Bar Component----------------
class Bar extends Component {
  componentDidMount() {
    console.log('Bar componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('Bar componentWillReceiveProps', nextProps)
  }

  render() {
    return <p>Bar!</p>
  }
}

//--- App Component----------------
class App extends Component {
  state = {
    div: true
  }

  componentDidMount() {
    console.log('App componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('App componentWillReceiveProps')
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('App componentWillUpdate', nextState)
  }

  componentDidUpdate() {
    console.log('App componentDidUpdate')
  }

  handleClick = () => {
    this.setState( prevState => ({ div: !prevState.div }))
  }

  getComponent = () => {
    const foo = <Foo a={1} b={2} c={3} />

    if(this.state.div) {
      return (
        <div>{foo}</div>
      )
    } else {
      return (
        <span>{foo}</span>
      )
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
        {this.getComponent()}
        <Bar {...this.state} />
      </div>
    )
  }

}

export default App;
