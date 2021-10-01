import Avatar from '@mui/material/Avatar';

function Icons() {
  return (
    <div className="flex flex-col w-16 items-center justify-between bg-gray-100">
      <div className="mt-4 space-y-1">
        <Avatar />
        <Avatar />
        <Avatar />
      </div>
      <div className="mb-4 space-y-1">
        <Avatar />
        <Avatar />
        <Avatar />
      </div>
    </div>
  );
}

export default Icons;
