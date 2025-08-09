// This is a simplified version to understand the concept
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* This is like your App.jsx in React */}
        <header>
          <h1>My Website</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </header>

        <main>
          {/* This is where your page content goes */}
          {children}
        </main>

        <footer>
          <p>© 2024 My Website</p>
        </footer>
      </body>
    </html>
  );
}
