import { useParams, useNavigate } from "react-router-dom";
import { mockProducts } from "../Components/MockProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { useState, useEffect } from "react";
import { useCart } from "./CartContext";

// Modal Component
const Modal = ({ onClose, onGoToCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <p className="text-lg font-semibold mb-4">Item added to cart!</p>
        <div className="flex flex-row gap-4">
          <button
            onClick={onGoToCart}
            className="bg-black text-white py-1 px-2 rounded"
          >
            Go to Cart
          </button>
          <button
            onClick={onClose}
            className="bg-transparent border px-2 py-1 border-gray-500 rounded"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQty, setSelectedQty] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const product = mockProducts.find((item) => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  const handleAddCart = () => {
    if (!product) return;
    addToCart(product, selectedSize, selectedQty);
    setShowModal(true);
  };

  if (!product) {
    return <p className="text-center mt-10">Product not found.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
      {/* Left: Image Section */}
      <div>
        <Swiper
          modules={[Navigation, Pagination, Thumbs]}
          pagination={{ clickable: true }}
          thumbs={{ swiper: thumbsSwiper }}
          className="mb-6"
        >
          {product.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Product image ${index + 1}`}
                className="mx-auto md:h-[500px] object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          spaceBetween={10}
          watchSlidesProgress
        >
          {product.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-20 object-contain border border-gray-300 rounded"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right: Product Info */}
      <div className="flex flex-col justify-center">
        <h2 className="text-sm uppercase text-gray-500 mb-1">
          Outfit Haven Apparel
        </h2>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-xl font-semibold mb-4">
          ₱{product.price.toLocaleString()}
        </p>

        <div className="mb-4">
          <select
            className="w-32 border border-gray-300 p-2 rounded"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {product.sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Qty</label>
          <select
            className="w-20 border border-gray-300 p-2 rounded"
            value={selectedQty}
            onChange={(e) => setSelectedQty(parseInt(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleAddCart}
          className="border border-black px-6 py-3 mt-2 hover:bg-black hover:text-white transition w-1/2 text-sm"
        >
          Add To Cart
        </button>

        {/* Description */}
        <div className="mt-6 text-sm text-gray-700 leading-relaxed">
          <p>
            <strong>Airmax 95 🚀☁️</strong>
          </p>
          <p className="mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            repellendus vero explicabo animi corporis in, veniam minus ab quis
            quod et quibusdam officiis aperiam eaque labore inventore earum
            error omnis.
          </p>
          <p className="mt-2">
            <strong>Colorway:</strong> Triple Black
            <br />
            <strong>Sizes:</strong> 42-46 us
          </p>
          <p className="mt-4 text-xs text-gray-500">
            * Product color may vary due to photographic lighting sources,
            post-processing editing or your monitor settings.
            <br />
            * Depending on the fabric’s properties, there may be an error of
            approximately ½ inch to 1 inch (+/-).
            <br />* The measurements may have minor variations because of the
            production process.
          </p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          onGoToCart={() => navigate("/cart")}
        />
      )}
    </div>
  );
};

export default ProductDetail;
