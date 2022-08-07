import React from 'react'
import Card from '../Card/Card'
import './row.scss'
import img from '../../Images/spider.png'
const imgUrl = "https://image.tmdb.org/t/p/original/"

//  import logo from '../../Images/logo.png'


const Row = ({ title, arr = [{
    img:img
}] }) => {
    // console.log(img)
    return (
        <div className='row'>

            <h2> {title}</h2>
            <div>

                {
                    arr.map((item,index) => 
                        // console.log(item.img);
                        <Card key={index} img = {`${imgUrl}/${item.poster_path}`}/>

                    )
                }
            
           
                

            </div>

        </div>
    )
}

export default Row