// import React from 'react'
// import {Link} from 'react-router-dom'

// function PostCard({$id, title, featuredImage}) {

//   return (
//     <Link to={`/post/${$id}`}>
//         <div className='w-full bg-gray-100 rounded-xl p-4'>
//             <div className='w-full justify-center mb-4'>
//                 <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
//                 className='rounded-xl' />

//             </div>
//             <h2
//             className='text-xl font-bold'
//             >{title}</h2>
//         </div>
//     </Link>
//   )
// }


// export default PostCard


import PropTypes from 'prop-types';
import parse from "html-react-parser";

import { ArrowUpRight } from 'lucide-react'
import appwriteService from "../appwrite/config"
import { useNavigate } from 'react-router-dom';

export default function PostCard({ $id, title, featuredImage, content }) {
  const navigate = useNavigate()
  return (
    <div className="w-[300px] rounded-md border bg-white">
      <img
        src={appwriteService.getFilePreview(featuredImage)}
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold cursor-pointer hover:underline" onClick={() => {
          navigate(`/post/${$id}`)
        }} >
          {title} &nbsp; <ArrowUpRight className="h-4 w-4 " />
        </h1>
        <p className="mt-3 text-sm text-gray-600  truncate ">
          {parse(content)}
        </p>

        <button
          type="button"
          onClick={() => {
            navigate(`/post/${$id}`)
          }}
          className="mt-4 w-full rounded-md bg-black px-2  py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
  )
}

PostCard.propTypes = {
  $id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  featuredImage: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};