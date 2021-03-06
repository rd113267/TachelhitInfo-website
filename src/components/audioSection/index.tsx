import {Grid, Typography, Button, useMediaQuery} from '@material-ui/core';
import {FunctionalComponent, h, RefObject} from 'preact';
import styles from '../../routes/home/styles.css';
import {AZUZD, ISEQSITN, MATSSENT, NTHUNA} from '../../constants';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import {useRef, useState} from 'preact/hooks';

const AudioSection: FunctionalComponent = () => {
  const player1 = useRef<HTMLAudioElement>(null);
  const player2 = useRef<HTMLAudioElement>(null);
  const player3 = useRef<HTMLAudioElement>(null);
  const player4 = useRef<HTMLAudioElement>(null);
  const [_, setState] = useState(0);

  const matches = useMediaQuery('(min-width:800px)');

  const toggle = (ref: RefObject<HTMLAudioElement | null>) => {
    if (ref.current) {
      ref.current.paused ? ref.current.play() : ref.current.pause();
    }
    setState(Math.random());
  };
  const marginBottom = matches ? 0 : 10;
  return (
    <Grid
      item
      xs={12}
      sm={matches ? 4 : 12}
      md={4}
      style={{marginTop: matches ? 0 : 10}}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          height: '100%',
          flex: 1,
          marginLeft: '2vw',
        }}>
        <Button
          className={styles.textButton}
          style={{
            textTransform: 'inherit',
            width: '100%',
            border: '1px solid #000',
            marginBottom,
          }}
          onClick={() => toggle(player1)}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            {player1.current?.paused ? <VolumeMuteIcon /> : <VolumeUpIcon />}
            <Typography
              style={{
                textAlign: 'right',
                fontFamily: 'Calibri',
                direction: 'rtl',
                fontSize: 22,
              }}
              variant="h4">
              ????-?????????? &nbsp;??-??????????&nbsp; ????-??-??????????
            </Typography>
          </div>
        </Button>
        <audio
          ref={player1}
          style={{marginBottom: 5, width: '90%', display: 'none'}}
          controls>
          <source src={MATSSENT} type="audio/mpeg" />
        </audio>
        <Button
          className={styles.textButton}
          style={{
            textTransform: 'inherit',
            width: '100%',
            border: '1px solid #000',
            marginBottom,
          }}
          onClick={() => toggle(player2)}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            {player2.current?.paused ? <VolumeMuteIcon /> : <VolumeUpIcon />}
            <Typography
              style={{
                textAlign: 'right',
                fontFamily: 'Calibri',
                direction: 'rtl',
                fontSize: 22,
              }}
              variant="h4">
              ?????????? &nbsp;??-???????????? &nbsp;????-???????????? &nbsp;??-??????????
            </Typography>
          </div>
        </Button>
        <audio
          ref={player2}
          style={{marginBottom: 5, width: '90%', display: 'none'}}
          controls>
          <source src={AZUZD} type="audio/mpeg" />
        </audio>
        <Button
          className={styles.textButton}
          style={{
            textTransform: 'inherit',
            width: '100%',
            border: '1px solid #000',
            marginBottom,
          }}
          onClick={() => toggle(player3)}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            {player3.current?.paused ? <VolumeMuteIcon /> : <VolumeUpIcon />}
            <Typography
              style={{
                textAlign: 'right',
                fontFamily: 'Calibri',
                direction: 'rtl',
                fontSize: 22,
              }}
              variant="h4">
              ???????????????? &nbsp;??-???????????? &nbsp;??-????????????
            </Typography>
          </div>
        </Button>
        <audio
          ref={player3}
          style={{marginBottom: 5, width: '90%', display: 'none'}}
          controls>
          <source src={ISEQSITN} type="audio/mpeg" />
        </audio>
        <Button
          className={styles.textButton}
          style={{
            textTransform: 'inherit',
            width: '100%',
            border: '1px solid #000',
            marginBottom,
          }}
          onClick={() => toggle(player4)}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            {player4.current?.paused ? <VolumeMuteIcon /> : <VolumeUpIcon />}
            <Typography
              style={{
                textAlign: 'right',
                fontFamily: 'Calibri',
                direction: 'rtl',
                fontSize: 22,
              }}
              variant="h4">
              ?????? &nbsp;??-?????????? &nbsp;??-??????????-???? &nbsp;????????????
            </Typography>
          </div>
        </Button>
      </div>
      <audio
        ref={player4}
        style={{marginBottom: 5, width: '90%', display: 'none'}}
        controls>
        <source src={NTHUNA} type="audio/mpeg" />
      </audio>
    </Grid>
  );
};

export default AudioSection;
