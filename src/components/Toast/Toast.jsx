//Imports
import './Toast.css'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




function Toast({ message }) {

    const notify = () => {

        //success message

        if (message == "sucess") {
            toast.success("Success Notification !", {
                position: "top-right",
            });
        }

        //Error message

        if (message == "error") {
            toast.error("Error Notification !", {
                position: "top-right",
            });
        }


        //Info message
        if (message == "info") {
            toast.info("Info Notification", {
                position: "bottom-left",
            });
        }
        //Warning message
        if (message == "warning") {
            toast.warning("Warning Notification", {
                position: "bottom-left",
            });
        }



    }



    return (
        <button id="toast-btn"
            onClick={notify}>Afficher la notification</button>
    )
}
export default Toast