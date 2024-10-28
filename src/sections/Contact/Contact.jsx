import styles from './Contact.module.css'

function Contact () {
    return (
        <>
            <section name='contact' className="flex flex-col justify-center text-center h-[100dvh]">
                <div>
                    <p className='text-5xl font-bold'>Contact</p>
                <div className="m-[50px]">
                <form className={styles.form} action="https://formspree.io/f/xeoqqdne" method="post">
                    <p>
                        <input className="w-1/2 min-w-60 py-3 px-5 my-2 mx-0 inline-block border-2 border-gray-200 rounded-lg box-border text-m bg-[#f8f8f8]" type="text" name="name" placeholder="Name" spellCheck='false' required />
                    </p>
                    <p>
                        <input className="w-1/2 min-w-60 py-3 px-5 my-2 mx-0 inline-block border-2 border-gray-200 rounded-lg box-border text-m bg-[#f8f8f8]" type="email" name="email" placeholder="Email" spellCheck='false' required />
                    </p>
                    <p>
	                    <textarea className="w-1/2 min-w-60 max-md:h-[250px] h-[150px] py-3 px-5 my-2 mx-0 box-border border-2 border-gray-200 rounded-lg bg-[#f8f8f8] text-m resize-none" name='message' spellCheck='false' placeholder="Message..." required></textarea>
                    </p>  
                    <p>
                        <button className='mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer' type="submit" >Submit</button>
                    </p>
                </form>
                </div>
                </div>
            </section>
        </>
    )
}
export default Contact