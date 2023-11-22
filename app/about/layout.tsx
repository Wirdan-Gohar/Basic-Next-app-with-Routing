import React from 'react';

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<h1>including about layout</h1>
			{children}
		</div>
	);
}
