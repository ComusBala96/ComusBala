import React, { useState, useEffect } from "react";
import newsImage from "../../../../images/default/news.png";
import { ImEye } from "react-icons/im";
import { FaShare } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import moment from "moment";
import Loading from "../../../loading/Loading";
import { v4 } from "uuid";
export default function CurrentNewsPost({
  pageSize,
  country,
  language,
  sources,
  from,
  to,
  category,
  qurey,
}) {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const Api = `https://newsapi.org/v2/`;
  const fetchNewsApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setNews((prev) => [...prev, ...data.articles]);
    } catch (error) {}
  };
  const fetchNewsApiSearchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setNews(data.articles);
    } catch (error) {}
  };
  useEffect(() => {
    setLoading(true);
    fetchNewsApiData(
      `${Api}${sources}?country=${country}&category=${category}&apiKey=6f4cd031220546ca84bd07ad611774fd`
    );
  }, [page]);
  useEffect(() => {
    setLoading(true);
    fetchNewsApiSearchData(
      `${Api}everything?${
        qurey ? `q=${qurey}&` : `q=${category}&`
      }from=2023-06-17&to=2023-06-18&sortBy=publishedAt&apiKey=6f4cd031220546ca84bd07ad611774fd`
    );
  }, [qurey]);

  const handleInfinateScroll = () => {
    const windowHeight = document.documentElement.scrollHeight;
    const viewHeight = window.innerHeight;
    const scrollReache = document.documentElement.scrollTop;
    try {
      if (viewHeight + scrollReache + 1 >= windowHeight) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {}
  };
  useEffect(() => {
    window.addEventListener("scroll", handleInfinateScroll);
    return () => window.removeEventListener("scroll", handleInfinateScroll);
  }, []);

  if (qurey) {
    return (
      <>
        <div className="col-span-12 md:col-span-7">
          {loading && <Loading />}
          <div className="mb-4 mt-2 mx-2 ">
            <div className=" md:w-96 lg:w-[480px] mx-auto space-y-4 ">
              {news.map((item) => {
                return (
                  <>
                    <div
                      key={v4()}
                      className="p-2 bg-gray-50  shadow-md rounded-md cursor-pointer"
                    >
                      <h1 className="py-1 font-serif">{item.title}</h1>

                      <div className="flex space-x-1 justify-end items-center pb-1 px-2">
                        <BiWorld />
                        <small className="">
                          {moment(item.publishedAt, "YYYYMMDD")
                            .startOf("hour")
                            .fromNow()}
                        </small>
                      </div>
                      <div className="px-2">
                        <img
                          src={item.urlToImage ? item.urlToImage : newsImage}
                          alt=""
                          className="w-full h-auto rounded-md shadow-md"
                        />
                      </div>
                      <div className="p-2">
                        {item.description}
                        <small className="text-blue-300 underline cursor-pointer ml-2">
                          <a href={item.url}>read more ....</a>
                        </small>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <img
                            src={item.urlToImage ? item.urlToImage : newsImage}
                            alt="user_picture"
                            className="h-10 w-10 rounded-full border"
                          />
                          <small>By {item.author}</small>
                        </div>
                        <small className="flex items-center space-x-1 p-4">
                          <span>120k</span>
                          <ImEye />
                          <span>.</span>
                          <span>123k</span>
                          <FaShare className=" cursor-pointer" />
                        </small>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="col-span-12 md:col-span-7">
        <div className="mb-4 mt-2 mx-2 ">
          <div className=" md:w-96 lg:w-[480px] mx-auto space-y-4 ">
            {news.map((item) => {
              return (
                <>
                  <div
                    key={v4()}
                    className="p-2 bg-gray-50  shadow-md rounded-md cursor-pointer"
                  >
                    <h1 className="py-1 font-serif">{item.title}</h1>

                    <div className="flex space-x-1 justify-end items-center pb-1 px-2">
                      <BiWorld />
                      <small className="">
                        {moment(item.publishedAt, "YYYYMMDD")
                          .startOf("hour")
                          .fromNow()}
                      </small>
                    </div>
                    <div className="px-2">
                      <img
                        src={item.urlToImage ? item.urlToImage : newsImage}
                        alt=""
                        className="w-full h-auto rounded-md shadow-md"
                      />
                    </div>
                    <div className="p-2">
                      {item.description}
                      <small className="text-blue-300 underline cursor-pointer ml-2">
                        <a href={item.url}>read more ....</a>
                      </small>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <img
                          src={item.urlToImage ? item.urlToImage : newsImage}
                          alt="user_picture"
                          className="h-10 w-10 rounded-full border"
                        />
                        <small>By {item.author}</small>
                      </div>
                      <small className="flex items-center space-x-1 p-4">
                        <span>120k</span>
                        <ImEye />
                        <span>.</span>
                        <span>123k</span>
                        <FaShare className=" cursor-pointer" />
                      </small>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {loading && <Loading />}
      </div>
    </>
  );
}
