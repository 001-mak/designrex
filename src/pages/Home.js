import React from "react";
import "./styles/home.css";
import Navbar from "../components/Navbar";
import PricePlan from "../components/PricePlan";
import Footer from "../components/Footer";
import { FaPlus } from "react-icons/fa";
import { IoLogoCodepen } from "react-icons/io";
import { HiSpeakerphone } from "react-icons/hi";
import { AiFillLike } from "react-icons/ai";
import { IoMdPhotos } from "react-icons/io";
import { FaMagic } from "react-icons/fa";


function Home() {
  return (
    <>
      <Navbar />
      <div className="hero-section row p-sm-5 mt-sm-2 ">
        <div className="col-lg-6 hero-left mx-lg-5 ps-lg-5 p-md-3">
          <h1 className="hero-heading ">Stand out with DesignRex</h1>
          <p>
            Your all-in-one AI design app for making stunning social posts,
            images, flyers, and more. Dream it. Make it. Easy.
          </p>
          <div className="hero-btn">
            <button className="btn btn-danger">
              Create <FaPlus className="create-icon" />
            </button>
          </div>
        </div>
        <div className="col-lg-5 hero-right">
          <div className="image-wrapper">
            <img src="../../Collage.Png" alt="" />
          </div>
        </div>
      </div>
      <div className="categories my-lg-5 mx-lg-5">
        <div className="row mx-lg-5">
          <div className="section-heading col-lg-12 p-3">
            <h1 className="heading">What will you create today?</h1>
          </div>
          <div className="categories-1 row py-2  d-flex align-items-center justify-content-center">
            <div className="col col-lg-2 category p-3 rounded d-flex flex-column align-items-center justify-content-center">
              <IoLogoCodepen className="category-icon fs-3" />
              <p className="category-name mt-1">Logo Design</p>
            </div>
            <div className="col col-lg-2 category p-3 rounded d-flex flex-column align-items-center justify-content-center">
              <AiFillLike className="category-icon fs-3" />
              <p className="category-name mt-1">Social Media</p>
            </div>
            <div className="col col-lg-2 category p-3 rounded d-flex flex-column align-items-center justify-content-center">
              <IoMdPhotos className="category-icon fs-3" />
              <p className="category-name mt-1">Photo</p>
            </div>
            <div className="col col-lg-2 category p-3 rounded d-flex flex-column align-items-center justify-content-center">
              <HiSpeakerphone className="category-icon fs-3" />
              <p className="category-name mt-1">Marketing</p>
            </div>
            <div className="col col-lg-2 category p-3 rounded d-flex flex-column align-items-center justify-content-center">
              <FaMagic className="category-icon fs-3" />
              <p className="category-name mt-1">Generative Ai</p>
            </div>
          </div>
        </div>
      </div>
      <div className="features bg-light py-lg-5">
        <div className="section-heading col-lg-12 p-3">
            <h1 className="heading">Discover popular features for easy content creation</h1>
          </div>
          <div className="row m-lg-5 px-lg-5 d-flex align-items-center justify-content-center">
            <div className="feature col col-lg-7 mx-lg-1">
              <div className="feature-content py-lg-4 px-lg-2">
                <h1 className="mt-lg-4">Design made easy</h1>
                <p>Find unlimited templates. Drag and drop elements to make flyers, logos, social media posts and much more.</p>
              </div>
                <img className="feature-img-1" src="../../feature-img.Png" alt="" />
            </div>

            <div className="feature col col-lg-4 mx-lg-1">
              <div className="feature-content py-lg-4 px-lg-2">
                <h1 className="mt-lg-4">Create any asset</h1>
                <p>Find unlimited templates. Drag and drop elements to make flyers, logos, social media posts and much more.</p>
              </div>
                <img className="feature-img-2" src="../../feature-img-2.Png" alt="" />
            </div>

          </div>

          <div className="row mt-lg-5 px-lg-5 d-flex align-items-center justify-content-center">
            
            <div className="feature col col-lg-4 mx-lg-1">
              <div className="feature-content py-lg-4 px-lg-2">
                <h1 className="mt-lg-4">Create social media campaign</h1>
                <p>Find unlimited templates. Drag and drop elements to make flyers, logos, social media posts and much more.</p>
              </div>
                <img className="feature-img-2" src="../../feature-img-2.Png" alt="" />
            </div>

            <div className="feature col col-lg-7 mx-lg-1">
              <div className="feature-content py-lg-4 px-lg-2">
                <h1 className="mt-lg-4">Branding and packaging</h1>
                <p>Find unlimited brandnig and packaging templates. Drag and drop elements to make logos, branding, labels, packagings and much more stuff.</p>
              </div>
                <img className="feature-img-1" src="../../feature-img-3.Png" alt="" />
            </div>

          </div>
      </div>
      <PricePlan/>
      <Footer/>
    </>
  );
}

export default Home;
