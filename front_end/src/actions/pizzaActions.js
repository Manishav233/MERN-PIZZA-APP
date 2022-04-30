import axios from 'axios';
export const getAllPizzas=()=>async (dispatch)=>{

dispatch({type:'GET_PIZZAS_REQUEST'})
try{
//we provide url to get method, if anything wrong, then we get error
const response=await axios.get('/api/pizzas/getallpizzas');
console.log(response);
dispatch({type:'GET_PIZZAS_SUCCESS',payload:response.data })
}catch(error){
    dispatch({type:'GET_PIZZAS_FAILED',paylaod:error})
}
}

export const logoutUser=()=>dispatch=>{
localStorage.removeItem('currentUser')
window.location.href='/login'
}