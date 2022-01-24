import {Button, Card, Grid, Typography} from '@material-ui/core';
import {h} from 'preact';

function FirstColumn() {
  return (
    <Grid item xs={12} sm={5} md={5}>
      <div style={{height: '100%'}}>
        <Card
          style={{
            marginRight: 10,
            padding: 10,
            height: '100%',
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}>
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                display: 'flex',
              }}>
              <div>
                <Button
                  style={{padding: '0px 5px', width: '100%'}}
                  onClick={() => {
                    window.open(
                      '../../assets/pdfs/التراث المسيحي في شمال إفريقيا.pdf',
                    );
                  }}>
                  <Typography
                    variant="h5"
                    style={{fontSize: 28, textAlign: 'center'}}>
                    التراث المسيحي في شمال إفريقيا
                  </Typography>
                </Button>
                <Typography
                  style={{
                    paddingBottom: 10,
                    fontSize: 21,
                    textAlign: 'right',
                    marginLeft: 10,
                  }}>
                  في كثير من أجزاء شمال إفريقيا توجد أطلال بنايات مسيحية عريقة.
                  ترى ماذا نعرف عن الحضارة المتقدِّمة والدِّين المتطور الذين
                  تشهد لهما هذه الآثار؟ وعلى رفوف خزاناتنا كتابات علماء مسيحيين
                  من شمال إفريقيا كأُغسطينوس وكبريانوس وترتوليانوس. ترى بماذا
                  كان أسلافنا هؤلاء يؤمنون؟
                </Typography>
              </div>
              <a
                onClick={() =>
                  window.open(
                    '../../assets/pdfs/التراث المسيحي في شمال إفريقيا.pdf',
                  )
                }
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                  cursor: 'pointer',
                }}>
                <img src="../../assets/images/13.png" height={160} />
              </a>
            </div>

            <div
              style={{
                width: '100%',
                textAlign: 'center',
                display: 'flex',
              }}>
              <div>
                <Button
                  style={{padding: '0px 5px', width: '100%'}}
                  onClick={() => {
                    window.open('../../assets/pdfs/afrique-du-nord.pdf');
                  }}>
                  <Typography
                    variant="h6"
                    style={{
                      textTransform: 'none',
                      fontSize: 24,
                      textAlign: 'center',
                    }}>
                    L'héritage chrétien en Afrique du Nord
                  </Typography>
                </Button>
                <Typography
                  style={{
                    paddingBottom: 10,
                    textAlign: 'left',
                    fontSize: 16,
                    marginLeft: 10,
                  }}>
                  Dans bien des régions de l’Afrique du Nord subsistent des
                  ruines d’anciens édifices chrétiens. Que savons-nous de la
                  civilisation complexe et la religion élaborée dont témoignent
                  si clairement ces restes ? Sur les rayons de nos bibliothèques
                  nous rencontrons bon nombre d’œuvres écrites par des savants
                  nord-africains tels Augustin, Cyprien et Tertullien.  Quelles
                  étaient les croyances de nos célèbres ancêtres ? Ce livre
                  fascinant nous éclaire sur une partie fondamentale de notre
                  héritage culturel et religieux.
                </Typography>
              </div>
              <a
                onClick={() =>
                  window.open('../../assets/pdfs/afrique-du-nord.pdf')
                }
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                  cursor: 'pointer',
                }}>
                <img src="../../assets/images/L'heritage.png" height={170} />
              </a>
            </div>

            <div
              style={{
                width: '100%',
                textAlign: 'center',
                display: 'flex',
              }}>
              <div>
                <Button
                  style={{padding: '0px 5px', width: '100%'}}
                  onClick={() => {
                    window.open('../../assets/pdfs/this-holy-seed.pdf');
                  }}>
                  <Typography
                    variant="h6"
                    style={{
                      textTransform: 'none',
                      fontSize: 24,
                      textAlign: 'center',
                    }}>
                    This Holy Seed
                  </Typography>
                </Button>
                <Typography
                  style={{
                    paddingBottom: 10,
                    textAlign: 'left',
                    fontSize: 16,
                    marginLeft: 10,
                  }}>
                  One of the great centres of evangelical Christianity in the
                  age after the apostles, NORTH AFRICA has become “the land of
                  the vanished church”. Four hundred years of dramatic Christian
                  growth gave way to slow decay and death. What were the secrets
                  of success? And what were the eventual causes of failure?
                </Typography>
              </div>
              <a
                onClick={() =>
                  window.open('../../assets/pdfs/this-holy-seed.pdf')
                }
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                  cursor: 'pointer',
                }}>
                <img src="../../assets/images/THS png.png" height={170} />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </Grid>
  );
}

export default FirstColumn;
