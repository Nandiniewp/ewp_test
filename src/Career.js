import React from 'react'
import './career.css'
const Career = () => {
    return (
        <>
            <section className="hero">
                <div className="career-hero">
                    <div className="col left">
                        <div className="head1"><h1 className="hero-title">The Eduvanz Story</h1></div>
                        <div className="para">
                        <p><b>EDUCATION SHOULDN'T BE A PRIVILEGE, IT SHOULD BE A RIGHT.</b></p>
                            
                            <p>Eduvanz believes in making education accessible for all.</p>
                            <p>Join us if your aim aligns with ours!</p>
                        </div>
                        <div>
                            <button className="button">View Openings</button>
                        </div>

                    </div>
                    <div className="col right">
                        <img src="https://d1idiaqkpcnv43.cloudfront.net/assets/webimages/hiring.png" alt="" className='img-responsive'/>
                    </div>
                </div>
                
            </section>
            <section className="headline">
            <div className="career-hero"> <h2 className="hero-title blue">Ready for a new career!</h2></div></section>
        </>
    )
}

export default Career