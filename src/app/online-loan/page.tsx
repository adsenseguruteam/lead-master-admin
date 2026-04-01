import type { Metadata } from "next";
import Head from "next/head";
import { CheckCircle, Shield, Clock, ArrowRight, FileText, IndianRupee, Landmark } from "lucide-react";
import Link from "next/link";
import LeadForm from "@/components/lead-form";

export const metadata: Metadata = {
	title: "Mudra Loan - Pradhan Mantri MUDRA Yojana (PMMY)",
	description: "Official portal for fast Mudra Business Loan up to ₹10 Lakhs. No collateral required, minimal paperwork, quick MSME approval.",
};

export default function MudraLoanPage() {
	return (
		<div className='min-h-screen bg-gray-50 font-sans tracking-wide'>
			<Head>
				<title>Mudra Loan - Official Portal for PMMY</title>
				<meta
					name='description'
					content='Apply for Mudra Loan online and get up to ₹10 Lakhs for your business. Quick approval, minimal documentation, under PMMY.'
				/>
			</Head>

			{/* Top Bar - Government Scheme Identity */}
			<div className='bg-[#0e1f5c] text-white py-1 px-4 text-xs sm:text-sm border-b-4 border-[#ea580c]'>
				<div className='container mx-auto flex justify-between items-center'>
					<div className='flex items-center gap-2 opacity-90 font-medium tracking-wider'>
						<span>Get Mudra Business Loan upto ₹10 Lakhs</span>
					</div>
					{/* <div className='hidden md:flex gap-4 opacity-90 font-medium tracking-wider'>
						<span>सूक्ष्म लघु एवं मध्यम उद्यम मंत्रालय | Ministry of MSME</span>
					</div> */}
				</div>
			</div>

			{/* Main Header */}
			<header className='bg-white shadow-md sticky top-0 z-50 border-b border-gray-200'>
				<div className='container mx-auto px-4 py-3 sm:py-4'>
					<div className='flex justify-between items-center flex-wrap gap-4'>
						<div className='flex items-center gap-3 md:gap-4'>
							{/* Emblem Placeholder - Using an icon to mimic seal */}
							<div className='w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white border-2 border-yellow-700 shadow-sm flex-shrink-0'>
								<Landmark className='w-7 h-7 md:w-9 md:h-9' />
							</div>
							<div className='flex flex-col'>
								<h1 className='text-lg sm:text-2xl md:text-3xl font-extrabold text-[#0e1f5c] tracking-tight leading-none'>
									Pradhan Mantri MUDRA Yojana
								</h1>
								<p className='text-[10px] sm:text-xs md:text-sm text-gray-600 font-bold uppercase tracking-wider mt-1'>
									Micro Units Development & Refinance Agency Ltd.
								</p>
							</div>
						</div>
						
						<nav className='hidden lg:flex space-x-8 text-sm font-bold uppercase tracking-wider'>
							<a href='#about' className='text-[#0e1f5c] hover:text-[#ea580c] transition'>About PMMY</a>
							<a href='#categories' className='text-[#0e1f5c] hover:text-[#ea580c] transition'>Offerings</a>
							<a href='#process' className='text-[#0e1f5c] hover:text-[#ea580c] transition'>Application</a>
							<a href='#faq' className='text-[#0e1f5c] hover:text-[#ea580c] transition'>FAQs</a>
						</nav>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className='bg-white border-b border-gray-200 relative overflow-hidden'>
				{/* Saffron/Green Decorative Background Pattern */}
				<div className='absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50 to-transparent -z-10' />
				<div className='absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-green-50 to-transparent -z-10' />

				<div className='container mx-auto px-4 py-12 md:py-20'>
					<div className='flex flex-col-reverse lg:flex-row gap-10 lg:gap-14 items-center'>
						<div className='lg:w-[55%] text-center lg:text-left'>
							<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-orange-100 text-orange-800 text-xs md:text-sm font-black tracking-widest border border-orange-200 mb-6'>
								<span className='w-2 h-2 rounded-full bg-orange-600 animate-pulse'></span>
								PMMY - FUNDING THE UNFUNDED
							</div>
							
							<h2 className='text-3xl md:text-5xl lg:text-6xl font-black text-[#0e1f5c] mb-6 leading-tight tracking-tight'>
								Empower Your Business<br/>
								<span className='text-[#ea580c]'>Up to ₹10 Lakhs</span>
							</h2>
							
							<p className='text-gray-700 text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed'>
								Access collateral-free business loans tailored for micro-enterprises and MSMEs. Fast processing, low-interest rates, and easy application through the official PMMY network.
							</p>
							
							<div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 sm:max-w-xl mx-auto lg:mx-0'>
								<div className='flex flex-col items-center lg:items-start p-4 bg-blue-50/70 border border-blue-200 rounded-lg'>
									<Shield className='text-[#0e1f5c] w-7 h-7 mb-2' />
									<span className='text-xs md:text-sm font-bold text-gray-800 text-center lg:text-left uppercase tracking-wide'>Zero Collateral</span>
								</div>
								<div className='flex flex-col items-center lg:items-start p-4 bg-green-50/70 border border-green-200 rounded-lg'>
									<IndianRupee className='text-green-700 w-7 h-7 mb-2' />
									<span className='text-xs md:text-sm font-bold text-gray-800 text-center lg:text-left uppercase tracking-wide'>Low Interest</span>
								</div>
								<div className='flex flex-col items-center lg:items-start p-4 bg-orange-50/70 border border-orange-200 rounded-lg'>
									<Clock className='text-[#ea580c] w-7 h-7 mb-2' />
									<span className='text-xs md:text-sm font-bold text-gray-800 text-center lg:text-left uppercase tracking-wide'>Fast Approval</span>
								</div>
								<div className='flex flex-col items-center lg:items-start p-4 bg-purple-50/70 border border-purple-200 rounded-lg'>
									<FileText className='text-purple-700 w-7 h-7 mb-2' />
									<span className='text-xs md:text-sm font-bold text-gray-800 text-center lg:text-left uppercase tracking-wide'>Minimal Docs</span>
								</div>
							</div>
						</div>
						
						{/* Lead Form - Styled like an official portal login/register */}
						<div className='lg:w-[45%] w-full max-w-md mx-auto'>
							<div className='bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-200/80'>
								<div className='bg-[#0e1f5c] px-6 py-5 flex items-center justify-between border-b-4 border-[#ea580c]'>
									<h3 className='text-white font-bold text-xl md:text-2xl tracking-wide'>Applicant Registration</h3>
									<span className='bg-white/20 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-sm tracking-wider'>SECURE PORTAL</span>
								</div>
								<div className='p-6 md:p-8 bg-gray-50/30'>
									<p className='text-xs md:text-sm text-gray-600 mb-6 text-center font-bold tracking-wide'>
										Enter valid details below. An executive will contact you to verify your application.
									</p>
									<LeadForm />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Official Loan Categories */}
			<section id='categories' className='py-16 md:py-24 bg-white'>
				<div className='container mx-auto px-4'>
					<div className='text-center max-w-3xl mx-auto mb-16'>
						<h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-[#0e1f5c] mb-6 tracking-tight'>
							PMMY Loan Interventions
						</h2>
						<div className='w-24 border-b-4 border-[#ea580c] mx-auto mb-8'></div>
						<p className='text-gray-600 font-medium md:text-xl leading-relaxed'>
							Under the aegis of Pradhan Mantri MUDRA Yojana, interventions have been named &apos;Shishu&apos;, &apos;Kishore&apos; and &apos;Tarun&apos; to signify the stage of growth and funding needs.
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
						{/* Shishu */}
						<div className='bg-white border-2 border-gray-100 rounded-xl hover:border-blue-400 hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col'>
							<div className='bg-blue-50 py-5 md:py-6 text-center border-b border-gray-100 group-hover:bg-[#0e1f5c] transition-colors'>
								<h3 className='text-[#0e1f5c] group-hover:text-white font-black text-2xl tracking-wide'>SHISHU</h3>
							</div>
							<div className='p-6 md:p-8 text-center flex-grow flex flex-col justify-between'>
								<div>
									<p className='text-xs md:text-sm text-gray-500 font-bold mb-2 tracking-widest'>COVERING LOANS</p>
									<p className='text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6'>Upto ₹50,000</p>
									<p className='text-gray-600 font-medium mb-8 leading-relaxed'>For startups or micro units looking for initial funding to commence operations or make small asset purchases.</p>
								</div>
								<button className='w-full py-3 md:py-4 border-2 border-[#ea580c] text-[#ea580c] hover:bg-[#ea580c] hover:text-white font-bold rounded-lg transition uppercase tracking-widest text-sm md:text-base'>
									Apply for Shishu
								</button>
							</div>
						</div>
						
						{/* Kishor */}
						<div className='bg-white border-2 border-[#0e1f5c]/20 shadow-xl rounded-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative transform md:-translate-y-4 flex flex-col'>
							<div className='absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-black tracking-wider px-3 py-1 rounded-bl-lg'>RECOMMENDED</div>
							<div className='bg-[#0e1f5c] py-6 md:py-7 text-center border-b border-[#0e1f5c]'>
								<h3 className='text-white font-black text-2xl md:text-3xl tracking-wide'>KISHORE</h3>
							</div>
							<div className='p-6 md:p-8 text-center flex-grow flex flex-col justify-between'>
								<div>
									<p className='text-xs md:text-sm text-gray-500 font-bold mb-2 tracking-widest'>COVERING LOANS</p>
									<p className='text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6'>₹50k - ₹5 Lakhs</p>
									<p className='text-gray-600 font-medium mb-8 leading-relaxed'>Ideal for enterprises that have already started but need additional funds to expand operations, buy inventory or machinery.</p>
								</div>
								<button className='w-full py-4 text-white bg-[#ea580c] hover:bg-orange-700 font-bold rounded-lg transition shadow-md uppercase tracking-widest text-sm md:text-base'>
									Apply for Kishore
								</button>
							</div>
						</div>

						{/* Tarun */}
						<div className='bg-white border-2 border-gray-100 rounded-xl hover:border-blue-400 hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col'>
							<div className='bg-blue-50 py-5 md:py-6 text-center border-b border-gray-100 group-hover:bg-[#0e1f5c] transition-colors'>
								<h3 className='text-[#0e1f5c] group-hover:text-white font-black text-2xl tracking-wide'>TARUN</h3>
							</div>
							<div className='p-6 md:p-8 text-center flex-grow flex flex-col justify-between'>
								<div>
									<p className='text-xs md:text-sm text-gray-500 font-bold mb-2 tracking-widest'>COVERING LOANS</p>
									<p className='text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6'>₹5L - ₹10 Lakhs</p>
									<p className='text-gray-600 font-medium mb-8 leading-relaxed'>Designed for established small businesses seeking significant capital injection for wide-scale expansion.</p>
								</div>
								<button className='w-full py-3 md:py-4 border-2 border-[#ea580c] text-[#ea580c] hover:bg-[#ea580c] hover:text-white font-bold rounded-lg transition uppercase tracking-widest text-sm md:text-base'>
									Apply for Tarun
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id='about' className='py-16 md:py-24 bg-gray-100 border-y border-gray-200'>
				<div className='container mx-auto px-4'>
					<div className='grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
						<div className='order-2 md:order-1'>
							<div className='bg-white p-6 md:p-10 rounded-xl shadow-md border border-gray-200'>
								<h3 className='text-2xl md:text-3xl font-black text-[#0e1f5c] mb-6 border-b-2 border-gray-100 pb-4'>Eligibility & Documents</h3>
								
								<div className='mb-8'>
									<h4 className='font-black text-gray-800 text-lg mb-3 flex items-center'>
										<CheckCircle className='text-green-600 mr-2 w-6 h-6' /> Eligible Entities
									</h4>
									<ul className='list-disc pl-10 space-y-2 text-gray-600 font-medium md:text-lg'>
										<li>Individuals, Proprietorships, Partnerships</li>
										<li>Private Limited Companies & LLPs</li>
										<li>Artisans, Shopkeepers, Traders, Vendors</li>
										<li>Small manufacturing units</li>
									</ul>
								</div>

								<div>
									<h4 className='font-black text-gray-800 text-lg mb-3 flex items-center'>
										<FileText className='text-blue-600 mr-2 w-6 h-6' /> Mandatory KYC
									</h4>
									<ul className='list-disc pl-10 space-y-2 text-gray-600 font-medium md:text-lg'>
										<li>Aadhaar Card / PAN Card (Identity Proof)</li>
										<li>Utility Bill / Rent Agreement (Address Proof)</li>
										<li>Business Registration Proof / Udyam Certificate</li>
										<li>Last 6 months Bank Statement</li>
									</ul>
								</div>
							</div>
						</div>
						
						<div className='order-1 md:order-2 text-center md:text-left'>
							<h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-[#0e1f5c] mb-6 tracking-tight'>
								What makes PMMY unique?
							</h2>
							<p className='text-gray-700 mb-8 font-medium text-lg leading-relaxed'>
								Pradhan Mantri MUDRA Yojana (PMMY) was launched by the Hon&apos;ble Prime Minister on April 8, 2015, for providing loans up to 10 lakh to the non-corporate, non-farm small/micro enterprises.
							</p>
							<div className='space-y-6'>
								<div className='flex items-start gap-4 text-left bg-white p-5 rounded-xl shadow-sm border border-gray-100'>
									<div className='bg-green-100 p-3 rounded-full mt-1'>
										<Shield className='w-6 h-6 text-green-700' />
									</div>
									<div>
										<p className='font-black text-gray-900 text-lg'>No Collateral Required</p>
										<p className='text-gray-600 font-medium mt-1 leading-relaxed text-sm md:text-base'>Banks and NFBCs disburse MUDRA loans without seeking rigid security pledges. Personal guarantee holds merit.</p>
									</div>
								</div>
								<div className='flex items-start gap-4 text-left bg-white p-5 rounded-xl shadow-sm border border-gray-100'>
									<div className='bg-blue-100 p-3 rounded-full mt-1'>
										<Clock className='w-6 h-6 text-blue-700' />
									</div>
									<div>
										<p className='font-black text-gray-900 text-lg'>Discounted Interest Rates</p>
										<p className='text-gray-600 font-medium mt-1 leading-relaxed text-sm md:text-base'>Special discounted rates are often provided for women entrepreneurs leading self-help groups and priority sector lending.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section id='faq' className='py-16 md:py-24 bg-white'>
				<div className='container mx-auto px-4 max-w-4xl'>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-center text-[#0e1f5c] mb-12 tracking-tight'>
						Frequently Asked Questions
					</h2>
					<div className='space-y-4 md:space-y-6'>
						{[
							{ q: "Is MUDRA a Direct Lending Bank?", a: "No, MUDRA is a refinancing institution. It does not lend directly to micro entrepreneurs. Loans are provided by Commercial Banks, RRBs, Small Finance Banks, NBFCs, and MFIs." },
							{ q: "What is the processing fee for MUDRA Loans?", a: "As per official guidelines, there is NIL processing fee for Shishu category loans (up to ₹50,000)." },
							{ q: "Is PAN Card mandatory for application?", a: "Yes, PAN Card is a mandatory KYC document for availing banking and credit facilities under standard RBI norms." },
							{ q: "Do I need an existing business account?", a: "A savings or current account linked to the applicant is required to disburse the approved funds safely." }
						].map((faq, i) => (
							<div key={i} className='border-2 border-gray-100 rounded-lg overflow-hidden bg-gray-50 transition-shadow hover:shadow-md'>
								<div className='px-6 md:px-8 py-5 md:py-6 font-bold text-gray-900 text-lg md:text-xl border-b border-gray-200 bg-white'>
									{faq.q}
								</div>
								<div className='px-6 md:px-8 py-5 md:py-6 text-gray-700 font-medium leading-relaxed text-sm md:text-base'>
									{faq.a}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Official Footer */}
			<footer className='bg-[#0f172a] text-gray-300 font-sans border-t-8 border-[#0e1f5c]'>
				<div className='container mx-auto px-4 py-16 md:py-20'>
					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8'>
						<div className='col-span-1 lg:col-span-2'>
							<div className='flex items-center gap-4 mb-8'>
								<div className='w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-full flex items-center justify-center border border-gray-600 flex-shrink-0'>
									<Landmark className='w-6 h-6 md:w-8 md:h-8 text-gray-400' />
								</div>
								<div className='flex flex-col'>
									<h3 className='text-xl md:text-2xl font-black text-white leading-tight tracking-wide'>Pradhan Mantri MUDRA Yojana</h3>
									<p className='text-xs md:text-sm font-bold tracking-widest uppercase text-gray-500 mt-1'>Micro Units Development & Refinance</p>
								</div>
							</div>
							<p className='text-sm md:text-base text-gray-400 mb-8 leading-relaxed max-w-lg font-medium'>
								This portal assists Indian citizens and MSMEs in applying for PMMY loans. Our objective is to streamline document processing and connect eligible applicants with relevant lending NBFCs/Banks.
							</p>
							<div className='flex gap-4 flex-wrap'>
								<span className='px-4 py-1.5 bg-gray-800 text-white font-bold rounded text-xs md:text-sm tracking-wide border border-gray-700'>Digital India</span>
								<span className='px-4 py-1.5 bg-gray-800 text-white font-bold rounded text-xs md:text-sm tracking-wide border border-gray-700'>Make in India</span>
							</div>
						</div>
						
						<div>
							<h4 className='text-white font-black mb-8 uppercase tracking-widest text-sm md:text-base'>Important Links</h4>
							<ul className='space-y-4 font-bold text-sm md:text-base tracking-wide'>
								<li><a href='#' className='hover:text-white hover:underline transition'>Ministry of Finance</a></li>
								<li><a href='#' className='hover:text-white hover:underline transition'>Department of Financial Services</a></li>
								<li><a href='#' className='hover:text-white hover:underline transition'>RBI Guidelines</a></li>
								<li><a href='#' className='hover:text-white hover:underline transition'>Udyam Registration</a></li>
							</ul>
						</div>

						<div>
							<h4 className='text-white font-black mb-8 uppercase tracking-widest text-sm md:text-base'>Contact & Support</h4>
							<ul className='space-y-4 text-sm md:text-base font-medium text-gray-400'>
								<li>Toll Free: <span className='text-white font-black ml-1'>100 000 0000 </span></li>
								<li>Email: <span className='text-white ml-1'>help@mudra-support.com</span></li>
								<li className='pt-6'>
									<p className='text-xs font-bold uppercase tracking-widest text-gray-500 mb-1'>Registered Office</p>
									<p className='text-white font-medium'>MSME Development Centre, Mumbai, India</p>
								</li>
							</ul>
						</div>
					</div>
					
					<div className='border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm font-bold text-gray-500 tracking-wide'>
						<p>© {new Date().getFullYear()} MUDRA Loan Portal. All rights reserved.</p>
						<div className='flex space-x-6 mt-6 md:mt-0'>
							<a href='#' className='hover:text-gray-300 transition'>Terms & Conditions</a>
							<a href='#' className='hover:text-gray-300 transition'>Privacy Policy</a>
							<a href='#' className='hover:text-gray-300 transition'>Disclaimer</a>
						</div>
					</div>
					
					{/* Important Disclaimer */}
					<div className='mt-10 p-5 md:p-6 bg-gray-800/50 rounded-lg border border-gray-700 text-xs md:text-sm text-gray-400 leading-relaxed font-medium'>
						<span className='font-black text-gray-300 tracking-wide'>DISCLAIMER:</span> This website is an independent lead generation and processing portal designed to assist users in applying for business loans under various MSME schemes provided by our partner Banks and NBFCs. We facilitate the application process and do not guarantee loan sanction. Final approval, loan amount, and interest rates are subject to the sole discretion of the lending financial institution based on your credit profile, business turnover, and submitted documentation.
					</div>
				</div>
			</footer>
		</div>
	);
}
