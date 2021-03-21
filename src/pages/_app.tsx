import { BsArrowUpShort } from 'react-icons/bs';

import ResetCss from "../styles/ResetCss";
import GlobalStyles from "../styles/GlobalStyles";
import { ScrollToTop } from "../styles/GlobalStyles";
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [scrollPosition, setScrollPosition] = useState(
    typeof window !== 'undefined' ? window.pageYOffset : 0,
  );

  useEffect(() => {
    const handleScrollPos = () => {
      //every time the window is scrolled, update the reference. This will not cause a re-render, meaning smooth uninterrupted scrolling.
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScrollPos);

    return () => {
      //remove event listener on unmount
      window.removeEventListener('scroll', handleScrollPos);
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