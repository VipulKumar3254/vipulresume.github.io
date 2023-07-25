import Link from 'next/link';
import React from 'react'

const dataFetch=async ()=>{
    let data = await fetch('https://dummyjson.com/users')
    data= await data.json();
    return data.users;
  }


async function page() {
    const users = await dataFetch();
  return (
    <>
    <div>
        <h1>all users</h1>
        <div>
            {
                users.map(user=><div><Link href={`/user/${user.id}`}>{user.firstName}</Link> </div>)
            }
        </div>
    </div>
    </>

  )
}

export default page