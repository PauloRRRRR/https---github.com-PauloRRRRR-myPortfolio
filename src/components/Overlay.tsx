
export default function Overlay({ isNavOpen, setNavOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-20 ${
        isNavOpen ? 'block' : 'hidden'
      }`}
      onClick={() => setNavOpen(false)}
    ></div>
  );
}
