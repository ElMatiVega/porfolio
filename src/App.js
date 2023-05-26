import { NavBar,  CenteresText, TextWithImage } from "./components";
import "./App.css";

const myContent =[
  {
    title:'PROFESION COMO TITULO',
    subtitle:'Subtítutlo parrafo 1. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
    descriptions:[
      'Descripción parrafo 2. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
      'Descripción parrafo 3. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.'
    ],
    finishingtext:'FinishingText parrafo 4. Texto a completar dependiendo el material que se a mostrado',
    img:'https://th.bing.com/th/id/OIP.73hX3ZqIR5yzxBrTL3wC9QHaJ4?w=123&h=180&c=7&r=0&o=5&pid=1.7',
  },
  {
    title:'PROFESION 2 COMO TITULO',
    subtitle:'Subtítutlo parrafo 1. Lorem Ipsum ',
    descriptions:[
      'Descripción parrafo 2. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.',
      'Descripción parrafo 3. Ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.'
    ],
    finishingtext:'FinishingText parrafo 4. Texto a completar dependiendo el material que se a mostrado',
    img:'https://th.bing.com/th/id/OIP.StKy4NQsKBnLe7Zh6fo3YAHaLD?w=115&h=180&c=7&r=0&o=5&pid=1.7',
  },
]

function App() {
  return (
    <div className="root">
      <NavBar />
      <CenteresText />
      {
        myContent.map((item, index)=>(<TextWithImage textToTheRight={index%2===0} content={item} />))
      }
    </div>
  );
}

export default App;
