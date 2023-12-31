import React from 'react'

const Newsletter = () => {
  return (
    <div>
      
<div className="container my-24 mx-auto md:px-6">
 
 <section className="mb-32 text-center lg:text-left">
   <div className="py-12 md:px-6 lg:my-12">
     <div className="container mx-auto xl:px-32">
       <div className="grid items-center gap-12 lg:grid-cols-2">
         <div className="md:mt-12 lg:mt-0">
           <h1 className="mb-12 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
             Are you ready <br /><span className="text-primary dark:text-primary-400">for an adventure?</span>
           </h1>
           <div className="mb-6 flex-row md:mb-0 md:flex">
             <div className="relative mb-3 w-full md:mr-3 md:mb-0" data-te-input-wrapper-init>
               <input type="text"
                 className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                 id="exampleFormControlInput2" placeholder="Enter your email" />
               <label for="exampleFormControlInput2"
                 className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Enter
                 your email
               </label>
             </div>
             <button type="submit"
               className="inline-block rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
               data-te-ripple-init data-te-ripple-color="light">
               Subscribe
             </button>
           </div>
         </div>
         <div className="mb-12 lg:mb-0">
           <div
             className="pt-[50px] embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg dark:shadow-black/20"
            ><iframe width="560" height="315" src="https://www.youtube.com/embed/zMCOvuSseR0?si=KYk9mcP57XZid2WJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>

</div>

    </div>
  )
}

export default Newsletter
