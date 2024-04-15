import './contact.css'
export default function ContactUs() {
    return (
        <div className="container3">
            <div className="top-pic">
            </div>
            <div className="contact-form">
                <div className="row">
                    <div className="col-6">
                        <h6>INFO</h6>
                        <h2>CONTACT US</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime inventore, veritatis accusamus quae, molestiae necessitatibus ipsam illo esse eum, ducimus iusto.</p>
                        <div className="row">
                            <div className="col-6">
                                <h3>
                                    ADDRESS
                                </h3>
                                <p>998 ipsum street Mulveria<br></br>Puncuto pully PO<br></br>
                                    Allpasendia 438992</p>
                            </div>
                            <div className="col-6">
                                <h3>EMAIL ADDRESS </h3>
                                <p>Gener: info@hosting.com<br></br>Office:Contact@hosting.com</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h3>PHONE</h3>
                                <p>Landline: 2725-7764-902<br></br>Mobile:+57-9981-7785</p>
                            </div>
                            <div className="col-6">
                                <h3>SOCIAL MEDIA</h3>
                            </div>
                        </div>

                    </div>
                    <div className="col-6">
                        <h6>CONTACT</h6>
                        <h2>FORM</h2>
                        <form style={{backgroundColor:'white'}}>

                            <input type="text" id="name" name="name" placeholder="Your name.." required style={{ border: '2px solid black' }} />
                            <br></br>

                            <input type="email" id="email" name="email" placeholder="Your email.." required style={{ border: '2px solid black', marginTop: '5%' }} />
                            <br></br>

                            <textarea id="message" name="message" placeholder="Write something.." style={{ height: "30vh", border: '2px solid black', marginTop: '5%', width: '80%' }} required></textarea>
                            <br></br>
                            <button type="submit" className='sumbit-feedback'>Submit</button>

                        </form>

                    </div>
                </div>


            </div>
        </div>
    )
}