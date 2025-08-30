import React from 'react';
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {

    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            "service_axbtt7a",  // Replace with your EmailJS Service ID
            "template_1ziboq3",  // Replace with your EmailJS Template ID
            form.current,
            "Rz7W9pVF0HdDryNNL"  // Replace with your EmailJS Public Key
        )
        .then(
            () => {
                setIsSent(true);
                form.current.reset(); // Reset form fields after sending
                toast.success("Message sent successfully! ✅", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                });
            },
            (error) => {
                console.error("Error sending message:", error);
                toast.error("Failed to send message. Please try again.", {
                position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                });
            }
        );
    };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >

    </section>
  )
}

export default Contact