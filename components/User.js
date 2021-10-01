import Avatar from '@mui/material/Avatar';

function User() {
  return (
    <div className="flex items-center py-3 px-2 hover:bg-gray-100">
      <Avatar />
      <div className="ml-2">
        <p>Christopher Lumen</p>
      </div>
    </div>
  );
}

export default User;
