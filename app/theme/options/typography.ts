import { Nunito } from '@next/font/google';

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700', '900'] });

const getTypographyOptions = () => ({
    fontFamily: nunito.style.fontFamily,
  });

export default getTypographyOptions