document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const productList = document.getElementById('productList');

    // Sample product data with images and descriptions
    const products = [
        {
            name: 'High-Quality Widget',
            img: 'https://via.placeholder.com/150?text=Widget',
            desc: 'This widget is made from high-quality materials and is designed to last for years.'
        },
        {
            name: 'Durable Gadget',
            img: 'https://via.placeholder.com/150?text=Gadget',
            desc: 'A gadget built to withstand tough conditions and heavy usage.'
        },
        {
            name: 'Versatile Tool',
            img: 'https://via.placeholder.com/150?text=Tool',
            desc: 'A multi-purpose tool that can handle a variety of tasks efficiently.'
        },
        {
            name: 'Innovative Device',
            img: 'https://via.placeholder.com/150?text=Device',
            desc: 'Cutting-edge technology in a compact and user-friendly device.'
        },
        {
            name: 'Premium Accessory',
            img: 'https://via.placeholder.com/150?text=Accessory',
            desc: 'An accessory that adds both style and functionality to your setup.'
        },
        {
            name: 'Reliable Equipment',
            img: 'https://via.placeholder.com/150?text=Equipment',
            desc: 'Equipment designed for reliability and performance in demanding environments.'
        },
        {
            name: 'Advanced Solution',
            img: 'https://via.placeholder.com/150?text=Solution',
            desc: 'An advanced solution to streamline your workflow and increase productivity.'
        },
        {
            name: 'Compact Unit',
            img: 'https://via.placeholder.com/150?text=Unit',
            desc: 'A compact unit that offers big performance in a small package.'
        },
        {
            name: 'Smart Technology',
            img: 'https://via.placeholder.com/150?text=Technology',
            desc: 'Smart technology that adapts to your needs and integrates seamlessly with other devices.'
        },
        {
            name: 'Essential Item',
            img: 'https://via.placeholder.com/150?text=Item',
            desc: 'An essential item that provides functionality and convenience in everyday use.'
        }
    ];

    // Display products with images and descriptions
    function displayProducts(productsToShow) {
        productList.innerHTML = productsToShow.map(product => `
            <div class="product">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.desc}</p>
            </div>
        `).join('');
    }

    // Show all products on page load
    displayProducts(products);

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        displayProducts(filteredProducts);
    });
});
