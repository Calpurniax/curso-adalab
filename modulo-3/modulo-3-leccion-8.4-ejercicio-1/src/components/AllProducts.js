import Product from './Product'
const AllProducts = ({ products }) => {
    function renderProduct() {
        return products.map((each, index) => {
            return < Product key={index} each={each} />//tienes que poner 2 return pq tienes que devolver un componente o un HTML
        })
    }
    return (
        <ul className="all__list">
            {renderProduct()}
        </ul>
    )
};
export default AllProducts