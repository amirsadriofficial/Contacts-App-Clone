function ContactDangrousDetail({
  title,
  onClick,
}: {
  title: string;
  onClick?: () => void;
}) {
  return (
    <p className="py-2 cursor-pointer text-red-500" onClick={onClick}>
      {title}
    </p>
  );
}

export default ContactDangrousDetail;
