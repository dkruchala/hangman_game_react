import React from 'react'

class HangerGraphics extends React.Component {
  constructor(props) {
    super(props)
    this.hangerRef = React.createRef()
    this.rope_anim = React.createRef()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.wrong_answers === 10) {
      this.rope_anim.current.beginElement()
      setTimeout(() => {
        this.hangerRef.current.classList.add('hanged')
      }, 250)
    }
  }

  render() {
    let wrong_answers = this.props.wrong_answers

    return (
      <svg xmlns="http://www.w3.org/2000/svg" id="hanger-container" width="400" height="460" viewBox="25 95 80 10">
        <g className="dupa" id="hanger-body" ref={this.hangerRef}>
          <g id="complete-left-leg">
            {
              wrong_answers > 9 ?
                <path
                  style={{ opacity: 1, fill: '#f8d59f', fillOpacity: 1, stroke: 'none', strokeWidth: 0.289, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }}
                  d="m 47.2055,131.78432 6.677227,1.85945 c 1.075391,0.29947 1.700048,1.40631 1.400577,2.4817 l -0.161017,0.57821 c -0.299471,1.07539 -1.406309,1.70005 -2.4817,1.40058 l -6.677227,-1.85945 c -1.075391,-0.29948 -1.700048,-1.40631 -1.400577,-2.4817 L 44.7238,133.1849 c 0.299471,-1.07539 1.406309,-1.70005 2.4817,-1.40058 z"
                  id="left-foot" /> : null
            }

            {
              wrong_answers > 8 ?
                <g
                  transform="translate(-49.521513,-17.008577)"
                  id="left-leg">
                  <path
                    transform="rotate(15)"
                    style={{ opacity: 1, fill: '#264673', fillOpacity: 1, stroke: 'none', strokeWidth: 0.31000546, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }}
                    d="m 134.00968,96.398735 h 4.86087 c 1.0526,0 1.9,0.8474 1.9,1.899999 v 20.658186 c 0,1.0526 -0.8474,1.9 -1.9,1.9 h -4.86087 c -1.0526,0 -1.9,-0.8474 -1.9,-1.9 V 98.298734 c 0,-1.052599 0.8474,-1.899999 1.9,-1.899999 z"
                  />
                </g> : null
            }


          </g>


          <g id="complete-right-leg">
            {
              wrong_answers > 7 ?
                <path

                  style={{ opacity: 1, fill: '#f8d59f', fillOpacity: 1, stroke: 'none', strokeWidth: 0.289, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }}
                  d="m 76.534887,131.88424 -6.677234,1.85946 c -1.075391,0.29947 -1.700048,1.4063 -1.400578,2.48169 l 0.161018,0.57821 c 0.299471,1.07539 1.406309,1.70005 2.4817,1.40058 l 6.677234,-1.85945 c 1.07539,-0.29947 1.700048,-1.40631 1.400577,-2.4817 l -0.161017,-0.57821 c -0.299471,-1.07539 -1.406309,-1.70005 -2.4817,-1.40058 z"
                  id="right-foot" /> : null
            }

            {
              wrong_answers > 6 ?
                <path
                  style={{ opacity: 1, fill: '#264673', fillOpacity: 1, stroke: 'none', strokeWidth: 0.31000546, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }}
                  d="m 68.562247,110.78972 -4.69524,1.25808 c -1.01674,0.27244 -1.61594,1.31028 -1.34351,2.32702 l 5.34674,19.95428 c 0.27243,1.01673 1.31028,1.61593 2.32701,1.3435 l 4.69524,-1.25809 c 1.01673,-0.27243 1.61594,-1.31028 1.3435,-2.32701 l -5.34673,-19.95428 c -0.27243,-1.01673 -1.31028,-1.61594 -2.32701,-1.3435 z"
                  id="right-leg" />
                : null
            }
          </g>


          <g id="left-arm-with-hand">
            {
              wrong_answers > 5 ?

                <g
                  id="left-hand">
                  <path
                    id="ellipse978"
                    d="m 46.03773,105.85706 a 0.90307659,0.8842625 0 0 1 -0.903077,0.88426 0.90307659,0.8842625 0 0 1 -0.903077,-0.88426 0.90307659,0.8842625 0 0 1 0.903077,-0.88426 0.90307659,0.8842625 0 0 1 0.903077,0.88426 z"
                    style={{ opacity: 1, fill: '#f8d59f', fillOpacity: 1, stroke: 'none', strokeWidth: 0.11508182, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />
                  <path
                    id="ellipse982"
                    d="m 44.925292,104.98844 a 2.2678571,2.2206101 0 0 1 -2.267858,2.22061 2.2678571,2.2206101 0 0 1 -2.267857,-2.22061 2.2678571,2.2206101 0 0 1 2.267857,-2.22061 2.2678571,2.2206101 0 0 1 2.267858,2.22061 z"
                    style={{ opacity: 1, fill: '#f8d59f', fillOpacity: 1, stroke: 'none', strokeWidth: 0.289, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />
                </g>
                : null
            }

            {
              wrong_answers > 4 ?
                <g
                  transform="translate(-49.332525,-17.008577)"
                  id="left-arm">
                  <path
                    transform="rotate(44.149517)"
                    style={{ opacity: 1, fill: '#ca4234', fillOpacity: 1, stroke: 'none', strokeWidth: 0.32433587, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }}
                    d="m 150.55251,4.1410041 h 1.09388 c 1.32573,0 2.39302,1.0672904 2.39302,2.3930278 V 20.093927 c 0,1.325738 -1.06729,2.393028 -2.39302,2.393028 h -1.09388 c -1.32573,0 -2.39303,-1.06729 -2.39303,-2.393028 V 6.5340319 c 0,-1.3257374 1.0673,-2.3930278 2.39303,-2.3930278 z"
                    id="rect1002" />
                </g>
                : null
            }

          </g>

          <g id="right-arm-with-hand">
            {
              wrong_answers > 3 ?
                <g
                  id="right-hand">
                  <path
                    id="ellipse976"
                    d="m 79.299627,105.38459 a 0.90307659,0.8842625 0 0 1 -0.90307,0.88427 0.90307659,0.8842625 0 0 1 -0.90308,-0.88427 0.90307659,0.8842625 0 0 1 0.90308,-0.88426 0.90307659,0.8842625 0 0 1 0.90307,0.88426 z"
                    style={{ opacity: 1, fill: '#f8d59f', fillOpacity: 1, stroke: 'none', strokeWidth: 0.11508182, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />
                  <path
                    id="ellipse980"
                    d="m 82.994907,104.88247 a 2.2678571,2.2206101 0 0 1 -2.26785,2.22061 2.2678571,2.2206101 0 0 1 -2.26786,-2.22061 2.2678571,2.2206101 0 0 1 2.26786,-2.22061 2.2678571,2.2206101 0 0 1 2.26785,2.22061 z"
                    style={{ opacity: 1, fill: '#f8d59f', fillOpacity: 1, stroke: 'none', strokeWidth: 0.289, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />
                </g> : null
            }

            {
              wrong_answers > 2 ?
                <g
                  transform="translate(-49.332525,-17.008577)"
                  id="right-arm">
                  <path
                    id="path1082"
                    d="m -8.9127126,158.81458 h 1.093874 c 1.3257374,0 2.3930278,1.06729 2.3930278,2.39302 v 13.5599 c 0,1.32574 -1.0672904,2.39303 -2.3930278,2.39303 h -1.093874 c -1.3257374,0 -2.3930274,-1.06729 -2.3930274,-2.39303 v -13.5599 c 0,-1.32573 1.06729,-2.39302 2.3930274,-2.39302 z"
                    style={{ opacity: 1, fill: '#96362d', fillOpacity: 1, stroke: 'none', strokeWidth: 0.32433587, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }}
                    transform="matrix(-0.7175246,0.69653317,0.69653317,0.7175246,0,0)" />
                </g>
                : null
            }

          </g>


          {
            wrong_answers > 1 ?
              <g
                transform="translate(-49.521513,-17.008577)"
                id="chest">
                <g
                  id="g988"
                  transform="translate(0.19684152,5.7063783)"
                  style={{ fill: '#264673', fillOpacity: 1 }} />
                <g
                  id="g4943">
                  <g
                    id="g1102">
                    <g
                      id="g998"
                      transform="translate(0.18898742)" />
                    <g
                      id="g1238">
                      <path
                        transform="translate(0.19684025,5.7063784)"
                        style={{ opacity: 1, fill: '#264673', fillOpacity: 1, stroke: 'none', strokeWidth: 0.24823445, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }}
                        d="m 106.82358,107.06696 h 8.60283 c 2.74729,0 4.959,2.21172 4.959,4.959 v 9.09315 c 0,2.74728 -2.21171,4.959 -4.959,4.959 h -8.60283 c -2.74729,0 -4.959,-2.21172 -4.959,-4.959 v -9.09315 c 0,-2.74728 2.21171,-4.959 4.959,-4.959 z"
                        id="rect986" />
                      <path
                        transform="translate(0.18898742)"
                        style={{ opacity: 1, fill: '#ca4234', fillOpacity: 1, stroke: 'none', strokeWidth: 0.24823445, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }}
                        d="m 103.32358,107.06696 h 15.60283 c 0.80829,0 1.459,0.65072 1.459,1.45901 v 16.09314 c 0,0.80828 -0.65071,1.459 -1.459,1.459 h -15.60283 c -0.80829,0 -1.459,-0.65072 -1.459,-1.459 v -16.09314 c 0,-0.80829 0.65071,-1.45901 1.459,-1.45901 z"
                        id="rect996" />
                      <path
                        style={{ opacity: 0.3, fill: '#1a1a1a', fillOpacity: 1, stroke: 'none', strokeWidth: 1.09228349, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }}
                        d="m 233.57227,340.37891 v 71.85156 h 29.45898 c 3.05495,0 5.51563,-2.45876 5.51563,-5.51367 v -60.82422 c 0,-3.05496 -2.46068,-5.51367 -5.51563,-5.51367 z"
                        transform="matrix(0.26458333,0,0,0.26458333,49.521513,17.008577)"
                        id="rect1079" />
                    </g>
                  </g>
                </g>
              </g> : null
          }
          <g
            id="head-with-rope">

            <g
              id="rope"
              transform="translate(37.063549,0.73319981)">
              <rect
                rx="1.8244063"
                y="62.905163"
                x="60.068878"
                height="7.4734716"
                width="7.4734716"
                id="rect887"
                style={{ opacity: 1, fill: '#5a5959', fillOpacity: 1, stroke: '#4d4d4d', strokeWidth: 0, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }}
                transform="translate(-3.0430629,1.0908521)" />
              <path
                id="path882"
                d="m 72.709876,82.425922 c 0,5.426717 -3.340891,8.767604 -8.767608,8.767604 -5.426717,0 -8.767605,-3.340887 -8.767605,-8.767604 0,-5.426718 5.356466,-7.739274 8.767605,-13.138143 2.907246,5.254898 8.767608,7.711425 8.767608,13.138143 z"
                style={{ opacity: 1, fill: 'none', fillOpacity: 1, stroke: '#5a5959', strokeWidth: 1.50590444, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }}
                transform="translate(-3.0430629,1.0908521)">
                <animate
                  ref={this.rope_anim}
                  begin="indefinite"
                  attributeName="d"
                  dur="150ms"
                  to="m 69.8,78.757082 c 0,3.052153 -1.845167,4.93117 -4.842332,4.93117 -2.997165,0 -4.842331,-1.879017 -4.842331,-4.93117 0,-3.052153 2.958365,-4.352806 4.842331,-7.389296 1.605666,2.955516 4.842332,4.337143 4.842332,7.389296 z"
                  fill="freeze"
                  transform="translate(-12,10)" />
              </path>
              <rect
                style={{ opacity: 1, fill: '#5a5959', fillOpacity: 1, stroke: 'none', strokeWidth: 2.07992435, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }}
                id="rect895"
                width="1.6016313"
                height="30.102474"
                x="60.068878"
                y="40.276157"
                rx="0.38798177" />
            </g>



            {
              wrong_answers > 0 ?
                <g id="head">
                  <g
                    transform="translate(-76.027012,-88.182421)"
                    id="g1012">
                    <path
                      id="circle1008"
                      d="m 146.56095,167.8325 a 2.0045214,2.0045214 0 0 1 -2.00452,2.00453 2.0045214,2.0045214 0 0 1 -2.00452,-2.00453 2.0045214,2.0045214 0 0 1 2.00452,-2.00452 2.0045214,2.0045214 0 0 1 2.00452,2.00452 z"
                      style={{ opacity: 1, fill: '#fad7a1', fillOpacity: 1, stroke: 'none', strokeWidth: 0.289, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }}
                    />
                    <path
                      id="circle1010"
                      d="m 145.79255,167.8325 a 1.2361215,1.2361215 0 0 1 -1.23612,1.23613 1.2361215,1.2361215 0 0 1 -1.23612,-1.23613 1.2361215,1.2361215 0 0 1 1.23612,-1.23612 1.2361215,1.2361215 0 0 1 1.23612,1.23612 z"
                      style={{ opacity: 1, fill: '#f0bb9b', fillOpacity: 1, stroke: 'none', strokeWidth: 0.17821667, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />
                  </g>
                  <g
                    transform="translate(-76.121506,-88.229668)"
                    id="g1018">
                    <path
                      id="circle1014"
                      d="m 133.05774,167.73801 a 2.0045214,2.0045214 0 0 1 -2.00452,2.00452 2.0045214,2.0045214 0 0 1 -2.00452,-2.00452 2.0045214,2.0045214 0 0 1 2.00452,-2.00452 2.0045214,2.0045214 0 0 1 2.00452,2.00452 z"
                      style={{ opacity: 1, fill: '#fad7a1', fillOpacity: 1, stroke: 'none', strokeWidth: 0.289, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />
                    <path
                      id="circle1016"
                      d="m 132.28934,167.73801 a 1.2361215,1.2361215 0 0 1 -1.23612,1.23612 1.2361215,1.2361215 0 0 1 -1.23612,-1.23612 1.2361215,1.2361215 0 0 1 1.23612,-1.23612 1.2361215,1.2361215 0 0 1 1.23612,1.23612 z"
                      style={{ opacity: 1, fill: '#f0bb9b', fillOpacity: 1, stroke: 'none', strokeWidth: 0.17821667, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />
                  </g>
                  <path
                    id="path1020"
                    d="m 60.068877,70.378631 h 3.2801 c 3.03371,0 5.476,0.96073 5.476,4.78333 v 9.543102 c 0,3.8226 -2.44229,6.9 -5.476,6.9 h -3.2801 c -3.0337,0 -5.476,-3.0774 -5.476,-6.9 v -9.543102 c 0,-3.8226 2.4423,-4.78333 5.476,-4.78333 z"
                    style={{ opacity: 1, fill: '#f8d59f', fillOpacity: 1, stroke: 'none', strokeWidth: 0.31256127, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />

                  <path
                    id="path1026"
                    d="m 68.471717,87.088193 c 0,1.47574 -1.36793,4.42078 -2.30899,5.52962 -0.95665,1.1272 -2.6749,2.51021 -4.38128,2.51021 -1.70638,1e-5 -3.08215,-0.83748 -4.33403,-2.43934 -1.25188,-1.60186 -2.37008,-4.04171 -2.37008,-5.51746 0,-1.47574 0.24392,-1.95043 1.0826,-2.67576 0.83868,-0.72532 1.84502,-1.17014 2.82645,-1.18073 0.98143,-0.0106 1.30222,-0.667972 2.80688,-0.667962 1.50466,1e-5 1.1758,0.515752 2.21629,0.597152 1.04049,0.0814 2.1295,0.41996 2.96818,1.14528 0.83868,0.72533 1.49398,1.22329 1.49398,2.69904 z"
                    style={{ opacity: 1, fill: '#863500', fillOpacity: 1, stroke: 'none', strokeWidth: 0.289, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />
                  <path
                    id="path1028"
                    d="m 61.694147,87.689583 c -1.47609,0 -2.59609,-1.2855 -2.61972,-2.18371 -0.0236,-0.89821 0.2078,-1.15782 0.73188,-1.54795 0.52408,-0.39013 1.08584,-0.33647 1.82389,-0.33647 0.73805,0 1.36225,-0.031 1.92818,0.38655 0.56594,0.41754 0.78063,0.942 0.72498,1.73402 -0.0724,1.13446 -1.11313,1.94756 -2.58921,1.94756 z"
                    style={{ opacity: 1, fill: '#f8d59f', fillOpacity: 1, stroke: 'none', strokeWidth: 0.25745079, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />
                  <path
                    id="rect1030"
                    d="m 61.698067,78.132315 c 0.5235,0 0.94494,0.446 0.94494,1 v 0.976563 c 0,0.554 -0.42144,1 -0.94494,1 -0.52349,0 -0.94494,-0.446 -0.94494,-1 v -0.976563 c 0,-0.554 0.42145,-1 0.94494,-1 z"
                    style={{ opacity: 1, fill: '#f0bb9b', fillOpacity: 1, stroke: 'none', strokeWidth: 0.289, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />
                  <path
                    id="rect1032"
                    d="m 58.591057,77.39733 c 0.41244,0 0.74449,0.351389 0.74449,0.787868 V 78.9546 c 0,0.436479 -0.33205,0.787868 -0.74449,0.787868 -0.41245,0 -0.74449,-0.351389 -0.74449,-0.787868 v -0.769402 c 0,-0.436479 0.33204,-0.787868 0.74449,-0.787868 z"
                    style={{ opacity: 1, fill: '#4c5c5e', fillOpacity: 1, stroke: 'none', strokeWidth: 0.22769384, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />
                  <path
                    id="rect1034"
                    d="m 64.604627,77.39733 c 0.41245,0 0.74449,0.351389 0.74449,0.787868 V 78.9546 c 0,0.436479 -0.33204,0.787868 -0.74449,0.787868 -0.41245,0 -0.74449,-0.351389 -0.74449,-0.787868 v -0.769402 c 0,-0.436479 0.33204,-0.787868 0.74449,-0.787868 z"
                    style={{ opacity: 1, fill: '#4c5c5e', fillOpacity: 1, stroke: 'none', strokeWidth: 0.22769384, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />
                  <path
                    id="path1036"
                    d="m 63.998977,85.393123 c 0,1.02418 -1.3305,0.25557 -2.32859,0.25557 -0.99809,0 -2.37179,0.7352 -2.37179,-0.28898 0,-1.02418 1.35413,-1.97118 2.35222,-1.97118 0.99809,0 2.34816,0.98041 2.34816,2.00459 z"
                    style={{ opacity: 1, fill: '#000000', fillOpacity: 1, stroke: 'none', strokeWidth: 0.289, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />
                  <path
                    id="path1022"
                    d="m 61.729367,66.510166 a 7.181547,6.614583 0 0 0 -7.16339,6.280753 h 14.33194 a 7.181547,6.614583 0 0 0 -7.16855,-6.280753 z"
                    style={{ opacity: 1, fill: '#ca4234', fillOpacity: 1, stroke: 'none', strokeWidth: 0.289, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />
                  <path
                    id="path1038"
                    d="m 55.770247,82.904261 c 0,0 0.0945,1.299292 0.92131,1.677272 0.82682,0.37798 1.53271,-0.1646 2.28009,-0.70238 0.74738,-0.53777 0.91704,-0.62953 1.30221,-0.65184 0.38518,-0.0223 0.49108,0.12508 0.84712,0.11398 0.35604,-0.0111 0.73212,-0.30791 0.74413,-0.649642 0.012,-0.34173 -0.1582,-0.88242 -0.8032,-0.94494 -0.51971,-0.0709 -1.57585,0.55742 -2.11919,0.95903 -0.54334,0.401602 -1.05998,0.982422 -1.94597,0.925362 -0.88599,-0.0571 -1.2265,-0.726842 -1.2265,-0.726842 z"

                    style={{ fill: '#cb5e1b', fillOpacity: 1, stroke: 'none', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1 }} />
                  <path
                    style={{ fill: '#cb5e1b', fillOpacity: 1, stroke: 'none', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1 }} d="m 67.611977,82.937671 c 0,0 -0.0945,1.299292 -0.92131,1.677272 -0.82682,0.37798 -1.53271,-0.1646 -2.28009,-0.70238 -0.74738,-0.53777 -0.91704,-0.62953 -1.30221,-0.65184 -0.38518,-0.0223 -0.49108,0.12508 -0.84712,0.11398 -0.35604,-0.0111 -0.73212,-0.30791 -0.74413,-0.649642 -0.012,-0.34173 0.1582,-0.88242 0.8032,-0.94494 0.51971,-0.0709 1.57585,0.55742 2.11919,0.95903 0.54334,0.401602 1.05998,0.982422 1.94597,0.925362 0.88599,-0.0571 1.2265,-0.726842 1.2265,-0.726842 z"
                    id="path1040" />
                  <path
                    id="rect1042"
                    d="m 57.646754,75.729622 1.887727,-0.505815 c 0.239291,-0.06412 0.483549,0.0769 0.547669,0.316197 l 0.02594,0.09681 c 0.06412,0.239289 -0.07691,0.483551 -0.316196,0.547669 l -1.887727,0.505815 c -0.23929,0.06412 -0.48355,-0.07691 -0.547667,-0.316197 l -0.02594,-0.0968 c -0.06412,-0.239299 0.0769,-0.483552 0.316195,-0.547669 z"
                    style={{ opacity: 1, fill: '#cb5e1b', fillOpacity: 1, stroke: 'none', strokeWidth: 0.289, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />
                  <path
                    id="rect1044"
                    d="m 65.772053,75.763023 -1.887728,-0.505815 c -0.239289,-0.06412 -0.483551,0.0769 -0.547669,0.316196 l -0.02594,0.09681 c -0.06412,0.23929 0.07691,0.48355 0.316197,0.547667 l 1.887729,0.505815 c 0.239288,0.06412 0.483551,-0.0769 0.547668,-0.316195 l 0.02594,-0.09681 c 0.06412,-0.23929 -0.07691,-0.483551 -0.316197,-0.547668 z"
                    style={{ opacity: 1, fill: '#cb5e1b', fillOpacity: 1, stroke: 'none', strokeWidth: 0.289, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />
                  <path
                    id="ellipse1046"
                    d="m 58.650637,78.108694 a 0.24804688,0.30710566 0 0 1 -0.24805,0.307106 0.24804688,0.30710566 0 0 1 -0.24804,-0.307106 0.24804688,0.30710566 0 0 1 0.24804,-0.307105 0.24804688,0.30710566 0 0 1 0.24805,0.307105 z"
                    style={{ opacity: 0.31300001, fill: '#ffffff', fillOpacity: 1, stroke: 'none', strokeWidth: 0.289, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />
                  <path
                    id="ellipse1048"
                    d="m 64.613107,78.108694 a 0.24804688,0.30710566 0 0 1 -0.24805,0.307106 0.24804688,0.30710566 0 0 1 -0.24804,-0.307106 0.24804688,0.30710566 0 0 1 0.24804,-0.307105 0.24804688,0.30710566 0 0 1 0.24805,0.307105 z"
                    style={{ opacity: 0.31300001, fill: '#ffffff', fillOpacity: 1, stroke: 'none', strokeWidth: 0.289, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />
                  <path
                    id="rect1050"
                    d="m 54.924847,72.159308 h 13.54233 c 0.65378,0 1.1801,0.416459 1.1801,0.933764 0,0.517306 -0.52632,0.933765 -1.1801,0.933765 h -13.54233 c -0.65378,0 -1.1801,-0.416459 -1.1801,-0.933765 0,-0.517305 0.52632,-0.933764 1.1801,-0.933764 z"
                    style={{ opacity: 1, fill: '#ea4d40', fillOpacity: 1, stroke: 'none', strokeWidth: 0.22267391, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />
                  <path
                    id="rect1112"
                    d="m 61.696937,66.519359 0.10335,28.602854 c 0,0 1.00448,0.0471 1.95749,-0.54925 0.4765,-0.29818 1.84708,-1.00538 3.07985,-2.99738 1.59645,-2.57968 1.98711,-5.46978 1.98711,-7.57661 V 73.479591 c 0.28871,-4.030604 -2.84636,-6.752961 -7.1278,-6.960232 z"
                    style={{ opacity: 0.06499999, fill: '#4d4d4d', fillOpacity: 1, stroke: 'none', strokeWidth: 0.2947582, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />
                  <path
                    id="path1123"
                    d="m 61.651017,83.388707 c -0.06238,0 -0.126458,0.0037 -0.191204,0.01085 -2.65e-4,1.8e-5 -7.94e-4,-2.1e-5 -0.0011,0 -0.723839,0.08072 -1.567426,0.597413 -1.950786,1.252635 0.421505,0.131313 1.400227,-0.08992 2.16214,-0.08992 0.754758,0 1.69876,0.227746 2.1146,0.109038 -0.384524,-0.658614 -1.22038,-1.187395 -1.939933,-1.271241 -0.0648,-0.0039 -0.131323,-0.01138 -0.193786,-0.01138 z"
                    style={{ opacity: 1, fill: '#ffffff', fillOpacity: 1, stroke: 'none', strokeWidth: 0.289, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} />

                </g>
                : null
            }

          </g>


        </g>
      </svg >
    )
  }
}

export default HangerGraphics