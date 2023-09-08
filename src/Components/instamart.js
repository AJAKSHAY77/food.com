import { useState } from "react";

const Section = ({ title, description }) => {
  const [Isvisible, setIsvisible] = useState(true);
  return (
    <>
      <div className="border border-black rounded-lg p-3 m-2">
        <h1 className="text-xl font-bold">{title}</h1>
        {Isvisible ? (
          <button
            className="cursor-pointer underline"
            onClick={() => {
              setIsvisible(false);
            }}
          >
            hide
          </button>
        ) : (
          <button
            className="cursor-pointer underline"
            onClick={() => {
              setIsvisible(true);
            }}
          >
            show
          </button>
        )}

        {Isvisible && <p>{description}</p>}
      </div>
    </>
  );
};
const Instamart = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-cyan-950 text-center">
        Instamart
      </h1>
      <Section
        title={"about instamart"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
      />
      <Section
        title={"about instamart"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
      />
      <Section
        title={"about instamart"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
      />
    </>
  );
};

export default Instamart;
