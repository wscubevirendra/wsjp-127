import express from "express";
const server = express();

let products = [
    {
        id: 1,
        title: "iPhone 15 Pro",
        category: "Mobile",
        price: 129999,
        discount: 10,
        rating: 4.8,
        stock: 25,
        brand: "Apple",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
        description: "Latest iPhone with A17 Pro chip and premium camera system",
        tags: ["smartphone", "apple", "5G"],
        isFeatured: true
    },
    {
        id: 2,
        title: "Samsung Galaxy S24",
        category: "Mobile",
        price: 89999,
        discount: 15,
        rating: 4.6,
        stock: 40,
        brand: "Samsung",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c",
        description: "Flagship Android smartphone with AI features",
        tags: ["android", "samsung", "5G"],
        isFeatured: true
    },
    {
        id: 3,
        title: "MacBook Pro M3",
        category: "Laptop",
        price: 199999,
        discount: 8,
        rating: 4.9,
        stock: 15,
        brand: "Apple",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        description: "Powerful laptop for developers and creators",
        tags: ["laptop", "coding", "apple"],
        isFeatured: true
    },
    {
        id: 4,
        title: "Dell XPS 15",
        category: "Laptop",
        price: 149999,
        discount: 12,
        rating: 4.5,
        stock: 20,
        brand: "Dell",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
        description: "Premium Windows laptop with high performance",
        tags: ["windows", "laptop", "office"],
        isFeatured: false
    },
    {
        id: 5,
        title: "Sony WH-1000XM5",
        category: "Headphones",
        price: 29999,
        discount: 20,
        rating: 4.7,
        stock: 60,
        brand: "Sony",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        description: "Noise cancelling wireless headphones",
        tags: ["audio", "bluetooth", "music"],
        isFeatured: true
    },
    {
        id: 6,
        title: "Nike Air Max",
        category: "Shoes",
        price: 12999,
        discount: 25,
        rating: 4.4,
        stock: 100,
        brand: "Nike",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        description: "Comfortable running shoes",
        tags: ["shoes", "sports", "fashion"],
        isFeatured: false
    },
    {
        id: 7,
        title: "Smart Watch Series 9",
        category: "Watch",
        price: 45999,
        discount: 18,
        rating: 4.6,
        stock: 30,
        brand: "Apple",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        description: "Smart watch with health tracking features",
        tags: ["watch", "fitness", "smart"],
        isFeatured: true
    },
    {
        id: 8,
        title: "Canon EOS Camera",
        category: "Camera",
        price: 75999,
        discount: 10,
        rating: 4.7,
        stock: 12,
        brand: "Canon",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
        description: "Professional DSLR camera for photography",
        tags: ["camera", "photo", "dslr"],
        isFeatured: false
    },
    {
        id: 9,
        title: "Gaming Keyboard RGB",
        category: "Accessories",
        price: 5999,
        discount: 30,
        rating: 4.3,
        stock: 75,
        brand: "Logitech",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        description: "Mechanical keyboard with RGB lighting",
        tags: ["gaming", "keyboard", "pc"],
        isFeatured: false
    },
    {
        id: 10,
        title: "PlayStation 5",
        category: "Gaming",
        price: 54999,
        discount: 5,
        rating: 4.9,
        stock: 10,
        brand: "Sony",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
        description: "Next generation gaming console",
        tags: ["gaming", "console", "playstation"],
        isFeatured: true
    }
];

server.get("/product", (req, res) => {
 if (req.query.id) {
        const product = products.find((item) => item.id == req.query.id)
        return res.status(200).json({
            product,
            message: "Product Data Find",
        })
    }

    res.status(200).json({
        products,
        message: "Product Data Find",
    })

})

server.get("/",(req,res)=>{
    res.status(200).json("Server is healthy")
})


server.listen(5000, () => {
    console.log("Server is running 5000")
})
