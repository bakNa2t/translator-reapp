function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-1 text-emerald-900 dark:text-slate-500 flex justify-center items-center text-[.7rem] font-light gap-2">
      <span>&copy;</span> Copyright {currentYear}. Design by{" "}
      <a
        className="text-emerald-600 dark:text-sky-400 font-semibold no-underline transition-all duration-300 hover:transform hover:-translate-y-1 hover:drop-shadow-text_2_cyan dark:hover:drop-shadow-text_2_yellow"
        href="https://github.com/bakna2t/"
        target="_blank"
        rel="noreferrer"
      >
        _&#216;k
      </a>
    </footer>
  );
}

export default AppFooter;
