import 'animate.css';
import { useState } from 'react';
import { Helmet } from "react-helmet";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const FeedBack = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleFeedBack = () => {
        if (message !== '') {
            setMessage('');
            toast.success("Feedback submit successful");
            navigate('/');
        } else {
            toast.error('Write Something');
        }
    }

    return (
        <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 text-gray-100 my-24 md:mx-auto mx-4 animate__animated animate__bounceInLeft">
            <div className="flex flex-col items-center w-full">
                <Helmet>
                    <title>Feedback - NestQuest</title>
                </Helmet>
                <h2 className="text-3xl font-semibold text-center">Tell Us What You Think</h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                    <span className="text-center">Share About Your Journey With Us</span>
                    <div className="rating rating-lg">
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>

                <div className="flex flex-col w-full">
                    <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-gray-100 bg-gray-900" name='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button type="button" className="py-4 my-8 font-semibold rounded-md text-gray-900 bg-violet-400 btn border-none" onClick={handleFeedBack}>Leave feedback</button>
                </div>

            </div>
            <div className="flex items-center justify-center">
                <Link to={'/'} rel="noopener noreferrer" href="#" className="text-sm text-black btn">Maybe later</Link>
            </div>
        </div>
    );
};

export default FeedBack;