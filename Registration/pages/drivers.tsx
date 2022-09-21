import { InferGetStaticPropsType } from "next"
import { type } from "os"


type Driver = {
    id: string
    firstName: string
    lastName : string
}

export const getStaticProps = async() => {
    const response = await fetch("http://localhost:3000/api/users")
    const drivers: Driver[] = await response.json()
   
    return{
        props:{ 
            drivers,
    
        },
    }
    
}


function UserList({drivers}: InferGetStaticPropsType<typeof getStaticProps>){
    return(
        <>
        <h1>List of users</h1>
        {drivers.map((user) => {
            return (
                <div key={user.id}>
                    {user.id} , {user.firstName} , {user.lastName}
                </div>
            )
        }
        )}
        
        </>
    )
}

export default UserList

