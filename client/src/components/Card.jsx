
import { Link } from "react-router-dom";

/*
    This is a helper component to make Cards with images 
    this button component expect these props
    -img  / link to image file.
    -name / the name of the product.
    -desc / small description for the product.

    author : Mostafa Alsadawy.
*/

const Card = (props) => {
  return (
    // link to the product page with the product id.
    <Link to={`/overview/${props.product._id}`}>
      <div class="group shadow rounded overflow-hidden relative h-full ">
        <div class="absolute z-0 left-0 top-0 w-full h-full hidden group-hover:block group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-purple-400 group-hover:opacity-25"></div>
        <div className="grid place-items-center">
          <img class="block z-0 w-36 h-48" src={props.product.image[0]} />
        </div>
        <div class="z-10 flex justify-between p-5">
          <div>
            <h3 class="text-xl font-bold">{props.product.name}</h3>
            <span class="text-sm text-gray-600">
              {props.product.description}
            </span>
          </div>
          <p class="text-gray-900 font-bold">{props.product.price}$</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
