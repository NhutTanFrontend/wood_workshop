import { useParams } from "react-router-dom";
import SelectCategoryBlog from "../../component/AllBlogs/SelectCategoryBlog";
import BannerAllProducts from "../../component/AllProducts/BannerAllProducts";
import BlogItem from "../../component/BlogItem";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import AboveHeader from "../../component/homepage/AboveHeader";
import HeaderRes from "../../component/homepage/HeaderRes";
import { blogData } from "../../data/blogData";
import { useEffect, useState } from "react";

function TintucBlog() {

    const [text, setText] = useState("")

    const { category } = useParams()

    useEffect(() => {
        if (category === 'news') {
            setText("Tin tức")
        }
        if (category === 'trick') {
            setText("Mẹo")
        }
        if (category === 'popular') {
            setText("Bài viết nổi bật")
        }
    }, [category])


    return (
        <>
            <div className=" bg-black pb-4">
                <AboveHeader />
                <Header />
            </div>
            <HeaderRes />
            <BannerAllProducts title={text} />
            <div className="container mx-auto mt-10">
                <div className="row flex flex-col-reverse lg:flex-row gap-10">
                    <SelectCategoryBlog category={category} />
                    <div className="basis-3/4">
                        <h2 className="uppercase text-xl font-semibold">{text}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 mt-5">
                            {blogData?.map(item => (
                                <BlogItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TintucBlog;