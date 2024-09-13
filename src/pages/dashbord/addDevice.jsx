import './addDevice.css'
export function AddDevice(){
    return(
        <div className="add-device">
            <div>
                <div>
                    <h1>Add Devices</h1>
                </div>
                <form>
                    
                    <div className="form-group">
                        <label htmlFor="mac_id">MAC ID</label>
                        <input name="MAC_ID" id="mac_id" placeholder="e.g. 00:1B:44:11:3A:B7"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="iccid" > SIM ID</label>
                        <input name="ICCID" id="iccid" placeholder="e.g. 8914800000000000000"></input>
                    </div> 
                    <div className="submit-group"> 
                        <input type="reset" value="Clear"></input>
                        <input type="submit" value="Add"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}