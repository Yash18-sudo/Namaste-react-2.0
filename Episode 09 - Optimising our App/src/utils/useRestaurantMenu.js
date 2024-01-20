import { useEffect,useState } from "react";
import menuList from '../utils/mockMenuList.js';

const useRestaurantMenu=(resId)=>{

    const [resInfo,setResInfo] = useState(null);
    
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        try {
            const data = menuList;
            setResInfo(data)
        }
        catch (error) {
            console.log(error.message);
        }
    }


    return resInfo;
}

export default useRestaurantMenu;