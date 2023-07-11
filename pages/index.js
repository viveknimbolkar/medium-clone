
import PrivateHeader from '@/components/header/PrivateHeader'
import PublicHeader from '@/components/header/PublicHeader'

export default function Home() {

  return (
    <>
      <PublicHeader />
      
      <section className='flex h-[70vh] bg-yellow-400 border-b border-black pl-[100px]'>
        <div className='flex flex-col justify-center gap-5'>
          <h1 className='font-bold text-8xl font-serif'>Stay curious.</h1>
          <p className='text-2xl w-2/3'>Discover stories, like, thinking & experties from writers on any topics.</p>
          <button className='bg-slate-950 hover:bg-black text-white w-44 font-bold text-white p-2 rounded-full '>Start reading</button>
        </div>
        <div>

        </div>
      </section>
    </>
  )
}
