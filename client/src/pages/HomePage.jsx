import NavBar from "../components/NavBar/NavBar";
import TopStrip from "../components/topStrip";
import Header from "../components/header"
import FeaturesSection from "../components/featuersSection"
import Footer from "../components/footer"
import CardList from "../components/cardList"
import { useSelector } from "react-redux";


// const products=[
//   {
//     id:1,
//     name:"Mobile",
//     image:[
//       "/images/image-1649963347264.jpg"
//     ],
//     description: "lorem sdfjlkds jflkfdsa ;ldsajf ldsakjf;ldsjflkds jfkdsjfpoids jfdsk"
//   },
//   {
//     id:2,
//     name:"Mobile",
//     image:[
//       "/images/image-1649963347264.jpg"
//     ],
//     description: "lorem sdfjlkds jflkfdsa ;ldsajf ldsakjf;ldsjflkds jfkdsjfpoids jfdsk"
//   },
//   {
//     id:3,
//     name:"Mobile",
//     image:[
//       "/images/image-1649963347264.jpg"
//     ],
//     description: "lorem sdfjlkds jflkfdsa ;ldsajf ldsakjf;ldsjflkds jfkdsjfpoids jfdsk"
//   },
//   {
//     id:4,
//     name:"Mobile",
//     image:[
//       "/images/image-1649963347264.jpg"
//     ],
//     description: "lorem sdfjlkds jflkfdsa ;ldsajf ldsakjf;ldsjflkds jfkdsjfpoids jfdsk"
//   },
//   {
//     id:5,
//     name:"Mobile",
//     image:[
//       "/images/image-1649963347264.jpg"
//     ],
//     description: "lorem sdfjlkds jflkfdsa ;ldsajf ldsakjf;ldsjflkds jfkdsjfpoids jfdsk"
//   },
// ]

const HomePage = () => {
  let { products } = useSelector((state) => state.product);
  //TODO : need to fetched probaly
  products = products.slice(0,5);

  return (
    <>
    <TopStrip offer="Ramadan 50% offer"/>
    <NavBar/>
    <Header/>
    <div className=" mx-auto w-[80vw] h-1 bg-indigo-500 dark:bg-white my-4 md:my-8"></div>
    <CardList products={products} />
    <div className=" mx-auto w-[80vw] h-1 bg-indigo-500 dark:bg-white my-4 md:my-8"></div>
    <FeaturesSection/>
    
    <Footer/>
    </>
  );
};
export default HomePage;

// const ProductsSection = (props) => {
//   return (
//     <div>
//       <div className="inline-block">
//         <div>
//           <h2 className="inline-block text-lg font-bold text-gray-700">
//             {props.title}
//           </h2>
//           <span className="w-full h-4 bg-primary" />
//         </div>
//       </div>
//       <div className="grid grid-cols-1 xs:grid-col-2 md grid-cols-3">
//         <Card product={props.product} />
//       </div>
//     </div>
//   );
// };

// const CategorySection = (props) => {
//   return (
//     <>
//       {" "}
//       <div>
//         <div className="inline-block">
//           <div title={props.nam}>
//             <h2 className="inline-block text-lg font-bold text-gray-700">
//               Categories:
//             </h2>
//             <span className="w-full h-4 bg-primary" />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 xs:grid-col-2 md grid-cols-3"></div>
//       </div>
//     </>
//   );
// };
