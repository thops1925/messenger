import User from './User';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

function Messanger() {
  return (
    <div className="flex-1 flex-col">
      <User />

      <div className="flex-1 h-3/4">asd</div>

      <div className="flex flex-col h-12 bottom-0">
        <div className="flex h-12 px-4 space-x-1 items-center">
          <input type="text" className="w-full h-10 rounded-sm border-2" />
          <SendRoundedIcon fontSize="large" color="primary" />
        </div>
      </div>
    </div>
  );
}

export default Messanger;
