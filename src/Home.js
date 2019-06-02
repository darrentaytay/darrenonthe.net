import React from "react";

function Home() {
  return (
    <div className="bg-black p-8 hero">
        <div className="container mx-auto">
            <div className="mr-4 text-left flex justify-between items-center">
                <div>
                    <p className="text text-4xl text-white font-bold">Hello, I'm Darren.</p>
                    <p className="text-white text-2xl">
                        I'm a Software Developer from Scotland with over 10 years professional experience.
                        <br/>
                        I love building things, playing games and I <span className="line-through">probably</span> drink
                        too much tea.
                    </p>
                </div>

                <img src="https://en.gravatar.com/userimage/25443434/620b4f5318900f4d449c24c5c391edb9.jpg?size=200"
                     className="h-48 rounded border-4 border-white"/>
            </div>
        </div>
    </div>
  )
}

export default Home;