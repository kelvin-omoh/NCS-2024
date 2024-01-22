import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Providers } from "./providers";
import clsx from "clsx";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import { Toaster } from 'react-hot-toast';
import { poppins } from "@/config/fonts";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
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
					poppins.className,
				)}
			>
				<Toaster
					position="top-center"
					reverseOrder={false}
				/>
				<Providers>
					<div className="flex">
						<SideBar />

						<div className="flex-1 w-4/5">
							<div className="ml-[20%]">
								<div className="flex-1">
									<Header />

									{children}
								</div>
							</div>
						</div>
					</div>

				</Providers>
			</body>
		</html>
	);
}
