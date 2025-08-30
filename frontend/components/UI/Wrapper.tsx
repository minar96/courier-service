const Wrapper = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-full xl:w-[1224px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
