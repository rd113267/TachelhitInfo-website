import {Typography} from '@material-ui/core';
import {Fragment, FunctionalComponent, h} from 'preact';

const Welcome: FunctionalComponent = () => {
  return (
    <div style={{margin: 10}}>
      <Typography
        style={{
          fontFamily: 'ScheherazadeNew',
          fontSize: 25,
          textAlign: 'center',
        }}>
        اشكيد ا-ݣما ءولا كمّي ا-ولّتما، تكشمت س-تݣمّي-نغ تسونفوت، تافت دارنغ
        رّاحت د-سّلامت، ار-تسفليدت ءي-لخبار ءيفولكين.
      </Typography>
      <Typography
        style={{
          fontFamily: 'ScheherazadeNew',
          fontSize: 25,
          textAlign: 'center',
        }}>
        اشكو ءيلّا ديدنغ يان ءيسّيتّين تيكساض د-شّكّ، ءيݣ-اغ غ-لامان ءيدومن.
      </Typography>
      <Typography
        style={{
          fontFamily: 'ScheherazadeNew',
          fontSize: 25,
          textAlign: 'center',
        }}>
        ءينّا: «نكّين ايݣان تيفاوت ندّونيت. وانّا ديدي ءيتمونون راداستيلي تيفاوت
        نتودرت، ءورراساريفتّو غتيلّاس.»
      </Typography>
    </div>
  );
};

export default Welcome;