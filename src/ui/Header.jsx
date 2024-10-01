import useUser from "../features/auth/useUser";

const Header = () => {
  const { data } = useUser();
  console.log(data);

  return <div className="bg-yellow-400 py-4 px-8">header</div>;
};

export default Header;
