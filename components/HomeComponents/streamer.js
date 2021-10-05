import React, { Component } from 'react'

export default class Streamer extends Component {

    render() {
        return (
        
            <div className='streamer_wrapper'>

                <div className={'streamer_image_background ' + this.props.status}>
                    <div className="streamer_image">
                            <div className={"streamer_viewers " + this.props.status}>
                                <p>{this.props.viewers} <br/>  <p>viewers</p></p> 
                            </div>
                            <a href={'https://twitch.tv/' + this.props.name } target="_blank"><img src={'/images/streamers/' + this.props.name + '.jpg'} /></a>
                    </div>
                </div>

                <div className={'nationality_icon'}>
                            <img src={'/images/flags/' + this.props.nationality + '.png'} />
                </div>  

                <div className={'streamer_data_wrapper ' + this.props.status}>
                    <div className='streamer_data_wrapper_wrapper'>
                        
                        <div className={'streamer_name ' + this.props.status}>
                            {this.props.name}
                        </div>
                    
                        <div className={'streamer_status ' + this.props.status}>
                            {this.props.status}
                        </div>
                        
                        <div className={'game_image ' + this.props.status}>
                            <img src={this.props.game_image_url ? this.props.game_image_url.replace('-{width}x{height}.jpg', '.jpg') : ''} />
                        </div>
                    </div>    
                </div>
            </div>
        )
    }

}