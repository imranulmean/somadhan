import { useState, useRef, useEffect } from 'react';
import { Button, Modal } from 'flowbite-react';
import { Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { useKeycloak } from '@react-keycloak/web';

export const EditImageModal = ({openImageModal, setOpenImageModal, profilePic, coverPic}) => {

    const [coverImageFile, setCoverImageFile]= useState(null);
    const [coverImageFileUrl, setCoverImageFileUrl] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [imageFileUrl, setImageFileUrl] = useState(null);
    const filePickerRefCover = useRef();
    const filePickerRef = useRef();

    useEffect(()=>{
        console.log("file updated");
    },[imageFile])

    const handleImageChangeCover = (e) => {
        const file = e.target.files[0];
        if (file) {
          setCoverImageFile(file);
          setCoverImageFileUrl(URL.createObjectURL(file));
        }
      };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setImageFile(file);
          setImageFileUrl(URL.createObjectURL(file));
        }
      };

  return (
        <Modal show={openImageModal} onClose={() => setOpenImageModal(false)}>
            <Modal.Header></Modal.Header>
            <Modal.Body>
            <div className="flex flex-col justify-center items-center">
                    <p className='font-normal text-1xl text-gray-600 dark:text-gray-400'>Cover Pic</p>
                    <div onClick={() => filePickerRefCover.current.click()} className="flex flex-col items-center">
                        <input type='file' accept='image/*' onChange={handleImageChangeCover} ref={filePickerRefCover} hidden />                            
                        <img src={coverImageFileUrl || coverPic} />
                        <p className='font-normal text-xs text-gray-600 dark:text-gray-400'>Click on image to Upload</p>
                    </div>                    
                    <Button type="submit" size="xs" color="gray">Upload Cover Pic</Button>
                </div>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />        
                <div className="flex flex-col justify-center items-center">
                    <p className='font-normal text-1xl text-gray-600 dark:text-gray-400'>Profile Pic</p>
                    <div onClick={() => filePickerRef.current.click()} className="flex flex-col items-center">
                        <input type='file' accept='image/*' onChange={handleImageChange} ref={filePickerRef} hidden />                            
                        <img src={imageFileUrl || profilePic} class="rounded-full border border-white w-auto h-24" />
                        <p className='font-normal text-xs text-gray-600 dark:text-gray-400'>Click on image to Upload</p>
                    </div>                    
                    <Button type="submit" size="xs" color="gray">Upload Profile Pic</Button>
                </div>
            </Modal.Body>
        </Modal> 

  )
}
