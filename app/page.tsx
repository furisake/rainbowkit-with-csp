import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <div>
        <a href="/with-csp" className="text-blue-500 hover:underline">With CSP header</a>
      </div>
      <div>
        <a href="/without-csp" className="text-blue-500 hover:underline">Without CSP header</a>
      </div>
      <div>
        <a href="/with-index" className="text-blue-500 hover:underline">The solution in the GitHub (does not work)</a>
      </div>
    </div>
  );
}
