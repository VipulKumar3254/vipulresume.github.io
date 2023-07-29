import "./css/skills.css"
import bootstrap from "./assets/bootstrap.png"
import css from "./assets/css.png"
import html from "./assets/html.png"
import tailwind from "./assets/tailwind.png"
import react from "./assets/react.png"
import js from "./assets/javascript.png"
import nextjs from "./assets/nextjs.png"
import node from "./assets/nodejs.png"
import php from "./assets/php.png"


import Image from "next/image"
function Skills() {
  return (
    <>
      <div className="shadow1 p-3  ">
        <h3 className="text-center mt-5 "><span> Skills</span></h3>
        <div className=" py-3  roundContainer container d-flex justify-content-around d-flex flex-wrap ">
          <div className="roundContainer px-5">
            <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemax={100} aria-valuemin={0}></div>
            <h6 className="text-center mt-2 small">HTML/CSS</h6>
          </div>
          <div className="roundContainer px-5">
            <div className="progress-bar" role="progressbar " id="color1" aria-valuenow={20} aria-valuemax={100} aria-valuemin={0}></div>
            <h6 className="text-center mt-2 small">REACT</h6>
          </div>
          <div className="roundContainer px-5">

            <div className="progress-bar" role="progressbar" id="color2" aria-valuenow={75} aria-valuemax={100} aria-valuemin={0}></div>
            <h6 className="text-center mt-2 small">NODE JS </h6>
          </div>
          <div className="roundContainer px-5">
            <div className="progress-bar" role="progressbar" id="color3" aria-valuenow={75} aria-valuemax={100} aria-valuemin={0}></div>
            <h6 className="text-center mt-2 small">DATABASE</h6>

          </div>

        </div>
      </div>

      {/* ANOTHER SECTION */}
      <div className="container mt-5 center">
        <div className="gridManager">
          {/* <div className="row d-flex justify-content-center  "> */}

            <Image src={bootstrap} className="ultrabig shadow me-5 p-3" />
            <Image src={css} className="ultrabig shadow me-5 p-3" />
            <Image src={html} className="ultrabig shadow me-5 p-3" />
          {/* </div> */}
          {/* <div className="row d-flex justify-content-center"> */}
            <Image src={nextjs} className="ultrabig shadow me-5 p-3" />
            <Image src={php} className="ultrabig shadow me-5 p-3" />
            <Image src={react} className="ultrabig shadow me-5 p-3" />
          {/* </div> */}
          {/* <div className="row  d-flex justify-content-center"> */}

            <Image src={node} className="ultrabig  shadow me-5 p-3" />
            <Image src={js} className="ultrabig  shadow me-5 p-3" />
            <Image src={tailwind} className="ultrabig  shadow me-5 p-3" />
          {/* </div> */}
        </div>

      </div>
    </>
  )
}

export default Skills