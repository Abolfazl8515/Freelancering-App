import { ThreeDots } from "react-loader-spinner";

const Loading = ({ width = "80", height = "80" }) => {
  return (
    <ThreeDots
      visible={true}
      height={height}
      width={width}
      color="rgb(var(--color-primary-900))"
      radius="9"
      wrapperClass="flex justify-center"
    />
  );
};

export default Loading;
