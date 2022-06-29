import { Link } from "react-router-dom";

const ThanksForContacting = (props)=>{
    return (
        <>
        <div style={{height:"90vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <br/>                
            <div className="flex flex-col">
                <span className="flex flex-col items-center justify-center ml-6 text-5xl text-yellow-500 hover:text-orange-600 ">
                    <i className="fa fa-smile-o" aria-hidden="true"></i>
                    </span><span className="mt-5 text-4xl text-center text-white"> <span className="text-orange-400"><i className="bi bi-emoji-smile"></i></span> &nbsp; Thanks for contacting us..</span>
                <span className="mt-5 text-3xl text-center text-white ml-14">
                    Your message has been successfully sent</span>
            </div>
        </div>
        </>    
    )
}

export default ThanksForContacting;