// import Link from 'next/link'
import Head from 'next/head';
import Layout from "src/components/Layout";
import { useQuery } from '@apollo/react-hooks';
import { GET_FEATURED_LIST } from 'server/graphql-queries';
import FeaturedGame, { IFeaturedGame } from 'src/components/FeaturedGame';



interface IHomePage {
  featuredList: [IFeaturedGame],
  success: boolean,
}

const Home = (props: IHomePage) => {
  const { featuredList, success } = props;
  let content: any = featuredList;
  if (!featuredList || !success) {
    const {
      data,
      loading,
      error,
    } = useQuery(GET_FEATURED_LIST);
    if (loading) content = "Loading";
    if (error) content = "Error";
    if (!!data) {
      const { featured_list } = data;
      content = featured_list.map((item: IFeaturedGame) => <FeaturedGame {...item} key={item.id} />)
    };
  } else {
    content = featuredList.map((item: IFeaturedGame) => <FeaturedGame {...item} key={item.id} />);
  }
  return (
    <Layout>
      <Head>
        <title>Main page</title>
      </Head>
      <main>
        <div className="container">
          {content}
        </div>
      </main>
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  return {
    props: {
      ...context.query
    }
  }
}

export default Home;