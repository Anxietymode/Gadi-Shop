import shirt from "../assets/d40da9a3a7234235e66d6695d9d7098fc3289872 (1).png";
import jeans from "../assets/769b9d60ff941dde9bc0e54431b8d8fe3182f5e9 (1).png";
import shir2 from "../assets/bbf411c25fc84f87eeac1062fbe47f49c192d4f2 (1).png";
import shirt3 from "../assets/image 10.png";
import shirt4 from "../assets/Frame 32.png";
import shirt5 from "../assets/Frame 33.png";
import shorts from "../assets/Frame 34.png";
import jeans2 from "../assets/Frame 38.png";

const products = [
  {
    id: "1",
    title: "T-shirt with Tape Details",
    price: 120,
    oldPrice: null,
    discount: null,
    rating: "4.5/5",
    image: shirt,
    section: "new",
  },
  {
    id: "2",
    title: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    discount: "-20%",
    rating: "3.5/5",
    image: jeans,
    section: "new",
  },
  {
    id: "3",
    title: "Checkered Shirt",
    price: 180,
    oldPrice: null,
    discount: null,
    rating: "4.5/5",
    image: shir2,
    section: "new",
  },
  {
    id: "4",
    title: "Sleeve Striped T-shirt",
    price: 130,
    oldPrice: 160,
    discount: "-30%",
    rating: "4.5/5",
    image: shirt3,
    section: "new",
  },
  {
    id: "5",
    title: "Vertical Striped Shirt",
    price: 212,
    oldPrice: 232,
    discount: "-20%",
    rating: "5.0/5",
    image: shirt4,
    section: "top",
  },
  {
    id: "6",
    title: "Courage Graphic T-shirt",
    price: 145,
    oldPrice: null,
    discount: null,
    rating: "4.0/5",
    image: shirt5,
    section: "top",
  },
  {
    id: "7",
    title: "Loose Fit Bermuda Shorts",
    price: 80,
    oldPrice: null,
    discount: null,
    rating: "3.0/5",
    image: shorts,
    section: "top",
  },
  {
    id: "8",
    title: "Faded Skinny Jeans",
    price: 210,
    oldPrice: null,
    discount: null,
    rating: "4.5/5",
    image: jeans2,
    section: "top",
  },
];

export default products;
