import {ENDPOINT} from './login'

export default async function register({user}){
    const res = await fetch(`${ENDPOINT}/register`,{
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    })

    const data = await res.json()

    return data ? true : false
}