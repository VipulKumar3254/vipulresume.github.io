
function Projects() {
  return (
    <>
    <div className="mt-5" >
      <h3 className="text-center">My Projects</h3>
    </div>

        <div className="mt-5 container d-flex justify-content-center d-flex flex-wrap">

        <div class="card shadow-lg m-2" style={{width: "18rem"}}>
  <img src="/swagZinn.png " style={{background:"black"}} class="card-img-top cards" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">SwagZinn-Social Media Application</h5>
    <p class="card-text">It is a social media application build on MERN stack. Designing is based on the bootsrap. User can create account and start posting and following peoples.</p>
    <a href="#" class="btn btn-primary">Visit Project</a>
  </div>
</div>
<div class="card shadow-lg m-2" style={{width: "18rem"}}>
  <img src="/informatics.png" style={{}} class="card-img-top cards" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Informatics- Cross platform notes app</h5>
    <p class="card-text">It is a cross platform notes taking app. It is build on React Js and Firebase Once created the account, user can access the app on both android and web. </p>
    <a href="#" class="btn btn-primary">Visit Project</a>
  </div>
</div>
<div class="card shadow-lg m-2" style={{width: "18rem",boxShadow: "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px" }}>
  <img src="/etrack.png" style={{}} class="card-img-top cards" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">E-Track</h5>
    <p class="card-text">It is a cross platform notes taking app. It is build on React Js and Firebase Once created the account, user can access the app on both android and web. </p>
    <a href="#" class="btn btn-primary">Visit Project</a>
  </div>
</div>

        </div>

    </>
  )
}

export default Projects