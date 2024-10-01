import useUser from "../features/auth/useUser";

const Header = () => {
  const { user } = useUser();
  console.log(user);

  return <div className="py-4 px-8">header</div>;
};

export default Header;
