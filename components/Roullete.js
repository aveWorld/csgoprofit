import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import useMeasure from '../hooks/useMeasure';
import { useAudio } from '../hooks/useAudio';
import * as easings from 'd3-ease';

import audioFile from '../assets/audio/open_1_4.mp3';
import Loader from './Loader';
import useLayoutEffect from './useIsomorphicLayoutEffect';

function Roullete({ data }) {
  const [toggleAudio] = useAudio(audioFile);
  const [bind, { width: screenWidth }] = useMeasure();
  const blocksAmount = 110;
  const blocksOnScreen = screenWidth > 776 ? 6 : screenWidth > 460 ? 4 : 2;
  const blocksOffset = screenWidth > 776 ? 2 : screenWidth > 460 ? 1 : 1;
  const roundNumber = screenWidth < 460 ? true : false;
  const gap = screenWidth < 460 ? 3 : 5;
  const fullWidth = (blocksAmount * (screenWidth - 5 * gap)) / blocksOnScreen;
  const [animate, setAnimate] = useState(false);
  const [canAnimate, setCanAnimate] = useState(true);
  const [modal, setModal] = useState(false);
  const [firstAnimation, setFirstAnimation] = useState(true);
  const [disableAnim, setDisable] = useState(false);
  const [winnerBlock, setWinnerBlock] = useState();
  const [scrollStep, setStep] = useState(1.11);
  const [loaded, setLoaded] = useState(false);
  const { o } = useSpring({
    o: animate ? 1 : 0,
    from: { o: 0 },
    immediate: disableAnim,
    onRest: () => {
      setDisable(true);
      if (!modal && !disableAnim && !firstAnimation) setModal(true);
      setCanAnimate(true);
    },
    reset: true,
    config: {
      duration: 7700,
      easing: easings.easeCircleOut,
    },
  });

  const { opacity } = useSpring({
    from: { opacity: 0 },
    opacity: canAnimate ? 1 : 0,
  });

  const handleModal = () => {
    if (modal) setModal(false);
  };

  const handleClick = () => {
    setDisable(false);
    if (firstAnimation) setFirstAnimation(false);
    toggleAudio();
    setCanAnimate(false);
    if (winnerBlock) {
      setArr((prev) => [...prev.splice(winnerBlock - blocksOffset, blocksOnScreen), ...prev]);
    }
    const blocks = document.querySelector('.blocks__wrapper');
    if (blocks && animate) {
      setAnimate(false);
    }
    const random = (Math.random() + 2.2) * 0.6;
    setStep(random);
    const scrollWidth = (screenWidth / random + 1) * counter;
    let winnerIndex;
    if (!roundNumber) {
      winnerIndex =
        Math.ceil(scrollWidth / (screenWidth / blocksOnScreen + gap + 0.1)) + blocksOffset; // 6 - amount of blocks on a screen, + 2 because we start with 3-rd block
    } else {
      winnerIndex =
        Math.round(scrollWidth / (screenWidth / blocksOnScreen + gap + 0.1)) + blocksOffset; // 6 - amount of blocks on a screen, + 2 because we start with 3-rd block
      console.log(scrollWidth / (screenWidth / blocksOnScreen + gap + 0.3));
    }
    if (roundNumber) winnerIndex = Math.round(winnerIndex - 0.6);
    setWinnerBlock(winnerIndex);
    setAnimate((prev) => !prev);
  };
  const counter = fullWidth / screenWidth;
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setArr(data);
  }, []);
  return (
    <>
      <div style={loaded ? { display: 'none' } : { display: 'block' }}>
        <Loader />
      </div>
      <div className="blur"></div>
      <div className="case">
        <div className="blocks">
          <animated.div
            style={{
              transform: o
                .interpolate({
                  range: [0, 0.95, 1],
                  output: [0, screenWidth / scrollStep / 1.01, screenWidth / scrollStep + 1],
                })
                .interpolate((x) => `translateX(${-x * counter}px)`),
            }}
            className="blocks__wrapper"
            {...bind}
          >
            {arr.map((e, index) => {
              if (index === arr.length - 1) {
                if (!loaded) setLoaded(true);
              }
              return (
                <div
                  key={e.id}
                  className={`block ${e.type}`}
                  style={{
                    minWidth: `${screenWidth / blocksOnScreen}px`,
                    height: `${screenWidth / blocksOnScreen}px`,
                  }}
                >
                  <img src={e.img} alt="" />
                  <div>{e.name} </div>
                </div>
              );
            })}
          </animated.div>
        </div>
        <button
          onClick={handleClick}
          disabled={!canAnimate}
          className={`cases__btn roll__btn ${
            canAnimate ? 'cases__btn__active' : 'cases__btn__disable'
          }`}
        >
          Roll
        </button>
        <animated.div
          style={{ opacity, display: modal && disableAnim ? 'flex' : 'none' }}
          className={`${arr[winnerBlock]?.type} winner__block`}
        >
          <img src={arr[winnerBlock]?.img} alt="" />
          <div>{arr[winnerBlock]?.name}</div>
          <button className="btn cases__btn cases__btn__active" onClick={handleModal}>
            OK
          </button>
        </animated.div>
      </div>
    </>
  );
}

export default Roullete;
