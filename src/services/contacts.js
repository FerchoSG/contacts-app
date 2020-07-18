import {ENDPOINT} from './login'
const jwt = JSON.parse(localStorage.getItem('jwt'))
export const token = jwt ? jwt.token : null

export default class ContactsService{
    static async getAll({userId}){
        const res = await fetch(`${ENDPOINT}/users/contacts/${userId}`,{
            headers: {
                "Content-type": "application/json",
                "Authorization": token
            }
        })
        const {data} = await res.json() 
        return {data}
    }

    static async getOne({id}){
        const res = await fetch(`${ENDPOINT}/contacts/${id}`,{
            headers: {
                "Content-type": "application/json",
                "Authorization": token
            }
        })
        const {data} = await res.json() 
        return {data}
    }
    
    static async update({id, contact}){
        const res = await fetch(`${ENDPOINT}/contacts/${id}`,{
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(contact),
        })
        const data = await res.json()
        return data
    }

    static async add({contact}){
        const res = await fetch(`${ENDPOINT}/contacts`,{
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(contact),
        })
        const data = await res.json()
        return data
    }

    static async delete({contactId}){
        const res = await fetch(`${ENDPOINT}/contacts/${contactId}`,{
            headers: {
                "Content-type": "application/json",
                "Authorization": token
            },
            method: "DELETE"
        })

        const data = await res.json()
        console.log(data)
        return data;
    }
}

