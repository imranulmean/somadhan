import { Card  } from 'flowbite-react';
import { useRef, useState, useEffect } from 'react';
import { Button, Modal } from 'flowbite-react';
import { Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { useKeycloak } from '@react-keycloak/web';
import { Datepicker } from 'flowbite-react';

export const EditExperienceModal = ({openModal, setOpenModal, callback}) => {

    const { keycloak, initialized } = useKeycloak();
    const[email, setEmail]= useState("abx@gmail.com");
    const [isCurrentlyWorking, setCurrentlyWorking] = useState(false);
    const [formData, setFormData]= useState({});
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
      const handleCheckboxChange = () => {        
        setCurrentlyWorking((prevValue) => !prevValue);
      };
    const handleSubmit = async (e) =>{
        e.preventDefault();
        let startDateParsed= new Date(document.getElementById("start_date").value);
        startDateParsed=`${startDateParsed.getFullYear()}-${startDateParsed.getMonth()+1}-${startDateParsed.getDate()}`;
        let endDateParsed= new Date(document.getElementById("end_date").value);        
        endDateParsed=`${endDateParsed.getFullYear()}-${endDateParsed.getMonth()+1}-${endDateParsed.getDate()}`;
        formData['user_id']=keycloak.subject;
        formData["start_date"]=startDateParsed;
        if(isCurrentlyWorking)
        endDateParsed=null;
        formData["end_date"]=endDateParsed;
        const url=`https://api-24f4009b4204.edgeflare.io/user_experiences?id=eq.${keycloak.subject}`;
        try {
            const res= await fetch(url,{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                    "Authorization": `Beaerer ${keycloak.token}`
                },
                body: JSON.stringify(formData)
            });
            callback(); 
            setOpenModal(false)

        } catch (error) {
            alert(error);
        }        
    }

    const getExp=async()=>{
        const data=await fetch(`https://api-24f4009b4204.edgeflare.io/user_experiences?user_id=eq.${keycloak.subject}`);
    }

  return (
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Add Experience</Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="title" value="title" />
                        </div>
                        <TextInput id="title" type="text" onChange={handleChange} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="company_name" value="company_name" />
                        </div>
                        <TextInput id="company_name" type="text" onChange={handleChange} />
                    </div>                            
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="location" value="location" />
                        </div>
                        <TextInput id="location" type="text" onChange={handleChange} />
                    </div> 
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="start_date" value="Start Date" />
                        </div>
                        <Datepicker id="start_date" autoHide={true}/>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" onChange={handleCheckboxChange} checked={isCurrentlyWorking} class="sr-only peer" />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Currently Working</span>
                    </label>                    
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="end_date" value="End Date" />
                        </div>
                        <Datepicker id="end_date" autoHide={true}/>
                    </div>                            
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="description" value="Description" />
                        </div>
                        <TextInput id="description" type="text" onChange={handleChange} />
                    </div>                                                                        
                    <Button type="submit" >Submit</Button>
                </form>
            </Modal.Body>
        </Modal> 
  )
}