import { Card } from 'flowbite-react';
import { Rating } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { useState } from 'react';
import { Modal } from 'flowbite-react';
import { Checkbox, Label, TextInput, Textarea } from 'flowbite-react';

export default function Experts(){
    
    const [openModal, setOpenModal]=useState(false);

    const experts=[
        {name:"Neil Sims", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-1.jpg&w=32&q=75",ratings:[1,2,3,4] },
        {name:"Bonnie Green", post:"Urologist", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-3.jpg&w=32&q=75", ratings:[1,2,3] },
        {name:"Michael Gough", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-2.jpg&w=32&q=75", ratings:[1,2,3,4,5]},
        {name:"Lana Byrd", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-4.jpg&w=32&q=75", ratings:[1,2,3,4]},
        {name:"Thomes Lean", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-5.jpg&w=32&q=75", ratings:[1,2,3,]},
    ];

    const handleSubmit = async (e) =>{
        e.preventDefault();
        alert("Your Request Has send")
    }

    return (
        <Card className="full-width">
          <div className="mb-4 flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Favourite Experts</h5>
          </div>
          <div className="flow-root">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {
                experts.map((exp)=>{
                   return(
                    <>
                        <li className="py-3 sm:py-4">
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

                                </Rating>                                
                            </div>
                                <Button outline gradientDuoTone="tealToLime" onClick={() => setOpenModal(true)}>
                                    Ask
                                </Button>
                            </div>
                        </li>
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