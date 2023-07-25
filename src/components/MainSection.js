import Image from "next/image"
function MainSection() {
  return (
    <>
    <div className="">

    <div className="text-center mt-5 ">
    <Image src="/mainpic1.jpg"   height={347} width={592}/ >
    {/* <img   src="/mainpic.jpg" height={222} width={222} alt="" /> */}
    </div>
    <div className="text-center mt-2 text-secondary container">
        <h2>My name is Vipul Kumar</h2>
        <p className="">I am a passionate full stack web developer. I am proficient in MERN stack. I am developing web apps from last two years. I have done some of the projects in MERN stack. I know php as well for server side. I am proficient in DOM manipulation.</p>
        <button className="btn  btn-secondary">learn More</button>
    </div>
    </div>
    </>
  )
}

export default MainSection