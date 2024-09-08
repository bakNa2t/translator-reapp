function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-1 flex justify-center items-center text-[.7rem] font-light gap-2">
      <span>&copy;</span> Copyright {currentYear}. Design by{" "}
      <a
        className="text-emerald-600 font-semibold no-underline transition-all duration-300 hover:transform hover:-translate-y-1"
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
