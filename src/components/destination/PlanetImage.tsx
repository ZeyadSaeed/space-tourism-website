const PlanetImage: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div
      className={`w-[170px] h-[170px] tb:w-[300px] tb:h-[300px] xl:w-[445px] xl:h-[445px] xl:mr-5 ${name} bg-cover xl:self-end`}
    />
  );
};
export default PlanetImage;
