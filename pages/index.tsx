import Layout from '../components/Layout';

const Index = () => (
    <Layout>
        <style jsx>{`

        `}</style>
        <section className="banner">
            <h1 id="typewriter">HELLO.</h1>
            <h2 id="lead">Need a professional website or a mobile application? <br />Let's do it together!</h2>
            <div className="social">
                <a aria-label="E-Mail" href="mailto:karol.stepien@me.com">
                <i className="far fa-envelope"></i>
                </a>
                <a aria-label="LinkedIn" href="https://www.linkedin.com/in/carl-st/">
                <i className="fab fa-linkedin-in"></i>
                </a>
                <a aria-label="GitHub" href="https://github.com/carl-st">
                <i className="fab fa-github"></i>
                </a>
                <a aria-label="Twitter" href="https://twitter.com/carlst3">
                <i className="fab fa-twitter"></i>
                </a>
            </div>
        </section>
    </Layout>
);

export default Index;
