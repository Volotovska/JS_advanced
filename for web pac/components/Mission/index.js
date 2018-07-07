import React, { Component } from 'react';

        class Mission extends React.Component {
          constructor(props) {
            super(props) 
            this.state = {
               textBlock1: 'We provide strategic thinking and deliver great digital work that enhances your brand in an ever changing technological world.',
               textBlock2: 'Our team has developed projects for industry-leading brands such as The City of McAllen, FCC Environmental, Sunoco, Greater Houston Neurosurgery Center, and more.'      
            };
          }
          
          render() {

            return (
              <div id='foundation2'>
                <video src="img/ufo.mp4" loop autoPlay muted>
                </video>
                <div id="text_block">
                  <div  id ='mission_title'> 
                    <font className='white_font'>The </font> 
                    <font className = 'blue_font'>mission</font>
                  </div>
                  <div className='white_font mission_main'>
                  {this.state.textBlock1}
                  </div>
                  <div className='white_font mission_main'>
                  {this.state.textBlock2}
                  </div>
              
                  <div className="mission_work">
                    <button type='submit' id="view_work">
                      <div className="button_text">View work
                      </div>
                      <div id="triangle_div">
                      <div id='triangle_right'></div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        };

        export default Mission;

