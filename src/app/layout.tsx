import type { Metadata } from 'next'
import { Providers } from './components/Providers'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'FS Next Challenge',
	description: 'by Paulo Solis',
}

export default function RootLayout(
	{ children }: { children: React.ReactNode},
) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
    	</html>
	)
}
