import './registeremployee.css'
export function RegisterEmployee(){

    const cities = ["homagama", "kottawa", "Colombo"]

    return(
        <div>
          <div className='emp-reg-container'>
            <form>
                <div className='container-1'>
                    <div className='form-group'>
                        <input type='text' id='fname' placeholder='First Name'></input>
                    </div>
                    <div className='form-group'>
                        <input type='text' id='lname' placeholder='Last Name'></input>
                    </div>
                </div>

                <div className='form-group emp_num'>
                    <input type='text' id='emp_num' placeholder='Employee Number'></input>
                </div>
                <div className='form-group role'>
                    <label htmlFor='station'>Station</label>
                    <select id='station'>
                        {cities.map((city, index)=>{
                          return(  <option value={city} id={index}>{city}</option>)
                        })}
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='station'>Role</label>
                    <select id='station'>
                        <option value='general_staff'>general_staff</option>
                        <option value='general_staff'>station_master</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='request'>Requested by</label>
                    <input type='text' id='request'></input>
                </div>               
            </form>
          </div>
        </div>
    )
}