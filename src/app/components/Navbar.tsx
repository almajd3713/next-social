import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="">
      {/* LEFT */}
      <div>

      </div>
      {/* CENTER */}
      <div className='hidden'>
        <Link href={'/'}>GALANSOCIAL</Link>
      </div>
      {/* RIGHT */}
      <div>
        
      </div>
    </div>
  )
}

export default Navbar