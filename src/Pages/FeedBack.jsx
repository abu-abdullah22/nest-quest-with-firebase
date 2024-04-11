import 'animate.css';
const FeedBack = () => {
    return (
        <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 text-gray-100 my-24 md:mx-auto mx-4 animate__animated animate__bounceInRight">
        <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
            <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-center">How was your experience?</span>
                <div className="rating rating-lg">
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
</div>
            </div>
            <div className="flex flex-col w-full">
                <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-gray-100 bg-gray-900"></textarea>
                <button type="button" className="py-4 my-8 font-semibold rounded-md text-gray-900 bg-violet-400 btn border-none">Leave feedback</button>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <a rel="noopener noreferrer" href="#" className="text-sm text-gray-400 btn">Maybe later</a>
        </div>
    </div>
    );
};

export default FeedBack;