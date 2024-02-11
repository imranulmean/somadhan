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
        console.log(keycloak.subject)

        // console.log(keycloak.tokenParsed.sid);
        console.log(keycloak.token);
        // let expertise = formData.expertise;
        // let modifiedExpertise = expertise.replace(/\s*,\s*/g, ',');
        // let expertiseArray = modifiedExpertise.split(',');
        // setFormData({...formData, ['expertiseArray'] :  expertiseArray});
        // formData['expertiseArray'] =  expertiseArray;
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
         const data = await res.json();
         console.log(data);
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
                    {/* <div>
                        <div className="mb-2 block">
                        <Label htmlFor="expertise" value="Your Expertise Seperated By Comma(,)" />
                        </div>
                        <TextInput id="expertise" type="text" onChange={handleChange} />
                    </div> 
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="organizations" value="Organizations" />
                        </div>
                        <TextInput id="organizations" type="text" onChange={handleChange} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="role" value="Job Role" />
                        </div>
                        <TextInput id="role" type="text" onChange={handleChange} />
                    </div>                            
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="education" value="Education" />
                        </div>
                        <TextInput id="education" type="text" onChange={handleChange} />
                    </div> */}
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
