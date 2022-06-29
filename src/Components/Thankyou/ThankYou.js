import { Link } from "react-router-dom";

const ThankYou = (props)=>{
    return (
        <>
        <div className="absolute mt-24 mb-20 inset-x-2/4">
                    <h2 className="w-8 h-8 text-6xl text-orange-500 animate-bounce"> <i className="fa fa-shopping-bag" aria-hidden="true"></i></h2>
        </div>


                <div style={{height:"79vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                
                <br/>
                
                <div>
                    <span className="ml-20 text-5xl text-yellow-500 hover:text-orange-600 "><i className="fa fa-smile-o" aria-hidden="true"></i></span><span className="mt-5 text-4xl text-center text-blue-500 hover:text-orange-500"> &nbsp; Thanks for ordring ...</span>
                    <br/>
                    <h2 className="mt-5 text-3xl text-center text-blue-500 ml-16 hover:text-orange-500"> Your Order will be delivered soon...</h2>
                </div>

            </div>

            <div>
                    <h2 className="text-center py-4 text-4xl text-blue-500 hover:text-orange-500">
                        <Link to='/products'>Continue shopping ...<span className="text-orange-500"> <i className="fa fa-shopping-cart" aria-hidden="true"></i> </span></Link>
                    </h2>
                </div>
        </>
            
    
    )
}

export default ThankYou;