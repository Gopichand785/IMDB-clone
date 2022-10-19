import React,{useState,useEffect} from "react";
import './MovieList.css'
import { useParams } from "react-router-dom";
import Cards from "../card/Card";

const MovieList=()=>{
    const [MovieList,setMovieList]=useState([])
    const {type}=useParams()  //passing the coindition in xthe api checking popular

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
            getData() //condition calling with dependency array
    },[type])

    const getData=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)//its checking gthe params condition
        .then((res)=>res.json())
        .then((data)=>setMovieList(data.results))//upadting the list dispay the ui
    }
    return (
        <div className="movie__list">
        <h2 className="list__title">{(type?type:"POPULAR").toUpperCase()}</h2> {/* heading be the captial its like good */}
        <div className="list__cards">
            {
                MovieList.map(movie=>(
                        <Cards movie={movie}/> //calling card components in the movielist component
                )
                )
            }
        </div>
        </div>
    )
}
export default MovieList