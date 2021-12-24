import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'
    // headers: {
    //     'x-rapidapi-host': 'bayut.p.rapidapi.com',
    //     'x-rapidapi-key': '03f6e19719msh1a6a4ca1b9ec984p10139djsndf2ad0f8bb84'
    // }

export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '03f6e19719msh1a6a4ca1b9ec984p10139djsndf2ad0f8bb84'
        },
    })
    return data;
}