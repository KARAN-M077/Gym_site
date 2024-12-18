import React from 'react'
import img1 from "../../assets/img1.png";
const ImageSection = () => {
  return (
    <>
                      <div className="flex justify-center mt-5 lg:mt-10 w-ful px-4">
                    <img
                        src={img1}
                        alt="img"
                        className="w-ful md:w-4/5 lg:w-[700px] h-[400px] rounded-lg "
                    />
                </div>
    </>
  )
}

export default ImageSection
