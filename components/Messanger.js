import User from './User';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

function Messanger() {
  return (
    <div className="flex-1 flex-col">
      <User />
      <div className="flex-1 h-3/4 overflow-y-auto-">asd</div>

      <div className="flex flex-col">
        <div className="flex md:h-40 h-40 md:p-4 p-4 space-x-1 items-center md:mx-12">
          <textarea
            type="text"
            placeholder="Type a message"
            className="md:w-full md:h-full w-full h-full mr-3 rounded-sm border-2"
          />
          <div className="md:p-12">
            <SendRoundedIcon fontSize="large" color="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messanger;
