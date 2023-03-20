const jwt = require('jsonwebtoken');


export const extractUserData = (token) => {
    const decodedToken = jwt.decode(token);

    const name = decodedToken?.username || "";
    const email = decodedToken?.email || "";
    const id = decodedToken?.id || "";
   
    const user = {
        name: name,
        email: email,
        jwt: token,
        id:  id
        
    }
    
    return user;
}




