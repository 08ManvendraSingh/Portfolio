import { Link } from "react-router-dom";

const PostCard = ({ data }) => {
  const { postImg, title, description, userImg, time, openLink } = data;

  return (
    <div class="card h-[27rem] ">
      <div class="card-inner">
        <div class="bg-white rounded-lg overflow-hidden shadow-md card-face">
          <div class="bg-gray-200 h-48 flex items-center justify-center">
            <img src={postImg} alt="" className="w-full h-full object-cover" />
          </div>
          <div class="p-6">
            <h2 class="text-xl text-[#23272ff2] font-semibold mb-4">{title}</h2>
            <p class="text-[#617d98] font-medium text-sm mb-4">{description}</p>
            <div className="flex justify-between items-center text-[#23272ff2]">
              <img src={userImg} alt="" className="w-5 h-5 object-cover" />
              <span className="text-sm">{time}</span>
            </div>
          </div>
        </div>
        <div className="card-face card-back rounded-lg grid place-items-center bg-[#23272f] p-6">
          <Link to={openLink}>
            <button className="bg-[#23272ff2] text-lg font-semibold text-white shadow  px-6 py-2 rounded-full hover:bg-[#404756] hover:text-[#ebecf080] uppercase transition-all ease-linear">
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
