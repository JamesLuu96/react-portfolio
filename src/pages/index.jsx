import Head from 'next/head'
import Landing from '../components/main/Landing'
import {usePage} from '../globalState'
import Home from '../components/main/Home'
import Projects from '../components/main/Projects'
import About from '../components/main/About'
import Resume from '../components/main/Resume'
import Contact from '../components/main/Contact'

export default function HomePage() {
  const {currentPage} = usePage()

  function returnPage(){
    switch(currentPage){
      case 'Home':
        return <Home/>
      case 'Projects':
        return <Projects/>
      case 'About Me':
        return <About/>
      case 'Resume':
        return <Resume/>
      case 'Contact':
        return <Contact/>
    }
  }

  return (
    <div>
      <Head>
        <title>James Luu's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet'></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
      </Head>

      <Landing>
        {returnPage()}
      </Landing>
      

        
    </div>
  )
}
