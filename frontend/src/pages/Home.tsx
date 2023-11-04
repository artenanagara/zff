import  {LiaLongArrowAltRightSolid} from 'react-icons/lia'
export default function Home() {
    return(
        <div className="p-[100px]">
            <div className="flex flex-col items-center gap-8">
                <p className="text-lg">Welcome to team</p>
                <div className="flex flex-col gap-5 text-center">
                    <h1 className="text-8xl"><span className="text-primary">Always</span> The Real Thing,<br/>Always <span className="text-primary">Digital.</span></h1>
                    <p>We create products & innovations that brings positive shift to the world</p>
                </div>
                <a href="#" className="flex justify-between items-center font-semibold text-xl gap-4 py-3 px-8 rounded-full bg-primary">Hire Us <LiaLongArrowAltRightSolid className='text-4xl' /></a>
            </div>
        </div>
    )
}