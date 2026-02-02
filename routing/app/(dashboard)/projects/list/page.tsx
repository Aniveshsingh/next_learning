import Link from 'next/link'
import React from 'react'

function projectList() {
  return (
    <div>
        <h1>Project List</h1>
        <ul>
            <li><Link href="/projects/jobit">Project 1</Link></li>
            <li><Link href="/projects/carrent">Project 2</Link></li>  
            <li><Link href="/projects/reddit">Project 3</Link></li>  
        </ul>
    </div>
  )
}

export default projectList