import React from 'react'
import { Spring, animated } from 'react-spring/renderprops.cjs'

export default class NativeSpringExample extends React.Component {

  constructor( props ) {
    super();
    this.state = {
      flipped: false,
      counter: 0
    }
  }

  flip = () => {
    this.setState(state => ({ flipped: !state.flipped }))
  }

  componentDidMount() {

  }

  render() {

    const flipped = this.state.flipped

    return (

      <Spring
        native

        from={{ fill: 'black' }}

        to={{
          opacity: flipped ? 1 : 0,
          transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
          config: { mass: 5, tension: 500, friction: 80 }
        }}

        flip={this.flip}

        onRest={() => console.log('done')}>

        {({ opacity, transform }) => (
          <div className='flip_wrapper' onMouseEnter={this.flip} onMouseLeave={this.flip} >
            <animated.div className = 'c front' style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
              {this.props.card.svg}
            </animated.div>
            <animated.div className = 'c back' style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} >
              <div className='card_content_div'>
                <h3>{this.props.card.title}</h3>
                <div className='card-separator'></div>
                <p>{this.props.card.content}</p>
              </div>
            </animated.div>
          </div>
        )}

      </Spring>

    )
  }
}