
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
    <div className="w-full shadow rounded-lg p-2 m-2 flex">
      {props.children}
    </div>
  );
};

export default Card;
