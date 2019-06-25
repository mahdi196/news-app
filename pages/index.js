import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

import fetch from 'isomorphic-unfetch';

const Index = props => (
    <Layout>
        <div>
            <Banner />
            <div id="main">
                <section id="one" className="tiles">
                    {props.news.map((news,index) => (
                        <article key={index} style={{backgroundImage: `url('/static/images/pic07.jpg')`}}>
                            <header className="major">
                                <h3>{news.name}</h3>
                                <p>{news.description}</p>
                            </header>
                            <Link href={`/landing?source=${news.id}`} ><a className="link primary"></a></Link>
                        </article>
                    ))}
                </section>
            </div>
        </div>
    </Layout>
);

Index.getInitialProps = async function({query}) {

    if(query.category === undefined){
        query.category = "technology"
    }

    const res = await fetch('https://newsapi.org/v2/sources?apiKey=b5f36b84f15e4718a77087334937118c&language=en&category='+query.category);
    const data = await res.json();
    
    // console.log(`Show data fetched. Count: ${data.sources.length}`);
    // console.log(data.sources);

    return {
      news: data.sources
    };
  };  

  export default Index;
