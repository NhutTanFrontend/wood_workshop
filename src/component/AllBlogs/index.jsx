import CategoryBlogItem from "./CategoryBlogItem";
import SelectCategoryBlog from "./SelectCategoryBlog";

function AllBlogsComponent() {

    return (
        <div className="container mx-auto mt-10">
            <div className="row flex flex-col-reverse lg:flex-row gap-10">
                <SelectCategoryBlog />
                <div className="basis-3/4">
                    <CategoryBlogItem category="Tin tức" link="/blogs/news"/>
                    <CategoryBlogItem category="mẹo" link="/blogs/trick"/>
                    <CategoryBlogItem category="TIN NỔI BẬT" link="/blogs/popular"/>
                </div>
            </div>
        </div>
    );
}

export default AllBlogsComponent;