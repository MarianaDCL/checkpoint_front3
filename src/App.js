//import Header from './componentes/Header';
import './App.scss';
import './index.scss';
import imagens from './imagens/eu.jpg';



function App() {
  return (
    <div>
      <header className="App-header">
      <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Portifólio Mariana</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample02">
        <ul className="navbar-nav me-auto">
          <li className="nav-item2">
          <p><a class="nav-link active" aria-current="page" href="#">Home</a></p>
          </li>
          <li className="nav-item2">
          <p><a class="nav-link active" aria-current="page" href="#">Sobre</a></p>
          </li>
          <li className="nav-item2">
          <p><a class="nav-link active" aria-current="page" href="#">Projeto</a></p>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
      </header>

<body>
<main>
  <div className="banner">
   <div className="control">     
      <img className="gif" src="https://c.tenor.com/cFBmiW_O1S8AAAAC/noite-estrelada.gif"/>
      <div className="eu" id="eu"><img className="foto" src="./imagens/eu.jpg"/> </div>
   </div>
   
   <div class="row">
     <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
         <title>Placeholder</title>
       <rect width="100%" height="100%" fill="#777">
         <img src=""/>
       </rect>
       <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
       </svg>
          <h2 className="titulop">Projeto: lorem</h2>
          <p className="descricao">lorem ipsum dolor sit</p> 
          <p><a class="btn btn-secondary" href="#">Veja o projeto »</a></p>
       </div>
       <div class="col-lg-4"><svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
         <title>Placeholder</title>
         <rect width="100%" height="100%" fill="#777">
           <img src=""/>
         </rect>
         <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
         </svg>
         <h2 className="titulop">Projeto: lorem</h2>
         <p className="descricao">lorem ipsum dolor sit</p>
         <p><a class="btn btn-secondary" href="#">Veja o projeto »</a></p>
         </div>
         <div class="col-lg-4">
           <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
             <title>Placeholder</title>
             <rect width="100%" height="100%" fill="#777">
               <img src=""/>
             </rect>
             <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
             </svg>
             <h2 className="titulop">Projeto: lorem</h2>
             <p className="descricao">lorem ipsum dolor sit</p>
             <p><a class="btn btn-secondary" href="#">Veja o projeto »</a></p>
          </div>
        </div>
    <section className="sobre mim">
      <div className="texto">
        
        <p className="lorem">
          lorem ipsum dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum
           dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum dolor sit lorem 
           lorem ipsum dolor sit loremorem ipsum dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum dolor sit
            lorem lorem ipsum dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum 
            dolor sit lorem lorem ipsum dolor sit loremlorem ipsum dolor sit lorem lorem ipsum dolor sit lorem lorem
             lorem ipsum dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum dolor sit loremlorem ipsum dolor
           
</p>
      </div>
      <div className="texto2">
      <h3 className="titulos">Sobre mim</h3>
        <p className="lorem">lorem ipsum dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum
           dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum 
           dolor sit loremlorem ipsum dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum
           dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum 
           dolor sit lorem orem ipsum dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum 
           
</p>
      </div>
    </section>
   </div>
</main>
  
<div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li clasName="nav-item"><img src="https://img.icons8.com/nolan/64/facebook.png"/><a href="#" className="nav-link px-2 text-muted">Facebook</a></li>
      <li className="nav-item"><img src="https://img.icons8.com/nolan/64/instagram-new.png"/><a href="#" className="nav-link px-2 text-muted">Instagram</a></li>
      <li className="nav-item"><img src="https://img.icons8.com/nolan/64/linkedin-circled.png"/><a href="#" className="nav-link px-2 text-muted">Linkedin</a></li>
      <li className="nav-item"><img src="https://img.icons8.com/nolan/64/whatsapp.png"/><a href="#" className="nav-link px-2 text-muted">Whatsapp</a></li>
      <li className="nav-item"><img src="https://img.icons8.com/nolan/64/github.png"/><a href="#" className="nav-link px-2 text-muted">Github</a></li>
    </ul>
    <p className="text-center text-muted">© 2021 Company, Inc</p>
  </footer>
</div>

</body>
   
    </div>
  );
}

export default App;
