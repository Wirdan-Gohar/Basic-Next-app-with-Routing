'use client';
import Link from 'next/link';
import './home.css';
import { usePathname } from 'next/navigation';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	return (
		<html lang='en'>
			<body>
				<nav className='topnav' id='myTopnav'>
					<Link href='/' className={pathname === '/' ? 'active' : ''}>
						Home
					</Link>
					<Link href='/about' className={pathname === '/about' ? 'active' : ''}>
						About
					</Link>
					<Link href='/users'>Users</Link>
				</nav>
				{children}
			</body>
		</html>
	);
}
