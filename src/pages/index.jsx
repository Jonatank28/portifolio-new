import About from '@/components/About'
import Contacts from '@/components/Contacts'
import Footer from '@/components/Footer'
import Home from '@/components/Home'
import NavBar from '@/components/NavBar/NavBar'
import Project from '@/components/Project'

import SelectLanguage from '@/components/SelectLanguage/SelectLanguage'
import Skill from '@/components/Skill'
import ToggleToTop from '@/components/ToggleToTop'

const index = () => {
    return (
        <main>
            <NavBar />
            <SelectLanguage />
            <Home />
            <ToggleToTop />
            <About />
            <Skill />
            <Project />
            <Contacts />
            <Footer />
        </main>
    )
}

export default index
