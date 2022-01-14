import React, { useEffect } from 'react';
import { render } from 'react-dom';
import './style.scss';
interface AppProps {}
interface AppState {
  name: string;
}

interface Pad {
  padKey: string;
  keyCode: number;
  id: string;
  src: string;
  name: string;
  key: number;
  index: number;
}

const drumBankOne: Pad[] = [
  {
    padKey: 'Q',
    id: 'CHH',
    src: 'https://madronaweb.com/assets/audio/chh.wav',
    name: 'closed HH',
    keyCode: 81,
  },
  {
    padKey: 'W',
    id: 'clap',
    src: 'https://madronaweb.com/assets/audio/clap.wav',
    name: 'clap',
    keyCode: 87,
  },
  {
    padKey: 'E',
    id: 'SD',
    src: 'https://madronaweb.com/assets/audio/sd.wav',
    name: 'snare',
    keyCode: 69,
  },
  {
    padKey: 'A',
    id: 'SDH',
    src: 'https://madronaweb.com/assets/audio/sdh.wav',
    name: 'snare high',
    keyCode: 65,
  },
  {
    padKey: 'S',
    id: 'SST',
    src: 'https://madronaweb.com/assets/audio/sst.wav',
    name: 'side stick',
    keyCode: 83,
  },
  {
    padKey: 'D',
    id: 'kick',
    src: 'https://madronaweb.com/assets/audio/kick.wav',
    name: 'kick',
    keyCode: 68,
  },
  {
    padKey: 'Z',
    id: 'cowbell',
    src: 'https://madronaweb.com/assets/audio/cowb.wav',
    name: 'cowbell',
    keyCode: 90,
  },
  {
    padKey: 'X',
    id: 'crash',
    src: 'https://madronaweb.com/assets/audio/crash.wav',
    name: 'crash',
    keyCode: 88,
  },
  {
    padKey: 'C',
    id: 'tom',
    src: 'https://madronaweb.com/assets/audio/tom.wav',
    name: 'tom',
    keyCode: 67,
  },
];

const DrumPad = ({ padKey, id, src, name, keyCode, key, index }: Pad) => {
  useEffect(() => {
    document.addEventListener('keydown', onTap);
    console.log(`adding event listener for ${name}`);
    return () => {
      document.removeEventListener('keydown', onTap);
      console.log(`removing event listener for ${name}`);
    };
  }, []);

  const onTap = (event: React.KeyboardEvent) => {
    if (event.keyCode === keyCode) {
      let button = document.getElementById(`button-${index}`);
      button.classList.add('pressed');
      console.log(`button-${index} ${padKey} = ${keyCode} ${name} hit!`);
      playDrum();
      setTimeout(() => button.classList.remove('pressed'), 150);
    }
  };

  const playDrum = () => {
    const sound: HTMLAudioElement = document.getElementById(id);
    sound.currentTime = 0;
    sound.play();
  };

  return (
    <div className={`drum-pad drum-${index}`}>
      <button id={`button-${index}`} onClick={playDrum} />
      <span className="pad-label">{name}</span>
      <audio id={id} src={src} />
    </div>
  );
};

const App = ({}: AppProps) => {
  return (
    <div className="bank">
      {drumBankOne.map((pad: Pad, index: number) => (
        <DrumPad
          padKey={pad.padKey}
          id={pad.id}
          src={pad.src}
          name={pad.name}
          keyCode={pad.keyCode}
          key={index}
          index={index}
        />
      ))}
      <div className="separator">DRUMS</div>
    </div>
  );
};

render(<App />, document.getElementById('root'));

// const drumBankTwo = [{
//   padKey: 'Q',
//   id: 'CHigh',
//   src: "https://madronaweb.com/assets/audio/",
//   name: ,
// },
// {
//   padKey: 'W',
//   id: ,
//   src: "https://madronaweb.com/assets/audio/",
//   name: ,
// },
// {
//   padKey: 'E',
//   id: ,
//   src: "https://madronaweb.com/assets/audio/",
//   name: ,

// },
// {
//   padKey: 'A',
//   id: ,
//   src: "https://madronaweb.com/assets/audio/",
//   name: ,
// },
// {
//   padKey: 'S',
//   id: ,
//   src: "https://madronaweb.com/assets/audio/",
//   name: ,
// },
// {
//   padKey: 'D',
//   id: ,
//   src: "https://madronaweb.com/assets/audio/",
//   name: ,
// },
// {
//   padKey: 'Z',
//   id: ,
//   src: "https://madronaweb.com/assets/audio/",
//   name: ,
// },
// {
//   padKey: 'X',
//   id: ,
//   src: "https://madronaweb.com/assets/audio/",
//   name: ,
// },
// {
//   padKey: 'C',
//   id: ,
//   src: "https://madronaweb.com/assets/audio/",
//   name: ,
// },
// ]
// 'Q'
// 'W'
// 'E'
// 'A'
// 'S'
// 'D'
// 'Z'
// 'X'
// 'C'
