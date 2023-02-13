import React from 'react'
import { useRouter } from 'next/router'

const pageno = () => {
    const router = useRouter();
    const pageNumber = router.query.pageNo;
  return (
    <div>
      dynamic routing
      <h4>my {pageNumber} content</h4>
      http://localhost:3000/blog/50
      http://localhost:3000/blog/dynamic-routing
    </div>
  )
}

export default pageno
