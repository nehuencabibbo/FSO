const FindCountryInput = ({label, onChange}) => {
    return (
      <div>
        <label htmlFor={label}>{label}: </label>
        <input 
        id={label} 
        onChange={onChange}
        autoComplete="off"/>
      </div>
    )
}

export default FindCountryInput