import imgs from "../../assets/imgs";
import CategorySelectItem from "./CategorySelectItem";

function CategorySelect() {

    return (
        <div className="container mx-auto mt-10">
            <div className="row grid grid-cols-1 md:grid-cols-2 gap-5">
                <CategorySelectItem image={imgs.chude1} title="NỘI THẤT GỖ" linkDi="/tat-ca-san-pham" />
                <CategorySelectItem image={imgs.chude2} title="Đồ trang trí" linkDi="/tat-ca-san-pham" />
                <CategorySelectItem image={imgs.chude3} title="Đồ lưu niệm" linkDi="/tat-ca-san-pham" />
                <CategorySelectItem image={imgs.chude4} title="Đồ dùng bằng gỗ" linkDi="/tat-ca-san-pham" />
            </div>
        </div>
    );
}

export default CategorySelect;