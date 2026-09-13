const state = {
    cart: [],
    activeCategory: "All"
};

const $ = (id) => document.getElementById(id);

const money = (amount) => {
    return `${SITE_CONFIG.CURRENCY}${Number(amount).toLocaleString("en-BD")}`;
};

function getCategories() {
    return [
        "All",
        ...new Set(
            SITE_CONFIG.PRODUCTS.map((product) => product.category)
        )
    ];
}

function getProduct(id) {
    return SITE_CONFIG.PRODUCTS.find(
        (product) => product.id === id
    );
}

function renderCategories() {
    const tabs = $("tabs");

    tabs.innerHTML = getCategories()
        .map((category) => {
            const active =
                category === state.activeCategory
                    ? "active"
                    : "";

            return `
                <button
                    class="category-tab ${active}"
                    type="button"
                    data-category="${category}"
                >
                    ${category}
                </button>
            `;
        })
        .join("");

    tabs.querySelectorAll(".category-tab").forEach((button) => {
        button.addEventListener("click", () => {
            state.activeCategory = button.dataset.category;

            renderCategories();
            renderMenu();
        });
    });
}

function renderMenu() {
    const grid = $("menuGrid");

    const products =
        state.activeCategory === "All"
            ? SITE_CONFIG.PRODUCTS
            : SITE_CONFIG.PRODUCTS.filter(
                  (product) =>
                      product.category === state.activeCategory
              );

    if (!products.length) {
        grid.innerHTML = `
            <div class="empty-menu">
                No items are available in this category.
            </div>
        `;

        return;
    }

    grid.innerHTML = products
        .map((product) => {
            const badge = product.badge
                ? `
                    <span class="menu-badge">
                        ${product.badge}
                    </span>
                `
                : "";

            return `
                <article class="menu-card">
                    <div class="menu-photo">
                        ${badge}

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                            loading="lazy"
                        >
                    </div>

                    <div class="menu-info">
                        <h3>${product.name}</h3>

                        <p>
                            ${product.desc}
                        </p>

                        <div class="menu-buy">
                            <strong class="menu-price">
                                ${money(product.price)}
                            </strong>

                            <button
                                class="add-button"
                                type="button"
                                data-add="${product.id}"
                                aria-label="Add ${product.name}"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </article>
            `;
        })
        .join("");

    grid.querySelectorAll("[data-add]").forEach((button) => {
        button.addEventListener("click", () => {
            addToCart(Number(button.dataset.add));
        });
    });
}

function addToCart(id) {
    const existing = state.cart.find(
        (item) => item.id === id
    );

    if (existing) {
        existing.quantity += 1;
    } else {
        state.cart.push({
            id,
            quantity: 1
        });
    }

    renderCart();
    openCart();
}

function changeQuantity(id, amount) {
    const item = state.cart.find(
        (cartItem) => cartItem.id === id
    );

    if (!item) {
        return;
    }

    item.quantity += amount;

    if (item.quantity <= 0) {
        state.cart = state.cart.filter(
            (cartItem) => cartItem.id !== id
        );
    }

    renderCart();
}

function getCartTotal() {
    return state.cart.reduce((total, item) => {
        const product = getProduct(item.id);

        return total + product.price * item.quantity;
    }, 0);
}

function getCartCount() {
    return state.cart.reduce(
        (count, item) => count + item.quantity,
        0
    );
}

function renderCart() {
    $("cartCount").textContent = getCartCount();
    $("cartTotal").textContent = money(getCartTotal());

    const checkoutButton = $("checkoutOpen");

    checkoutButton.disabled = state.cart.length === 0;

    if (!state.cart.length) {
        $("cartItems").innerHTML = `
            <div class="empty-menu">
                Your order is empty.
                <br>
                Add something delicious ☕
            </div>
        `;

        return;
    }

    $("cartItems").innerHTML = state.cart
        .map((item) => {
            const product = getProduct(item.id);

            return `
                <div class="cart-row">
                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <div>
                        <h4>${product.name}</h4>

                        <div class="quantity">
                            <button
                                type="button"
                                data-minus="${product.id}"
                                aria-label="Decrease quantity"
                            >
                                −
                            </button>

                            <span>${item.quantity}</span>

                            <button
                                type="button"
                                data-plus="${product.id}"
                                aria-label="Increase quantity"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <strong>
                        ${money(
                            product.price * item.quantity
                        )}
                    </strong>
                </div>
            `;
        })
        .join("");

    $("cartItems")
        .querySelectorAll("[data-minus]")
        .forEach((button) => {
            button.addEventListener("click", () => {
                changeQuantity(
                    Number(button.dataset.minus),
                    -1
                );
            });
        });

    $("cartItems")
        .querySelectorAll("[data-plus]")
        .forEach((button) => {
            button.addEventListener("click", () => {
                changeQuantity(
                    Number(button.dataset.plus),
                    1
                );
            });
        });
}

function openCart() {
    $("cartDrawer").classList.add("open");
    $("cartDrawer").setAttribute("aria-hidden", "false");

    $("overlay").style.display = "block";
    $("overlay").setAttribute("aria-hidden", "false");
}

function closeCart() {
    $("cartDrawer").classList.remove("open");
    $("cartDrawer").setAttribute("aria-hidden", "true");

    $("overlay").style.display = "none";
    $("overlay").setAttribute("aria-hidden", "true");
}

function openCheckout() {
    if (!state.cart.length) {
        return;
    }

    closeCart();

    $("checkoutModal").classList.add("show");
    $("checkoutModal").setAttribute("aria-hidden", "false");
}

function closeCheckout() {
    $("checkoutModal").classList.remove("show");
    $("checkoutModal").setAttribute("aria-hidden", "true");
}

$("cartOpen").addEventListener("click", openCart);
$("cartClose").addEventListener("click", closeCart);
$("overlay").addEventListener("click", closeCart);
$("checkoutOpen").addEventListener(
    "click",
    openCheckout
);
$("checkoutClose").addEventListener(
    "click",
    closeCheckout
);

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
        return;
    }

    closeCart();
    closeCheckout();
});

$("checkoutForm").addEventListener(
    "submit",
    (event) => {
        event.preventDefault();

        if (!state.cart.length) {
            return;
        }

        const formData = new FormData(event.currentTarget);

        const table = String(
            formData.get("table") || ""
        ).trim();

        const name = String(
            formData.get("name") || ""
        ).trim();

        const note = String(
            formData.get("note") || ""
        ).trim();

        if (!table) {
            return;
        }

        const orderNumber =
            "CC-" +
            Date.now().toString().slice(-6);

        const itemLines = state.cart.map((item) => {
            const product = getProduct(item.id);
            const subtotal =
                product.price * item.quantity;

            return (
                `• ${product.name} × ${item.quantity}` +
                ` — ${money(subtotal)}`
            );
        });

        const message = [
            "🍽️ *YOSHI — NEW TABLE ORDER*",
            `Order: ${orderNumber}`,
            `🪑 *Table: ${table}*`,
            "",
            ...itemLines,
            "",
            `💰 *TOTAL: ${money(getCartTotal())}*`,
            name ? `👤 Name: ${name}` : "",
            note ? `📝 Note: ${note}` : "",
            "",
            "Please confirm this order."
        ]
            .filter(Boolean)
            .join("\n");

        const whatsappNumber =
            String(SITE_CONFIG.WHATSAPP).replace(
                /\D/g,
                ""
            );

        const whatsappUrl =
            `https://wa.me/${whatsappNumber}` +
            `?text=${encodeURIComponent(message)}`;

        window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
        );

        state.cart = [];

        renderCart();
        closeCheckout();

        event.currentTarget.reset();
    }
);

renderCategories();
renderMenu();
renderCart();
