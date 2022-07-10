import React from 'react';
type Props = {
    name?: string;
    other?: string;
}
const CreateUser: React.FC<Props> = (props) => {
    return(
        <div>
            <form id="createUserForm" action="http://isms.com/students" method="POST">
                <fieldset id="createUserFormFieldSet">
                    <div>
                        <label>First name:</label>
                        <div>
                            <input className='size' id="firstName" name="firstName" type="text" placeholder="First name" required />
                        </div>
                    </div>
                    <div>
                        <label>Middle name:</label>
                        <div>
                            <input className='size' id="middleName" name="middleName" type="text" placeholder="Middle name" />
                        </div>
                    </div>
                    <div>
                        <label>Last name:</label>
                        <div>
                            <input className='size' id="lastName" name="lastName" type="text" placeholder="Last name" />
                        </div>
                    </div>
                    <div>
                        <label>Email:</label>
                        <div>
                            <input className='size' id="email" name="email" type="email" placeholder="Email" required />
                        </div>
                    </div>
                    <div>
                        <label>Date of birth:</label>
                        <div>
                            <input className='size' id="dateOfBirth" name="dateOfBirth" type="date" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" placeholder="yyyy-mm-dd" />
                        </div>
                    </div>
                    <div>
                        <label>Nationality:</label>
                        <div>
                            <input className='size' id="nationality" name="nationality" type="text" placeholder="Nationality" />
                        </div>
                    </div>
                    <div>
                        <label>Address:</label>
                        <div>
                            <input className='size' id="address" name="address" type="text" placeholder="Address"/>
                        </div>
                    </div>
                    <div>
                        <label>Department:</label>
                        <div>
                            <input className='size' id='department' name='department' type='text' placeholder='department' required />
                        </div>
                    </div>
                    <div>
                        <label>Matriculation Number:</label>
                        <div>
                            <input className='size' id='matriculationNumber' name='matriculationNumber' type='text' placeholder='Matriculation Number' required />
                        </div>
                    </div>
                    <div>
                        <label>modeOfEntry:
                            <div>
                                <select className='size' id="modeOfEntry" name="modeOfEntry">
                                    <option selected >Options...</option>
                                    <option value="UTME">UTME</option>
                                    <option value="Direct Entry">Direct Entry</option>
                                    <option value="Transfer">Transfer</option>
                                </select>
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>programOfStudy:</label>
                        <div>
                            <input className='size' id="programOfStudy" name="programOfStudy" type="text" placeholder="Email" required />
                        </div>
                    </div>
                    <div>
                        <label>yearOfEntry:</label>
                        <div>
                            <input className='size' id="yearofentry" name="yearOfEntry" type="number" required placeholder="yyyy" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <button className='button' type="submit" id="submitCreateUserForm">Submit</button>
                        </div>
                        <div>
                            <button className='button' type="reset">Clear</button>
                        </div>
                    </div>
                </fieldset>
            </form>
            <script></script>
        </div>
    )
}

export default CreateUser;