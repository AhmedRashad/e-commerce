/*
    This is a helper component to build buttons 
    author : Mostafa Alsadawy.
*/
const Button = (props)=>{
    return (
        <div class="grid place-content-center">
        <button
          class="rounded border-2 border-transparent border-solid text-white bg-purple-700 hover:bg-transparent hover:text-purple-700 hover:border-purple-700 hover:border-2 mx-auto my-2 p-2"
        >
          {props.children}
        </button>
      </div>
    );
}

export default Button
