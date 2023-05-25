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
    img:'https://www.bing.com/images/search?view=detailV2&ccid=kxheDlMT&id=31CB7CCAE1DF10EC9D6E4BE174E0955798F1F718&thid=OIP.kxheDlMTKSTxr1I0Kkg3IgAAAA&mediaurl=https%3a%2f%2fassets.digitalocean.com%2farticles%2fUnicorn_Ruby%2fimg1.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.93185e0e53132924f1af52342a483722%3frik%3dGPfxmFeV4HThSw%26pid%3dImgRaw%26r%3d0&exph=205&expw=200&q=imagen+unicornio+error+de+conexion+github&simid=608000604615240012&FORM=IRPRST&ck=4AD5F0CE53A1285CDF58C1D579EC3362&selectedIndex=8',
  },
  {
    title:'PROFESION 2 COMO TITULO',
    subtitle:'Subtítutlo parrafo 1. Lorem Ipsum ',
    descriptions:[
      'Descripción parrafo 2. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.',
      'Descripción parrafo 3. Ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.'
    ],
    finishingtext:'FinishingText parrafo 4. Texto a completar dependiendo el material que se a mostrado',
    img:'https://www.bing.com/images/search?view=detailV2&ccid=mi6N37te&id=8B14AF2D8E8E778C3BA5C3B0B7E1653285613735&thid=OIP.mi6N37te_8TrmvFaP561-gAAAA&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.9a2e8ddfbb5effc4eb9af15a3f9eb5fa%3frik%3dNTdhhTJl4bewww%26riu%3dhttp%253a%252f%252fcutchet.com.ar%252fimg%252fpaisaje%252fpaisaje-actual.png%26ehk%3dKYAi%252fzAfU4wmPUNrrLCseJ2SlMmx2e6cFvoQwqY6vyc%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=397&expw=318&q=cacao+el+quilla+imagen&simid=608023956369527634&FORM=IRPRST&ck=182946A531609DFEAB34D8F48E238F02&selectedIndex=166',
  },
]

function App() {
  return (
    <div className="root">
      <NavBar />
      <CenteresText />
      <TextWithImage textToTheRight={false} />
      <TextWithImage textToTheRight={true} />
    </div>
  );
}

export default App;
