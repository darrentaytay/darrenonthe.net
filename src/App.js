import React from 'react';
import Header from './Header';
import './css/app.css';
import './css/tailwind.css';
import logo from './logo.svg';
import darren from './darren.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="bg-black p-20 hero">
        <div className="container mx-auto">
          <div className="mr-4 text-left flex justify-between items-center">
            <div className="lg:w-3/4">
              <h1 className="text text-5xl text-white font-bold">Hello, I'm Darren</h1>
              <h2 className="text-white text-2xl">I'm a Software Developer from Scotland with over 10 years professional experience. I love building things, playing games and I probably drink too much tea</h2>


              <p className="mt-10">
                <a className="rounded p-4 text-black bg-white">More about me</a>
              </p>
            </div>

            <div class="lg:w-1/4">
              <img src="https://en.gravatar.com/userimage/25443434/620b4f5318900f4d449c24c5c391edb9.jpg?size=400" className="h-64 rounded border-4 border-white"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// Photo by Ferdinand Stöhr on Unsplash