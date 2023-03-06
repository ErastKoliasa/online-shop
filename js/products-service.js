class ProductsService {
    constructor() {
        if (!ProductsService._instance) ProductsService._instance = this;
        return ProductsService._instance;
    }

    async getProducts() {
        if (!this.products) {
            this.products = await( await fetch('api/products.json') ).json();
        }
        return this.products;
    }

    async getProductById(id) {
        const products = await this.getProducts();
        return products.find(product => product.id === id);
    }

    async getCurrency() {
        const currency = document.querySelector(".currency");
        const currencyValue = currency.value;
        const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        const currencies = await response.json();
        const rate = currencies.rates[currencyValue];
        return rate;
    }
}
