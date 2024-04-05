function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <div className="lg:hidden flex flex-col items-center justify-center absolute bottom-0 left-0 right-0 text-[#aaa] mb-40">
      <p>Made by Pritam</p>
      <div className="flex items-center gap-2 mt-2">
        <p className="text-xs">Copyright</p>
        <img src="/images/copyright.png" className="h-5 w-5" alt="Copyright" />
        <p className="text-xs">{currentDate}</p>
      </div>
    </div>
  );
}

export default Footer;
