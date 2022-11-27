import { createContext } from 'react';

const HoroscopeContext = createContext();
const HoroscopeProvider = props => {
  return (
    <HoroscopeContext.Provider>{props.children}</HoroscopeContext.Provider>
  );
};
export default HoroscopeProvider;
