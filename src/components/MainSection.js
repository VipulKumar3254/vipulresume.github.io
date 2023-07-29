import "./css/mainSection.css"
import Image from "next/image"
function MainSection() {
  return (
    <>
      <div className="size d-flex justify-content-md-between justify-content-center">

        <div className="d-flex justify-content-center flex-md-column flex-lg-row  flex-xl-row flex-column align-items-md-cetner align-items-center  mt-lg-5 fontSize col-lg-6   pt-md-5">
          <Image src="/pic11.png" id="mainPic" className="rounded-circle me-md-5 ms-md-5 " objectFit="contain" sizes="(max-width: 768px) 50vw,
              (max-width: 1200px) 100vw,
              33vw"    style={{ height: '12em', width: "12em" }} width={200}
            height={160} />
          <div className="paraContainer fontSize flex-grow-1 px-md-2">

            <p className="  heading  mt-lg-5 mt-2 " style={{}}>Web Design &<br />Development</p>
            <p className=" anotherHeading px-1 ">Unique websites that convert visitors into customers and help Your business grow.</p>
            <div className="d-flex flex-md-row flex-column justify-content-center align-items-center  mt-lg-0  mx-md-2 text-secondary ">
              <button className="btn btn-primary  w-50">See My Work <span className="fw-bold">&#62;</span></button>
              <p className="mx-2 my-auto">or</p>

              <button className="btn btn-outline-secondary h-75  border border-1 border-secondary w-md-auto w-50 " >Get in Touch</button>
            </div>
          </div>
        </div>
        <div className="col-6 mt-md-5  rightPic d-md-block d-none">
          <div className="rightPicContainer">

            <Image src={"/cmp1.jpg"} sizes="(max-width:1700px)100vw" className="hii" height={400} width={500} />
            {/* <Image src={"https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&w=1000&q=80"} sizes="(max-width:1700px)100vw" className="hii" height={400} width={500} /> */}
          </div>
        </div>
        <div className="lowerSection d-none d-md-block"></div>
      </div>
    </>
  )
}

export default MainSection