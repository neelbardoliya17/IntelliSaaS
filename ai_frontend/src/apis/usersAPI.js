import axios from 'axios'
//Registration

export const registerAPI=async(userData)=>
{
    const reposnse=await axios.post('http://localhost:8090/api/v1/users/register',{
        email:userData?.email,
        password:userData?.password,
        username:userData?.username,
    },
    {
        withCredentials:true,
    });
    return reposnse?.data;
}


//Login

export const loginAPI=async(userData)=>
    {
        const reposnse=await axios.post('http://localhost:8090/api/v1/users/login',{
            email:userData?.email,
            password:userData?.password,
        },
        {
            withCredentials:true,
        });
        return reposnse?.data;
    }

//check authentication
export const checkUserAuthStatusAPI=async()=>
    {
        const reposnse=await axios.get('http://localhost:8090/api/v1/users/auth/check',
        {
            withCredentials:true,
        });
        return reposnse?.data;
    }


//logout auth
export const logoutAPI=async()=>
    {
        const reposnse=await axios.post('http://localhost:8090/api/v1/users/logout',{},
        {
            withCredentials:true,
        });
        return reposnse?.data;
    }



    export const getUserProfileAPI=async()=>
        {
            const reposnse=await axios.get('http://localhost:8090/api/v1/users/profile',
            {
                withCredentials:true,
            });
            return reposnse?.data;
        }