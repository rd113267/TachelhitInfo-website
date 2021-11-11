import {
  Button,
  Card,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import {FunctionalComponent, h} from 'preact';
import {useEffect, useRef, useState} from 'preact/hooks';
import CloseIcon from '@material-ui/icons/Close';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import Modal from 'react-modal';
import {colors, psalmData, psalms} from '../../constants';
import styles from '../../routes/home/styles.css';
import SocialsFooter from '../../components/socialsFooter';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
  },
};

function Psalms() {
  const [tab, setTab] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [pdfSrc, setPdfSrc] = useState('');
  const player = useRef<HTMLAudioElement>(null);
  const musicPlayer = useRef<HTMLAudioElement>(null);
  const [audio, setAudio] = useState('');
  const [musicPlaying, setMusicPlaying] = useState(true);
  const [musicIndex, setMusicIndex] = useState(0);
  const music = `./assets/audio/psalms/musical/ps${psalms[musicIndex]}.mp3`;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    player.current?.play();
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };

  useEffect(() => {
    if (musicPlaying) {
      if (musicPlayer.current) {
        musicPlayer.current.pause();
        musicPlayer.current.load();
        musicPlayer.current.play();
      }
    } else if (musicPlayer.current) {
      musicPlayer.current.pause();
    }
  }, [musicPlaying, musicIndex]);

  const handleClick = (
    lat: string,
    arabic: string,
    tif: string,
    audio: string,
  ) => {
    if (tab === 0) {
      setPdfSrc(lat);
    }
    if (tab === 1) {
      setPdfSrc(tif);
    }
    if (tab === 2) {
      setPdfSrc(arabic);
    }
    setAudio(audio);
    openModal();
  };

  const getName = (
    tab: number,
    name: string,
    arabicName: string,
    tifName: string,
  ) => {
    if (tab === 0) {
      return name;
    }
    if (tab === 1) {
      return tifName;
    }
    return arabicName;
  };

  const matches = useMediaQuery('(min-width:600px)');

  const getFontSize = () => (tab === 2 ? 20 : 'inherit');

  const getFontFamily = () => (tab === 1 ? 'Tifinagh' : 'inherit');

  return (
    <div
      style={{
        minHeight: '100%',
        padding: 32,
      }}>
      <Card style={{marginBottom: 20}}>
        <div
          style={{
            display: 'flex',
            backgroundColor: 'rgb(238, 28, 37)',
            alignItems: 'center',
            padding: 10,
            width: '100%',
            marginBottom: 20,
            justifyContent: 'center',
          }}>
          <Typography style={{marginRight: 10, color: '#fff'}} variant="h5">
            imurign
          </Typography>
          <Typography
            className={styles.arabic}
            style={{color: '#fff'}}
            variant="h4">
            ءيموريگن
          </Typography>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Tabs
            value={tab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example">
            <Tab
              style={{textTransform: 'inherit', fontSize: 20}}
              label="imurign i-sidi rbbi"
            />
            <Tab
              style={{fontSize: 20}}
              className={styles.tifinagh}
              label="imurign i-sidi rbbi"
            />
            <Tab
              style={{fontSize: 30}}
              className={styles.arabic}
              label="لخبار ءيفولكين"
            />
          </Tabs>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              margin: 10,
              flex: 1,
            }}>
            <div>
              {psalmData
                .slice(0, psalmData.length / 2)
                .map(
                  ({
                    psalm,
                    name,
                    arabicName,
                    tifName,
                    pdfLat,
                    pdfArabic,
                    pdfTif,
                    audio,
                  }) => {
                    return (
                      <div key={psalm}>
                        <Button
                          onClick={() =>
                            handleClick(pdfLat, pdfArabic, pdfTif, audio)
                          }
                          style={{
                            textTransform: 'inherit',
                          }}>
                          <span style={{color: colors.red}}>{psalm}</span>
                          <span>&nbsp;</span>
                          <span> </span>
                          <span
                            style={{
                              fontSize: getFontSize(),
                              fontFamily: getFontFamily(),
                            }}>
                            {getName(tab, name, arabicName, tifName)}
                          </span>
                        </Button>
                      </div>
                    );
                  },
                )}
            </div>
            <div>
              {psalmData
                .slice(psalmData.length / 2 + 1)
                .map(
                  ({
                    psalm,
                    name,
                    arabicName,
                    tifName,
                    pdfLat,
                    pdfArabic,
                    pdfTif,
                    audio,
                  }) => {
                    return (
                      <div
                        key={psalm}
                        style={{fontSize: tab === 2 ? 20 : 'inherit'}}>
                        <Button
                          onClick={() =>
                            handleClick(pdfLat, pdfArabic, pdfTif, audio)
                          }
                          style={{
                            textTransform: 'inherit',
                          }}>
                          <span style={{color: colors.red}}>{psalm}</span>
                          <span>&nbsp;</span>
                          <span> </span>
                          <span
                            style={{
                              fontSize: getFontSize(),
                              fontFamily: getFontFamily(),
                            }}>
                            {getName(tab, name, arabicName, tifName)}
                          </span>
                        </Button>
                      </div>
                    );
                  },
                )}
            </div>
          </div>
          <div style={{margin: 10}}>
            {psalmData.map(({psalm, name, arabicName, tifName}, index) => {
              return (
                <div key={psalm} style={{fontSize: tab === 2 ? 20 : 'inherit'}}>
                  <Button
                    onClick={() => {
                      if (index === musicIndex) {
                        setMusicPlaying(!musicPlaying);
                      } else {
                        setMusicIndex(index);
                        setMusicPlaying(true);
                      }
                    }}
                    style={{
                      textTransform: 'inherit',
                    }}>
                    {index === musicIndex && musicPlaying ? (
                      <Pause />
                    ) : (
                      <PlayArrow />
                    )}
                    <span style={{color: colors.red}}>{psalm}</span>
                    <span>&nbsp;</span>
                    <span> </span>
                    <span
                      style={{
                        fontSize: getFontSize(),
                        fontFamily: getFontFamily(),
                      }}>
                      {getName(tab, name, arabicName, tifName)}
                    </span>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="pdf modal">
        <div style={{height: matches ? '70vh' : '30vh'}}>
          <iframe src={pdfSrc} width="100%" height="100%" />
        </div>
        <audio style={{width: '100%'}} controls ref={player}>
          <source src={audio} type="audio/mpeg" />
        </audio>
      </Modal>
      <audio
        style={{display: 'none'}}
        controls
        ref={musicPlayer}
        autoPlay
        onEnded={() => {
          if (musicIndex === psalms[psalms.length] - 1) {
            setMusicIndex(0);
          } else {
            setMusicIndex(musicIndex + 1);
          }
        }}>
        <source src={music} type="audio/mpeg" />
      </audio>
      <SocialsFooter />
    </div>
  );
}

export default Psalms;
