function fetchProduct() {
    return fetch('https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/tshirt-eshop-v1/products.json')
        .then((response) =>
            response.json()
        );
}
export { fetchProduct };