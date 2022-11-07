import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {useState} from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Simon Pohl Portfolio</title>
        <meta name="description" content="Simon`s Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      <nav className=' bg-gradient-to-b from-slate-400 to-slate-200 dark:from-slate-900 dark:to-slate-800 px-8 pt-7  pb-10 flex justify-between'>
              <h1 className=' text-xl font-mono dark:text-slate-100'>Simon Pohl</h1>
              <ul className='flex items-center'>
                  <li>
                    <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=' cursor-pointer text-xl dark:text-slate-100' />
                  </li>
                  <li>
                  <a href="#" className=' bg-purple-700 text-white dark:bg-purple-500 px-4 py-2 rounded-md ml-8'>Resume</a>
                  </li>
              </ul>
            </nav>
      <main className='  bg-slate-200 dark:bg-slate-800 px-8 '>

          <section className=' min-h-screen'>
            
            
            
            
            <div className='text-center p-10 '>
              <h2 className='text-5xl py-2 text-purple-600 dark:text-purple-500 font-medium font-mono'>Simon Pohl</h2>
              <h3 className=' text-2xl py-2 dark:text-slate-100'>Full Stack Development</h3>
              <p className='text-md py-5 leading-8 text-gray-800 dark:text-slate-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsum quia ratione at magni ullam placeat mollitia! 
                Quia minima velit, recusandae, earum repellendus saepe 
                quaerat deleniti eveniet incidunt iste commodi possimus.</p>
            </div>
            <div className='text-5xl flex justify-center gap-16  text-gray-600 dark:text-slate-100'>
              <AiFillTwitterCircle className=' cursor-pointer' />
              <AiFillGithub className=' cursor-pointer' />
              <AiFillLinkedin className=' cursor-pointer' />
            </div>
            
          </section>
          
          
          
          <section className=''>
            <div className=' text-center '>
              <h3 className='text-3xl py-1 dark:text-slate-100' >
                Services I offer
              </h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-slate-100 ' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, laboriosam a maiores velit exercitationem reiciendis, distinctio.</p>
            </div>

         

          </section>




      </main>



    </div>
  )
}
