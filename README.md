# React Native ImageAnimation
A pure js image animation like ios animationImages, support iOS and Android

## Installation
```sh
npm install react-native-image-animation --save
```

## Usage

### Example
```js
import { ImageAnimation } from 'ImageAnimation';

...

var imageView = <ImageAnimation
                    ref={() => this._powerBtn = this}
                    resizeMode='stretch'
                    animationRepeatCount={25}
                    animationDuration={100}
                    animationImages={[
                        require('image!animation_progress_status_1'),
                        require('image!animation_progress_status_2'),
                        require('image!animation_progress_status_3'),
                        require('image!animation_progress_status_4'),
                        require('image!animation_progress_status_5'),
                        require('image!animation_progress_status_6'),
                        require('image!animation_progress_status_7'),
                        require('image!animation_progress_status_8'),
                        require('image!animation_progress_status_9'),
                        require('image!animation_progress_status_10'),
                        require('image!animation_progress_status_11'),
                        require('image!animation_progress_status_12')
                    ]}
                    onTimeout={this._handleTimeout.bind(this)}
                    style={{width: 35, height: 35}} />

```

## Screencasts

![loading](https://github.com/remobile/react-native-image-animation/blob/master/screencasts/loading.gif)

#### Props
This module supports react-native Image's props all.
##### Animation Props
- `animationImages : PropTypes.array.isRequired` - animation Images Array
- `animationRepeatCount : PropTypes.number` - 0 for forever
- `animationDuration : PropTypes.number` - default is 1000(ms)
- `onTimeout : PropTypes.func`
