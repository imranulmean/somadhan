import { Card } from 'flowbite-react';
import { Rating } from 'flowbite-react';

export default function Inbox(){

    const inbox=[
        {name:"Neil Sims", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-1.jpg&w=32&q=75",ratings:[1,2,3,4],
        message:"I am Neil, What Problems you are facing"},
        {name:"Bonnie Green", post:"Urologist", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-3.jpg&w=32&q=75", ratings:[1,2,3],
        message:"I am Bonnie, What Problems you are facing" },
        {name:"Michael Gough", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-2.jpg&w=32&q=75", ratings:[1,2,3,4,5], 
        message:"I am Michael, What Problems you are facing" },
        {name:"Lana Byrd", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-4.jpg&w=32&q=75", ratings:[1,2,3,4],
        message:"I am Byrd, What Problems you are facing" },
        {name:"Thomes Lean", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-5.jpg&w=32&q=75", ratings:[1,2,3,],
        message:"I am Byrd, What Problems you are facing" },
    ];

    return(
        <>
         <h5 className="text-1xl text-center font-bold tracking-tight text-gray-900 dark:text-white mb-3">Inbox</h5>
         <h5 className="text-sm text-center font-normal tracking-tight text-gray-500 dark:text-white mb-3">My Questions</h5>
        {
            inbox.map((i)=>{
                return(
                        <Card className="w-full">
                        <div className="flow-root">
                            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                <div className="shrink-0">
                                    <img
                                    alt="Neil image"
                                    height="32"
                                    src={i.profilePic}
                                    width="32"
                                    className="rounded-full"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{i.name}</p>
                                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">{i.post}</p>
                                    <Rating>
                                        <Rating.Star /> 
                                        <Rating.Star /> 
                                        <Rating.Star /> 
                                        <Rating.Star /> 
                                    </Rating>                 
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"></div>              
                                </div>
                                <p className="text-gray-500">Hi</p>
                                <p className="text-gray-500">{i.message}</p>
                            </li>
                            </ul>
                        </div>
                    </Card> 
                )

            })
        }
                   
        </>
    )
}