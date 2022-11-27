import { useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';
// https://github.com/AuDang/Context-Wrapper-Dynamic/blob/e939926cc04934ac58d63a78365873bb83f90cf4/src/components/Detail.js#L1
const Detail = () => {
  const { sign } = useContext(HoroscopeContext);

  // console.log(
  //   '🚀 ~ file: Detail.js ~ line 7 ~ Detail ~ horoscopesObj',
  //   horoscopesObj
  // );
  // const { currentSign } = useContext(HoroscopeContext);
  // console.log(
  //   '🚀 ~ file: Detail.js ~ line 13 ~ Detail ~ currentSign',
  //   currentSign
  // );

  return (
    <div className='details'>
      <img alt='horoscope name' src={sign.backgroundImg} />
      <h2>{sign.name}</h2>
      <h4>Element: {sign.element}</h4>
      <h4>Traits: {sign.traits}</h4>
    </div>
  );
};

export default Detail;
