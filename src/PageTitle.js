import React from "react";

function PageTitle(props) {
  return (
    <div className="bg-black p-2 hero">
        <div className="container mx-auto">
            <div className="mr-4 text-left flex justify-between items-center">
                <div>
                    <p className="text text-3xl text-white font-bold">{props.title}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageTitle;