function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center justify-center absolute bottom-0 left-0 right-0 text-[#ccc]">
      <p>Made by Pritam</p>
      <div className="flex gap-2">
        <p>Copyright</p>
        <img src="/images/copyright.png" className="h-5 w-5" />
        <p>{currentDate}</p>
      </div>
    </div>
  );
}

export default Footer;
