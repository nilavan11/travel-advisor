import axios from "axios";

export const getPlacesData = async (type,sw,ne) =>{
    try {
        const { data: {data}} = await axios.get( `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,  {
  
          params: {
            bl_latitude: sw.lat,
            tr_latitude:  ne.lat,
            bl_longitude:  sw.lng,
            tr_longitude:  ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '6e38e208cbmshe454a678066aec4p172e33jsn3417a1678c0e',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}