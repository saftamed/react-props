import PropTypes from 'prop-types'

const Profile = ({fullName ="safta", bio ="bio", profession ="S.D",handleName ,children}) => {
    const h2 = {fontSize:'40px',color:'#3058e9',margin:7,textTransform:'capitalize'};
    const h4 ={fontSize:'25px',color:'#a19fa0',margin:0}
    const p = {fontSize:'15px',color:'#000000'}
    const btn = {background:'#2727e5',border:'none',fontWeight:'bolder',padding:'7px 16px',color:'white',borderRadius:4}
  return (
    <div>
        <div>
        {children}
        </div>
        <h2 style={h2}>{fullName}</h2>
        <h4 style={h4}>{profession} <button style={btn} onClick={() => handleName(fullName)}>More...</button></h4>
        <p style={p}>{bio}</p>
        
    </div>
  )
}

Profile.propTypes = {
    fullName :PropTypes.string,
    bio :PropTypes.string, 
    profession :PropTypes.string,
    handleName :PropTypes.func,
    children :PropTypes.element
}

export default Profile