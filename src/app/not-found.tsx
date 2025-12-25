export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-white font-medium">
          Return to Home
        </a>
      </div>
    </div>
  );
}
