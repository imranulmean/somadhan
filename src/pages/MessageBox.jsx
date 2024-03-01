import { Avatar } from 'flowbite-react';
import { Card } from 'flowbite-react';
import { Button } from 'flowbite-react';

export default function MessageBox(){

    const inbox=[
        {name:"Neil Sims", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-1.jpg&w=32&q=75",ratings:[1,2,3,4], reviews:'90,000', filled:true,
        message:"I am Neil, What Problems you are facing"},
        {name:"Bonnie Green", post:"Urologist", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-3.jpg&w=32&q=75",ratings:[1,2,3,4], reviews:'8,000', filled:false,
        message:"I am Bonnie, What Problems you are facing" },
        {name:"Michael Gough", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-2.jpg&w=32&q=75", ratings:[1,2,3,4], reviews:'16,000', filled:true,
        message:"I am Michael, What Problems you are facing" },
        {name:"Lana Byrd", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-4.jpg&w=32&q=75", ratings:[1,2,3,4], reviews:'25,000', filled:true,
        message:"I am Byrd, What Problems you are facing" },
        {name:"Thomes Lean", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-5.jpg&w=32&q=75", ratings:[1,2,3,4], reviews:'5,000', filled:false,
        message:"I am Byrd, What Problems you are facing" },
    ];

    return(
        <>
            <Card className="w-full">
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="shrink-0">
                                    <img
                                    alt="Neil image"
                                    height="32"
                                    src="https://www.flowbite-react.com/images/people/profile-picture-1.jpg"
                                    width="32"
                                    className="rounded-full"
                                    />
                                </div>                                
                            </div>
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-400">How can I help You Sir?</p>
                        </li>
                        <li className="flex py-3 sm:py-4">
                            <div className="flex items-end ml-auto">
                                <div className="text-base font-semibold text-gray-900 dark:text-white">
                                    <div className="shrink-0">
                                        <img
                                            alt="Bonnie image"
                                            height="32"
                                            src="https://www.flowbite-react.com/images/people/profile-picture-5.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <p className='truncate text-sm font-medium text-gray-900 dark:text-gray-400'>I need Help For programming</p>
                                </div>
                            </div>
                        </li>
                        {/* /////////////////////////////         */}
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="shrink-0">
                                    <img
                                    alt="Neil image"
                                    height="32"
                                    src="https://www.flowbite-react.com/images/people/profile-picture-1.jpg"
                                    width="32"
                                    className="rounded-full"
                                    />
                                </div>                                
                            </div>
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-400">I can recommend you some tutorials and courses</p>
                        </li>
                        <li className="flex py-3 sm:py-4">
                            <div className="ml-auto flex items-end">
                                <div className="text-base font-semibold text-gray-900 dark:text-white">
                                    <div className="shrink-0">
                                        <img
                                            alt="Bonnie image"
                                            height="32"
                                            src="https://www.flowbite-react.com/images/people/profile-picture-5.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <p className='text-wrap truncate text-sm font-medium text-gray-900 dark:text-gray-400'>Lets Try those things Thanks for your help</p>
                                </div>
                            </div>
                        </li>                         
                    </ul>
                </div>
            </Card>                         
        </>
    )
}

