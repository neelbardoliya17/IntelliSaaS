import axios from "axios";

export const generatedContentAPI=async(userPrompt)=>
    {
        const reposnse=await axios.post('http://localhost:8090/api/v1/openai/generate',{
           prompt:userPrompt,
        },
        {
            withCredentials:true,
        });
        return reposnse?.data;
    }