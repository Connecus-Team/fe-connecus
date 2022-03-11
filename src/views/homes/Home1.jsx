import React from 'react';
import Cards1 from '../../components/cards/Cards1';
import useDocumentTitle from '../../components/useDocumentTitle';
import Header from '../../components/header/Header';
import Hero1 from '../../components/hero/Hero1';
import Call2action from '../../components/Sections/Call2action';
import Logos from '../../components/Sections/Logos';
import Footer from '../../components/footer/Footer';
import TopArtist from '../../components/creators/TopArtist';
import Collection1 from '../../components/collection/Collection1';
import ConnecusExplain from '../../components/Sections/ConnecusExplan';

const Home1 = () => {
  useDocumentTitle('Home');
  return (
    <div>
      <Header />
      <Hero1 />
      {/* <Cards1 /> */}
      {/* <Collection1 /> */}
      <ConnecusExplain />
      <TopArtist />
      <Call2action />
      {/* <Logos /> */}
      <Footer />
    </div>
  );
};

export default Home1;
