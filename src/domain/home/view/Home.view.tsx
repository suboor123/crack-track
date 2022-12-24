import Topics from '../../topics/view/topics.view'
import Hero from './HomeComponents/Hero.component'
import MidBanner from './HomeComponents/MidBanner.component'
import PopularQuestions from './HomeComponents/PopularQuestions.component'

const Home = () => {
    return (
        <>
            <Hero />
            <section className="section" style={{ padding: '50px' }}>
                <Topics />
                <MidBanner />
            </section>
        </>

    )
}

export default Home