// import { useEffect, useState } from "react"

import { useEffect, useState } from "react";

// const useOnline = () => {
//     const [Isonline, setIsonline] = useState(true)

//     useEffect(() => {
//         window.addEventListener("online", () => {
//              setIsonline(true)
//         });
//         window.addEventListener("offline", () => {
//              setIsonline(false)
//         })
//     },[])

//     return Isonline;
// }

// export default useOnline

const useOnline = () => {
    const [Isonline, setIsonline] = useState(true);
    const handleonline = () => {
      setIsonline(true);
    };
    const handleoffline = () => {
      setIsonline(false);
    };

  useEffect(() => {
    window.addEventListener("online",handleonline);
      window.addEventListener("offline", handleoffline);

      //this is for senior developer
      return () => {
          window.removeEventListener("online", handleonline)
          window.removeEventListener("offline",handleoffline)
      }
  
  }, []);
  return Isonline;
};

export default useOnline;







// const useOnline = () => {

//     const [Isonline, setIsonline] = useState(true)
//     useEffect(() => {
//         window.addEventListener("online", () => {
//             setIsonline(true)
//         })
//         window.addEventListener("offline", () => {
//             setIsonline(false)
//         })
//     }, [])
//     return Isonline
    
    
// }
// export default useOnline
