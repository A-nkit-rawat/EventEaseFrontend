import {useNavigate} from "react-router-dom"
export default function AdminBar() {
    // return (
    //     <div className="grid grid-cols-2 shadow-md p-3">
    //         <div className="px-2 justify-self-start">
    //             <p>EventEase</p>
    //         </div>
    //         <div className="justify-self-end">
    //             <div className="flex ">
    //                 <div className="py-2">
    //                     <p>Hello</p>
    //                 </div>
    //                 {/* <div className="w-10 h-10 ml-1 rounded-full bg-gray-300 flex items-center justify-center">
    //                     <p>U</p>
    //                 </div> */}
    //             </div>
    //         </div>
    //     </div>
    // )
        const navigate = useNavigate();
        return (
            <div className="grid grid-cols-2 shadow-md p-3">
                <div className="px-2 justify-self-start">
                    <p
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/adminPanel")}
                    >
                        EventEase
                    </p>
                </div>
                <div className="justify-self-end">
                    <div className="flex ">
                        <div className="py-2">
                            <p>Hello</p>
                        </div>
                        <div className="w-10 h-10 ml-1 rounded-full bg-gray-300 flex items-center justify-center">
                            <p>U</p>
                        </div>
                    </div>
                </div>
            </div>
        )
}