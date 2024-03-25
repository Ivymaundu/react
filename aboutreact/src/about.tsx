import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'
export default function About() {

    const imageData = [
        { src: "/images/person-a.jpg", name: "Samira Hadid", position: "Founder" },
        { src: "/images/person-b.jpg", name: "Saira Kohli", position: "Managing patner" },
        { src: "/images/person-c.jpg", name: "Rosemary James", position: "Senior partner" },
        { src: "/images/person-d.jpg", name: "Itsuki Takahashi", position: "Managing patner" }
    ];


    return (
        <div className="full-width-container">
            <div className="part-a">
                <div className="row">
                <div className="col-6">
                    <img src="/images/pic4-no background.png" alt="My image" />
                </div>
                <div className="col-6">
                    <h2>Merckymercus's Premium Law Firm</h2>
                    <p> We offer a wide range of legal services to <br></br> met your needs.
                        We provide you with a <br></br>dedicated team that will answer any<br></br>questions
                        for you,give you the best legal<br></br>counsel, and represent you in every aspect of your life.</p>

                    <a href="">....Get to know us</a>
                </div>
                </div>
            </div>
            {/* <div className="part-b">
                <div className="part-b1">
                    <h1>Our attorneys</h1>
                </div>
                <div className="part-b2">
                    <div className="image-grid">
                        {imageData.map((data, index) => (
                            <div className="image-item" key={index}>
                                <img src={data.src} alt={`Image ${index + 1}`} className="image-small" style={{width: '100px'}}/>
                                <div className="info">
                                    <h3>{data.name}</h3>
                                    <p>{data.position}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div> */}

            <div className="part-c">
                <div className="row" >

                    <div className="col-6">
                        <h1>Mialdener Law is<br></br>the best choice</h1>
                    </div>
                    <div className="col-6">
                        <img src="/images/pic2-about.jpg" alt="My pic" />
                    </div>

                </div>

                <div className="grid text-center" style={{ display: 'flex', marginTop: '5%' }}>
                    <div className="g-col-4" style={{ flex: '2' }}>
                        <h3>We will fight for you</h3>
                        <p>What's special about your<br></br>services or offerings?Give<br></br>your
                            audience a reason to<br></br>choose you over your<br></br>competitors.
                            Cite it above,<br></br>then flesh it out here.</p>
                    </div>
                    <div className="g-col-4" style={{ flex: '2' }}><h3>We will fight for you</h3>
                        <p>What's special about your<br></br>services or offerings?Give<br></br>your
                            audience a reason to<br></br>choose you over your<br></br>competitors.
                            Cite it above,<br></br>then flesh it out here.</p></div>
                    <div className="g-col-4" style={{ flex: '2' }}><h3>We will fight for you</h3>
                        <p>What's special about your<br></br>services or offerings?Give<br></br>your
                            audience a reason to<br></br>choose you over your<br></br>competitors.
                            Cite it above,<br></br>then flesh it out here.</p></div>
                </div>

            </div>
            <div className="part-d">
                <div className="row">
                    <div className="col-6">
                        <h1>Our Practice Areas</h1>
                        <h5>As a professional law firm, we offer diverse legal services, providing expert advice and representation tailored to each client's needs.
                        </h5>
                        <ul>
                            <li>Corporate law consultation</li>
                            <li>Commercial litigation representation in legal disputes.</li>
                            <li>Intellectual property protection</li>
                            <li>representation for employers and employees.</li>
                            <li>Legal compliance advice </li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <img src="/images/pic6-about.jpg" alt="law firm" />
                    </div>
                </div>
            </div>
            <div className="part-e">
                <h1>Testimonials</h1>
                <h5>What our satisfied<br></br>clients say about us</h5>
                <div className="grid text-center" style={{ display: 'flex', marginTop: '10%' }}>
                    <div className="g-col-4" style={{ flex: '3' }}>

                        <p>Boost your product and<br></br>service's credibility by adding<br></br>testimonials from your clients<br></br>
                            People love recommendations<br></br>so feedback from others<br></br>who've tried it is invaluable.
                        </p>
                        <h6>-Wilhelm Ballard</h6>
                    </div>
                    <div className="g-col-4" style={{ flex: '3' }}>
                        <p>Boost your product and<br></br>service's credibility by adding<br></br>testimonials from your clients<br></br>
                            People love recommendations<br></br>so feedback from others<br></br>who've tried it is invaluable.
                        </p>
                        <h6>-Larissa Charter</h6>
                    </div>
                    <div className="g-col-4" style={{ flex: '3' }}>
                        <p>Boost your product and<br></br>service's credibility by adding<br></br>testimonials from your clients<br></br>
                            People love recommendations<br></br>so feedback from others<br></br>who've tried it is invaluable.
                        </p>
                        <h6>-Ellen Downing</h6>
                    </div>

                </div>

            </div>
            <div className="part-f">
                <div className="row">
                    <div className="col-6">
                        <div className="content">
                            <h2>We're Ready <br></br>To Help</h2>
                            <h6>Main Office</h6>
                            <p>123 Anywhere St.<br></br>Any City ST 12345</p>
                            <p>PWD parking available.</p>
                            <div className="contacts">
                                <div className="email-container">
                                    <span className="label">Tel:</span>
                                    <div>(123)456-7890</div>
                                </div>
                                <div className="email-container">
                                    <span className="label">Email :</span>
                                    <div>hello@reallygreatsite.com</div>
                                </div>
                                <div className="email-container">
                                    <span className="label">Social:</span>
                                    <div> @reallygreatsite4</div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <img src="/images/pic1-about.jpg" alt="" />
                    </div>

                </div>
            </div>
        </div>


    )
}