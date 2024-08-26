function AppStartpage() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-12">
      <div className="w-full h-64 bg-gradient-to-l from-[#7dd3fc] to-[#065f46] rounded-t-full rounded-bl-full flex flex-col justify-center text-slate-700 pr-6">
        <span className="font-shojumaru text-6xl text-left pl-8">Hello</span>
        <span className="text-3xl text-center">Ciao</span>
        <span className="font-notoSansJp text-4xl text-right">こんにちは</span>
        <span className="text-2xl text-right">Hola</span>
      </div>
      <div className="w-full text-right space-y-5 mt-20 mb-36">
        <h1 className="font-righteous text-4xl text-sky-200 uppercase">
          Welcome to ReApp Translator
        </h1>
        <button className="w-40 h-10 bg-gradient-to-r from-[#7dd3fc] to-[#065f46] rounded-full font-righteous font-bold text-base uppercase text-gray-800 tracking-widest">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default AppStartpage;
