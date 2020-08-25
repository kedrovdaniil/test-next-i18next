import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { withTranslation } from '../i18n'
import { useTranslation } from 'react-i18next';
// import NextI18NextInstance from '../i18n';


function Home({ coursesData, namespacesRequired }) {

  const { t, i18n } = useTranslation(['common', 'cars']);

  return (
    <>
      <h1>{t('common:indexHeader')}</h1>
      <h2>{t('cars:title')}</h2>
    </>
  )
}

/**
 * All works with this code, but I plan to use getServerSideProps() or Client Side Render
 */
// Home.getInitialProps = async () => {
//   return {
//     namespacesRequired: ['common', 'cars']
//   }
// }

// export default withTranslation(['common', 'cars'])(Home)
export default Home;