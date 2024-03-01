import { Card } from 'flowbite-react';
import { Rating } from 'flowbite-react';
import { Accordion } from 'flowbite-react';
import { Label, Select } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';

export default function AskNow() {
  const filePickerRef = useRef();
  return (
    <>
    <div className="w-full mb-4 py-3">
      <div className="mb-2 flex items-center justify-center">
        <Label htmlFor="countries" value="Ask A Question" />
      </div>
      <Select id="countries" required>
        <option>Expert Categories</option>
        <option>Engineer</option>
        <option>Doctor</option>
        <option>Lawyer</option>
        <option>Securit Expert</option>
      </Select>      
    </div>
      <div className="relative">
        <textarea className="w-full px-3 py-2 border rounded-md h-[400px]" placeholder="Type here..."></textarea>
        <div className="absolute bottom-[50px]" onClick={() => filePickerRef.current.click()}>
        <input
          type='file'
          accept='image/*'
          ref={filePickerRef}
          hidden
        />
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M4 18V8c0-.6.4-1 1-1h1.5l1.7-1.7c.2-.2.4-.3.7-.3h6.2c.3 0 .5.1.7.3L17.5 7H19c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1Z"/>
            <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg> 
        </div>
        <Button color="blue" className='w-full'>Submit</Button>
      </div>  
    </>
  );
}

// export default function AskNow() {
//   return (
//     <>
//     <Card className="w-full">
//       <div className="flow-root">
//         <ul className="divide-y divide-gray-200 dark:divide-gray-700">
//           <li className="py-3 sm:py-4">
//             <div className="flex items-center space-x-4">
//               <div className="shrink-0">
//                 <img
//                   alt="Neil image"
//                   height="32"
//                   src="https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-1.jpg&w=32&q=75"
//                   width="32"
//                   className="rounded-full"
//                 />
//               </div>
//               <div className="min-w-0 flex-1">
//                 <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
//                 <p className="truncate text-sm text-gray-500 dark:text-gray-400">Canand Law | 9 Years</p>
//                 <Rating>
//                     <Rating.Star /> 
//                     <Rating.Star /> 
//                     <Rating.Star /> 
//                     <Rating.Star /> 
//                 </Rating>                 
//               </div>
//               <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"></div>              
//             </div>
//             <p className="text-gray-500">Hi</p>
//             <p className="text-gray-500">You Are Looking For an Expert</p>
//           </li>
//         </ul>
//       </div>
//     </Card>
//     <Accordion collapseAll>
//       <Accordion.Panel>
//         <Accordion.Title>Question 1</Accordion.Title>
//         <Accordion.Content>
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
//             dropdowns, modals, navbars, and more.
//           </p>
//           <p className="text-gray-500 dark:text-gray-400">
//             Check out this guide to learn how to&nbsp;
//             <a
//               href="https://flowbite.com/docs/getting-started/introduction/"
//               className="text-cyan-600 hover:underline dark:text-cyan-500"
//             >
//               get started&nbsp;
//             </a>
//             and start developing websites even faster with components on top of Tailwind CSS.
//           </p>
//         </Accordion.Content>
//       </Accordion.Panel>
//       <Accordion.Panel>
//         <Accordion.Title>Question 2</Accordion.Title>
//         <Accordion.Content>
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
//             has a design equivalent in our Figma file.
//           </p>
//           <p className="text-gray-500 dark:text-gray-400">
//             Check out the
//             <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
//               Figma design system
//             </a>
//             based on the utility classes from Tailwind CSS and components from Flowbite.
//           </p>
//         </Accordion.Content>
//       </Accordion.Panel>
//       <Accordion.Panel>
//         <Accordion.Title>Question 3</Accordion.Title>
//         <Accordion.Content>
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             The main difference is that the core components from Flowbite are open source under the MIT license, whereas
//             Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
//             components, whereas Tailwind UI offers sections of pages.
//           </p>
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
//             technical reason stopping you from using the best of two worlds.
//           </p>
//           <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
//           <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
//             <li>
//               <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
//                 Flowbite Pro
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://tailwindui.com/"
//                 rel="nofollow"
//                 className="text-cyan-600 hover:underline dark:text-cyan-500"
//               >
//                 Tailwind UI
//               </a>
//             </li>
//           </ul>
//         </Accordion.Content>
//       </Accordion.Panel>
//     </Accordion>    
//     </>
//   );
// }