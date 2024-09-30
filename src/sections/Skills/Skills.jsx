import './Styles.Skills.css'
import checkmarkDark from '../../assets/checkmark-light.svg'
function Skills () {
    return (
        <>
        <section name='skills' className='style-skills'>
            <div>
                <p className='text-5xl font-bold'>Skills</p>
            </div>
            <div className="flex items-center">
            <img src={checkmarkDark} className='w-10'/>
  <div>
    <strong>Andrew Alfred</strong>
  </div>
</div>

            <div className="skills-grid">
            </div>
            <p className='border'/>
        </section>
        </>
    )
}
export default Skills