import ResetCss from "../styles/ResetCss";
import GlobalStyles from "../styles/GlobalStyles";
import ScrollToTop from '../components/ScrollToTop';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <ResetCss />
      <GlobalStyles />
      <Component {...pageProps} />
      <ScrollToTop />
    </>
  );
}

export default MyApp