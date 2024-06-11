import imgs from "../assets/imgs";


export const productData = [
  {
    id: "SUPLO-04A-1",
    name: "Chậu cây để bàn",
    price: 70000,
    priceSale: null,
    image: `.${imgs.product1}`,
    link: "/",
    color: null,
    sharp: null,
    material: null,
    brand: "Việt Nam",
    brandSlug: "viet-nam",
    category: "Đồ trang trí ",
    categorySlug: "do-trang-tri"
  },
  {
    id: "SUPLO-03-2",
    name: "Cốc uống nước",
    price: 200000,
    priceSale: 300000,
    image: `.${imgs.product2}`,
    link: "/",
    color: [
      {
        id: 1,
        name: "Tư nhiên",
        outOfStock: true
      },
      {
        id:2,
        name: "Nâu",
        outOfStock: false
      }
    ],
    sharp: [
      {
        id: 1,
        name: "Cốc trơn",
        outOfStock: false
      },
      {
        id: 2,
        name: "Có viền",
        outOfStock: false
      }
    ],
    material: null,
    brand: "Việt Nam",
    brandSlug: "viet-nam",
    category: "Đồ Gia Dụng",
    categorySlug: "do-gia-dung"
  },
  {
    id: "SUPLO-06A-1",
    name: "Đế lót ly",
    price: 50000,
    priceSale: null,
    image: `.${imgs.product3}`,
    link: "/",
    color: null,
    sharp: null,
    material: null,
    brand: "Việt Nam",
    brandSlug: "viet-nam",
    category: "Đồ Gia Dụng",
    categorySlug: "do-gia-dung"
  },
  {
    id: "SUPLO-01-2",
    name: "Đồng hồ gỗ 4 số",
    price: 300000,
    priceSale: 350000,
    image: `.${imgs.product4}`,
    link: "/",
    color: [
      {
        id: 1,
        name: "Mộc",
        outOfStock: true
      },
      {
        id: 2,
        name: "Nâu",
        outOfStock: false
      }
    ],
    sharp: [
      {
        id: 1,
        name: "Tròn",
        outOfStock: true
      },
      {
        id: 2,
        name: "Có chân",
        outOfStock: false
      }
    ],
    material: null,
    brand: "Trung Quốc",
    brandSlug: "trung-quoc",
    category: "Đồ trang trí",
    categorySlug: "do-trang-tri"
  },
  {
    id: "SUPLO-012A-1",
    name: "Đồng hồ tình yêu",
    price: 700000,
    priceSale: 890000,
    image: `.${imgs.product5}`,
    link: "/",
    color: [
      {
        id: 1,
        name: "Mộc",
        outOfStock: false
      }
    ],
    sharp: [
      {
        id: 1,
        name: "Trái tim ",
        outOfStock: false
      },
      {
        id: 2,
        name: "Vòng tròn",
        outOfStock: false
      }
    ],
    material: [
      {
        id: 1,
        name: "Gỗ",
        outOfStock: false
      }
    ],
    brand: "Trung Quốc",
    brandSlug: "trung-quoc",
    category: "Đồ gia dụng ",
    categorySlug: "do-gia-dung"
  },
  {
    id: "SUPLO-05A-1",
    name: "Xe gỗ tập đi cho trẻ",
    price: 250000,
    priceSale: 300000,
    image: `.${imgs.product6}`,
    link: "/",
    color: null,
    sharp: null,
    material: null,
    brand: "Việt Nam",
    brandSlug: "viet-nam",
    category: "Đồ Chơi",
    categorySlug: "do-choi"
  },
  {
    id: "SUPLO-07A-1",
    name: "Giá để rượu vang",
    price: 150000,
    priceSale: null,
    image: `.${imgs.product7}`,
    link: "/",
    color: [
      {
        id: 1,
        name: "Màu tư nhiên",
        outOfStock: false
      },
    ],
    sharp: [
      {
        id: 1,
        name: "Treo tường",
        outOfStock: false
      },
      {
        id: 2,
        name: "Để bàn",
        outOfStock: true
      }
    ],
    material: null,
    brand: "Việt Nam",
    brandSlug: "viet-nam",
    category: "Đồ Gia Dụng",
    categorySlug: "do-gia-dung"
  },
  {
    id: "SUPLO-11A-1",
    name: "Ngựa gỗ trẻ em",
    price: 2700000,
    priceSale: null,
    image: `.${imgs.product8}`,
    link: "/",
    color: [
      {
        id: 1,
        name: "Đỏ",
        outOfStock: false
      },
      {
        id: 2,
        name: "Vàng",
        outOfStock: false
      },
    ],
    sharp: null,
    material: null,
    brand: "Trung Quốc",
    brandSlug: "trung-quoc",
    category: "Đồ chơi",
    categorySlug: "do-choi"
  },
];
