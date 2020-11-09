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
    console.log(data)
    if(data.errors){
        return {error: true, message: data.errors[0].message}
    }else{
        return {error: false, message: data.message}
    }

}