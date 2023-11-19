import { MdHome, MdSportsBaseball, MdMovie } from "react-icons/md";
import { FaReact, FaAngular, FaBook, FaPodcast, FaBitcoin , FaCode  } from "react-icons/fa";
import { IoIosMusicalNotes } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { PiDressFill } from "react-icons/pi";
import { GiGemNecklace } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { json } from "react-router-dom";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com/"

export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '33114d9eadmshd65132a321b954ep1ab566jsn37eb384c927d',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

export const categories = [
    { name: "New", icon: <MdHome /> },
    { name: "Coding", icon: <FaCode  /> },
    { name: "ReactJS", icon: < FaReact /> },
    { name: "Angular", icon: < FaAngular /> },
    { name: "Music", icon: < IoIosMusicalNotes /> },
    { name: "Gaming", icon: <  SiYoutubegaming /> },
    { name: "Sports", icon: <MdSportsBaseball /> },
    { name: "Education", icon: < FaBook /> },
    { name: "Podcast", icon: < FaPodcast /> },
    { name: "Movie", icon: < MdMovie /> },
    { name: "Fashion", icon: < PiDressFill /> },
    { name: "Beauty", icon: < GiGemNecklace /> },
    { name: "Gym", icon: < CgGym /> },
    { name: "Crypto", icon: <  FaBitcoin /> }
];

export async function fetchFromAPI(url,options){
    try{
        const data =  await fetch(`${BASE_URL+url}`,options);
        const jsonData  = await data.json();
        // console.log(jsonData)
        return jsonData;
    }

    catch(error){
        console.log("Error while fetching from API" + error.message);
    }

}