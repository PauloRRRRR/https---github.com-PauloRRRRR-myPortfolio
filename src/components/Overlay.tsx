
export default function Overlay({ isNavOpen, setNavOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black opacity-0 z-5 ${
        isNavOpen ? 'block' : 'hidden'
      }`}
      onClick={() => setNavOpen(false)}
      role="presentation"
      aria-hidden={!isNavOpen}
    ></div>
  );
}
