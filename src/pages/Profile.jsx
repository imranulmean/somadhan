import { Card  } from 'flowbite-react';
import { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { Checkbox, Label, TextInput, Textarea } from 'flowbite-react';

export default function Profile() {

    const [openModal, setOpenModal]=useState(false);
    const[email, setEmail]= useState("abx@gmail.com");
    const [formData, setFormData]= useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(formData);

        return;
        const url="";
        const res= await fetch(url,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
         const data = await res.json();
    }  
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
                        <Button onClick={() => setOpenModal(true)} color="grey" size="xs">
                            <svg class="w-6 h-6 text-gray-800 hover:pointer dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
                            </svg>
                        </Button>
                     
                    </div>                    
                </div>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>Edit Bio</Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email" />
                                </div>
                                <TextInput disabled readOnly defaultValue={email} id="email" type="email" placeholder="name@flowbite.com" required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="firstName" value="First Name" />
                                </div>
                                <TextInput id="firstName" type="text" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="lastName" value="Last Name" />
                                </div>
                                <TextInput id="lastName" type="text" />
                            </div>                            
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="expertise" value="Your Expertise" />
                                </div>
                                <TextInput id="Expertise" type="text" />
                            </div> 
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="organizations" value="Organizations" />
                                </div>
                                <TextInput id="organizations" type="text" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="role" value="Job Role" />
                                </div>
                                <TextInput id="role" type="text" />
                            </div>                            
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="education" value="Education" />
                                </div>
                                <TextInput id="education" type="text" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="about" value="About" />
                                </div>
                                <Textarea id="about" className='mb-2' maxLength='200' onChange={handleChange} />
                                <p className='text-gray-500 text-xs'>200 Char reamining</p>                                
                            </div>                                                                          
                            <Button type="submit" >Submit</Button>
                        </form>
                    </Modal.Body>
                </Modal>                               
               
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