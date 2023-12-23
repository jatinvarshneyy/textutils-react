import React, {useState} from 'react'
import PropTypes from 'prop-types'

// Props ek tareeka hai React mein jisse hum parent component se child component mein information bhejte hain. Ye humein components ko reusable banane ka mauka deta hai kyunki hum dynamic data ya behavior unhe provide kar sakte hain. Props ko aise samjho jaise kisi function ko parameters diye jaate hain—ye values hote hain jo component ko dikhne ya behave karne mein madad karte hain.
export default function Navbar(props) {
  const [lightdarkMode, setlightdarkMode] = useState({
    color: 'black',
    backgroundColor: 'white',
  })

  const [modebtntext, setmodeBtnText] = useState("Enable Dark Mode")

  const toggleStyle = ()=>{
    if(lightdarkMode.color === 'black'){
        setlightdarkMode({
            color: 'white',
            backgroundColor: 'black',
        })
        setmodeBtnText("Enable Light Mode")
    }
    else{
        setlightdarkMode({
            color: 'black',
            backgroundColor: 'white',
        })
        setmodeBtnText("Enable Dark Mode")
    }
  }
  return (
    <header className='bg-slate-200 shadow-md p-1' style={lightdarkMode}>
      <div style={lightdarkMode} className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <a href='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-sky-400'>{props.title_firstName}</span>
          <span className='text-red-500'>{props.title_secondName}</span>
        </h1>
        </a>

        <ul className='flex gap-5'>
          <a href='/'>
            <li className='hidden sm:inline text-slate-700 hover:text-green-600 hover:font-semibold'>Home</li>
          </a>

          <a href='/about'>
            <li className='hidden sm:inline text-slate-700 hover:text-green-600 hover:font-semibold'>About</li>
          </a>

          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
          </label>

          <button type='button' onClick={toggleStyle} className='text-slate-500 hover:text-slate-700 hover:font-semibold'>{modebtntext}</button>
        </ul>
      </div>
    </header>
  )
}

// Aur PropTypes, ye React mein ek feature hai jo props ke data types ko validate karne ke liye use hota hai. Isse hume yeh verify karne mein madad milti hai ki jo data hum component mein receive kar rahe hain, wo humare expectations ke types ke saath match karta hai ya nahi. Jaise agar hum ek prop ko string type ki expect kar rahe hain, to PropTypes check karega ki woh sach mein string hai ya nahi, aur agar nahi hai toh error show karega.

// PropTypes use karke hum components ke liye ek contract define karte hain jo specify karta hai ki humein kis type ke props expect karne hain. Agar incoming data in types se match nahi karta, to React development mein ek warning show karega jo humein issues ko identify aur fix karne mein madad karta hai. Iska istemal bada projects mein ya teams ke saath kaam karte waqt hota hai jahaan data types component ki functionality ke liye important hote hain.
Navbar.propTypes = {
    title_firstName: PropTypes.string.isRequired,
    title_secondName: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title_firstName: 'First Title Name',
    title_secondName: 'Second Title Name',
}