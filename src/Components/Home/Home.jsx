import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import Row from '../Row/Row';
import axios from 'axios';
import banner from '../../Images/banner.jpg';
import './Home.scss'
//const imgUrl = "https://image.tmdb.org/t/p/original"




const apiKey = "3140349f8363d436786f22fd435a1d92";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const Popular = "popular";
const topRated = "top_rated";

const Home = () => {

    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [nowplayingMovies, setNowplaying] = useState([])
    const [popularMovies, setPopular] = useState([])
    const [topRatedMovies, setTopRated] = useState([])
    const [genre, setGenre] = useState([])
    // const [posterPath, setPosterPath] = useState([]);



    useEffect(() => {

        const fetchUpcoming = async () => {
            const { data: { results } } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
            setUpcomingMovies(results)
        };

        const fetchnowPlaying = async () => {
            const { data: { results } } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)
            setNowplaying(results)
        };

        const fetchPopular = async () => {
            const { data: { results } } = await axios.get(`${url}/movie/${Popular}?api_key=${apiKey}`)
            setPopular(results)
            // setPosterPath(results)
            // console.log(popularMovies.poster_path);


        };

        const fetchTopRated = async () => {
            const { data: { results } } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`)
            setTopRated(results)
        };

        const getAllGenre = async () => {
            const { data: { genres } } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`)
            setGenre(genres)
            // console.log(genres)
        };


        fetchUpcoming();
        fetchPopular();
        fetchnowPlaying();
        fetchTopRated();
        getAllGenre();


    }, )

   
            // console.log(`${imgUrl} /${popularMovies[0].poster_path}`);
    

    return (
        <section className='home'>

            <div className="banner">
                <img src={banner} alt="Banner" />

            </div>

            <Row title={"Upcoming Movies"} arr={upcomingMovies} />
            <Row title={"Popular on Netflix"} arr={popularMovies} />
            <Row title={"Now Plpaying"} arr={nowplayingMovies} />
            <Row title={"Top Rated"} arr={topRatedMovies} />
            <details data = {upcomingMovies} />

            <div className="genreBox">
                {genre.map((item) => (
                        
                    <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
                    
                )

                )}
            </div>
           
        </section>
    )
}

export default Home