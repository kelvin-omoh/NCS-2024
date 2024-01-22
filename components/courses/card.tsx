import { useRouter } from 'next/navigation'
import { AiOutlineBarChart, AiOutlineRight, AiOutlineVerified, AiOutlineVideoCamera } from 'react-icons/ai'

const CourseCard = ({ course }: any) => {
    const router = useRouter()

    return (
        <section
            onClick={() => router.push(`/my-courses/${course.id}`)}
            className='py-8 flex my-5 flex-col gap-6 bg-gray-50 hover:bg-black hover:text-white cursor-pointer transition-all ease-out duration-300 hover:rounded-xl shadow px-5 rounded-lg'>
            <div className=' flex   gap-4'>
                <div className=' w-[30em] h-[15em] '>
                    <img className=' object-cover h-full rounded-md' src={course.image} alt={"logo"} />
                </div>
                <div>
                    <div className=' flex flex-col gap-4'>
                        <div className=' flex justify-between'>
                            <button className=' px-4 py-2 bg-blue-600 text-white rounded-lg '>Education</button>
                            <button className=' flex gap-2 px-4 py-2 border  border-blue-600 text-blue-600 rounded-lg '><AiOutlineVerified /> Certification</button>
                        </div>
                        <h1 className=' m-1'>{course.name} </h1>
                        <p>75% completed</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum a quo ipsam commodi blanditiis praesentium tenetur sapiente tempore aliquid voluptates...</p>


                        <div className=' flex justify-between items-center'>
                            <div className=' flex gap-3 items-center'>
                                <div className=' flex gap-1  items-center'><AiOutlineBarChart /> level 01 </div>
                                <div className=' flex gap-1  items-center'><AiOutlineBarChart /> 15h 59m </div>
                                <div className=' flex gap-1  items-center'><AiOutlineVideoCamera /> 10 lessons </div>
                            </div>
                            <button className=' px-4 py-2 bg-blue-600 text-white rounded-lg flex justify-center items-center '>View <AiOutlineRight /></button>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default CourseCard