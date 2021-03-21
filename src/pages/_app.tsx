import ResetCss from "../styles/ResetCss";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ResetCss />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp