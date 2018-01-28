export const selectUser =(user)=>{
    console.log("you clicked ",user.first);
    return{
        type:"USER_SELECTED",
        payload:user
    }
}