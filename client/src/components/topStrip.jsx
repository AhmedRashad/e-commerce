import { useState } from "react";


function TopStrip(props) {
  const convertLang=(word,lang)=>{
    switch (lang){
        case "En":
        return word;
        case "Ar":
        if(convertLangToAr.has(word)){
            return convertLangToAr.get(word);
        }else{
            return "لا يوجد ترجمة"
        }
        
        default:
            return "this language does not have a sub";       
    }
  }
  
  const convertLangToAr = new Map();
  convertLangToAr.set("Sign in","تسجيل دخول");
  convertLangToAr.set("Create new Account","انشئ حساب جديد");
  const [lang, setLang] = useState("En");
  return (
    <div className="w-full flex bg-gray-900 text-white p-2 ">
      <div className="hidden md:block">
        <span
          onClick={()=>{setLang("En")}}
          className={
            (lang == "En" ? "" : "text-gray-400 font-light") +
            " pr-2 border-r text-sm hover:text-yellow-300 hover:cursor-pointer"
          }
        >
          En
        </span>
        <span
          onClick={()=>{setLang("Ar")}}
          className={
            (lang == "Ar" ? "" : "text-gray-400 font-light") +
            " pl-2  text-sm hover:text-yellow-300 hover:cursor-pointer"
          }
        >
          Ar
        </span>
      </div>
      <span className="grow hover:cursor-pointer hover:text-yellow-300">
        <span className="inline-block w-full text-sm md:text-base md:text-center">
          {props.offer}
        </span>
      </span>
      <div>
        <button className="pr-2 border-r text-sm">
          <span className="hover:text-yellow-300">
            {convertLang("Sign in", lang)}
          </span>
        </button>
        <button className="pl-2 text-sm">
          <span className="hover:text-yellow-300">
            {convertLang("Create new Account", lang)}
          </span>
        </button>
      </div>
    </div>
  );
}



export default TopStrip;
