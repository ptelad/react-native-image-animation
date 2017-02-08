/*
* (The MIT License)
* Copyright (c) 2017-2018 Winston.Hsieh <heretse@gmail.com>
*/
'use strict';

import React, { Component, PropTypes } from 'react';

import {
    Image
} from 'react-native';

import TimerMixin from 'react-timer-mixin';

export class ImageAnimation extends Component {
  static propTypes = {
    animationRepeatCount: PropTypes.number,
    animationDuration: PropTypes.number,
    animationImages: PropTypes.array.isRequired,
    onTimeout: PropTypes.func
  }
  
  constructor(props) {
    super(props);
    this.state = {imageIndex: 0};
    this.animationRepeatCount = props.animationRepeatCount||0;
    
    this.intervalId = setInterval(
        () => {
            var imageIndex = this.state.imageIndex+1;
            if (imageIndex >= props.animationImages.length) {
                imageIndex = 0;
                if (this.animationRepeatCount === 1) {
                  clearInterval(this.intervalId);
                  props.onTimeout();
                  return;
                }
                this.animationRepeatCount--;
            }
            this.setState({imageIndex:imageIndex})
        }, props.animationDuration||1000);
  }
  
  render() {
    return (<Image
              {...this.props}
              source={this.props.animationImages[this.state.imageIndex]}/>);
  }
  
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
}