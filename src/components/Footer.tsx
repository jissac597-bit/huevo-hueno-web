export default function Footer() {
  return (
    <footer className="bg-brown-900 text-egg-200 py-10 px-4">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-bold text-lg">🥚 Huevo Hueno</p>
        <p className="text-sm text-egg-300">
          &copy; {new Date().getFullYear()} Huevo Hueno. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
