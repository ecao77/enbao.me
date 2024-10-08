import Link from 'next/link';

export default function PostsPage() {
  return (
    <div className="no-select flex flex-col w-full h-full">
      <header className="pl-0 pt-4 pb-4 mb-4 border border-black border-t-0 border-l-0 border-r-0">
        <p className="text-base lg:text-lg font-semibold">enbao</p>
        <p className="text-xs lg:text-sm">personal website.</p>
      </header>
      <div className="flex flex-grow text-3xs lg:text-2xs">

        <aside className="w-1/3 h-full mr-2">
          <div className="border border-black p-2">
            <h2 className="font-semibold">Navigation</h2>
          </div>
          <div className="mb-2 border border-black border-t-0 p-2">
            <ul>
              <li><Link href="/" className="hover:text-fuchsia-400">Home</Link></li>
            </ul>
          </div>
          {/* You can keep other aside elements from the homepage if desired */}
        </aside>

        <main className="w-2/3 h-full">
          <div className="border border-black p-2">
            <h2 className="font-semibold">All Posts</h2>
          </div>
          <div className="mb-2 border border-black border-t-0 p-2">
            <ul>
              <li>
                <Link href="/posts/my-first-post" className="hover:text-fuchsia-400">
                  24-08-04 :: My First Post
                </Link>
              </li>
              <li>24-07-28 :: specs</li>
              <li>24-07-23 :: dreams</li>
              <li>24-07-23 :: proofs</li>
              <li>24-07-14 :: battles</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}