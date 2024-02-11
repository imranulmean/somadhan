import { Card  } from 'flowbite-react';
import { useState, useRef, useEffect } from 'react';
import { Button } from 'flowbite-react';
import { useKeycloak } from '@react-keycloak/web';
import { EditDetailsModal } from '../modals/EditDetailsModal.jsx';
import { EditImageModal } from '../modals/EditImageModal.jsx';
import { EditEducationModal } from '../modals/EditEducationModal.jsx';
import { EditExperienceModal } from '../modals/EditExperience.jsx';
import { useNavigate, useParams } from 'react-router-dom';

export default function Profile() {
    const [openModal, setOpenModal]=useState(false);
    const [openImageModal, setOpenImageModal]=useState(false);
    const [openEducationModal, setOpenEducationModal]= useState(false);
    const [openExpModal, setOpenExpModal]= useState(false);
    const [profilePic, setProfilePic]=useState("https://flowbite.com/docs/images/people/profile-picture-5.jpg");
    const [coverPic, setCoverPic]= useState("https://media.licdn.com/dms/image/D5616AQEM-_hT5pN5eA/profile-displaybackgroundimage-shrink_350_1400/0/1703782815010?e=1712793600&v=beta&t=7CSE0TD-9bGzpScR4aKFvCOrTzB19itFTP31SH80sDA");
    const { userId } = useParams();
    const [edu, setEdu]=useState(null);
    const [exp, setExp]= useState(null);

    useEffect(()=>{

        const fetchUserProfile=async ()=>{
            const res= await fetch(`https://api-24f4009b4204.edgeflare.io/user_profiles?id=eq.${userId}`);
            const data=await res.json();
            console.log(data[0]);
        }
        
        const fetchExp=async ()=>{
            const res= await fetch(`https://api-24f4009b4204.edgeflare.io/user_experiences?user_id=eq.${userId}`);
            const data=await res.json();
            if(data.length>0)
            setExp(data[data.length-1]);
        }
        const fetchEdu=async ()=>{
            const res= await fetch(`https://api-24f4009b4204.edgeflare.io/user_educations?user_id=eq.${userId}`);
            const data=await res.json();
            if(data.length>0)
            setEdu(data[data.length-1]);
        }
        fetchUserProfile();   
        fetchExp();
        fetchEdu();
    },[])
    const formatDate=(dateString)=>{
        const formattedDate = dateString.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          });
        return formattedDate;
    }
    return (
        <>
            <Card className='w-full'>
                <img src={"https://media.licdn.com/dms/image/D5616AQEM-_hT5pN5eA/profile-displaybackgroundimage-shrink_350_1400/0/1703782815010?e=1712793600&v=beta&t=7CSE0TD-9bGzpScR4aKFvCOrTzB19itFTP31SH80sDA"}/>
                <div className="flex h-full flex gap-4 p-6">
                    <div className='flex-1 mt-[-100px]'>                        
                            <img onClick={()=>setOpenImageModal(true)} class="rounded-full border border-white w-auto h-24" 
                                src={profilePic} />                           
                        
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
                    <EditDetailsModal openModal={openModal} setOpenModal={setOpenModal}/>
                    <EditImageModal openImageModal={openImageModal} setOpenImageModal={setOpenImageModal} 
                                    profilePic={profilePic} coverPic={coverPic} />
               
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
                            {exp?.title}, {exp?.company_name}
                        </p>
                        <p className="font-normal text-1xl text-gray-500 dark:text-gray-400">
                            {exp?.start_date} to {exp?.end_date}
                        </p>
                        <p className="font-normal text-1xl text-gray-500 dark:text-gray-400">
                            {exp?.location}
                        </p>
                    </div>
                    <div>
                        <Button onClick={() => setOpenExpModal(true)} color="grey" size="xs">
                            <svg class="w-6 h-6 text-gray-800 hover:pointer dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
                            </svg>
                        </Button>                     
                    </div>                     
                </div>
                <EditExperienceModal openModal={openExpModal} setOpenModal={setOpenExpModal}/>
            </Card>            
            <Card className='w-full'>               
                <div className="flex h-full flex gap-4 p-6">
                    <div className='flex-1'>
                        <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Education
                        </h6>
                        <p className="font-normal text-1xl text-gray-500 dark:text-gray-400">
                            {edu?.institution_name}                                      
                        </p>

                         <p className="font-normal text-1xl text-gray-500 dark:text-gray-400">
                            {edu?.degree} in {edu?.field_of_study}                   
                         </p>
                         <p className="font-normal text-xs text-gray-500 dark:text-gray-400">
                           {edu?.start_date} to {edu?.end_date}
                         </p>
                    </div>
                    <div>
                        <Button onClick={() => setOpenEducationModal(true)} color="grey" size="xs">
                            <svg class="w-6 h-6 text-gray-800 hover:pointer dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
                            </svg>
                        </Button>                     
                    </div>                    
                </div>
                <EditEducationModal openModal={openEducationModal} setOpenModal={setOpenEducationModal}/>
            </Card>                             
        </>

    );
  }