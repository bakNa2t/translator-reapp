function AppBanner() {
  return (
    <div className="w-full h-64 bg-gradient-to-r from-[#30cfd0] to-[#330867] rounded-t-full rounded-bl-full flex flex-col justify-center text-[#abecd6] pr-6 hover:shadow-lg hover:shadow-sky-400 transition duration-200">
      <span className="font-shojumaru text-5xl sm:text-6xl text-left pl-8">
        Hello
      </span>
      <span className="text-2xl sm:text-3xl text-center">Ciao</span>
      <span className="font-notoSansJp text-3xl sm:text-4xl text-right">
        こんにちは
      </span>
      <span className="text-2xl sm:text-3xl text-right">Hola</span>
    </div>
  );
}

export default AppBanner;
