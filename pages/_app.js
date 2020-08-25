import '../styles/globals.css';
// import i18n from "react-i18next";
// import { useTranslation, initReactI18next } from "react-i18next";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import App from 'next/app'
import { appWithTranslation } from '../i18n'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)