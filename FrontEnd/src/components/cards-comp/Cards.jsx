import React, { useEffect } from 'react'
import Card from './Card'
import { dummyData } from "../data"
import { useState } from 'react'
import axios from "axios"
import Spinner from "../svg/Spinner"
import { FaSearch } from "react-icons/fa";
import { useMemo } from 'react'


function Cards() {
  const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [query, setQuery] = useState("")

  const filterBlogs = useMemo(()=>{
    return posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
  },[posts,query])
  


  useEffect(() => {

    const fetchBlog = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`${import.meta.env.VITE_EXPRESS_BASE_URL}/blogs`)
        console.log(response.data);
        setPosts(response.data)
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
      finally {
        setIsLoading(false)
      }
    }

    fetchBlog()

  }, [])






  return (
    <div className="mainContainer">
            <div className="seachBox">
       <label> <FaSearch/></label>
        <input className='searchInput' type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder='Search by title'/>
      </div>

    <div className="cardcontainer">
      {isLoading ? (
        <Spinner />
      ) : (
        filterBlogs.map(({ _id, coverImgUrl, creator, title, description, category, createdAt }) => <Card key={_id} coverImg={coverImgUrl} title={title} PostId={_id} body={description} author={creator.fullName} category={category} createdAt={createdAt} />)
      )
      }

    </div>
    </div>
  )
}

export default Cards
