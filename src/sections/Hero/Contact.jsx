import './Styles.module.css';
import { Link } from'react-scroll'
function Contact () {
    return (
        <>
            <section name='contact' className="items-center">
                <div>
                    <p className='text-5xl font-bold'>Contact</p>
                    <div>
                        <input type='email'>
                        </input>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact