import React, { Component } from 'react'

import Title from '../title'
import Streamer from './streamer'

import { Swiper, SwiperSlide } from 'swiper/react';
import Axios from "axios"

import SwiperCore, {
  Pagination
} from 'swiper/core';

const pagination = {
  "clickable": true
}

// install Swiper modules
SwiperCore.use([Pagination]);

export default class Streamers extends Component {

    constructor() {
        super();
        this.state = {
            stream_team: [
                { 
                  name: "raizqt",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  duration: "",
                  nationality: "poland" 
                },
                {
                  name: "duellinksmeta",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "filthyrobot",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "danehearth",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "uk"
                },
                {
                  name: "educated_collins",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "shadybunny",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "belgium"
                },
                {
                  name: "j4ckiechan",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "uk"
                },
                {
                  name: "uber_nerd",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "isherwood",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "alliestrasza",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "control",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "canada"
                },
                {
                  name: "ceecee_lia",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "nicholena",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "jupiter",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "xdeni",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "uk"
                },
                {
                  name: "mattoblivium",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "netherlands"
                },
                {
                  name: "happyf333tz",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "theasianavenger",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "alkali_layke",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "hydramist",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "uk"
                },
                {
                  name: "bloody",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "celerity",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "arvius",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "ashlizzlle",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "netherlands"
                },
                {
                  name: "zueljin",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "vigilsc",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "franklepore",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "emmaskyeward",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "dekkster",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "mrmouton",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "jeffhoogland",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "nealguides",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "uk"
                },
                {
                  name: "redbeard",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "cantelope",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "roffle",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "jane",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "australia"
                },
                {
                  name: "wobbleweezy",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "danytlaw",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "swiss"
                },
                {
                  name: "zabracus",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "willerz",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "synnfuljoestargia",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "alieldrazi",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "mtgnerdgirl",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
                {
                  name: "siimiizz",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "netherlands"
                },
                {
                  name: "sunbaconrelaxer",
                  twitchId: "",
                  status: "offline",
                  viewers: 0,
                  game: "",
                  game_img_url: "",
                  duration: "",
                  nationality: "usa"
                },
              ]
        }   
    }

    getStreamersData = () => {
        console.log("Get Streamers Data FUNCTION FIRED")
        let uri = "https://api.twitch.tv/helix/streams?"
        uri += this.state.stream_team
          .map((streamer, index) =>
            index === 0
              ? "user_login=" + streamer.name
              : "&user_login=" + streamer.name
          )
          .join("")
    
        var self = this
    
        Axios.request({
          url: uri,
          method: "GET",
          headers: {
            "Client-ID": "p1ax1b3mgtxvv96w9qtkmfrukti6df",
            Authorization: "Bearer gk7yf0xlu1qqkednpc9mrxhmfl7yby",
          },
        })
          .then(function(response) {
            self.populateAndSortData(response)
          })
          .catch(function(error) {
            console.log("An Error occured " + error)
          })
    }

    populateAndSortData = data => {
        let gameNameArray = []
        const stream_team_clone = this.state.stream_team
        let stream_team = stream_team_clone.map(streamer => {
          let user = data.data.data
            .map(suser =>
              suser.user_name.toLowerCase() === streamer.name ? suser : null
            )
            .reduce((acc, val) => (val !== null ? val : acc))
          if (user !== null) {
            streamer.status = user.type
            streamer.viewers = user.viewer_count
            streamer.twitchId = user.user_id
            gameNameArray.push({
              name: streamer.name,
              game_id: user.game_id,
              sort_data: user.viewer_count,
            })
            streamer.duration = this.calcTime(user.started_at)
          }
          return streamer
        })
    
        const upData = [].concat(stream_team).sort((a, b) => b.viewers - a.viewers)
    
        const gameArray = []
          .concat(gameNameArray)
          .sort((a, b) => b.sort_data - a.sort_data)
    
        this.updateGameName(upData, gameArray)
    }

    calcTime = time => {
        let time_diff = new Date().getTime() - new Date(time).getTime()
        let time_minutes = Math.floor(time_diff / (1000 * 60))
        let time_hours = Math.floor(time_minutes / 60)
        let time_duration = ""
        let duration = " "
    
        if (time_hours > 0) {
          time_duration += time_hours + " h "
        }
        time_duration += time_minutes - 60 * time_hours + " m"
        duration += time_duration
    
        return duration
      }
    
    updateGameName = (data_array, game_name_array) => {
        let uri = "https://api.twitch.tv/helix/games?"
        game_name_array.map((game, index) =>
            index !== 0
            ? (uri += "&id=" + game.game_id)
            : (uri += "id=" + game.game_id)
        )

        Axios.request({
            url: uri,
            method: "GET",
            headers: {
            "Client-ID": "p1ax1b3mgtxvv96w9qtkmfrukti6df",
            Authorization: "Bearer gk7yf0xlu1qqkednpc9mrxhmfl7yby",
            },
        }).then(response => {
            game_name_array.map((game, index) => {
            if (game.game_id !== "") {
                data_array[index].game_img_url = response.data.data.filter(
                gameArray => gameArray.id === game.game_id
                )[0].box_art_url
            } else {
                data_array[index].game_img_url = "none"
            }
            return true
            })

            game_name_array.map((game, index) => {
            if (game.game_id !== "") {
                data_array[index].game = response.data.data.filter(
                gameArray => gameArray.id === game.game_id
                )[0].name
            } else {
                data_array[index].game = "Other"
            }
            return true
            })

            this.setState({
            stream_team: data_array,
            })
        })
    }

    componentDidMount() {
        this.getStreamersData()
        console.log("-----Component Did Mount-----")
    }
    
    render() {
        return (
         
          <section className='streamers_section' id='streamers' >
            <Title title='our creators' />
            <div className='streamers_section_wrapper container'>
              <Swiper
                pagination={pagination}
                spaceBetween={5}
                slidesPerView={2}
                slidesPerGroup={2}
                breakpoints={{
                  "769": {
                    "slidesPerView": 4,
                    "slidesPerGroup": 4
                  }
                }}
              >
                  {this.state.stream_team.map((value, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <Streamer
                              name={value.name}
                              status={value.status}
                              game={value.game}
                              viewers={value.viewers}
                              duration={value.duration}
                              game_image_url={value.game_img_url}
                              nationality={value.nationality}
                          />
                        </SwiperSlide>
                      )
                  })}
                </Swiper>
              </div>
            </section>
        )
    }

}