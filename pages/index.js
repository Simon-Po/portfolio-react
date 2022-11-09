import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {useState} from 'react';
import {useSpring, animated, config} from "react-spring";




export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Simon Pohl Portfolio</title>
        <meta name="description" content="Simon`s Portfolio Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      
      <nav className=' min-w-full bg-gradient-to-b from-slate-400 to-slate-200 dark:from-slate-900 dark:to-slate-800 px-8 pt-7  pb-10 flex justify-between'>
              <h1 className=' text-3xl font-mono dark:text-slate-100'>🐢</h1>
              <ul className='flex items-center'>
                  <li>
                    <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=' cursor-pointer text-xl dark:text-slate-100' />
                  </li>
                  <li>
                  <a href="#" className=' bg-purple-700 text-white dark:bg-purple-500 px-4 py-2 rounded-md ml-8'>Contact </a>
                  </li>
              </ul>
            </nav>
      <main className=' min-w-full  bg-slate-200 dark:bg-slate-800 px-8 '>


          <section className='  min-h-screen  '>

           
            
            <div className='flex justify-center'>
            <div  className='lg:grid-flow-col grid w-fit m-0 '>

              <h2 className='  py-2 lg:animate-slide-Right  text-purple-600 dark:text-purple-500 lg:text-9xl text-5xl font-mono text-right'>Simon <br /> Pohl</h2>

              
              
              <h3 className=' py-2 lg:animate-slide-Left lg:text-8xl text-4xl text-violet-600  dark:text-slate-100'>Full Stack <br /> Development</h3>
              
            </div>
            </div>
            <div className='text-5xl flex justify-center gap-16 pt-36 text-gray-600 dark:text-slate-100'>
              <AiFillTwitterCircle className='  cursor-pointer' />
              <AiFillGithub className=' cursor-pointer' />
              <AiFillLinkedin className=' cursor-pointer' />
            </div>
            
          </section>
          
          
          
          <section className=' grid grid-cols-2  pb-10'>
          <div className=' '>
          <img src="https://images.unsplash.com/photo-1579158951805-53f80485ed44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className=' rounded-full float-right pr-8 object-cover w-1/2' />
          </div>
            <div className='flex flex-col justify-center'>
              
            <div className=' text-left  '>
              <h3 className='text-3xl py-1 dark:text-slate-100' >
                Services I offer
              </h3>
              </div>
              <p className='text-md text-left py-2 leading-8 text-gray-800 dark:text-slate-100 ' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br></br> Similique, laboriosam a maiores velit exercitationem reiciendis, distinctio.</p>
            
              </div>
              
         

          </section>
          <section>

            <div>hi</div>
          </section>



      </main>



    </div>
  )
}
