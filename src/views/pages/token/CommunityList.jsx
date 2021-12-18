import React from 'react';
import ArtistCar from '../../../components/creators/ArtistCar';
import useDocumentTitle from '../../../components/useDocumentTitle';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import TopArtist from '../../../components/creators/TopArtist';

const CommunityList = () => {
  useDocumentTitle('CommunityList');
  return (
    <div>
      <Header />
      <TopArtist />
      <ArtistCar />
      <Footer />
    </div>
  );
};

export default CommunityList;
