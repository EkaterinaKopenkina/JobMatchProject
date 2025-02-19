import '../public/styles/style.css';
import Head from "next/head";
import { useRouter } from "next/router";
import Header from '../components/layout/header/header';
import { getSidebar } from '../components/layout/sidebar/model/functions';
import Burger from '../components/burger/burger';
import { useState } from 'react';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const currentUrl = router.asPath.split('/');
  const [isBurgerActive, setBurgerActive] = useState(false);
  const sidebar = getSidebar(currentUrl, isBurgerActive, setBurgerActive);
  
  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="Сайт, предназначенный для поиска работы" />
        <meta name="keywords" content="работа вакансии вакансия фирма соискатель" />
        <title>JobMatch</title>
      </Head>

      <Header burger={<Burger 
        isActive={isBurgerActive}
        setActive={setBurgerActive}
      />} />

      {
        sidebar
        ? <main className="page">
            <div className="container">
              <div className="account__container">
                { sidebar }
                <Component router={router} {...pageProps} />
              </div>
            </div>
          </main>
        : <main className="page">
            <Component {...pageProps} />
          </main>
      }
    </>
  )}
  
  export default App;