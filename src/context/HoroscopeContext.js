import { createContext } from 'react';
import horoscopesObj from '../data/horoscopes';

export const HoroscopeContext = createContext();

const HoroscopeProvider = props => {
  const currentSign = { sign: 'Pisces' };
  const sign = horoscopesObj[currentSign.sign];
  console.log('🚀 ~ file: HoroscopeContext.js ~ line 7 ~ sign', sign);
  return (
    <HoroscopeContext.Provider value={{ sign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};
export default HoroscopeProvider;
