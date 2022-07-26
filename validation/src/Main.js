import React, {useState} from 'react'

export default function Main() {

    const[username, setusername ] = useState('')
    const[email , setemail ] = useState('')
    const[password, setpassword ] = useState('')
    const[cpassowrd, setcpassword ] = useState('')


    const[eusername, seteusername] = useState('')
    const[epassword, setepassword] = useState('')
    const[eemail, seteemail] = useState('')
    const[ecpassword, setecpassword] = useState('')

    const[ucolor, setucolor] = useState('')
    const[ecolor, setecolor] = useState('')
    const[pcolor, setpcolor] = useState('')
    const[cpcolor, setcpcolor] = useState('')


    function validate()
    {
        if (username.length > 8)
        {
            seteusername('')
            setucolor('green')
        }
        else {
            seteusername('username must be 8 letters long')
            setucolor('red')
        }

        if (email.includes('@gmail') )
        {
            seteemail('')
            setecolor('green')
        }
        else {
            seteemail('email should have @gmail')
            setecolor('red')
        }

        if (password.length > 8 && password.includes('.') )
        {
            setepassword('')
            setpcolor('green')
        }
        else {
            setepassword('password should be 8 letters long and it should have .')
            setpcolor('red')
        }

        if ( password != '' && password == cpassowrd)
        {
            setecpassword('')
            setcpcolor('green')
        }
        else {
            setecpassword('password not match')
            setcpcolor('red')
        }

    }


    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded'>
                    <h1>Form Validation</h1>

                    <input type="text" placeholder='username' className='form-control'
                   style={{borderColor:ucolor}} value = {username} onChange={(e)=> {setusername(e.target.value)}}
                    />
                    <p>{eusername}</p>

                    <input type="text" placeholder='email' className='form-control'
                    style={{borderColor:ucolor}}
                    value = {email} onChange={(e)=> {setemail(e.target.value)}}
                    />
                    <p>{eemail}</p>

                    <input type="text" placeholder='password' className='form-control'
                    style={{borderColor:pcolor}}
                    value = {password} onChange={(e)=> {setpassword(e.target.value)}}
                    />
                    <p>{epassword}</p>

                    <input type="text" placeholder='confirm password' className='form-control'
                    style={{borderColor:cpcolor}}
                    value = {cpassowrd} onChange={(e)=> {setcpassword(e.target.value)}}
                    />
                    <p>{ecpassword}</p>

                    <button className='btn btn-success' onClick={validate}>Submit!</button>
                </div>
            </div>
        </div>
    )
} 