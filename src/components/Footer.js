import { Copyright, FacebookRounded, Home, LinkedIn, Mail, Phone, YoutubeSearchedForRounded,Twitter, YouTube } from "@mui/icons-material"
import "./css/footer.css"
function Footer() {

  return (
    <>
        <div className={" p-5  mb-5 footer container   mt-5  z-3"}>
        <div className=" d-flex justify-content-between  container">

        <div className="shrink">
          <h4>About Us</h4>
          <hr />
          <p className="small">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis illum harum labore dignissimos voluptatem adipisci eligendi voluptates possimus tempora, quibusdam, nostrum voluptatibus iusto sequi officia quia quis? Amet, dolor!</p>
        </div>
        <div> 
        <h4>Projects</h4>
        <hr />

        <div>
          <p className="small">SwagZinn</p>
        </div>
        <div>
          <p className="small">Informatics</p>
        </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <hr />

          <p className="small">home</p>
          <p className="small">blogs</p>
          <p className="small">Hire</p>
        </div>
        <div>
          <h4>Contact</h4>
          <hr />

          <div>
          <p className="small"><Home/> <span className="small" >Vill. Gyaspur,Sonipat,131027</span></p>
          <p className="small"><Mail/> <span className="small"> vipulkumar3254@gmail.com</span></p>
          <p className="small"><Phone/> <span className="small">8307949189</span> </p>
          <p className="small"><LinkedIn/> </p>
          </div>
        </div>
        </div>
         {/* lower part of footer */}
         <div className="text-center"> 
          <p className="small">Copyright &copy;2023 All rights reserved by vipulkumar3254 </p>
          <p className="small"><FacebookRounded fontSize="small"/> <Twitter fontSize="small"/> <LinkedIn fontSize="small"/> <YouTube fontSize="small"/> </p>
        </div>
        </div>

        {/* <div className="text-center"> 
          <p className="small">Copyright &copy;2023 All rights reserved by vipulkumar3254 </p>
          <p className="small"><FacebookRounded fontSize="small"/> <Twitter fontSize="small"/> <LinkedIn fontSize="small"/> <YouTube fontSize="small"/> </p>
        </div> */}
    </>
  )
}

export default Footer