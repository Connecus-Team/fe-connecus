import React from 'react'
import ArtistCar from '../../../components/creators/ArtistCar'
import useDocumentTitle from '../../../components/useDocumentTitle'
import Header from '../../../components/header/Header'
import Hero1 from '../../../components/hero/Hero1'
import Footer from '../../../components/footer/Footer'
import TopArtist from '../../../components/creators/TopArtist'

const CommunityList = () => {
  useDocumentTitle('CommunityList')
  return (
    <div>
      <Header />
      <Hero1 />
      <TopArtist />
      <ArtistCar />
      <Footer />
    </div>
  )
}

export default CommunityList
