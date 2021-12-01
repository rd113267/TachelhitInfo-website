import {FunctionalComponent, h} from 'preact';
import {useEffect, useState} from 'preact/hooks';
import CircularProgress from '@material-ui/core/CircularProgress';
import AudioSection from '../../components/audioSection';
import BibleSection from '../../components/bibleSection';
import Videos from '../../components/videos';
import SocialsFooter from '../../components/socialsFooter';
import {CustomHistory} from 'preact-router';

const Home: FunctionalComponent<{history: CustomHistory}> = ({history}) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div
      style={{
        minHeight: '100%',
        padding: 32,
      }}>
      {ready ? (
        <div>
          <AudioSection />
          <BibleSection />
          <Videos />
          <SocialsFooter history={history} />
        </div>
      ) : (
        <div style={{textAlign: 'center'}}>
          <CircularProgress style={{textAlign: 'center'}} />
        </div>
      )}
    </div>
  );
};

export default Home;
