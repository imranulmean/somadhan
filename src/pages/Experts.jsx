import { Card } from 'flowbite-react';
import { Rating } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { useState } from 'react';
import { Modal } from 'flowbite-react';
import { Checkbox, Label, TextInput, Textarea } from 'flowbite-react';

export default function Experts(){
    
    const [openModal, setOpenModal]=useState(false);

    const experts=[
        {name:"Neil Sims", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-1.jpg&w=32&q=75",ratings:[1,2,3,4], reviews:'90,000', filled:true },
        {name:"Bonnie Green", post:"Urologist", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-3.jpg&w=32&q=75", ratings:[1,2,3,4], reviews:'8,000', filled:false },
        {name:"Michael Gough", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-2.jpg&w=32&q=75", ratings:[1,2,3,4], reviews:'16,000', filled:true},
        {name:"Lana Byrd", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-4.jpg&w=32&q=75", ratings:[1,2,3,4], reviews:'25,000', filled:true},
        {name:"Thomes Lean", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-5.jpg&w=32&q=75", ratings:[1,2,3,4], reviews:'5,000', filled:false},
    ];

    const handleSubmit = async (e) =>{
        e.preventDefault();
        alert("Your Request Has send")
    }

    return (
        <Card className="full-width">
          <div className="flex items-center justify-center">
            <h5 className="text-center text-xl font-bold leading-none text-gray-900 dark:text-white">Favourite Experts</h5>
          </div>
          <div className="flow-root">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className='flex flex-col justify-center mb-6'>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                            <img
                            alt="Neil image"
                            height="32"
                            src={experts[0].profilePic}
                            width="32"
                            className="rounded-full"
                            />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{experts[0].name}</p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">{experts[0].post}</p>
                            <Rating>
                                {experts[0].ratings.map(r=>{
                                    return(
                                    <>
                                        <Rating.Star />                                            
                                    </>
                                    )                                          
                                })}
                                <Rating.Star filled={experts[0].filled} />
                                <p className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-400">{experts[0].reviews} Ratings</p>
                                
                                
                            </Rating>                                
                        </div>
                            <Button outline gradientDuoTone="tealToLime" onClick={() => setOpenModal(true)}>
                                Ask
                            </Button>
                        </div>                    
                    </li>   
                    <span className="truncate text-center font-normal text-sm text-gray-500">Save Some of Our Top Experts</span>                 
                </div>
                
              {
                experts.map((exp,index)=>{
                   return(
                    <>
                    {
                     index>0 &&
                        <li className="py-3 sm:py-4 ">
                            <div className="flex items-center space-x-4">
                            <div className="shrink-0">
                                <img
                                alt="Neil image"
                                height="32"
                                src={exp.profilePic}
                                width="32"
                                className="rounded-full"
                                />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{exp.name}</p>
                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">{exp.post}</p>
                                <Rating>
                                    {exp.ratings.map(r=>{
                                      return(
                                        <>
                                            <Rating.Star />                                            
                                        </>
                                      )                                          
                                    })}
                                    <Rating.Star filled={exp.filled} />
                                    <p className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-400">{exp.reviews} Ratings</p>
                                    
                                    
                                </Rating>                                
                            </div>
                                <Button outline gradientDuoTone="tealToLime" onClick={() => setOpenModal(true)}>
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"/>
                                    </svg>                                   
                                    Add
                                </Button>
                            </div>
                        </li>                         
                    }
                       
                    </>
                   ) 
                })
              }

            </ul>
          </div>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Ask Question</Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">                   
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="about" value="Query" />
                        </div>
                        <Textarea id="about" className='mb-2' maxLength='200' />
                        <p className='text-gray-500 text-xs'>200 Char reamining</p>                                
                    </div>                                                                          
                    <Button type="submit" >Send</Button>
                </form>
            </Modal.Body>
        </Modal>           
        </Card>
      );    
}