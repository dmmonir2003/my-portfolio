
// import myImage from '../assets/IMG_0140-removebg-preview(1).png';

// const ImageSection = () => {
//     return (
//         <div className="col-span-3">
//             <div className="max-w-xl sm:max-w-sm md:max-w-sm lg:max-w-lg xl:max-w-lg bg-white shadow-xl relative text-gray-900">
//                 {/* Container for both images */}
//                 <div className="relative -mt-3">
//                     {/* Circular profile image */}
//                     <div className="absolute bottom-[9px] left-1/2 transform -translate-x-1/2 z-10">
//                         <img
//                             style={{ boxShadow: '-8px 8px 3px 2px rgb(253 230 138)' }}
//                             className="object-cover mx-auto w-32 h-32 bg-amber-500 border-2 rounded-full border-black object-center p-0.5"
//                             src={myImage}
//                             alt="man looking front"
//                         />
//                     </div>
//                     {/* Background image */}
//                     <div className="h-96 overflow-hidden ">
//                         <img
//                             className="object-cover object-top w-full"
//                             src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                             alt="Mountain"
//                         />
//                     </div>
//                 </div>

//                 {/* Rest of the content */}
//                 <div className="bg-[#222222] rounded-t-full -mt-16 -mb-3 pt-20">
//                     <div className="text-center">
//                         <h2 className="font-semibold text-white">Md Moniruzzaman</h2>
//                         <p className="text-gray-500">Freelance Web Developer</p>
//                     </div>


//                     <ul className="flex items-center justify-center space-x-3 mt-2">
//                         <li className="mx-2">
//                             <a href="" target="_blank" aria-label="GitHub">
//                                 <svg className="h-6 text-indigo-700 hover:text-indigo-300" fill="currentColor" role="img" viewBox="0 0 24 24"
//                                     xmlns="http://www.w3.org/2000/svg">
//                                     <title>GitHub</title>
//                                     <path
//                                         d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
//                                     </path>
//                                 </svg> </a>
//                         </li>

//                         <li className="mx-2">
//                             <a href="" target="_blank" aria-label="LinkedIn">
//                                 <svg className="h-6 text-indigo-700 hover:text-indigo-300" fill="currentColor" role="img" viewBox="0 0 24 24"
//                                     xmlns="http://www.w3.org/2000/svg">
//                                     <title>LinkedIn</title>
//                                     <path
//                                         d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
//                                     </path>
//                                 </svg> </a>
//                         </li>

//                         <li className="mx-2">
//                             <a href="" target="_blank" aria-label="Twitter">
//                                 <svg className="h-6 text-indigo-700 hover:text-indigo-300" fill="currentColor" role="img" viewBox="0 0 24 24"
//                                     xmlns="http://www.w3.org/2000/svg">
//                                     <title>Twitter</title>
//                                     <path
//                                         d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z">
//                                     </path>
//                                 </svg> </a>
//                         </li>


//                     </ul>
//                     <div className="p-4 border-t mx-8 mt-2">
//                         <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
//                             Follow
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ImageSection;


import { TypeAnimation } from 'react-type-animation';
import myImage from '../assets/IMG_0140-removebg-preview(1).png';

const ImageSection = () => {
    return (
        <div className="col-span-3">
            <div
                className="max-w-xl sm:max-w-sm md:max-w-sm lg:max-w-lg xl:max-w-lg shadow-xl relative text-gray-900 overflow-hidden"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* Container for both images */}
                <div className="relative ">
                    {/* Background image filling the entire div */}
                    <div className="h-80 w-full relative overflow-hidden">
                        {/* Background image now set via inline styles */}
                    </div>

                    {/* Circular profile image */}
                    <div className="absolute bottom-[9px] left-1/2 transform -translate-x-1/2 z-10">
                        <img
                            style={{ boxShadow: '-8px 8px 3px 2px rgb(253 230 138)' }}
                            className="object-cover mx-auto w-32 h-32 bg-amber-500 border-2 rounded-full border-black object-center p-0.5"
                            src={myImage}
                            alt="Man looking front"
                        />
                    </div>
                </div>

                {/* Rest of the content */}
                <div className="bg-[#222222] z-0 rounded-t-[90px] -mt-16 py-20">
                    <div className="text-center">
                        <h2 className="font-semibold text-white">Md Moniruzzaman</h2>


                        <TypeAnimation
                            sequence={['Backend Focused Full Stack Developer', 3000, 'Frontend Developer', 3000, 'Mern Developer', 3000, 'Freelance Web Developer', 3000,]}

                            repeat={Infinity}
                            speed={10}
                            deletionSpeed={10}
                            className='text-amber-500'


                        />

                    </div>

                    <ul className="flex items-center justify-center space-x-3 mt-2">
                        {/* Social icons */}
                        {/* GitHub */}
                        <li className="mx-2">
                            <a href="https://github.com/your-username" target="_blank" aria-label="GitHub">
                                <svg
                                    className="h-6 text-indigo-700 hover:text-indigo-300"
                                    fill="currentColor"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>GitHub</title>
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"></path>
                                </svg>
                            </a>
                        </li>

                        {/* LinkedIn */}
                        <li className="mx-2">
                            <a href="https://linkedin.com/in/your-username" target="_blank" aria-label="LinkedIn">
                                <svg
                                    className="h-6 text-indigo-700 hover:text-indigo-300"
                                    fill="currentColor"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>LinkedIn</title>
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                                </svg>
                            </a>
                        </li>

                        {/* Twitter */}
                        <li className="mx-2">
                            <a href="https://twitter.com/your-username" target="_blank" aria-label="Twitter">
                                <svg
                                    className="h-6 text-indigo-700 hover:text-indigo-300"
                                    fill="currentColor"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Twitter</title>
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>

                    {/* Action button */}
                    <div className="text-center">
                        <a href="#_" className="inline-block bg-amber-400 text-black font-semibold rounded-lg px-6 py-2 mt-3 mb-8 shadow-md hover:bg-amber-500">
                            Follow me
                        </a>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ImageSection;
