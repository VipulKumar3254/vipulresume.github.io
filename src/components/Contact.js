import "./css/contact.css"

function Contact() {
  return (
    <>
    <div className="blueLine">

        <div className=" d-flex container justify-content-center align-items-center mt-5 relative p-5 ">
            <div className=" d-flex flex-column align-items-center shadow p-3 contact">
            <h2>CONTACT ME</h2>
            <input type="text" className="input" placeholder="Enter Your Name" name="" id="" />
            <input type="email" className="input" placeholder="Enter Your Email Address" name="" id="" />
            <textarea name="message" role="input" className="input" id="" cols="30" rows="5" placeholder="Enter Your Message"></textarea>
            <button className="btn btn-primary mt-2">SUBMIT</button>
            </div>
            <div>
            <img src="/contact.jpg" className="contactImg" alt="contact jpg image" />

            </div>
        </div>
    </div>

    </>
  )
}

export default Contact