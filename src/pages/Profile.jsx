import { Card } from 'flowbite-react';


export default function Profile() {
    return (
        <>
            <Card className='w-full'>
                <img src={"https://media.licdn.com/dms/image/D5616AQEM-_hT5pN5eA/profile-displaybackgroundimage-shrink_350_1400/0/1703782815010?e=1712793600&v=beta&t=7CSE0TD-9bGzpScR4aKFvCOrTzB19itFTP31SH80sDA"}/>
                <div className="flex h-full flex gap-4 p-6">
                    <div className='flex-1 mt-[-100px]'>                    
                        <img class="rounded-full border border-white w-auto h-24" src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
                        <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Profile Name
                        </h6>
                        <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
                            Expertice
                        </p>
                        <p className="font-normal text-xs text-gray-500 dark:text-gray-400">
                            Working Organizations . Schools
                        </p>                  
                        <p className="font-normal text-xs text-gray-500 dark:text-gray-400">
                            Address
                        </p>
                        </div>
                </div>
            </Card>
            <Card className='w-full'>               
                <div className="flex h-full flex gap-4 p-6">
                    <div className='flex-1'>
                        <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            About
                        </h6>
                        <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
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
                        <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
                            Software Developer
                        </p>
                        <p className="font-normal text-sm text-gray-500 dark:text-gray-400">
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
                        <p className="font-normal text-sm text-gray-500 dark:text-gray-400">
                            East West University                                            
                        </p>

                         <p className="font-normal text-sm text-gray-500 dark:text-gray-400">
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