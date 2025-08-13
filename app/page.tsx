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
    </div>
  );
}
