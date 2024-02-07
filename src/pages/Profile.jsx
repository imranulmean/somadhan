import { Card } from 'flowbite-react';


export default function Profile() {
    return (
        <>
            <Card className='w-full'>
                <img src={"https://media.licdn.com/dms/image/D5616AQEM-_hT5pN5eA/profile-displaybackgroundimage-shrink_350_1400/0/1703782815010?e=1712793600&v=beta&t=7CSE0TD-9bGzpScR4aKFvCOrTzB19itFTP31SH80sDA"}/>
                <div className="flex h-full flex gap-4 p-6">
                    <div className='flex-1 mt-[-100px]'>                    
                        <img class="rounded-full border border-white w-auto h-24" src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Profile Name
                        </h5>
                        <p className="font-normal text-1xl text-gray-700 dark:text-gray-400">
                            Expertice
                        </p>
                        <p className="font-normal text-1xl text-gray-500 dark:text-gray-400">
                            Working Organizations . Schools
                        </p>                  
                        <p className="font-normal text-1xl text-gray-500 dark:text-gray-400">
                            Address
                        </p>
                    </div>
                    <div>
                        <svg data-modal-target="medium-modal" data-modal-toggle="medium-modal" class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
                        </svg>                     
                    </div>                    
                </div>
                                    
                    <div id="medium-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative w-full max-w-lg max-h-full">
                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                                        Default modal
                                    </h3>
                                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="medium-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <div class="p-4 md:p-5 space-y-4">
                                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                    </p>
                                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                    </p>
                                </div>

                                <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button data-modal-hide="medium-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                                    <button data-modal-hide="medium-modal" type="button" class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                                </div>
                            </div>
                        </div>
                    </div>                
            </Card>
            <Card className='w-full'>               
                <div className="flex h-full flex gap-4 p-6">
                    <div className='flex-1'>
                        <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            About
                        </h6>
                        <p className="font-normal text-1xl text-gray-700 dark:text-gray-400">
                                                    🚀 Passionate and Self-Taught Software Engineer | AWS Enthusiast | Innovative Web Developer
                            👋 Hello, I'm Md. Imranul Hasan, a seasoned software engineer with over a decade of hands-on experience in the dynamic world of web development. I thrive on embracing new technologies and have cultivated a strong proficiency in Node.js, JavaScript, TypeScript, and a diverse range of frameworks and tools.
                            🚀 Skills:
                            Expert in Node.js, JavaScript, TypeScript, Java, HTML5, CSS3, and more.
                            Strong background in cloud technologies, particularly AWS (Lambda, Apigateway, SQS, SNS, S3, DynamoDB, Cognito).                            
                        </p>

                        </div>
                </div>
            </Card>
            <Card className='w-full'>               
                <div className="flex h-full flex gap-4 p-6">
                    <div className='flex-1'>
                        <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Experiences
                        </h6>
                        <p className="font-normal text-1xl text-gray-700 dark:text-gray-400">
                            Software Developer
                        </p>
                        <p className="font-normal text-1xl text-gray-500 dark:text-gray-400">
                            FunnelEnvy · Full-time
                            Mar 2016 - Present · 8 yrsMar 2016 - Present · 8 yrs
                            Dhaka, Bangladesh · Remote                            
                        </p>
                        </div>
                </div>
            </Card>            
            <Card className='w-full'>               
                <div className="flex h-full flex gap-4 p-6">
                    <div className='flex-1'>
                        <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Education
                        </h6>
                        <p className="font-normal text-1xl text-gray-500 dark:text-gray-400">
                            East West University                                            
                        </p>

                         <p className="font-normal text-1xl text-gray-500 dark:text-gray-400">
                            Computer Science and Engineering                            
                         </p>
                         <p className="font-normal text-xs text-gray-500 dark:text-gray-400">
                            2010-2014
                         </p>
                        </div>
                </div>
            </Card>                             
        </>

    );
  }