import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simon Pohl Portfolio</title>
        <meta name="description" content="Simon`s Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main className=' bg-slate-200 px-10'>

          <section className=' min-h-max'>
            <nav className='  pt-10  mb-12 flex justify-between'>
              <h1 className=' text-xl font-mono'>Simon Pohl</h1>
              <ul className='flex items-center'>
                  <li>
                    <BsFillMoonStarsFill className=' cursor-pointer text-xl' />
                  </li>
                  <li>
                  <a href="#" className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a>
                  </li>
              </ul>
            </nav>
            
            <div className='text-center p-10 '>
              <h2 className='text-5xl py-2 text-teal-600 font-medium font-mono'>Simon Pohl</h2>
              <h3 className=' text-2xl py-2'>Full Stack Development</h3>
              <p className='text-md py-5 leading-8 text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsum quia ratione at magni ullam placeat mollitia! 
                Quia minima velit, recusandae, earum repellendus saepe 
                quaerat deleniti eveniet incidunt iste commodi possimus.</p>
            </div>
            <div className='text-5xl flex justify-center gap-16  text-gray-600'>
              <AiFillTwitterCircle className=' cursor-pointer' />
              <AiFillGithub className=' cursor-pointer' />
              <AiFillLinkedin className=' cursor-pointer' />
            </div>
            
          </section>
          
          
          
          <section className=''>
            <div className=' text-center py-32'>
              <h3 className='text-3xl py-1'>
                Services I offer
              </h3>
              <p className='text-md py-2 leading-8 text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, laboriosam a maiores velit exercitationem reiciendis, distinctio.</p>
            </div>

            <div>
              <div>

              </div>
            </div>


          </section>




      </main>



    </div>
  )
}
