const SubInformation: React.FC<{ title: string; body: string | undefined }> = ({
  title,
  body,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <h5 className="text-sm leading-[16.8px] tracking-[2.36px] text-burgerIcon">
        {title}
      </h5>
      <h2 className="text-[28px] leading-[32.09px]">{body}</h2>
    </div>
  );
};
export default SubInformation;
