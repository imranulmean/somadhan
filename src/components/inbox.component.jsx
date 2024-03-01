import { Card } from 'flowbite-react';
import { Rating } from 'flowbite-react';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';

export default function InboxComponent({inbox }){
    const navigate = useNavigate();

    return(
        <Card className="w-full" onClick={()=>navigate('/inbox/message')}>
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
                            src={inbox.profilePic}
                            width="32"
                            className="rounded-full"
                            />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{inbox.name}</p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">{inbox.post} | {moment(new Date().toISOString()).format('MMM D, h:mm a')}</p>
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
                    <p className="text-gray-500">{inbox.message}</p>
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
    )
}

