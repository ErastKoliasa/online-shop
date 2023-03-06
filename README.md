<h1> Online Shop </h1>

**To test this application, you need to start the web server with the command "npx serve".**

The "online shop" application is made using HTML, CSS, JS, Bootstrap.
The site contains a header that shows the title, menu and clock, then a slider with photos of products, then an input field and a button for converting the price of products into different currencies, then a list of products.
To convert the price to another currency, enter the name of the currency in capital letters (for example, USD, UAH, EUR) in the input field and click the "convert" button, the default currency is USD.
To get the exchange rate, a fetch request is sent to a third-party source <https://api.exchangerate-api.com/v4/latest/USD>.
Product data is stored in JSON format in the products.json file. To display products on the page, a fetch request is sent to the file.
By clicking the "info" button, a modal window will be displayed where you can view information about the selected product.
By clicking the "buy" button, the selected product will be added to the cart and a modal window will be displayed to inform you that the product has been successfully added to the cart.
The shopping cart displays the product you added, the price of the product, the quantity of the product, the total price and a form for filling in the data (your name, your email). The number of products can be increased and decreased by pressing the "+" and "-" buttons, respectively, and the total price will automatically change.
If the form is not filled out correctly, a modal window will be displayed asking you to fill out the form correctly.
After filling out the form correctly and clicking the "order" button, a fetch request is made using the POST method to the auxiliary resource <https://formspree.io>. If the order is successful, a modal window with a thank you message is displayed.