const SITE_CONFIG = {
    BRAND_NAME: "Yoshi",
    TAGLINE: "Chinese • Thai Restaurant",
    WHATSAPP: "+8801700000000",
    CURRENCY: "৳",

    PRODUCTS: [
        {
            id: 1,
            name: "Crispy Spring Rolls",
            category: "Starters",
            price: 180,
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
            desc: "Golden, crisp rolls served with our house sweet-chili dip.",
            badge: "Popular"
        },
        {
            id: 2,
            name: "Chicken Satay",
            category: "Starters",
            price: 260,
            image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&w=900&q=85",
            desc: "Char-grilled chicken skewers with satay sauce.",
            badge: ""
        },
        {
            id: 3,
            name: "Prawn Tempura",
            category: "Starters",
            price: 380,
            image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=85",
            desc: "Light, crunchy prawns with a bright dipping sauce.",
            badge: ""
        },
        {
            id: 4,
            name: "Thai Tom Yum Soup",
            category: "Soups",
            price: 320,
            image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=900&q=85",
            desc: "Aromatic hot-and-sour broth with herbs and prawns.",
            badge: "Signature"
        },
        {
            id: 5,
            name: "Hot & Sour Chicken Soup",
            category: "Soups",
            price: 280,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=85",
            desc: "Rich, warming soup with chicken, mushroom and vegetables.",
            badge: ""
        },
        {
            id: 6,
            name: "Kung Pao Chicken",
            category: "Chinese",
            price: 420,
            image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=85",
            desc: "Wok-tossed chicken, cashews, dried chili and vegetables.",
            badge: "Popular"
        },
        {
            id: 7,
            name: "Szechuan Beef",
            category: "Chinese",
            price: 520,
            image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
            desc: "Tender beef in a bold Szechuan pepper and chili glaze.",
            badge: ""
        },
        {
            id: 8,
            name: "Honey Chili Chicken",
            category: "Chinese",
            price: 390,
            image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=85",
            desc: "Crispy chicken glazed with honey, chili and sesame.",
            badge: ""
        },
        {
            id: 9,
            name: "Thai Basil Chicken",
            category: "Thai",
            price: 420,
            image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=900&q=85",
            desc: "Fragrant basil, chili and tender chicken wok-fried to order.",
            badge: "Signature"
        },
        {
            id: 10,
            name: "Thai Green Curry",
            category: "Thai",
            price: 450,
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
            desc: "Creamy coconut curry with aromatic Thai herbs.",
            badge: ""
        },
        {
            id: 11,
            name: "Pad Thai Prawns",
            category: "Thai",
            price: 480,
            image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=900&q=85",
            desc: "Classic rice noodles with prawns, egg, peanuts and lime.",
            badge: "Popular"
        },
        {
            id: 12,
            name: "Chili Garlic Prawns",
            category: "Thai",
            price: 520,
            image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=85",
            desc: "Juicy prawns finished with garlic, chili and fresh herbs.",
            badge: ""
        },
        {
            id: 13,
            name: "Chicken Fried Rice",
            category: "Rice & Noodles",
            price: 360,
            image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
            desc: "Fragrant wok-fried rice with chicken, egg and vegetables.",
            badge: ""
        },
        {
            id: 14,
            name: "Yoshi Special Fried Rice",
            category: "Rice & Noodles",
            price: 460,
            image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
            desc: "Our signature fried rice with premium wok-tossed toppings.",
            badge: "Signature"
        },
        {
            id: 15,
            name: "Singapore Noodles",
            category: "Rice & Noodles",
            price: 390,
            image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=900&q=85",
            desc: "Curry-scented noodles with vegetables, egg and chicken.",
            badge: ""
        },
        {
            id: 16,
            name: "Wok Hakka Noodles",
            category: "Rice & Noodles",
            price: 380,
            image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=85",
            desc: "Silky noodles tossed with fresh vegetables and house sauce.",
            badge: ""
        },
        {
            id: 17,
            name: "Crispy Chicken with Rice",
            category: "Main Course",
            price: 480,
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
            desc: "Crispy chicken served with fragrant rice and vegetables.",
            badge: ""
        },
        {
            id: 18,
            name: "Grilled Fish Thai Style",
            category: "Main Course",
            price: 580,
            image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?auto=format&fit=crop&w=900&q=85",
            desc: "Fresh grilled fish with lime, chili and Thai herbs.",
            badge: ""
        },
        {
            id: 19,
            name: "Classic Cheesecake",
            category: "Desserts",
            price: 260,
            image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85",
            desc: "Silky cheesecake with a buttery biscuit base.",
            badge: ""
        },
        {
            id: 20,
            name: "Mango Sticky Rice",
            category: "Desserts",
            price: 280,
            image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
            desc: "Sweet ripe mango with coconut sticky rice.",
            badge: "New"
        },
        {
            id: 21,
            name: "Thai Milk Tea",
            category: "Drinks",
            price: 180,
            image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85",
            desc: "Chilled Thai tea with creamy milk and aromatic spices.",
            badge: ""
        },
        {
            id: 22,
            name: "Fresh Lime Mojito",
            category: "Drinks",
            price: 220,
            image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=85",
            desc: "Refreshing lime, mint and sparkling citrus.",
            badge: ""
        }
    ]
};
