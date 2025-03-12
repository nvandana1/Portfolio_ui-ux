import './home.css';
import profileImage from './../assets/profile2.jpg';
export default function Home({updateActivePage}: any) {

  return (
    <>
    <section className="hero">
      <img src={profileImage} alt="Profile" className="hero-image" />
      <div className="hero-content">
        <h1>Vandana Nayak</h1>
        <small>UI/UX learner | Software Engineer</small>
      </div>
      <div className="hero-buttons">
        <button className='button-primary' onClick={() => updateActivePage( 'projects')}>Projects</button>
      </div>
    </section>
    <footer className="hero-footer">
    <small>Website built using React and AI</small>
  </footer></>
  );
}

