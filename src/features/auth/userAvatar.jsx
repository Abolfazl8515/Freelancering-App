import useUser from "../../hooks/useUser";

const UserAvatar = () => {
  const { user } = useUser();
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <span>سلام {user?.name}</span>
    </div>
  );
};
export default UserAvatar;
