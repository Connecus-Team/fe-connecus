import React from 'react';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import useDocumentTitle from '../../../components/useDocumentTitle';
import {HashLink} from 'react-router-hash-link';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import HeroQuestions from '../../../components/hero/HeroQuestions';
import {Link} from 'react-router-dom';

const FaqContent = [
  {
    title: 'Intro to $CEUS?',
    desc: `$CEUS is the collateral token for the CEUS platform, 
    meaning users can collateralize a certain amount of $CEUS in exchange for a 
    certain amount of their own community's token. In addition, $CEUS is also an intermediary for users to transact between community tokens.`,
    expand: 'a',
    link: 'Intro-to-CEUS',
  },
  {
    title: 'What is the Connecus?',
    desc: `Connecus is a blockchain application platform that helps influencers 
    manage and develop their community by connecting and interacting directly with fans through incentive activities, voting, fund-raising.`,
    expand: 'b',
    link: 'What-is-the-Connecus',
  },
  {
    title: 'Who is Connecus for?',
    desc: `CEUS is for any streamer, artist, musician, gamer, celebrity, athlete, 
    or content Influencer that wants to reward and engage with their followers, and for all the fans and communities of these influencers. `,
    expand: 'c',
    link: 'Transaction',
  },
  {
    title: `What are community's tokens (CTs)?`,
    desc: `Community's tokens are social tokens that are a fully customizable, branded cryptocurrency unique to the individual influencer and their communities.`,
    expand: 'd',
    link: 'CEUS-for-Influencers',
  },
  {
    title: 'What are the benefits of CTs to an influencer?',
    desc: `CTs give influencers the power of their own digital economy, independent from any specific platform, allowing them to connect with their fan communities like never before.`,
    expand: 'e',
    link: 'CEUS-for-Influencers-1',
  },
  {
    title: 'What can an influencer do with their CT?',
    desc: `Influencers get to use their imagination to think of new ways to engage and reward their communities.`,
    expand: 'f',
    link: 'CEUS-for-Influencers-2',
  },
  {
    title: 'How are influencers selected?',
    desc: `Anyone can participation in but we encourage influencers with engaged communities, who produce consistent content and have strong ideas about integrating their CT into their communities.`,
    expand: 'g',
    link: 'CEUS-for-Influencers-3',
  },
  {
    title: 'How do I get my own CT?',
    desc: `Apply for your own CT here`,
    expand: 'h',
    link: 'CEUS-for-Influencers-4',
  },
  {
    title: `What are the benefits of an influencer's CT to fans?`,
    desc: `By having, holding, tipping, and transacting with the CT, fans show their loyalty and support 
    to influencers and gain the exclusive access and premium benefits the creator offers. CTs are not 
    limited by the relationship between the influencers and their fans. Fans can also interact, engage, and reward one another.`,
    expand: 'i',
    link: 'CEUS-for-Fans',
  },
  {
    title: `How do I buy my favorite influencer's CT?`,
    desc: `You need to own $CEUS to buy CT you want, find the influencer's page and hit the 
    “Buy” button. You also can purchase directly when CT is listed on the decentralized exchange (DEX).`,
    expand: 'j',
    link: 'CEUS-for-Fans-1',
  },
  {
    title: 'Can I own multiple varieties of CTs?',
    desc: `Fans can support as many creators as they'd like.`,
    expand: 'k',
    link: 'CEUS-for-Fans-2',
  },
  {
    title: `How can I earn influencer's CTs?`,
    desc: `Fans can participate in rewards activities that are organized by influencers or they can get rewards after their contributions to the influencer's project is released.`,
    expand: 'l',
    link: 'CEUS-for-Fans-3',
  },
];

const Faq = () => {
  useDocumentTitle('FAQ | Connecus');
  return (
    <div>
      <Header />
      <HeroQuestions />
      <div>
        <div className="questions__page mt-100">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-sm-3">
                  <div className="box side position-sticky top-0">
                    <div className="sidenav">
                      <ul>
                        <li className="d-flex align-items-center space-x-10">
                          <i className="ri-home-2-line" />
                          <HashLink
                            className="text__reset"
                            to="#Intro-to-CEUS"
                            scroll={(el) => el.scrollIntoView({block: 'start'})}>
                            Introduction
                          </HashLink>
                        </li>
                        <li className="d-flex align-items-center space-x-10">
                          <i className="ri-medal-line"></i>
                          <Link className="text__reset" to="#CEUS-for-Influencers"
                            scroll={(el) => el.scrollIntoView({block: 'start'})}>
                            CEUS for Influencers
                          </Link>
                        </li>
                        <li className="d-flex align-items-center space-x-10">
                          <i className="ri-group-fill"></i>
                          <Link className="text__reset" to="#CEUS-for-Fans"
                            scroll={(el) => el.scrollIntoView({block: 'start'})}>

                            CEUS for Fans
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-8">
                  <div className="questions__box space-y-30">
                    <Accordion className="ff" preExpanded={['b']} allowZeroExpanded>
                      {FaqContent.map((item, i) => (
                        <AccordionItem
                          id={item.link}
                          className="accordion p-30 mb-20"
                          key={i}
                          uuid={item.expand}>
                          <AccordionItemHeading className="accordion-header p-0">
                            <AccordionItemButton>
                              <button className="accordion-button">{item.title}</button>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          {/* Accordion Heading */}
                          <AccordionItemPanel>
                            <p className="accordion-desc">{item.desc}</p>
                          </AccordionItemPanel>
                          {/* Accordion Body Content */}
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
