import "./css/AboutUs.css"
import { Poppins } from "next/font/google"
const poppins = Poppins({
  preload: false,
  weight: ["400", "500", "600", "700", "800", "900"],
});
function About() {
  return (
    <>
      <div className="container about mt-md-5 mt-lg-0 mt-5 ">
        <div className="d-flex w-100 justify-content-center align-items-center align-items-md-stretch position-relative flex-column  flex-md-row ">
          <div className=" w-50 h-100 ">
            <img src="/cmp6.jpg" className="h-100 rounded-top-0 rounded-5 w-100 img" alt="loading about" sizes="(max-width:1200px) 100vw, (max-width:50vw) 60% " />

          </div>
          <div className="border border-dark-subtle ms-2 w-1 border-5 d-none d-md-block"></div>
          <div className="ms-5 w-75  d-flex flex-column  ">
            <h2 className="text-primary-emphasis  mx-auto">Hello!</h2>
            <h2 className="text-primary-emphasis mx-auto">I am Vipul.</h2>
            {/* <p className="w-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore unde ea voluptates quaerat amet ipsa sint accusantium ducimus autem vel assumenda eligendi, hic odio ipsum maxime cumque aut laboriosam quasi, quam nihil! Harum laudantium ipsum officia consectetur ratione impedit expedita amet repellat aliquam eveniet dolores odit doloribus soluta cupiditate porro voluptatibus optio, atque, architecto commodi. Delectus animi saepe incidunt, et dolor voluptatum ipsum quas adipisci quae veniam ducimus sit culpa quidem sunt assumenda sint eaque magni. Eaque, obcaecati optio ad sapiente accusantium at officiis error officia maxime quibusdam rem laudantium nobis, provident ipsa dicta sequi ab quia! Laboriosam, reprehenderit facere?</p> */}
            <div    className="d-none d-md-block w-100">
            <p className=" text-justify" >As a passionate and innovative web developer, I thrive on transforming complex ideas into captivating digital experiences. With a strong foundation in coding languages such as HTML, CSS, and JavaScript, I take pride in creating seamless, user-friendly websites that not only meet clients' objectives but exceed their expectations. My insatiable curiosity drives me to stay at the forefront of emerging technologies and industry trends, ensuring that my work remains cutting-edge and future-proof. Whether it's crafting responsive layouts, optimizing website performance, or integrating interactive elements, I approach each project with meticulous attention to detail and a commitment to delivering top-notch results.</p>
            </div>
            <div className="d-block d-md-none ">
            <p className=" text-justify" >As a passionate and innovative web developer, I thrive on transforming complex ideas into captivating digital experiences. With a strong foundation in coding languages such as HTML, CSS, and JavaScript, I take pride in creating seamless, user-friendly websites that not only meet clients' objectives but exceed their expectations.</p>
            <button className="btn btn-outline-dark o">Read More &rarr;</button>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default About