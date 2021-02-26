var product = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        description: "A pair of warm, fuzzy socks",
        image: './img/vmSocks.jpg',
        inventory: '20',
        details: ["80% contton", "20% polyyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ],
        sizes: [" Large", "Medium", "Small"]
    }
})