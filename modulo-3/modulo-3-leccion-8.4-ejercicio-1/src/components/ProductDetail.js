import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetail = ({ products }) => {
    const { id } = useParams()
    const findProduct = products.find(each => each.id === id)
    function tallas() {
        return findProduct.sizes.map((each, index) => {
            return <span key={index}>{each}, </span>
        })
    }
    return (
        <article className="detail__article" id={findProduct.id}>
            <h2 className="detail__article__title">{findProduct.name}</h2>
            <img src={findProduct.imageUrl} alt={findProduct.description} className="all__list__image"></img>
            <span>{findProduct.description}</span>
            <p className="detail__article__price">{findProduct.price}</p>
            <p>tallas disponibles:{tallas()}</p>
            <Link to='/'>Volver a la página principal</Link>
        </article>

    )
};
export default ProductDetail