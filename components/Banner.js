const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Welcome to News Gate!</h1>
            </header>
            <div className="content">
                <p>A responsive news site using Forty<br />
                and powered by HTML5 UP.</p>
                <ul className="actions">
                    <li><a href={`/?category=technology`} className="button scrolly">technology</a></li>
                    <li><a href={`/?category=entertainment`} className="button scrolly">entertainment</a></li>
                    <li><a href={`/?category=science`} className="button scrolly">science</a></li>
                    <li><a href={`/?category=sports`} className="button scrolly">sports</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
