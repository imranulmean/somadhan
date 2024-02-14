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
    const { keycloak, initialized } = useKeycloak();
    const [openModal, setOpenModal]=useState(false);
    const [openImageModal, setOpenImageModal]=useState(false);
    const [openEducationModal, setOpenEducationModal]= useState(false);
    const [openExpModal, setOpenExpModal]= useState(false);
    const [profilePic, setProfilePic]=useState("https://flowbite.com/docs/images/people/profile-picture-5.jpg");
    const [coverPic, setCoverPic]= useState("https://media.licdn.com/dms/image/D5616AQEM-_hT5pN5eA/profile-displaybackgroundimage-shrink_350_1400/0/1703782815010?e=1712793600&v=beta&t=7CSE0TD-9bGzpScR4aKFvCOrTzB19itFTP31SH80sDA");
    const { userId } = useParams();
    const [userProfile, setUserProfile]= useState(null);
    const [edu, setEdu]=useState(null);
    const [exp, setExp]= useState(null);

    useEffect(()=>{
        fetchUserProfile();   
        fetchExp();
        fetchEdu();
    },[])

    const fetchUserProfile=async ()=>{
        const res= await fetch(`https://api-24f4009b4204.edgeflare.io/user_profiles?id=eq.${userId}`);
        const data=await res.json();
        setUserProfile(data[0]);
    }
    
    const fetchExp=async ()=>{
        const res= await fetch(`https://api-24f4009b4204.edgeflare.io/user_experiences?user_id=eq.${userId}`);
        const data=await res.json();
        if(data.length>0)
        setExp(data);
    }    
    const fetchEdu=async ()=>{
        const res= await fetch(`https://api-24f4009b4204.edgeflare.io/user_educations?user_id=eq.${userId}`);
        const data=await res.json();
        if(data.length>0)
        setEdu(data);
    }
    const formatDate=(dateString)=>{
        const formattedDate = dateString.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          });
        return formattedDate;
    }
    const deleteExp= async(exp)=>{
        console.log(exp);
        const url=`https://api-24f4009b4204.edgeflare.io/user_experiences?id=eq.${exp.id}`;
        try {
            const res= await fetch(url,{
                method:"DELETE",
                headers:{
                    'Content-Type': 'application/json',
                    "Authorization": `Beaerer ${keycloak.token}`
                }
            });
            fetchExp();

        } catch (error) {
            alert(error);
        }        

     }    
     const deleteEdu= async(edu)=>{
        console.log(edu)
        const url=`https://api-24f4009b4204.edgeflare.io/user_educations?id=eq.${edu.id}`;
        try {
            const res= await fetch(url,{
                method:"DELETE",
                headers:{
                    'Content-Type': 'application/json',
                    "Authorization": `Beaerer ${keycloak.token}`
                }
            });
            fetchEdu();      
        } catch (error) {
            alert(error);
        }
     }
     
    return (
        <>
            <Card className='w-full'>
                <img src={"https://media.licdn.com/dms/image/D5616AQEM-_hT5pN5eA/profile-displaybackgroundimage-shrink_350_1400/0/1703782815010?e=1712793600&v=beta&t=7CSE0TD-9bGzpScR4aKFvCOrTzB19itFTP31SH80sDA"}/>
                <div className="flex items-center justify-between">
                    <div className='flex-1 mt-[-100px]'>                        
                            <img onClick={()=>setOpenImageModal(true)} class="rounded-full border border-white w-auto h-24" 
                                src={profilePic} />                           
                        
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {userProfile?.first_name}{" "}{userProfile?.last_name}
                        </h5>
                        <p className="font-normal text-1xl text-gray-700 dark:text-gray-400">
                            {userProfile?.title}
                        </p>
                        {/* <p className="font-normal text-1xl text-gray-500 dark:text-gray-400">
                        {exp[0]?.company_name} . {edu[0]?.institution_name}
                        </p>                   */}
                        <p className="font-normal text-1xl text-gray-500 dark:text-gray-400">
                            {userProfile?.location}
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
                <div className="flex items-center justify-between">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">About</h5>
                </div>
                <div className="flow-root">
                    <p className="font-normal text-1xl text-gray-700 dark:text-gray-400">
                        {userProfile?.about}
                    </p>
                </div>
            </Card>
            <Card className="w-full">
                <div className="flex items-center justify-between">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Experiences</h5>
                    <Button onClick={() => setOpenExpModal(true)} color="grey" size="xs">
                            <svg class="w-6 h-6 text-gray-800 hover:pointer dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
                            </svg>
                    </Button>  
                </div>
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {
                            exp?.map(e=>{
                                return(
                                    <>
                                    <li className="py-3 sm:py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="min-w-0 flex-1">
                                                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{e?.title}, {e?.company_name}</p>
                                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                                    {e?.start_date} to {e?.end_date===null ? "Working" : e?.end_date }
                                                </p>
                                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">{e?.location}</p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <Button onClick={()=>deleteExp(e)} color="grey" size="xs">
                                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6m0 12L6 6"/>
                                                    </svg>                                                    
                                                </Button>
                                            </div>    
                                        </div>
                                    </li>                                    
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
                <EditExperienceModal openModal={openExpModal} setOpenModal={setOpenExpModal} callback={fetchExp}/>
            </Card>             
            <Card className="w-full">
                <div className="flex items-center justify-between">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Education</h5>
                    <Button onClick={() => setOpenEducationModal(true)} color="grey" size="xs">
                            <svg class="w-6 h-6 text-gray-800 hover:pointer dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
                            </svg>
                    </Button>  
                </div>
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {
                            edu?.map(e=>{
                                return(
                                    <>
                                    <li className="py-3 sm:py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="min-w-0 flex-1">
                                                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{e?.institution_name}</p>
                                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">{e?.degree} in {e?.field_of_study}</p>
                                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">{e?.start_date} to {e?.end_date}</p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <Button onClick={()=>deleteEdu(e)} color="grey" size="xs">
                                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6m0 12L6 6"/>
                                                    </svg>                                                    
                                                </Button>
                                            </div>    
                                        </div>
                                    </li>                                    
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
                <EditEducationModal openModal={openEducationModal} setOpenModal={setOpenEducationModal} callback={fetchEdu}/>
            </Card>                    
                             
        </>

    );
  }