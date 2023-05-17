import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Health = () => {
    const [data, setData] = useState([])
  
  useEffect(() => {
   const Article = async () => {
    const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=Health&apiKey=48038233fbf342cda63c50616809c30a")
    setData(response.data.articles)
    console.log(response)
   }
   Article()
    }, [])
    
  
    return (
   <>
   
  
    <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-3 justify-items-center'>
  
    {data.map(article => {
      return(
        <div key={article.url} className='py-10'>
        <div className='rounded overflow-hidden shadow-lg max-w-sm bg-white'>
          <img className='w-full h-64' src={article.urlToImage} alt="" />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'> {article.title} ...</div>
            <p>{article.description}</p>
            <div className='py-2'>
            <a href={article.url} className='border bg-orange-500 text-white font-2xl font-semibold px-4 py-1 rounded-md'>Read more</a>
            </div>
        
          </div>
        </div>
      </div>
   
     )
    })
    }
       
       </div>
  
   </>
    ) 
  }

export default Health
