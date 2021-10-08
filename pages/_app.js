import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import '../styles/globals.css';

// const messages = {
//   en: {
//     link1: '/profile/my-data/list/change-me',
//     link2: '/registration/step-a/change-me',
//   },
//   sr: {
//     link1: '/profil/moji-podaci/lista/promeni-me',
//     link2: '/registracija/korak-1/promeni-me',
//   },
// };

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <>
      <IntlProvider locale={locale}>
        {/* <IntlProvider locale={locale} messages={messages[locale]}> */}
        <Component {...pageProps} />
      </IntlProvider>
    </>
  );
}

export default MyApp;
