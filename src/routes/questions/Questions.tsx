import {
  Button,
  Card,
  IconButton,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import {FunctionalComponent, h} from 'preact';
import {useRef, useState} from 'preact/hooks';
import CloseIcon from '@material-ui/icons/Close';
import Modal from 'react-modal';
import SocialsFooter from '../../components/socialsFooter';
import {colors, questionList} from '../../constants';
import useMusicPlayer from '../../components/useMusicPlayer';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-25%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
  },
};

function Questions() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [question, setQuestion] = useState<number>(0);
  const player = useRef<HTMLAudioElement>(null);
  const [audio, setAudio] = useState('');
  const [autoPlay, setAutoPlay] = useState(true);
  const {Player} = useMusicPlayer(
    '../../assets/audio/questions_intro.mp3',
    autoPlay,
  );

  function openModal() {
    setModalIsOpen(true);
  }

  function afterOpenModal() {
    player.current?.play();
    setAutoPlay(false);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div
      style={{
        padding: 15,
        backgroundColor: colors.paleTurquoise,
        minHeight: '100vh',
      }}>
      <Card style={{marginBottom: 15}}>
        <List style={{alignItems: 'center', textAlign: 'center', padding: 10}}>
          {questionList.map(({question, questionArabic}, index) => {
            return (
              <ListItem
                key={question}
                button
                onClick={() => {
                  setQuestion(index);
                  setModalIsOpen(true);
                  openModal();
                  setAudio(`../../assets/audio/questions/Q${index + 1}.mp3`);
                }}>
                <div
                  style={{
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: '80%',
                    margin: 'auto',
                    textAlign: 'center',
                  }}>
                  <div style={{marginRight: 5}}>
                    <div
                      style={{
                        marginBottom: 5,
                        fontFamily: 'ScheherazadeNew',
                        display: 'flex',
                        justifyContent: 'center',
                      }}>
                      {questionArabic}
                      <div
                        style={{
                          color: colors.red,
                          fontWeight: 'bold',
                          marginLeft: 5,
                        }}>
                        {index + 1}
                      </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                      <div
                        style={{
                          color: colors.red,
                          fontWeight: 'bold',
                          marginRight: 5,
                        }}>
                        {index + 1}
                      </div>
                      {question}
                    </div>
                  </div>
                </div>
              </ListItem>
            );
          })}
        </List>
      </Card>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="question modal">
        <div style={{maxHeight: '70vh'}}>
          <div style={{display: 'flex'}}>
            <audio style={{width: '100%'}} controls ref={player}>
              <source src={audio} type="audio/mpeg" />
            </audio>
            <IconButton onClick={closeModal}>
              <CloseIcon />
            </IconButton>
          </div>
          <Typography variant="h4" gutterBottom>{`Aseqsi ${
            question + 1
          }`}</Typography>
          <Typography variant="h6" style={{color: colors.red}} gutterBottom>
            {questionList[question].question}
          </Typography>
          <Typography gutterBottom>{questionList[question].body}</Typography>
        </div>
      </Modal>
      <Player />
    </div>
  );
}

export default Questions;
