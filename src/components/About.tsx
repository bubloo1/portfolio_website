
const About = () => {
  return (
    <section id="about" className="mx-auto max-w-screen-lg mt-12 py-10">
       <h1 className='text-5xl text-white max-w-screen-lg mx-auto my-10'>About me</h1>
       <div className="w-4/4 h-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full my-4"></div>
       <div className="flex justify-between text-white">
            <div>
                <h2>2021</h2>
                <p className="">graduated with computer science degree in 2021</p>
            </div>
            <div>
                <h2>2022</h2>
                <p>worked at Infosys as a business analyst from 2021 (oct) -  to 2022(oct)</p>
            </div>
            <div>
                <h1>2023</h1>
                <p>worked at Green Lantern IT Solution as a backend developer building api's using Node.js/Sql from 2023 (feb) -  to 2023(sep)</p>
            </div>
       </div>
      
    </section>
  )
}

export default About