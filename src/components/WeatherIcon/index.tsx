import React from 'react';

import Svg01 from '../../svg/01d.svg';
import Svg02 from '../../svg/02d.svg';
import Svg03 from '../../svg/03d.svg';
import Svg04 from '../../svg/04d.svg';
import Svg09 from '../../svg/09d.svg';
import Svg10 from '../../svg/10d.svg';
import Svg11 from '../../svg/11d.svg';
import Svg13 from '../../svg/13d.svg';
import Svg50 from '../../svg/50d.svg';

export default function WeatherIcon(icon: string) {
  switch (icon) {
    case '01d': {
      return <Svg01/>;
    }
    case '02d':{
      return <Svg02/>
    }
    case '03d':{
      return <Svg03/>
    }
    case '04d':{
      return <Svg04/>
    }
    case '09d':{
      return <Svg09/>
    }
    case '10d':{
      return <Svg10/>
    }
    case '11d':{
      return <Svg11/>
    }
    case '13d':{
      return <Svg13/>
    }
    case '50d':{
      return <Svg50/>
    }
  }
}
