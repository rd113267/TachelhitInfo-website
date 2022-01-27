import {Grid, Typography, Card} from '@material-ui/core';
import {FunctionalComponent, h} from 'preact';
import {CustomHistory} from 'preact-router';
import {colors} from '../../constants';
import styles from '../../routes/home/styles.css';
import SocialsFooter from '../socialsFooter';

const QR_SIZE = 100;
const GOOGLE_PLAY_SIZE = 50;

const playStore = '/assets/images/google-play-badge.png';
const playStoreArabic = '/assets/images/google-play-badge-arabic.png';

const qr1 = '/assets/images/16.jpg';
const qr2 = '/assets/images/17.jpg';
const qr3 = '/assets/images/18.jpg';
const qr4 = '/assets/images/19.jpg';
const qr5 = '/assets/images/20.jpg';
const qr6 = '/assets/images/21.jpg';

const Applications: FunctionalComponent<{history: CustomHistory}> = ({
  history,
}) => (
  <div
    style={{
      padding: 15,
      backgroundColor: colors.paleTurquoise,
      minHeight: '100vh',
    }}>
    <SocialsFooter history={history} />
    <Card style={{marginTop: 15}}>
      <Grid container justifyContent="space-evenly" style={{padding: 20}}>
        <Grid style={{textAlign: 'center'}} item xs={12} sm={3} md={2}>
          <img
            style={{margin: 10}}
            height={QR_SIZE}
            width={QR_SIZE}
            src={qr1}
            alt="qr code"
          />
          <Typography variant="h6">awal i&#8209;wass</Typography>
          <Typography className={styles.appBody}>
            ass f&#8209;wass rad&#8209;ak&#8209;ntazn awal imimn
            gh&#8209;warratn n&#8209;sidi rbbi. sfeld&#8209;as ar&#8209;ttzaamt
            s&#8209;rrja ishan.
          </Typography>
          <a href="https://play.google.com/store/apps/details?id=com.wordofgodforeachday">
            <img src={playStore} height={GOOGLE_PLAY_SIZE} alt="play store" />
          </a>
        </Grid>
        <Grid style={{textAlign: 'center'}} item xs={12} sm={3} md={2}>
          <img
            style={{margin: 10}}
            height={QR_SIZE}
            width={QR_SIZE}
            src={qr2}
            alt="qr code"
          />
          <Typography  className={styles.appTitleArabic}>
            اوال &nbsp;ءي‑واسّ
          </Typography>
          <Typography className={styles.appBodyArabic}>
            اسّ &nbsp;ف&#8209;واسّ &nbsp;راد&#8209;اك&#8209;نتازن &nbsp;اوال
            &nbsp;ءيميمن &nbsp;غ&#8209;وارّاتن &nbsp;ن&#8209;سيدي &nbsp;ربّي.
            &nbsp;سفلد&#8209;اس &nbsp;ار&#8209;تّزعامت &nbsp;س&#8209;رّجا
            &nbsp;ءيصحان.
          </Typography>
          <a href="https://play.google.com/store/apps/details?id=com.wordofgodforeachday.arabic">
            <img
              src={playStoreArabic}
              height={GOOGLE_PLAY_SIZE}
              alt="play store arabic"
            />
          </a>
        </Grid>
        <Grid style={{textAlign: 'center'}} item xs={12} sm={3} md={2}>
          <img
            style={{margin: 10}}
            height={QR_SIZE}
            width={QR_SIZE}
            src={qr3}
            alt="qr code"
          />
          <Typography variant="h6">amuddu n&#8209;umsiggel</Typography>
          <Typography className={styles.appBody}>
            lqist n&#8209;yan igummin lehna d&#8209;tayri d&#8209;sslamt, iftu
            ar&#8209;sersn&#8209;isiggil.
          </Typography>
          <a href="https://play.google.com/store/apps/details?id=com.amsiggel">
            <img src={playStore} height={GOOGLE_PLAY_SIZE} alt="play store" />
          </a>
        </Grid>
        <Grid style={{textAlign: 'center'}} item xs={12} sm={3} md={2}>
          <img
            style={{margin: 10}}
            height={QR_SIZE}
            width={QR_SIZE}
            src={qr4}
            alt="qr code"
          />
          <Typography className={styles.appTitleArabic}>
            امودّو &nbsp;ن&#8209;ومسيݣّل
          </Typography>
          <Typography className={styles.appBodyArabic}>
            لقيست &nbsp;ن&#8209;يان &nbsp;ءيݣومّين &nbsp;لهنا
            &nbsp;د&#8209;تايري &nbsp;د&#8209;سّلامت، &nbsp;ءيفتو
            ار&#8209;سرسن&#8209;يسيݣّيل.
          </Typography>
          <a href="https://play.google.com/store/apps/details?id=com.amsiggel.arabic">
            <img
              src={playStoreArabic}
              height={GOOGLE_PLAY_SIZE}
              alt="play store arabic"
            />
          </a>
        </Grid>
        <Grid style={{textAlign: 'center'}} item xs={12} sm={3} md={2}>
          <img
            style={{margin: 10}}
            height={QR_SIZE}
            width={QR_SIZE}
            src={qr5}
            alt="qr code"
          />
          <Typography variant="h6">tachelhit info</Typography>
          <Typography className={styles.appBody}>
            kchem s&#8209;tgmmi&#8209;negh tsunfut, ar&#8209;tsflidt
            i&#8209;lkhbar issfrahn, ar&#8209;taqrat iwaliwn mimnin,
            ar&#8209;tssmuqqult lfidyuwat fulkinin.
          </Typography>
          <a href="https://play.google.com/store/apps/details?id=com.tachelhitinfo">
            <img src={playStore} height={GOOGLE_PLAY_SIZE} alt="play store" />
          </a>
        </Grid>
        <Grid style={{textAlign: 'center'}} item xs={12} sm={3} md={2}>
          <img
            style={{margin: 10}}
            height={QR_SIZE}
            width={QR_SIZE}
            src={qr6}
            alt="qr code"
          />
          <Typography className={styles.appTitleArabic}>
            تاشلحيت &nbsp;ءينفو
          </Typography>
          <Typography className={styles.appBodyArabic}>
            كشم &nbsp;س&#8209;تݣمّي&#8209;نغ &nbsp;تسونفوت،
            &nbsp;ار&#8209;تسفليدت &nbsp;ءي&#8209;لخبار &nbsp;ءيسّفراحن،
            ار&#8209;تاقرات &nbsp;ءيواليون &nbsp;ميمنين،
            &nbsp;ار&#8209;تسّموقولت &nbsp;لفيديوات &nbsp;فولكينين.
          </Typography>
          <a href="https://play.google.com/store/apps/details?id=com.tachelhitinfo.arabic">
            <img
              src={playStoreArabic}
              height={GOOGLE_PLAY_SIZE}
              alt="play store arabic"
            />
          </a>
        </Grid>
      </Grid>
    </Card>
  </div>
);

export default Applications;
