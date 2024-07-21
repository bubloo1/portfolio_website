
const About = () => {
  return (
    <section id="about" className="mx-auto max-w-screen-lg mt-12 py-10">
       <h1 className='text-5xl text-white max-w-screen-lg mx-auto my-10 max-md:flex justify-center'>About me</h1>
       <div className="w-4/4 h-4 bg-customColor rounded-full my-4 max-md:mx-5"></div>
       <div className="text-white px-5">
            <div className="py-2">
                <h1 className="font-extrabold">2023</h1>
                <p className="font-medium">Worked as a backend developer, was one of the two developers to implement the system of employee tracking and productivity management Application
                  for a fortune 500 Indian company (internet service provider) in 3 months.</p>
            </div>
            <div className="py-2">
                <h2 className="font-extrabold">2022</h2>
                <p className="font-medium">Worked as a business analyst at Infosys for a UK based energy giant from 2021 (Oct) -  to 2022(Oct)</p>
                <p className="font-medium">Primarily worked on master data management, were we brought master data from multiple old Mostly onsite systems, 
                  to cloud which helps reduce data redundancy and improve quality of data.</p>
            </div>
            <div className="py-2">
                <h2 className="font-extrabold">2021</h2>
                <p className="font-medium">Graduated with computer science degree in 2021.</p>
            </div>
       </div>
      
    </section>
  )
}

export default About