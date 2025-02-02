import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
        <Link to="/reels">
            <h1 className="text-xl tracking-tight">Reels</h1>
        </Link>
    </div>
  )
}

export default HomePage
