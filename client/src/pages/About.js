import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - scriven writes app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutt.svg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          We’re coming into a fantastic time with the collection of words poured
          from different souls around the world. Nothing can be more interesting
          rather than writing and reading a book. Books have some other kind of
          fun inside them. So let's begin your journey with us and explore fun
          together. we are book publishing and listing  company, dedicated to
          providing you with an extensive range of books in various categories.
          Our aim is to make sure that every single one of our customers gets
          what they want as soon as possible. That means offering high quality
          products at competitive prices, excellent customer service, and
          exceptional after-sales support.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
