import {ENDPOINT} from './login'
import {token} from './contacts'

export default async function editProfile({id, editedProfile}){
    const res = await fetch(`${ENDPOINT}/users/${id}`,{
        method: 'PUT',
        headers: {
            "Content-type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(editedProfile)
    })
    const data = await res.json()
    console.log(data)
    return data
}