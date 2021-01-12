import AboutPara, { AboutTitle } from '../styles/aboutStyle';

export const styles = {
  title: {
    color: 'red', 
    backgroundColor: 'yellow', 
    fontSize: '20px',
  },
  para: {
    color: 'grey',
    fontSize: '10px',
  }
}

const About = () => (
  <>
    {/* <h1 style={{ color: 'blue', backgroundColor: 'green', fontSize: '120px' }}>About Page</h1>
    <h1 style={styles.title}>About Page</h1>
    <p style={styles.para}>hello world</p> */}

    <AboutTitle>Hello</AboutTitle>
    <AboutTitle lrg>Hello</AboutTitle>
    <AboutPara>World!</AboutPara>
    <AboutPara fSize='lrg'>World!</AboutPara>
    <AboutPara fSize='md'>World!</AboutPara>
  </>
)

export default About;