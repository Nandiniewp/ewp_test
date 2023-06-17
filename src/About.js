import React from 'react'
import Stack from '@mui/material/Stack';
import './about.css'
import Card from './Card'
import { TeamList } from './helpers/TeamList'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const About = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,       // Enable autoplay
        autoplaySpeed: 3000,  // Set autoplay speed (in milliseconds)
        // responsive:[
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1
        //     }
        //   }
        // ]
      };
    return (
        <>
            <section className="story">
                <div className="row story3">
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                        <div className="col">
                            <img src="https://d1idiaqkpcnv43.cloudfront.net/assets/webimages/map.png" alt="" className='img-responsive story-img' width={550} height={600} />
                        </div>
                        <div className="col story">
                            <div className="row">
                                <p className='headone'>THE EDUVANZ STORY</p>
                                <h1 className='subhead'>Supporting the Success of Learners & Leaders</h1>
                                <br />
                                <br />
                            </div>
                            <p className="line3">
                                Eduvanz is a digital Fintech NBFC helping Learners discover and finance their Learning & Career Goals with fast, convenient, and affordable No Cost Financing Solutions.
                                <br />
                                <br></br>

                                Eduvanz was founded to offer convenient and flexible financial assistance to Students and Leaders who want Quick Results, Attractive Benefits and Transparent Conversations.
                            </p>
                        </div>
                    </Stack>


                </div>
            </section>
            <section className='bg2'>
                <div className="flex-container">
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                        <div><h3 className="heading">Vision Statement</h3>
                            <p>"Eduvanz - Building the world's largest ecosystem for learners."</p></div>
                        <div><h3 className="heading">Mission Statement</h3>
                            <p>Empowering learners globally by enabling discovery and access to a universe of infinite opportunities.
                                We are committed to providing high quality and reliable solutions to all our stakeholders through innovative
                                technology products.</p></div>
                    </Stack>
                </div>
            </section>
            <section className="bg3">
                <div className='team-title'>
                    <p className='headone'>Management Team</p>
                    <h1 className='subhead'>Eduvanz is founded by a group of Dreamers who want to fulfil the aspiration
                        of the next generation of Leaders. So, Eduvanz created innovative Products for all kinds of
                        Learners from all
                        Walks of Life across all kinds of Learning.</h1>

                </div>
                <div className="team-cards">
                    {TeamList.map(data => {
                        return <Card props={data} />
                    })}
                </div>

            </section>
            <section>
                <div className='crisil'>
                    <h3 className="heading">CRISIL</h3>
                    <p>"Eduvanz has been rated by CRISIL Limited and<br/>
                        enjoys BBB- (minus) rating for Long-Term<br/>
                        borrowings."
                    </p>
                    <a className='btn' href="https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/EduvanzFinancingPrivateLimited_March%2030,%202022_RR_288556.html" target='_blank' rel='noreferrer'>
                    Know More

                    </a>
                    </div>
            </section>
            <section className="bg3">
            <div className='team-title'>
                    <p className='headone'>Proud moments</p>

                </div>
                <div className="carousel">

            <Slider {...settings}>
            <div>
            <div className="slide">  
                    <img src="https://d1idiaqkpcnv43.cloudfront.net/assets/webimages/about/Champions-of-change1.png" alt='img' />  
                    <img className="shadow-img" src="https://d1idiaqkpcnv43.cloudfront.net/assets/webimages/about/Proud-Moment-Champions1.png" alt='img' />  
                </div>  
                </div>
                <div>
                <div className="slide">  
                    <img src="https://d1idiaqkpcnv43.cloudfront.net/assets/webimages/about/wharton-win1.png" alt='img' />  
                    <img className="shadow-img" src="https://d1idiaqkpcnv43.cloudfront.net/assets/webimages/about/Proud-Moment---wharton-win1.png" alt='img' />  

                </div> 
                </div>
                <div> 
                <div className="slide">  
                    <img src="https://d1idiaqkpcnv43.cloudfront.net/assets/webimages/about/top30-new.png" alt='img'/>  
                    <img className="shadow-img" src="https://d1idiaqkpcnv43.cloudfront.net/assets/webimages/about/top-30-new-2.png" alt='img' />  
                    </div>
                </div> 
          </Slider>

            </div>
            </section>
        </>
    )
}

export default About