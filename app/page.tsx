import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <div>
        <Link href="/with-csp" className="text-blue-500 hover:underline">With CSP header</Link>
      </div>
      <div>
        <Link href="/without-csp" className="text-blue-500 hover:underline">Without CSP header</Link>
      </div>
      <div>
        <Link href="/with-index" className="text-blue-500 hover:underline">The solution in the GitHub (does not work)</Link>
      </div>
    </div>
  );
}
