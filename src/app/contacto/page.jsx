import styles from '@/app/contacto/contacto.module.css'
const Contact = () => {
    return (
      <div className={` ${styles.container} bg-slate-300 bg-opacity-90 rounded-2xl px-2 py-6 my-6`}>
                <div className={`xl:max-w-[1280px] max-w-md w-full mx-auto p-6 rounded-lg `}>
                    <h1 className='text-3x1 text-center text-stone-950 font-poppins font-semibold mb-6 text-[52px]'>Contacto</h1>
                    <form action="https://formsubmit.co/info@kryptoniteagency.com" method="POST">
                        <div className='mb-4'>
                            <label className='block text-stone-950 text-sm font-poppins mb-2' htmlFor="">Tu nombre</label>
                            <input placeholder='Escribe tu nombre' className='w-full px-3 py-2 border rounded-lg focus:border-blue-400' required name='name' type="text" />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-stone-950 text-sm font-poppins mb-2' htmlFor="">Tu email</label>
                            <input placeholder='Déjanos tu email' className='w-full px-3 py-2 border rounded-lg focus:border-blue-400' required name='email' type="email" />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-stone-950 text-sm font-poppins mb-2' htmlFor="">Tu comentario</label>
                            <textarea placeholder='Danos tu opinión o realiza una consulta' className='w-full px-3 py-2 border rounded-lg focus:border-blue-400' required name='message' id="" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="text-stone-950 bg-gradient-to-br from-blue-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
    )
  }
  
  export default Contact