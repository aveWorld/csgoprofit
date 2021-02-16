import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import useMeasure from '../../hooks/useMeasure';
import { useAudio } from '../../hooks/useAudio';
import * as easings from 'd3-ease';

// data
import { data } from '../../data/brokenFang';
import audioFile from '../../assets/audio/open_1_1.mp3';

function BrokenFang() {
  const [toggleAudio] = useAudio(audioFile);
  const [bind, { width: screenWidth }] = useMeasure();
  const blocksAmount = 100;
  const blocksOnScreen = 6;
  const gap = 5;
  const fullWidth = (blocksAmount * (screenWidth - 5 * gap)) / blocksOnScreen;
  const [animate, setAnimate] = useState(false);
  const [canAnimate, setCanAnimate] = useState(true);
  const disableAnim = useRef(false);
  const [winnerBlock, setWinnerBlock] = useState();
  const [scrollStep, setStep] = useState(1.11);
  const { o } = useSpring({
    o: animate ? 1 : 0,
    from: { o: 0 },
    immediate: disableAnim.current,
    onRest: () => {
      disableAnim.current = true;
      setCanAnimate(true);
      disableAnim.current = false;
    },
    reset: true,
    config: {
      duration: 7500,
      easing: easings.easeCircleOut,
    },
  });

  const { opacity } = useSpring({
    from: { opacity: 0 },
    opacity: canAnimate ? 1 : 0,
  });

  const handleClick = () => {
    toggleAudio();
    setCanAnimate(false);
    if (winnerBlock) {
      setArr((prev) => [...prev.splice(winnerBlock - 2, blocksOnScreen), ...prev]);
    }
    const blocks = document.querySelector('.blocks__wrapper');
    if (blocks && animate) {
      setAnimate(false);
    }
    const random = (Math.random() + 2.2) * 0.8;
    console.log(random);
    setStep(random);
    const scrollWidth = (screenWidth / random + 1) * counter;
    console.log(scrollWidth);
    const winnerIndex = Math.ceil(scrollWidth / (screenWidth / blocksOnScreen + gap + 0.1)) + 2; // 6 - amount of blocks on a screen, + 2 because we start with 3-rd block
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
          {arr.map((e) => {
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
      <button onClick={handleClick} disabled={!canAnimate} className="btn">
        start
      </button>
      <div className="winner">
        your price :{' '}
        <animated.span
          style={{ opacity, display: canAnimate ? 'block' : 'none' }}
          className={arr[winnerBlock]?.type}
        >
          <img src={arr[winnerBlock]?.img} alt="" />
          <div>{arr[winnerBlock]?.name}</div>
        </animated.span>
      </div>
    </>
  );
}

export default BrokenFang;
