import {useRef} from "react";

const Refcom = () => {
    const myRef = useRef(null)
    const btnHandler= () =>{
        if (myRef.current.classList.contains("blue")) {
            myRef.current.classList = "red";
        }else{
            myRef.current.classList = "blue";
        }
        console.log(myRef.current);
    }
    return(
        <>
        <div ref={myRef} className="red">My Ref</div>
        <button onClick={btnHandler}>Click</button>
        </>
    )
}

export default Refcom;