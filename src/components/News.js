import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {


  const capitalizeFLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };
  document.title = `${capitalizeFLetter(
    props.category
  )} - NewsMonkey`;

  let [articles, setArticles] = useState([]);
  let [loading, setloading] = useState(false);
  let [page, setpage] = useState(1);
  let [totalResults, settotalResults] = useState(0);
  const fetchMoreData = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0e8b0d16c4ed43ebac1ac28362f48254&page=${page + 1}&pageSize=${props.pageSize}`;
    setpage(page + 1);
    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    setloading(false);
  };
  const updateNews = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0e8b0d16c4ed43ebac1ac28362f48254&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(30);
    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <>
      <h2 className="text-center" style={{ marginTop: '80px' }}>
        {" "}
        NewsMonkey - Top {capitalizeFLetter(props.category)}{" "}
        Headlines{" "}
      </h2>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={totalResults !== articles.length}
        loader={
          totalResults !== articles.length && (
            <Spinner />
          )
        }
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://www.contify.com/resources/blog/wp-content/uploads/2021/07/What-is-a-news-feed-API.jpg"
                    }
                    newsUrl={element.url}
                    author={element.author ? element.author : "unknown"}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );

}
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general"
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News;