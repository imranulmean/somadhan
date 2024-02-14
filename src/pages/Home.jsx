import { useKeycloak } from '@react-keycloak/web';


export default function Home() {

    // console.log("keycloak:", keycloak)
    // console.log("initialized:", initialized)

    return (
        <section className="top-0 h-screen flex items-center bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply" style={{ marginTop: '-4rem', zIndex: '0' }}>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Center of Intelligence</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here you'll find a variety of Solutions</p>
            </div>
      </section>
    );
  }