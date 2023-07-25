import { Instagram,  LinkedIn, Search, FacebookRounded } from "@mui/icons-material"
import Link from "next/link"
import Image from "next/image"
import styles from  "@/styles/styles.module.css"

    
    function Navbar() {
      return (
        <>
        <div className=" d-flex justify-content-around position-relative "> 

                        {/* left  */}
            <div className=" basis-0 ">
            <Instagram fontSize="sm" sx={{ marginTop:4,marginX:1 }}/>

            <FacebookRounded fontSize="sm" sx={{ marginTop:4,marginX:1 }}/>
            <LinkedIn fontSize="sm" sx={{ marginTop:4,marginX:1 }}/>
            </div>
            {/* center  */}
            <div className="margin basis-0">
              <div className="text-center mt-3">
              
              <Image src={"/icon.png"} className="" width={150} height={40} />
              </div>
              <div className=" d-flex mt-2 fw-medium link-color">
              <Link href={``} className="mx-4 mt-2  text-uppercase text-decoration-none  small text-secondary">Home</Link>
              <Link href={``} className="mx-4 mt-2  text-uppercase text-decoration-none text-secondary small">About</Link>
              <Link href={``} className="mx-4 mt-2  text-uppercase text-decoration-none text-secondary small">Blogs</Link>
              <Link href={``} className="mx-4 mt-2  text-uppercase text-decoration-none text-secondary small">Contact</Link>
              <Link href={``} className="mx-4 mt-2  text-uppercase text-decoration-none text-secondary small">Resume</Link>
              <Link href={``} className="mx-4 mt-2  text-uppercase text-decoration-none text-secondary small">Hire</Link>
              </div>
            </div>
            {/* right */}
            <div className="basis-0 ">
              <Search fontSize="sm" sx={{ marginTop:4,marginX:1 }} />
            </div>
        </div>
        </>
      )
    }
    
    export default Navbar