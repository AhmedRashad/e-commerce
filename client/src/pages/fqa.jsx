import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/footer";
import ConstactUs from "../components/contactus";
const items = [
  {
    id: 1,
    question: "Does Matger charge for delviery?",
    answer:
      "Depends. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, expedita quasi! Beatae rem officia possimus provident aut praesentium corporis vitae accusantium, eveniet pariatur natus vel, ea numquam cumque ipsa aperiam.",
  },
  {
    id: 2,
    question: "Does Matger charge for delviery?",
    answer:
      "Depends. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, expedita quasi! Beatae rem officia possimus provident aut praesentium corporis vitae accusantium, eveniet pariatur natus vel, ea numquam cumque ipsa aperiam.",
  },
  {
    id: 3,
    question: "Does Matger charge for delviery?",
    answer:
      "Depends. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, expedita quasi! Beatae rem officia possimus provident aut praesentium corporis vitae accusantium, eveniet pariatur natus vel, ea numquam cumque ipsa aperiam.",
  },
];
const FQA = () => {
  return (
    <>
      <NavBar />
      <div className="bg-lightblue pt-20 px-4">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
          <h2 className="mr-8 text-indigo-900 md:text-4xl w-full md:w-1/3 text-3xl font-extrabold leading-9 mb-4">
            Frequently-asked questions
          </h2>
          <dl className="w-full md:w-2/3">
            {items.map((item) => (
              <Question key={item.id} item={item} />
            ))}
          </dl>
        </div>
      </div>
      <ConstactUs />
      <Footer />
    </>
  );
};

const Question = (props) => {
  return (
    <>
      <dt className="mb-4">
        <h3 className="text-xl font-semibold text-indigo-700">
          {props.item.question}
        </h3>
      </dt>
      <dd className="mb-16">
        <p className="text-indigo-900 font-light">{props.item.answer}</p>
      </dd>
    </>
  );
};

export default FQA;
