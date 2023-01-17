import React from 'react';
import obayedullah from "../../assets/leader/obayedullah.jpg"

const ProfileBanner = () => {
    return (
        <div className='mt-20 mx-20'>
            <div className="bg-gradient-to-r from-primary to-secondary text-white dark:bg-gray-800 dark:text-gray-50">
	<div className="container grid grid-cols-12 mx-auto bg-gradient-to-r from-primary to-secondary text-white dark:bg-gray-900">
		<div className="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4">
            <img src={obayedullah} className="w-96 h-56 md:w-full md:h-96" alt="" />
        </div>
		<div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10"> 
			<h1 className="text-3xl font-semibold">MD. Obayedullah Khan</h1>
			<p className="flex-1 pt-2">Web Developer of the website.</p>
			<p className="flex-1 pt-2">Email: ullahtarik300@gmail.com</p>
			<p className="flex-1 pt-2">Number: +8801783280840</p>
			<a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-white">
				<a href="https://nimble-strudel-a7c915.netlify.app/" target="_blank">Read More</a>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</a>
		</div>
	</div>
</div>

        </div>
    );
};

export default ProfileBanner;