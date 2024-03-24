import React, { useState } from "react";
import { clothingProducts } from "../data/productList";
import ModelViewer from "../components/ModelViewer";
import Modal from "../components/Modal";

import texture from "./../assets/texture.jpeg";
import txt1 from "./../assets/txt1.jpg";
import txt2 from "./../assets/txt2.jpg";
import txt3 from "./../assets/txt3.jpg";
import txt4 from "./../assets/txt4.jpg";
import txt5 from "./../assets/txt5.jpg";

const texturesObj = [
  {
    name: "Texture 1",
    image: txt1,
  },
  {
    name: "Texture 2",
    image: txt2,
  },
  {
    name: "Texture 3",
    image: txt3,
  },
  {
    name: "Texture 4",
    image: txt4,
  },
  {
    name: "Texture 5",
    image: txt5,
  },
  {
    name: "Texture 6",
    image: texture,
  },
];

const ProductListings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTexture, setSelectedTexture] = useState(texturesObj[0]);

  return (
    <main>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <div className="flex items-center w-full h-full">
          <div className="w-[50%] h-full bg-yellow-50 overflow-hidden">
            <ModelViewer texture={selectedTexture.image} />
          </div>
          <div className="w-[50%] h-full">
            <div className="h-[60%]"></div>
            <div className="h-[40%] p-4">
              <h1 className="text-xl font-bold">Select Textures</h1>
              <div className="w-full h-full flex gap-3 items-center justify-center ">
                {texturesObj.map((item, index) => (
                  <div
                    className="h-[4rem] w-[4rem] overflow-hidden rounded-full cursor-pointer"
                    key={index}
                    onClick={() => setSelectedTexture(item)}
                  >
                    <img
                      src={item.image}
                      alt="texture image"
                      className={`h-full w-full object-cover border-[6px] ${
                        selectedTexture.name === item.name
                          ? "border-gray-800"
                          : ""
                      } overflow-hidden rounded-full`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="h-full mx-auto p-[4rem]">
        <div className="grid grid-cols-3 gap-8">
          {clothingProducts.map((item) => (
            <div
              key={item.id}
              className="flex mx-auto flex-col w-full max-w-sm rounded-xl overflow-hidden border hover:border-blue-400 transition-all duration-200 cursor-pointer"
            >
              <div className="flex-shrink-0 h-48">
                <img
                  src={item.image}
                  alt="product-image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between flex-1 bg-gradient-to-r from-white to-yellow-50 p-4">
                <div>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 flex justify-between gap-4">
                  <button className="bg-green-200 text-black w-full py-2 rounded-md">
                    Visit
                  </button>
                  <button
                    className="bg-black text-white w-full py-2 rounded-md hover:opacity-70"
                    onClick={() => setIsOpen(true)}
                  >
                    View 3D
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductListings;
