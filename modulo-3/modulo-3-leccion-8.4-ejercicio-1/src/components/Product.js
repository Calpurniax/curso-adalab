import { Link } from "react-router-dom";


const Product = ({ each }) => {
    return (
        <li className="all__list__element" key={each.id}>
            <article className="all__list__article" id={each.id}>
                <img src={each.imageUrl} alt={each.description} className="all__list__image"></img>
                <h2 className="all__list__title">{each.name}</h2>
                <p className="all__list__price">{each.price}</p>
                <Link to={`/ProductDetail/${each.id}`} className="all__list__link">Ver detalle del producto</Link>
            </article>
        </li >
    )
};
export default Product