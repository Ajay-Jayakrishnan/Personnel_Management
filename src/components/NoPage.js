import React from 'react'
import { Link } from 'react-router-dom'
function NoPage() {
  return (
    <div>
      <button>
        <Link to="/">Please Login</Link>
      </button>
    </div>
  )
}

export default NoPage