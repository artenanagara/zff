import  {LiaLongArrowAltRightSolid} from 'react-icons/lia'
export default function Home() {
    return(
        <>
            <div className="p-[100px]">
                <div className="flex flex-col items-center gap-8">
                    <p className="text-lg">Welcome to team</p>
                    <div className="flex flex-col gap-5 text-center">
                        <h1 className="text-8xl"><span className="text-primary">Always</span> The Real Thing,<br />Always <span className="text-primary">Digital.</span></h1>
                        <p>We create products & innovations that brings positive shift to the world</p>
                    </div>
                    <a href="#" className="flex justify-between items-center font-semibold text-base gap-4 py-2 px-8 rounded-full bg-primary">Hire Us <LiaLongArrowAltRightSolid className='text-4xl' /></a>
                </div>
            </div>
            <div className='p-[100px] pl-[500px] flex flex-col gap-12'>
                <div className='flex flex-col gap-8'>
                <p className='w-fit py-2 px-8 border border-black rounded-full'>About Team</p>
                <div className='text-base font-light'>
                    Lorem ipsum dolor sit amet consectetur. Ut orci viverra fermentum ullamcorper massa. Id mattis at cursus diam semper pellentesque non. Urna tellus eget pretium sed sem est odio mauris. Quam parturient maecenas diam vitae in sed. Nulla aliquet quis vel posuere et nisl diam nullam. Ut faucibus et porta sagittis dolor turpis turpis volutpat amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit soluta officia repellat at odio! Blanditiis dignissimos, nemo odio quas eveniet autem tenetur eligendi deleniti rem quaerat est iste! Excepturi, ex?
                </div>
                </div>
                <a href="#" className="w-fit flex justify-between items-center font-semibold text-base gap-4 py-2 px-8 rounded-full bg-primary">Find out more <LiaLongArrowAltRightSolid className='text-4xl' /></a>
            </div>
            <div className='p-[100px] flex flex-col gap-8'>
                <div className='flex flex-col  items-center gap-4'>
                    <p className='text-3xl font-semibold'>Process & Apprroach</p>
                    <p className='text-6xl font-semibold text-center leading-normal'>We Solving Problems and Finding The Best Solutions.</p>
                </div>
                <div className='flex flex-row gap-8'>
                    <div className='w-[646px] h-[620px] bg-slate-300'></div>
                    <div className='flex flex-col justify justify-around w-1/2'>
                        <div className='py-8 px-16 w-full flex flex-row gap-8 items-center border border-black rounded-full'>
                            <p className='text-4xl'>1.</p>
                            <p className='text-6xl'>Discover</p>
                        </div>
                        <div className='py-8 px-16 w-full flex flex-row gap-8 items-center border border-black rounded-full'>
                            <p className='text-4xl'>2.</p>
                            <p className='text-6xl'>Design</p>
                        </div>
                        <div className='py-8 px-16 w-full flex flex-row gap-8 items-center border border-black rounded-full'>
                            <p className='text-4xl'>3.</p>
                            <p className='text-6xl'>Development</p>
                        </div>
                        <div className='py-8 px-16 w-full flex flex-row gap-8 items-center border border-black rounded-full'>
                            <p className='text-4xl'>4.</p>
                            <p className='text-6xl'>Improvment</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

