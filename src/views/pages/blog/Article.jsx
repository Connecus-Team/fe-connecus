import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../components/footer/Footer'
import Header from '../../../components/header/Header'
import SidebarBlog from '../../../components/sidebars/SidebarBlog'
import useDocumentTitle from '../../../components/useDocumentTitle'

const Article = () => {
  useDocumentTitle('Article')
  return (
    <div>
      <Header />
      <div className="container article_page pt-30">
        <div className="main row" id="main-content">
          <div className="col-lg-8">
            <div id="content">
              <div className="article_wrap mt-0">
                <div className="content">
                  <img
                    className="mb-30 img-fluid w-full img_article"
                    alt="ImgPreview"
                    src="img/bg/article.jpg"
                  />
                  <h1 className="mb-40">
                    NFT is coming soon: join the waitlist today for early access
                  </h1>
                  <div
                    className="
								blog-author-detail
								d-flex
								justify-content-between
								align-items-center
							">
                    <div
                      className="
									author-meta
									d-flex
									justify-content-start
									align-items-center
								">
                      <div className="user">
                        <img
                          src="img/avatars/avatar_11.png"
                          alt="..."
                          className="avatar avatar-sm rounded-circle w-full"
                        />
                      </div>
                      <div className="meta pl-20">
                        <p className="name color_brand">Joshua William</p>
                        <p className="author-post"> Author </p>
                      </div>
                    </div>
                    <span className="font-semibold text-gray">02 May</span>
                  </div>
                  <div className="inner">
                    <div className="snippet">
                      <p>
                        <strong>Handshake release assets</strong>
                        &nbsp;validation metrics first mover advantage ownership prototype.
                        Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot
                        analytics supply chain interaction design.&nbsp;
                        <mark>
                          Niche market deployment metrics venture customer funding buyer handshake
                          twitter stock
                        </mark>
                        .&nbsp;Pitch analytics assets.
                      </p>
                      <p>
                        Attending a trade show can be a very effective method of promoting your
                        company and its products. And one of the most effective ways to optimize
                        your trade show display and increase traffic to your booth is through the
                        use of banner stands.
                      </p>
                      <figure>
                        <figcaption>This is a caption on this photo for reference</figcaption>
                      </figure>
                    </div>
                    <h3>What is Ceus?</h3>
                    <p>
                      Last month, my wife, Anne Doe, took me to Las Vegas because she had to go for
                      a business convention. Needless to say, she writes for an guide to casinos and
                      I hate gambling. But then, she likes it and this supports us too, so I went
                      along without any hassle. At first I was depressed, but then as I asked around
                      and looked around, I ended up having more fun in Las Vegas than I would have
                      thought. And no. I did not enter a single casino while I was there.
                    </p>
                    {/* <h3>Entertainment</h3>
                    <p>
                      One of the greatest things about Las Vegas, Reno and
                      Atlantic City (but especially Las Vegas) is the number of
                      shows that are available. You can get to watch top class
                      comedians like Jay Leno, Jerry Seinfeld, Ray Romano, Tim
                      Allen and even the likes of Bill Cosby and Chris Rock. If
                      you are into music you can watch female singers like
                      Celine Dion, Mariah Carey, Britney Spears, Christina
                      Aguilera and Beyonc?, male performers like Phil Collins,
                      Eric Clapton, Snoopy Dog and bands like Oasis and Bon
                      Jovi. I could go on and on but the list is endless. If you
                      are into magic you can watch magicians like David
                      Copperfield do their thing meters from you. Whatever you
                      like, you can find it here from Western music to oldies to
                      Jazz, Rock, Heavy Mettle to Trance. All you have to do is
                      look at the itenary offered during your visit.
                    </p> */}
                    <h3>How Ceus Work?</h3>
                    <p>
                      One of the greatest things about Las Vegas, Reno and Atlantic City (but
                      especially Las Vegas) is the number of shows that are available. You can get
                      to watch top class comedians like Jay Leno, Jerry Seinfeld, Ray Romano, Tim
                      Allen and even the likes of Bill Cosby and Chris Rock. If you are into music
                      you can watch female singers like Celine Dion, Mariah Carey, Britney Spears,
                      Christina Aguilera and Beyonc?, male performers like Phil Collins, Eric
                      Clapton, Snoopy Dog and bands like Oasis and Bon Jovi. I could go on and on
                      but the list is endless. If you are into magic you can watch magicians like
                      David Copperfield do their thing meters from you. Whatever you like, you can
                      find it here from Western music to oldies to Jazz, Rock, Heavy Mettle to
                      Trance. All you have to do is look at the itenary offered during your visit.
                    </p>
                    <h3>Why Ceus?</h3>
                    <p>
                      One of the greatest things about Las Vegas, Reno and Atlantic City (but
                      especially Las Vegas) is the number of shows that are available. You can get
                      to watch top class comedians like Jay Leno, Jerry Seinfeld, Ray Romano, Tim
                      Allen and even the likes of Bill Cosby and Chris Rock. If you are into music
                      you can watch female singers like Celine Dion, Mariah Carey, Britney Spears,
                      Christina Aguilera and Beyonc?, male performers like Phil Collins, Eric
                      Clapton, Snoopy Dog and bands like Oasis and Bon Jovi. I could go on and on
                      but the list is endless. If you are into magic you can watch magicians like
                      David Copperfield do their thing meters from you. Whatever you like, you can
                      find it here from Western music to oldies to Jazz, Rock, Heavy Mettle to
                      Trance. All you have to do is look at the itenary offered during your visit.
                    </p>
                  </div>
                </div>
                {/* <h4 className="h3 mb-30">Comment </h4>
                <div className="comments_article">
                  <ul className="article-comments mb-4 mb-sm-5">
                    <li>
                      <div className="comment">
                        <div
                          className="
											d-flex
											justify-content-between
											align-items-center
											mb-3
										">
                          <div className="d-flex align-items-center">
                            <img
                              src="img/avatars/avatar_1.png"
                              alt="Daniel Smith"
                              className="avatar avatar-sm"
                            />
                            <div className="h6 mb-0 ml-2">Daniel Smith</div>
                          </div>
                          <div className="text-small text-muted">
                            14 minutes ago
                          </div>
                        </div>
                        <div className="comment-content">
                          <p>
                            Dolor sit amet, consectetur adipiscing elit.
                            Phasellus feugiat elit vitae enim lacinia semper.
                            Cras nulla lectus, porttitor vitae urna iaculis,
                            Melisandre tincidunt lectus. Brienne nec tellus sit
                            amet massa auctor imperdiet imp vitae diam.
                          </p>
                          <Link to="#">Reply</Link>
                        </div>
                      </div>
                      <ul className="article-comments is_child">
                        <li>
                          <div className="comment">
                            <div
                              className="
													d-flex
													justify-content-between
													align-items-center
													mb-3
												">
                              <div className="d-flex align-items-center">
                                <img
                                  src="img/avatars/avatar_2.png"
                                  alt="Daniel Smith"
                                  className="avatar avatar-sm"
                                />
                                <div className="h6 mb-0 ml-2">Daniel Smith</div>
                              </div>
                              <div className="text-small text-muted">
                                14 minutes ago
                              </div>
                            </div>
                            <div className="comment-content">
                              <p>
                                Dolor sit amet, consectetur adipiscing elit.
                                Phasellus feugiat elit vitae enim lacinia
                                semper. Cras nulla lectus, porttitor vitae urna
                                iaculis, Melisandre tincidunt lectus. Brienne
                                nec tellus sit amet massa auctor imperdiet imp
                                vitae diam.
                              </p>
                              <Link to="#">Reply</Link>
                            </div>
                          </div>
                          <ul className="article-comments is_child">
                            <li>
                              <div className="comment">
                                <div
                                  className="
															d-flex
															justify-content-between
															align-items-center
															mb-3
														">
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="img/avatars/avatar_3.png"
                                      alt="Daniel
                                                          Smith"
                                      className="avatar avatar-sm"
                                    />
                                    <div className="h6 mb-0 ml-2">
                                      Daniel Smith
                                    </div>
                                  </div>
                                  <div className="text-small text-muted">
                                    14 minutes ago
                                  </div>
                                </div>
                                <div className="comment-content">
                                  <p>
                                    Dolor sit amet, consectetur adipiscing elit.
                                    Phasellus feugiat elit vitae enim lacinia
                                    semper. Cras nulla lectus, porttitor vitae
                                    urna iaculis, Melisandre tincidunt lectus.
                                    Brienne nec tellus sit amet massa auctor
                                    imperdiet imp vitae diam.
                                  </p>
                                  <Link to="#">Reply</Link>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="comment">
                        <div
                          className="
											d-flex
											justify-content-between
											align-items-center
											mb-3
										">
                          <div className="d-flex align-items-center">
                            <img
                              src="img/avatars/avatar_4.png"
                              alt="Daniel Smith"
                              className="avatar avatar-sm"
                            />
                            <div className="h6 mb-0 ml-2">Daniel Smith</div>
                          </div>
                          <div className="text-small text-muted">
                            14 minutes ago
                          </div>
                        </div>
                        <div className="comment-content">
                          <p>
                            Dolor sit amet, consectetur adipiscing elit.
                            Phasellus feugiat elit vitae enim lacinia semper.
                            Cras nulla lectus, porttitor vitae urna iaculis,
                            Melisandre tincidunt lectus. Brienne nec tellus sit
                            amet massa auctor imperdiet imp vitae diam.
                          </p>
                          <Link to="#">Reply</Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <SidebarBlog />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Article
