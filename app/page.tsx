import React from "react";
import Tweets from "./tweets/page";

const HomePage: React.FC = () => {
  return (
    <div>
      <section className="text-center flex-col pb-10">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="justify-center pt-5">
          <p>Name: Sufia Auliah Salsabila</p>
          <p>Matric: 092022090029</p>
        </div>
      </section>
      <section>
        <Tweets></Tweets>
      </section>
    </div>
  );
};

export default HomePage;
