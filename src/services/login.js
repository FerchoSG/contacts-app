export const ENDPOINT = 'https://api-contactsapp.herokuapp.com/api/v1'

export default async function login({username, password}){
    const res = await fetch(`${ENDPOINT}/login`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({username, password})
    })
    
    if(!res) throw new Error('Something went wrong')

    const data = await res.json();
    
    const {user, token} = data;

    return {user, token}
}