
function Projects() {
  return (
    <>
        <div className="mt-5 container d-flex justify-content-around">
        <div class="card shadow-lg" style={{width: "18rem"}}>
  <img src="/swagZinn.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">SwagZinn-Social Media Application</h5>
    <p class="card-text">It is a social media application build on MERN stack. Designing is based on the bootsrap. User can create account and start posting and following peoples.</p>
    <a href="#" class="btn btn-primary">Visit Project</a>
  </div>
</div>
<div class="card shadow-lg" style={{width: "18rem"}}>
  <img src="/informatics.png" style={{height:"163px"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Informatics- Cross platform notes app</h5>
    <p class="card-text">It is a cross platform notes taking app. It is build on React Js and Firebase Once created the account, user can access the app on both android and web. </p>
    <a href="#" class="btn btn-primary">Visit Project</a>
  </div>
</div>

        </div>
    </>
  )
}

export default Projects