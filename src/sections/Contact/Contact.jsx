import './Styles.Contact.css';
import { Link } from'react-scroll'
function Contact () {
    return (
        <>
            <section name='contact' className="style-contact">
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