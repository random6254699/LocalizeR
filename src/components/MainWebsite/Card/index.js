import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Card = ({ title, desc, price, type, rating,img }) => {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" alt={title} src={img} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        <Link to={`/products/${title}`}>{title}</Link>
                    </div>
                   
                    <div  className="flex items-center">
                        {Array.from({ length: rating }, (_, index) => (
                            <div title={"Rating:"+rating} key={index}>
                                <div > <FaStar  color={index < rating ? "yellow" : ""}/></div>
                            </div>
                        ))}
                    </div>
                    <div className="font-bold text-orange-400  mb-2">{price}</div>
                    <p className="text-gray-700 text-base " style={{
                        // whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxHeight:"50px"
                       
                    }}>
                        {desc}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <Link to={`/service-category/${type}`}> #{type}</Link>
                       </span>
                </div>
            </div>
        </>
    )
}

export default Card;