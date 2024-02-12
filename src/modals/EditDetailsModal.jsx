import { Card  } from 'flowbite-react';
import { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { useKeycloak } from '@react-keycloak/web';


export const EditDetailsModal = ({openModal, setOpenModal}) => {

    const { keycloak, initialized } = useKeycloak();
    const[email, setEmail]= useState("abx@gmail.com");
    const [formData, setFormData]= useState();    
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(keycloak.subject);
        formData['id']=keycloak.subject;
        console.log(formData);
        const url=`https://api-24f4009b4204.edgeflare.io/user_profiles?id=eq.${keycloak.subject}`;
        const res= await fetch(url,{
            method:"PUT",
            headers:{
                'Content-Type': 'application/json',
                "Authorization": `Beaerer ${keycloak.token}`
            },
            body: JSON.stringify(formData)
        });
    } 

  return (
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
                        <TextInput id="first_name" type="text" onChange={handleChange} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="last_name" value="Last Name" />
                        </div>
                        <TextInput id="last_name" type="text" onChange={handleChange} />
                    </div>                            
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="title" value="title"/>
                        </div>
                        <TextInput id="title" type="text" onChange={handleChange} />
                    </div> 
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="phone_number" value="phone_number" />
                        </div>
                        <TextInput id="phone_number" type="text" onChange={handleChange} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="location" value="location" />
                        </div>
                        <TextInput id="location" type="text" onChange={handleChange} />
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
  )
}
