import { Instagram,  LinkedIn, Search, FacebookRounded ,Menu} from "@mui/icons-material"
import Link from "next/link"

import Image from "next/image"
import "./css/navbar.css"
    
    function Navbar() {
      return (
        <>
        <div className=" d-flex justify-content-around position-relative "> 

                        {/* left  */}
            <div className=" basis-0 d-flex justify-content-center  flex-column flex-md-row ms-3">
            <Instagram fontSize="sm" className="socialIcons mt-md-5  " style={{ }}/>

            <FacebookRounded fontSize="sm" className="socialIcons mt-md-5  " style={{ }} />
            <LinkedIn fontSize="sm" className="socialIcons mt-md-5 " style={{ }} />
            </div>
            {/* center  */}
            <div className="basis-0 flex-md-grow-0 flex-grow-1">
              <div className="text-center mt-3">
              
              <Image src={"/icon.png"} className="" width={150} height={40} />
              </div>
              <div className=" d-md-flex mt-2 fw-medium d-none">
              <Link href={``} className="mx-md-4 mx-sm-2 mx-1 mt-2  text-uppercase text-decoration-none  small text-secondary">Home</Link>
              <Link href={``} className="mx-md-4 mx-sm-2 mx-1 mt-2  text-uppercase text-decoration-none text-secondary small">About</Link>
              <Link href={``} className="mx-md-4 mx-sm-2 mx-1 mt-2  text-uppercase text-decoration-none text-secondary small">Blogs</Link>
              <Link href={``} className="mx-md-4 mx-sm-2 mx-1 mt-2  text-uppercase text-decoration-none text-secondary small">Contact</Link>
              <Link href={``} className="mx-md-4 mx-sm-2 mx-1 mt-2  text-uppercase text-decoration-none text-secondary small">Resume</Link>
              <Link href={``} className="mx-md-4 mx-sm-2 mx-1 mt-2  text-uppercase text-decoration-none text-secondary small">Hire</Link>
              </div>
            </div>
            {/* right */}
            <div className="basis-0 d-flex  ">
              <Search fontSize="sm" sx={{ marginTop:4,marginX:1 }} />
              <div className=" d-md-none">
              <Menu fontSize="lg" sx={{ marginTop:4,marginX:1 }}/> 

              </div>
              
            </div>
        </div>
        </>
      )
    }
    
    export default Navbar