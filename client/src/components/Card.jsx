
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
    <Link to="/">
      <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4 z-10">
        <div class="group shadow rounded overflow-hidden relative ">
          <div class="absolute z-0 left-0 top-0 w-full h-full hidden group-hover:block group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-purple-400 group-hover:opacity-25"></div>
          <img class="block z-0 w-full" src={props.img} />
          <div class="z-10 flex justify-between p-5">
            <div>
              <h3 class="text-xl font-bold">{props.name}</h3>
              <span class="text-sm text-gray-600">{props.desc}</span>
            </div>
            <p class="text-gray-900 font-bold">{props.price}$</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
