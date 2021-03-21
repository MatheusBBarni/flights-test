import { useState, useEffect } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

import ResetCss from "../styles/ResetCss";
import GlobalStyles from "../styles/GlobalStyles";
import { ScrollToTop } from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  const [scrollPosition, setScrollPosition] = useState(
    typeof window !== 'undefined' ? window.pageYOffset : 0,
  );

  useEffect(() => {
    const handleScrollPosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScrollPosition);

    return () => {
      window.removeEventListener('scroll', handleScrollPosition);
    };
  }, []);

  return (
    <>
      <ResetCss />
      <GlobalStyles />
      <Component {...pageProps} />
      <ScrollToTop onClick={() => window.scrollTo(0, 0)} show={scrollPosition > 620}>
        <BsArrowUpShort color="var(--primary-color)" size="30px" />
      </ScrollToTop>
    </>
  );
}

export default MyApp