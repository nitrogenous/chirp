import Head from "next/head";

export default function SinglePostPage() {
  return (
    <>
      <Head>
        <title>Chirp App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <div className="h-full w-full border-x border-slate-400 md:max-w-2xl">
          Post View
        </div>
      </main>
    </>
  );
}
