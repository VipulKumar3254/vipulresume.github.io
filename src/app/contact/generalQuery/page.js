import React from 'react'

const dataFetch=async ()=>{
  let data = await fetch('https://dummyjson.com/users')
  data= await data.json();
  return data.users;
}
async function page() {
  const users =await  dataFetch();

  return (
    <>
        <h1>this is general query section.</h1>
        work on it .
        <div>
        {
          users.map((user)=><h1>{user.firstName}</h1>)
        }

        </div>
    </>
  )
}

export default page