import Image from 'next/image'
import React from 'react'

export default function Heros() {
  return (
    <div className='flex flex-col items-center justify-center max-w-5xl'>
        <div className='flex items-center'>
            <div className='relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]'>
                <Image
                    src="/landing_light.png"
                    fill
                    className='object-contain dark:hidden'
                    alt="landing image"
                />
            </div>
            <div className='relative w-[400px] h-[400px] hidden md:block'>
                <Image
                    src="/landing_light2.png"
                    fill
                    className='object-contain dark:hidden'
                    alt='landing image2'
                />
            </div>
        </div>
    </div>
  )
}
