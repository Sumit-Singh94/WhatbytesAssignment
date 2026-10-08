export const products = [
  {
    id: "1",
    title: "Wireless Noise Cancelling Headphones",
    price: 129.99,
    category: "Electronics",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description:
      "Premium wireless headphones with immersive sound, active noise cancellation, and a comfortable over-ear design.",
  },
  {
    id: "2",
    title: "Minimal Leather Backpack",
    price: 79.99,
    category: "Fashion",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    description:
      "A stylish and practical leather backpack designed for everyday use, work, travel, and college.",
  },
  {
    id: "3",
    title: "Smart Watch Series",
    price: 199.99,
    category: "Electronics",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    description:
      "A modern smartwatch with fitness tracking, notifications, activity monitoring, and a vibrant display.",
  },
  {
    id: "4",
    title: "Classic Running Shoes",
    price: 89.99,
    category: "Footwear",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    description:
      "Lightweight running shoes with a comfortable sole and breathable upper for everyday training.",
  },
  {
    id: "5",
    title: "Modern Desk Lamp",
    price: 45.99,
    category: "Home",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    description:
      "A clean and modern desk lamp that adds focused lighting to your workspace while keeping the design minimal.",
  },
  {
    id: "6",
    title: "Mechanical Gaming Keyboard",
    price: 109.99,
    category: "Electronics",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    description:
      "Responsive mechanical keyboard with tactile switches, compact design, and comfortable key spacing.",
  },
  {
    id: "7",
    title: "Premium Cotton T-Shirt",
    price: 29.99,
    category: "Fashion",
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    description:
      "Soft premium cotton T-shirt with a comfortable fit suitable for everyday casual wear.",
  },
  {
    id: "8",
    title: "Ceramic Coffee Mug",
    price: 19.99,
    category: "Home",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80",
    description:
      "Minimal ceramic coffee mug with a durable finish and comfortable handle.",
  },
  {
    id: "9",
    title: "Everyday Casual Sneakers",
    price: 69.99,
    category: "Footwear",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
    description:
      "Comfortable casual sneakers designed for walking, commuting, and everyday use.",
  },
];

export const categories = [
  ...new Set(products.map((product) => product.category)),
];