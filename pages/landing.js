import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

import fetch from 'isomorphic-unfetch';

const Landing = (props) => (
    <Layout>
        <Head>
            <title>Landing</title>
            <meta name="description" content="Landing Page" />
        </Head>

        <div>
            <BannerLanding title={props.source}/>

            <div id="main">
                <section id="one" className="spotlights">
                    {props.news.articles.map((news,index) => (
                        <section key={index}>
                            <Link href="/generic">
                                <a className="image"><img src={news.urlToImage} alt="" /></a>
                            </Link>
                            <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h4>{news.title}</h4>
                                    </header>
                                    <p>{news.description}</p>
                                    <ul className="actions">
                                        <li><Link href={news.url}><a className="button">Learn more</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    ))}
                </section>
            </div>

        </div>
    </Layout>
)

Landing.getInitialProps = async function({ query }) {

    if (query.source === undefined){
        query.source = "ars-technica";
    }
    const res = await fetch('https://newsapi.org/v2/everything?sources='+query.source+'&pageSize=10&apiKey=b5f36b84f15e4718a77087334937118c');
    const data = await res.json();

    // console.log(`Show data fetched. Count: ${data.articles.length}`);
    // console.log(data.articles);

    return {
      news: data,
      source: query.source
    };
  };  

export default Landing;

