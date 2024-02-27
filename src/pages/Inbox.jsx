import { Card } from 'flowbite-react';
import { Rating } from 'flowbite-react';
import moment from 'moment';

export default function Inbox(){

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
         <h5 className="text-1xl text-center font-bold tracking-tight text-gray-900 dark:text-white mb-3">Inbox</h5>
         <h5 className="text-sm font-bold tracking-tight dark:text-white mb-3 px-3">My Questions</h5>
         <Card className="w-full">
            <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                <div className="flex">
                    <div className='flex-1'>
                        <div className="flex items-center space-x-4">
                            <div className="shrink-0">
                                <img
                                alt="Neil image"
                                height="32"
                                src={inbox[0].profilePic}
                                width="32"
                                className="rounded-full"
                                />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{inbox[0].name}</p>
                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">{inbox[0].post} | {moment(new Date().toISOString()).format('MMM D, h:mm a')}</p>
                                <Rating>
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                </Rating>
                            </div>
                        </div>
                        <p className="text-gray-500">Hi</p>
                        <p className="text-gray-500">{inbox[0].message}</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                        </svg>                       
                    </div>
                </div>  
               
                </li>
                </ul>
            </div>
          </Card> 
                   
        </>
    )
}