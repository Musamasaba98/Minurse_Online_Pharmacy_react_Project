import { keys } from "@mui/system"

const users=[]
const query=""
//basic search
users.filter(user=>user.name.toLowerCase().includes(query)).map(user=><p>{user.name}</p>)
//medium search
const search=(users)=>{
    return users.filter(user=>keys.some(key=>user[key].toLowerCase().includes(query)))
}
//The data used by products list is the one we change
users.filter(user => user.name.toLowerCase().includes(search)).map(user=><p>{user.name}</p>)
//advanced search
users.filter(user => user.name.toLowerCase().includes(search)).map(user=><p>{user.name}</p>)