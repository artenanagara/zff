import  {LiaLongArrowAltRightSolid} from 'react-icons/lia'
import quote from '../assets/quote bg.jpeg'
export default function Home() {
    return(
        <>
            <div className="p-[100px] ">
                <div className="flex flex-col items-center gap-8">
                    <p className="text-lg">Welcome to team</p>
                    <div className="flex flex-col gap-5 text-center">
                        <h1 className="text-8xl font-bold"><span className="text-primary">Always</span> The Real Thing,<br />Always <span className="text-primary">Digital.</span></h1>
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
            <div className='p-[100px] flex flex-col gap-16'>
                <div className='flex flex-row justify justify-between'>
                    <div className='flex flex-col gap-6'>
                        <p className='text-4xl font-normal'>Our Work</p>
                        <p className='text-6xl font-semibold'>Selection of successful projects.</p>
                    </div>
                    <a href="#" className="w-fit h-fit align-bottom flex justify-between items-center self-center font-semibold text-base gap-4 py-2 px-8 rounded-full bg-primary">Find out more <LiaLongArrowAltRightSolid className='text-4xl' /></a>
                </div>
                <div>
                    Gaiso aku den iki wkwkkw
                </div>
            </div>
            <div className='p-[100px] flex flex-col gap-16 bg-black text-white'>
                <div className='flex flex-col gap-6'>
                    <p className='text-4xl'>Say Hi!</p>
                    <p className='text-6xl'>Satisfied Customer Stories.</p>
                </div>
                <div className='flex flex-col gap-16'>
                    <div className='flex flex-row justify justify-between'>
                        <div className='flex flex-col w-2/3'>
                            <p className='text-2xl font-semibold'>Henky Setyawan</p>
                            <p className='text-base font-light'>Founder Alibaba</p>
                        </div>
                        <p className='text-2xl'>
                        Lorem ipsum dolor sit amet consectetur. Iaculis vel elementum nisi et tortor. Eu nec cursus purus viverra a elementum tellus feugiat purus. Pellentesque amet congue consectetur id euismod. Vestibulum proin mattis turpis nisi ullamcorper amet auctor.
                        </p>
                    </div>
                    <div className='flex flex-row justify justify-between'>
                        <div className='flex flex-col w-2/3'>
                            <p className='text-2xl font-semibold'>Henky Setyawan</p>
                            <p className='text-base font-light'>Founder Alibaba</p>
                        </div>
                        <p className='text-2xl'>
                        Lorem ipsum dolor sit amet consectetur. Iaculis vel elementum nisi et tortor. Eu nec cursus purus viverra a elementum tellus feugiat purus. Pellentesque amet congue consectetur id euismod. Vestibulum proin mattis turpis nisi ullamcorper amet auctor.
                        </p>
                    </div>
                    <div className='flex flex-row justify justify-between'>
                        <div className='flex flex-col w-2/3'>
                            <p className='text-2xl font-semibold'>Henky Setyawan</p>
                            <p className='text-base font-light'>Founder Alibaba</p>
                        </div>
                        <p className='text-2xl'>
                        Lorem ipsum dolor sit amet consectetur. Iaculis vel elementum nisi et tortor. Eu nec cursus purus viverra a elementum tellus feugiat purus. Pellentesque amet congue consectetur id euismod. Vestibulum proin mattis turpis nisi ullamcorper amet auctor.
                        </p>
                    </div>
                </div>
            </div>
            <div className='h-screen flex justify items-center justify-center relative bg-[#272727] bg-cover saturate-0 bg-[url("https://s3-alpha-sig.figma.com/img/973a/8785/2073e40d2909d3732a6d412c702e2920?Expires=1700438400&Signature=I0GXzzmPImr7PaKQTusRm3WHnPXNMCDA~0xiizFEqIubNXvT~93EBSlpfmFpNS-DibweobFjIZAIIChPt1mYIj6n9YISQNJIYs7Rj5KiMEaqDdLRnunuSoO0pBASF6wtz1VxLT4E~nZC3TrBp6cUwuOu-ox47On9PhlHvUP5f1HTnS6eMBhPPehHE2Q4KZN28VGyKlywXFm9ffn8lGwrIyeIAegvoo-WVRAAAXiBK471WEq4QuD8KVOnMPNiAzonNsasNhecffZrrQYamNIfanqTE60IRtv6o-zWhWq-gflCxm8l5-hrtspBMWXbcXxx8nguJt~5WEnGep2VVihmFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")] bg-[50%_50%]'>
                <p className='p-[100px] text-6xl text-center font-bold leading-tight text-white'>We have technology, finally, that for the first time in human history allows people to really maintain rich connections with much larger numbers of people</p>
            </div>
        </>
    )
}

