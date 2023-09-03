const Shimmerui = () => {
  // return (
  //   <div className="restaurant-list">
  //     {/* <h1>shimmer is loading.........</h1> */}
  //     {Array(10)
  //       .fill("")
  //       .map((el) => (
  //         <h1 className="shimmercards"></h1>
  //       ))}
  //   </div>
  // );

  return (
    <>
      <div className="restaurant-list">
        {Array(10)
          .fill("")
          .map((el, ind) => (
            <h1 className="shimmercards" key={ind}></h1>
          ))}
      </div>
    </>
  );
};

export default Shimmerui;
