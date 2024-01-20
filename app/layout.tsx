import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers >
<<<<<<< HEAD
					
						<main className="  bg-slate-100  ">
						<SideBar/>
				<div className="  ml-[17%]">
				<Header/>
				</div>
				<div className="  ml-[16%]">
					{children}
				</div>
							
						</main>
						
=======
					<main className="bg-slate-100">
						{children}
					</main>
>>>>>>> 796fba8 (Firebase setup)
				</Providers>
			</body>
		</html>
	);
}
