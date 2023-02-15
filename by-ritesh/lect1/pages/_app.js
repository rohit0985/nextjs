import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main>
    <h3>This is navbar is our root file i.e. _app.js</h3>
    <hr />
      <Component {...pageProps} />
    </main>
  );
}
