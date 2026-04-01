import type { Metadata } from "next";
import Head from "next/head";
import { CheckCircle, Landmark, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Thank You - MUDRA Loan Application",
	description: "Your MUDRA loan application has been received successfully.",
};

export default function ThankYouPage() {
	return (
		<div className='min-h-screen bg-gray-50 flex flex-col font-sans tracking-wide'>
			<Head>
				<title>Thank You - MUDRA Loan Application</title>
			</Head>

			{/* Main Header */}
			<header className='bg-white shadow-md border-b border-gray-200'>
				<div className='container mx-auto px-4 py-3 sm:py-4'>
					<div className='flex justify-between items-center'>
						<div className='flex items-center gap-3 md:gap-4'>
							<div className='w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white border-2 border-yellow-700 shadow-sm flex-shrink-0'>
								<Landmark className='w-6 h-6 md:w-8 md:h-8' />
							</div>
							<div className='flex flex-col'>
								<h1 className='text-lg md:text-2xl font-extrabold text-[#0e1f5c] tracking-tight leading-none'>
									Pradhan Mantri MUDRA Yojana
								</h1>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className='flex-grow flex items-center justify-center p-4 bg-[url("https://www.transparenttextures.com/patterns/cubes.png")] bg-opacity-50'>
				<div className='bg-white max-w-lg w-full rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12 text-center relative overflow-hidden mt-8 mb-12'>
					<div className='absolute top-0 left-0 w-full h-2 bg-[#ea580c]'></div>
					<div className='mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce-slow'>
						<CheckCircle className='w-12 h-12 text-green-600' />
					</div>
					
					<h2 className='text-3xl font-black text-[#0e1f5c] mb-4'>Application Received!</h2>
					
					<p className='text-gray-600 mb-8 leading-relaxed font-medium'>
						Thank you for submitting your MUDRA loan application details. Your application has been successfully recorded in our system. An executive will contact you shortly to guide you through the next steps and documentation verification.
					</p>
				</div>
			</main>
		</div>
	);
}
