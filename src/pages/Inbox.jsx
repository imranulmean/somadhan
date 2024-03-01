import InboxComponent from '../components/inbox.component';

export default function Inbox(){

    const inbox=[
        {name:"Neil Sims", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-1.jpg&w=32&q=75",ratings:[1,2,3,4], reviews:'90,000', filled:true,
        message:"I am Neil, What Problems you are facing"},
        {name:"Bonnie Green", post:"Urologist", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-3.jpg&w=32&q=75",ratings:[1,2,3,4], reviews:'8,000', filled:false,
        message:"I am Bonnie, What Problems you are facing" },
        {name:"Michael Gough", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-2.jpg&w=32&q=75", ratings:[1,2,3,4], reviews:'16,000', filled:true,
        message:"I am Michael, What Problems you are facing" },
        {name:"Lana Byrd", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-4.jpg&w=32&q=75", ratings:[1,2,3,4], reviews:'25,000', filled:true,
        message:"I am Byrd, What Problems you are facing" },
        {name:"Thomes Lean", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-5.jpg&w=32&q=75", ratings:[1,2,3,4], reviews:'5,000', filled:false,
        message:"I am Byrd, What Problems you are facing" },
    ];

    return(
        <>
         <h5 className="text-1xl text-center font-bold tracking-tight text-gray-900 dark:text-white mb-3">Inbox</h5>
         <h5 className="text-sm font-bold tracking-tight dark:text-white mb-3 px-3">My Questions</h5>
         <InboxComponent inbox={inbox[0]}/>
         {/* {
             inbox.map(i=>{
               return(
                <InboxComponent inbox={i}/>
               ) 
             })
         } */}
        </>
    )
}