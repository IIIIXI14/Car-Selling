import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import img3 from "../../assets/all-images/img3.jpg";
import img1 from "../../assets/all-images/img1.jpg";
import img2 from "../../assets/all-images/img2.jpg";

const OUR__MEMBERS = [
  {
    name: "Abdul Sammad",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: img3,
  },

  {
    name: "Aamir Saleem",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: img1,
  },

  {
    name: "Muhammad Ahmed",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: img2,
  },

  // {
  //   name: "Jhon Doe",
  //   experience: "5 years of experience",
  //   fbUrl: "#",
  //   instUrl: "#",
  //   twitUrl: "#",
  //   linkedinUrl: "#",
  //   imgUrl: ava01,
  // },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
