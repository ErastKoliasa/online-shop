class ProductList {
    constructor() {
        this.container = document.querySelector('.products-container');
        this.productsService = new ProductsService();
        this.renderProducts();
    }
    async convertCurrency() {
        let rate = await this.productsService.getCurrency()
        return rate
    }
    async renderProducts() {
        let rate = await this.convertCurrency();
        let productListDomString = '';
        const products = await this.productsService.getProducts();
        products.forEach(product => {
            productListDomString += this.createProductDomString(product, rate);
        });
        this.container.innerHTML = productListDomString;
        this.addEventListeners();
    }
    createProductDomString(product, rate) {
        return `<article class="card col-12 col-sm-6 col-md-4 col-lg-3">
                <img src="img/${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <a href="#" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#product-info-modal" data-id=${product.id}>Info</a>
                    <a href="#" class="btn btn-primary btn-buy" data-id=${product.id}> ${(product.price * rate ).toFixed(2)} Buy</a>
                </div>
        </article>`;
    }

    addEventListeners() {
        document.querySelectorAll('.btn-info').forEach(btn => {
            btn.addEventListener('click', this.showProductInfo.bind(this));
        });
        document.querySelectorAll('.btn-buy').forEach(btn => {
            btn.addEventListener('click', this.addProductToCart.bind(this));
        });
        document.querySelectorAll('.convert-currency').forEach(btn => {
            btn.addEventListener('click', this.renderProducts.bind(this));
        })
    }
    async showProductInfo(event) {
        const id = event.target.dataset.id;
        const product = await this.productsService.getProductById(id);
        const rate = await this.convertCurrency();
        const modal = document.querySelector('#product-info-modal');
        modal.querySelector('.modal-title').innerHTML = product.title;
        modal.querySelector('.product-image').src = `img/${product.image}`;
        modal.querySelector('.product-description').innerHTML = product.description;
        modal.querySelector('.product-price').innerHTML = (product.price * rate).toFixed(2);
        modal.querySelector('.btn-buy').dataset.id = product.id;
    }
    addProductToCart(event) {
        const id = event.target.dataset.id;
        const cart = new Cart();
        cart.addProduct(id);
        window.showAlert('Added to cart!');
    }
}
new ProductList();
