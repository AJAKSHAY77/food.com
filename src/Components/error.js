import { useRouteError } from "react-router-dom";
function Error() {
    const err = useRouteError();
    // const { status, statusText } = err;

  return (
      <div>
          <h1>oops!!</h1>
          <h3>Something went wrong</h3>
          {/* <h3>{ `${status} :${statusText}`}</h3> */}
          <h3>{ `${err.status} :${err.statusText}`}</h3>
    </div>
  )
}

// import { useRouteError } from "react-router-dom";
// const Error = () => {
//   let err = useRouteError()
//   const {status,statusText}=err

//   return (
//     <>
//       <h1>{err.status}</h1>
//       <h2>{err.statusText}</h2>
//     </>
//   )
// }

export default Error;
