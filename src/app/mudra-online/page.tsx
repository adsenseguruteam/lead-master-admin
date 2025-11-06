"use client";

import { useState } from "react";
import Head from "next/head";
import { CheckCircle, Shield, Clock, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MudraLoanPage() {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		businessType: "",
		loanAmount: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log("Form submitted:", formData);
		// You can add API call here
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<div className='min-h-screen bg-gray-50'>
			<Head>
				<title>
					Mudra Loan - Get Business Loan up to ₹10 Lakhs | Lead Master
				</title>
				<meta
					name='description'
					content='Apply for Mudra Loan online and get up to ₹10 Lakhs for your business. Quick approval, minimal documentation, and attractive interest rates.'
				/>
			</Head>

			{/* Header */}
			<header className='bg-white shadow-sm'>
				<div className='container mx-auto px-4 py-4'>
					<div className='flex justify-between items-center'>
						<div className='text-2xl font-bold text-blue-700'>
							MUDRA
						</div>
						<nav className='hidden md:flex space-x-8'>
							<a
								href='#overview'
								className='text-gray-700 hover:text-blue-600 font-medium'>
								Overview
							</a>
							<a
								href='#features'
								className='text-gray-700 hover:text-blue-600 font-medium'>
								Features
							</a>
							<a
								href='#categories'
								className='text-gray-700 hover:text-blue-600 font-medium'>
								Loan Categories
							</a>
							<a
								href='#process'
								className='text-gray-700 hover:text-blue-600 font-medium'>
								Process
							</a>
							<a
								href='#contact'
								className='text-gray-700 hover:text-blue-600 font-medium'>
								Contact
							</a>
						</nav>
						<button className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full'>
							Apply Now
						</button>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className='bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-col md:flex-row items-center'>
						<div className='md:w-1/2 mb-8 md:mb-0'>
							<span className='bg-white/20 text-sm font-semibold px-4 py-1 rounded-full mb-4 inline-block'>
								Pradhan Mantri MUDRA Yojana
							</span>
							<h1 className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>
								Empowering Micro Enterprises with Financial
								Support
							</h1>
							<p className='text-xl mb-8 max-w-2xl'>
								Access business loans up to ₹10 Lakhs with
								attractive interest rates, minimal
								documentation, and quick approval under the
								Government of India's flagship scheme.
							</p>
							<div className='flex flex-col sm:flex-row gap-4'>
								<Link
									href='https://www.mudra.org.in/'
									className='bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full flex items-center justify-center transition duration-300'>
									Apply Now <ArrowRight className='ml-2' />
								</Link>
								<button className='bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full transition duration-300'>
									Learn More
								</button>
							</div>
							<div className='mt-8 flex flex-wrap gap-6'>
								<div className='flex items-center'>
									<CheckCircle className='text-green-300 mr-2' />
									<span>No Collateral Required</span>
								</div>
								<div className='flex items-center'>
									<CheckCircle className='text-green-300 mr-2' />
									<span>Low Interest Rates</span>
								</div>
								<div className='flex items-center'>
									<CheckCircle className='text-green-300 mr-2' />
									<span>Quick Approval</span>
								</div>
							</div>
						</div>
						<div className='md:w-1/2'>
							<div className='bg-white/20 backdrop-blur-sm p-8 rounded-2xl'>
								<h3 className='text-2xl font-bold mb-6'>
									Get Instant Callback
								</h3>
								<form
									onSubmit={handleSubmit}
									className='space-y-4'>
									<div>
										<input
											type='text'
											name='name'
											placeholder='Full Name'
											className='w-full p-3 rounded-lg border-gray-100 border text-gray-100'
											required
											value={formData.name}
											onChange={handleChange}
										/>
									</div>
									<div>
										<input
											type='tel'
											name='phone'
											placeholder='Mobile Number'
											className='w-full p-3 rounded-lg border-gray-100 border text-gray-100'
											required
											value={formData.phone}
											onChange={handleChange}
										/>
									</div>
									<div>
										<select
											name='businessType'
											className='w-full p-3 rounded-lg border-gray-100 border text-gray-100'
											value={formData.businessType}
											onChange={handleChange}
											required>
											<option value=''>
												Select Business Type
											</option>
											<option value='manufacturing'>
												Manufacturing
											</option>
											<option value='trading'>
												Trading
											</option>
											<option value='service'>
												Service
											</option>
											<option value='retail'>
												Retail
											</option>
										</select>
									</div>
									<div>
										<select
											name='loanAmount'
											className='w-full p-3 rounded-lg border-gray-100 border text-gray-100'
											value={formData.loanAmount}
											onChange={handleChange}
											required>
											<option value=''>
												Loan Amount Required
											</option>
											<option value='50000'>
												Up to ₹50,000
											</option>
											<option value='500000'>
												₹50,000 - ₹5,00,000
											</option>
											<option value='1000000'>
												₹5,00,000 - ₹10,00,000
											</option>
										</select>
									</div>
									<button
										type='submit'
										className='w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg transition duration-300'>
										Get Free Consultation
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* About Mudra Loan */}
			<section id='overview' className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto text-center mb-16'>
						<h2 className='text-4xl font-bold mb-6'>
							About Pradhan Mantri MUDRA Yojana (PMMY)
						</h2>
						<div className='w-24 h-1 bg-blue-600 mx-auto mb-8'></div>
						<p className='text-lg text-gray-700 mb-8 leading-relaxed'>
							Pradhan Mantri MUDRA Yojana (PMMY) is a scheme
							launched by the Government of India to provide loans
							up to ₹10 Lakhs to non-corporate, non-farm
							small/micro enterprises. These loans are given by
							commercial banks, RRBs, small finance banks, MFIs,
							and NBFCs.
						</p>
						<div className='grid md:grid-cols-3 gap-8 mt-12'>
							<div className='bg-blue-50 p-6 rounded-xl'>
								<div className='text-blue-600 text-4xl font-bold mb-4'>
									10L+
								</div>
								<h3 className='text-xl font-semibold mb-2'>
									Businesses Funded
								</h3>
								<p className='text-gray-600'>
									Supporting entrepreneurs across India
								</p>
							</div>
							<div className='bg-blue-50 p-6 rounded-xl'>
								<div className='text-blue-600 text-4xl font-bold mb-4'>
									₹20,000 Cr+
								</div>
								<h3 className='text-xl font-semibold mb-2'>
									Total Loan Disbursed
								</h3>
								<p className='text-gray-600'>
									Fueling economic growth
								</p>
							</div>
							<div className='bg-blue-50 p-6 rounded-xl'>
								<div className='text-blue-600 text-4xl font-bold mb-4'>
									98%
								</div>
								<h3 className='text-xl font-semibold mb-2'>
									Satisfaction Rate
								</h3>
								<p className='text-gray-600'>
									Trusted by businesses nationwide
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section id='features' className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						Why Choose Mudra Loan?
					</h2>
					<div className='grid md:grid-cols-3 gap-8'>
						<div className='text-center p-6 border rounded-xl hover:shadow-lg transition'>
							<div className='bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4'>
								<Shield className='text-blue-600 w-8 h-8' />
							</div>
							<h3 className='text-xl font-semibold mb-2'>
								Collateral Free
							</h3>
							<p className='text-gray-600'>
								No need for any collateral or security to avail
								Mudra loan up to ₹10 Lakhs.
							</p>
						</div>
						<div className='text-center p-6 border rounded-xl hover:shadow-lg transition'>
							<div className='bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4'>
								<CheckCircle className='text-blue-600 w-8 h-8' />
							</div>
							<h3 className='text-xl font-semibold mb-2'>
								Easy Eligibility
							</h3>
							<p className='text-gray-600'>
								Simple documentation and minimal eligibility
								criteria for quick approval.
							</p>
						</div>
						<div className='text-center p-6 border rounded-xl hover:shadow-lg transition'>
							<div className='bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4'>
								<Clock className='text-blue-600 w-8 h-8' />
							</div>
							<h3 className='text-xl font-semibold mb-2'>
								Quick Disbursal
							</h3>
							<p className='text-gray-600'>
								Fast processing and quick disbursal of loan
								amount to your account.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Loan Categories */}
			<section id='categories' className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						Mudra Loan Categories
					</h2>
					<div className='grid md:grid-cols-3 gap-8'>
						<div className='bg-white p-8 rounded-xl shadow-md'>
							<h3 className='text-2xl font-bold text-blue-700 mb-4'>
								Shishu
							</h3>
							<p className='text-gray-600 mb-4'>
								Loans up to ₹50,000 for new businesses and
								startups.
							</p>
							<ul className='space-y-2 text-gray-600'>
								<li className='flex items-center'>
									<CheckCircle className='text-green-500 mr-2 w-5 h-5' />{" "}
									No collateral required
								</li>
								<li className='flex items-center'>
									<CheckCircle className='text-green-500 mr-2 w-5 h-5' />{" "}
									Low interest rates
								</li>
								<li className='flex items-center'>
									<CheckCircle className='text-green-500 mr-2 w-5 h-5' />{" "}
									Easy documentation
								</li>
							</ul>
						</div>
						<div className='bg-white p-8 rounded-xl shadow-md border-2 border-blue-500 transform scale-105'>
							<div className='bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4'>
								MOST POPULAR
							</div>
							<h3 className='text-2xl font-bold text-blue-700 mb-4'>
								Kishor
							</h3>
							<p className='text-gray-600 mb-4'>
								Loans from ₹50,001 to ₹5,00,000 for established
								businesses.
							</p>
							<ul className='space-y-2 text-gray-600'>
								<li className='flex items-center'>
									<CheckCircle className='text-green-500 mr-2 w-5 h-5' />{" "}
									Collateral free up to ₹10 Lakhs
								</li>
								<li className='flex items-center'>
									<CheckCircle className='text-green-500 mr-2 w-5 h-5' />{" "}
									Competitive interest rates
								</li>
								<li className='flex items-center'>
									<CheckCircle className='text-green-500 mr-2 w-5 h-5' />{" "}
									Flexible repayment
								</li>
							</ul>
						</div>
						<div className='bg-white p-8 rounded-xl shadow-md'>
							<h3 className='text-2xl font-bold text-blue-700 mb-4'>
								Tarun
							</h3>
							<p className='text-gray-600 mb-4'>
								Loans from ₹5,00,001 to ₹10,00,000 for business
								expansion.
							</p>
							<ul className='space-y-2 text-gray-600'>
								<li className='flex items-center'>
									<CheckCircle className='text-green-500 mr-2 w-5 h-5' />{" "}
									Higher loan amounts
								</li>
								<li className='flex items-center'>
									<CheckCircle className='text-green-500 mr-2 w-5 h-5' />{" "}
									Collateral required
								</li>
								<li className='flex items-center'>
									<CheckCircle className='text-green-500 mr-2 w-5 h-5' />{" "}
									Business growth support
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section id='process' className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						How to Get Mudra Loan
					</h2>
					<div className='grid md:grid-cols-4 gap-8'>
						<div className='text-center'>
							<div className='bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-blue-600'>
								1
							</div>
							<h3 className='font-semibold mb-2'>
								Check Eligibility
							</h3>
							<p className='text-gray-600 text-sm'>
								Basic eligibility criteria and documents
								required
							</p>
						</div>
						<div className='text-center'>
							<div className='bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-blue-600'>
								2
							</div>
							<h3 className='font-semibold mb-2'>
								Submit Application
							</h3>
							<p className='text-gray-600 text-sm'>
								Fill the online application form with business
								details
							</p>
						</div>
						<div className='text-center'>
							<div className='bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-blue-600'>
								3
							</div>
							<h3 className='font-semibold mb-2'>
								Document Verification
							</h3>
							<p className='text-gray-600 text-sm'>
								Submit required documents for verification
							</p>
						</div>
						<div className='text-center'>
							<div className='bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-blue-600'>
								4
							</div>
							<h3 className='font-semibold mb-2'>
								Loan Disbursal
							</h3>
							<p className='text-gray-600 text-sm'>
								Get loan amount disbursed to your account
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl font-bold mb-4'>
							Key Benefits of Mudra Loan
						</h2>
						<div className='w-24 h-1 bg-blue-600 mx-auto mb-8'></div>
					</div>
					<div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
						<div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
							<h3 className='text-xl font-semibold mb-3 flex items-center'>
								<CheckCircle className='text-green-500 mr-3' />
								Collateral-Free Loans
							</h3>
							<p className='text-gray-600'>
								No need to pledge any collateral or security for
								loans up to ₹10 Lakhs, making it accessible to
								small entrepreneurs.
							</p>
						</div>
						<div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
							<h3 className='text-xl font-semibold mb-3 flex items-center'>
								<CheckCircle className='text-green-500 mr-3' />
								Attractive Interest Rates
							</h3>
							<p className='text-gray-600'>
								Competitive interest rates starting from 8.50%
								p.a. with flexible repayment options up to 5
								years.
							</p>
						</div>
						<div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
							<h3 className='text-xl font-semibold mb-3 flex items-center'>
								<CheckCircle className='text-green-500 mr-3' />
								Minimal Documentation
							</h3>
							<p className='text-gray-600'>
								Simple documentation process with minimal
								paperwork required for quick loan processing.
							</p>
						</div>
						<div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
							<h3 className='text-xl font-semibold mb-3 flex items-center'>
								<CheckCircle className='text-green-500 mr-3' />
								Quick Disbursement
							</h3>
							<p className='text-gray-600'>
								Fast processing and quick disbursal of loan
								amount directly to your bank account.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Eligibility Criteria */}
			<section className='py-16 bg-blue-50'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto'>
						<h2 className='text-3xl font-bold text-center mb-6'>
							Eligibility Criteria
						</h2>
						<div className='w-24 h-1 bg-blue-600 mx-auto mb-12'></div>
						<div className='bg-white p-8 rounded-xl shadow-sm'>
							<h3 className='text-xl font-semibold mb-4 text-blue-700'>
								Who Can Apply?
							</h3>
							<ul className='space-y-3 mb-8'>
								<li className='flex items-start'>
									<CheckCircle className='text-green-500 mt-1 mr-3 flex-shrink-0' />
									<span>
										Micro and small business enterprises
										(MSMEs)
									</span>
								</li>
								<li className='flex items-start'>
									<CheckCircle className='text-green-500 mt-1 mr-3 flex-shrink-0' />
									<span>
										Small manufacturing units, shopkeepers,
										artisans, food processors, etc.
									</span>
								</li>
								<li className='flex items-start'>
									<CheckCircle className='text-green-500 mt-1 mr-3 flex-shrink-0' />
									<span>
										Proprietorships, partnership firms,
										private limited companies, and LLPs
									</span>
								</li>
								<li className='flex items-start'>
									<CheckCircle className='text-green-500 mt-1 mr-3 flex-shrink-0' />
									<span>
										Businesses with a minimum operational
										history of 6 months
									</span>
								</li>
							</ul>

							<h3 className='text-xl font-semibold mb-4 mt-8 text-blue-700'>
								Documents Required
							</h3>
							<div className='grid md:grid-cols-2 gap-6'>
								<div>
									<h4 className='font-medium mb-2'>
										Identity & Address Proof
									</h4>
									<ul className='space-y-2 text-gray-600'>
										<li>• Aadhaar Card</li>
										<li>• PAN Card</li>
										<li>• Voter ID / Driving License</li>
										<li>• Passport</li>
									</ul>
								</div>
								<div>
									<h4 className='font-medium mb-2'>
										Business Documents
									</h4>
									<ul className='space-y-2 text-gray-600'>
										<li>• Business Address Proof</li>
										<li>
											• Business Registration Certificate
										</li>
										<li>• Bank Statements (6 months)</li>
										<li>• IT Returns (if applicable)</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-3xl font-bold mb-6'>
						Ready to Grow Your Business?
					</h2>
					<p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
						Get the financial support you need with Mudra Loan.
						Quick approval, minimal documentation, and attractive
						interest rates.
					</p>
					<button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center'>
						Apply Now <ArrowRight className='ml-2' />
					</button>
				</div>
			</section>

			{/* FAQ Section */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto'>
						<h2 className='text-3xl font-bold text-center mb-12'>
							Frequently Asked Questions
						</h2>
						<div className='space-y-4'>
							<div className='border border-gray-200 rounded-lg overflow-hidden'>
								<button className='w-full px-6 py-4 text-left font-medium bg-gray-50 hover:bg-gray-100 focus:outline-none'>
									What is the maximum loan amount I can get
									under MUDRA scheme?
								</button>
								<div className='px-6 py-4 text-gray-600'>
									Under the MUDRA scheme, you can avail loans
									up to ₹10 Lakhs. The loan amount is
									categorized into three types: Shishu (up to
									₹50,000), Kishor (₹50,001 to ₹5,00,000), and
									Tarun (₹5,00,001 to ₹10,00,000).
								</div>
							</div>
							<div className='border border-gray-200 rounded-lg overflow-hidden'>
								<button className='w-full px-6 py-4 text-left font-medium bg-gray-50 hover:bg-gray-100 focus:outline-none'>
									What is the interest rate for MUDRA loans?
								</button>
								<div className='px-6 py-4 text-gray-600'>
									The interest rates for MUDRA loans vary
									between 8.50% to 12.50% per annum, depending
									on the loan amount, tenure, and the lending
									institution. The rates are generally lower
									than regular business loans.
								</div>
							</div>
							<div className='border border-gray-200 rounded-lg overflow-hidden'>
								<button className='w-full px-6 py-4 text-left font-medium bg-gray-50 hover:bg-gray-100 focus:outline-none'>
									How long does it take to get a MUDRA loan
									approved?
								</button>
								<div className='px-6 py-4 text-gray-600'>
									The processing time for MUDRA loans
									typically ranges from 1 to 4 weeks,
									depending on the completeness of your
									documentation and the policies of the
									lending institution. Some lenders offer
									quick approvals within 3-5 working days for
									eligible applicants.
								</div>
							</div>
							<div className='border border-gray-200 rounded-lg overflow-hidden'>
								<button className='w-full px-6 py-4 text-left font-medium bg-gray-50 hover:bg-gray-100 focus:outline-none'>
									Can I prepay my MUDRA loan?
								</button>
								<div className='px-6 py-4 text-gray-600'>
									Yes, most lenders allow prepayment of MUDRA
									loans after a minimum lock-in period
									(usually 6-12 months). However, some lenders
									may charge a nominal prepayment penalty,
									typically around 1-2% of the principal
									amount.
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer id='contact' className='bg-gray-900 text-white py-12'>
				<div className='container mx-auto px-4'>
					<div className='grid md:grid-cols-4 gap-8'>
						<div>
							<h3 className='text-xl font-bold mb-4'>
								About Mudra Loan
							</h3>
							<p className='text-gray-400'>
								Mudra Loan is a government initiative to provide
								financial support to small businesses and
								entrepreneurs.
							</p>
						</div>
						<div>
							<h3 className='text-xl font-bold mb-4'>
								Quick Links
							</h3>
							<ul className='space-y-2'>
								<li>
									<a
										href='#'
										className='text-gray-400 hover:text-white'>
										Home
									</a>
								</li>
								<li>
									<a
										href='#'
										className='text-gray-400 hover:text-white'>
										About Us
									</a>
								</li>
								<li>
									<a
										href='#'
										className='text-gray-400 hover:text-white'>
										Loan Schemes
									</a>
								</li>
								<li>
									<a
										href='#'
										className='text-gray-400 hover:text-white'>
										Contact Us
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className='text-xl font-bold mb-4'>
								Contact Us
							</h3>
							<address className='not-italic text-gray-400'>
								<p>123 Business Street</p>
								<p>Mumbai, Maharashtra 400001</p>
								<p>Email: info@mudraloan.com</p>
								<p>Phone: +91 98765 43210</p>
							</address>
						</div>
						<div>
							<h3 className='text-xl font-bold mb-4'>
								Working Hours
							</h3>
							<p className='text-gray-400'>
								Monday - Friday: 9:00 AM - 6:00 PM
							</p>
							<p className='text-gray-400'>
								Saturday: 10:00 AM - 4:00 PM
							</p>
							<p className='text-gray-400'>Sunday: Closed</p>
						</div>
					</div>
					<div className='border-t border-gray-800 mt-12 pt-8 text-center text-gray-400'>
						<p>
							© {new Date().getFullYear()} Lead Master. All rights
							reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
