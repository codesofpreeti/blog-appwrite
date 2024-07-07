import React from 'react'
import appwriteservice from "../appwrite/config";
import { Link } from 'react-router-dom';

const PostCard = ({$id,title, featuredImg,}) => {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full rounded-xl p-4'>
            <div className='w-full bg-gray-200 justify-center mb-4'>
                <img src={appwriteservice.getFilePreview(featuredImg)} alt={title}  className='rounded-xl'/>
            </div>
            <h2>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard