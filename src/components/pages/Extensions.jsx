import React from "react";
import ExtensionCard from "./ExtensionCard";
import extension from "../../data/extensions.json";

const Extensions = () => {
  return (
    <div className="md:px-[100px] px-[30px] py-6 pt-[100px]">
      <div>
        <h1 className="md:text-3xl text-2xl font-[600]">Extensions</h1>
      </div>
      <div>
        {extension.map((item) => {
          return (
            <ExtensionCard
              key={item.id}
              title={item.name}
              desc={item.description}
              link={item.download_link}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Extensions;
